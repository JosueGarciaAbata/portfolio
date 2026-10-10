---
publishDate: 2026-09-28T10:00:00Z
title: Digital Bank — Credit & Investment Platform
excerpt: An online bank where customers simulate credits and investments and apply for them, with identity verification powered by AWS Textract and Rekognition, a review process where no single person decides alone, and a production deployment on AWS built with Terraform.
category: Projects
tags:
  - Java
  - Spring Boot
  - React
  - PostgreSQL
  - AWS
  - Terraform
  - Security
metadata:
  title: Digital Bank — Credit & Investment Platform on AWS with Biometric Identity Verification
  description: An online bank platform to simulate credits and investments and apply for them, with ID document reading (Textract), face liveness and matching (Rekognition), role-based access, a review flow with separation of duties, and a production deployment on AWS with Terraform, ECS Fargate, RDS, CloudFront and k6 load tests. Java, Spring Boot, React and PostgreSQL.
---

Digital Bank is an online banking platform where anyone can simulate a credit or an investment without an
account, and then sign up to turn that simulation into a real application. It was built as a university
team project. My part was the identity verification, the AWS infrastructure and its deployment, and the load
testing of the public API.

<div class="not-prose flex flex-wrap gap-2 my-6">
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Identity Verification</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Java 21 / Spring Boot</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">React</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">PostgreSQL</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">AWS</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Terraform</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">k6</span>
</div>

<figure class="not-prose m-0 my-8">
  <img src="/images/projects/brunexa/landing.png" alt="Brunexa Bank public landing page" class="w-full rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-slate-700 bg-white" loading="lazy" decoding="async" />
  <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-slate-400">The public site, served from CloudFront on its own domain.</figcaption>
</figure>

## Identity verification with AWS AI services

In a bank, trust starts at the front door, so sign-up is deliberately demanding. A new customer confirms
their email, enters their Ecuadorian ID number, whose check digit is validated before anything is sent to
AWS, and photographs both sides of the card. Textract reads the document, and the customer then records a
short face liveness check with Rekognition, which confirms that a real, live person is in front of the
camera and not a photo.

<figure class="not-prose m-0 my-8">
  <img src="/images/projects/brunexa/signup-identity.png" alt="Brunexa sign-up step asking for the ID number and photos of both sides of the card" class="w-full rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-slate-700 bg-white" loading="lazy" decoding="async" />
  <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-slate-400">Sign-up step with the ID number, explicit biometric consent and both sides of the card.</figcaption>
</figure>

The face is not accepted blindly. Before it is stored, the image must pass quality gates, starting with a detection
confidence of at least 90 %, enough brightness and a head pose within 35 degrees on both axes. A good face is
then compared with the photo on the document, and the liveness confidence and the match similarity are saved
with each verification, so every decision leaves a record that can be audited. The face is indexed in a
Rekognition collection, the consent text is versioned, and the customer's template can be deleted again.
The browser receives temporary credentials limited to the liveness session through a dedicated IAM role, so
no long-lived AWS keys ever reach the client.

## Security and roles

Roles and permissions are stored in the database and verified by the server on every request, which means a
revoked permission applies immediately instead of when the session expires. Sessions are protected against
cross-site request forgery and passwords are stored as BCrypt hashes. The review process separates duties. An
advisor takes a request, asks for more information or recommends a decision, and a credit analyst approves,
rejects or sends it back, so the person who recommends is never the one who approves, and nobody can review
their own application.

<figure class="not-prose m-0 my-8">
  <img src="/images/projects/brunexa/admin-dashboard.png" alt="Brunexa administrator dashboard with pending requests, products and portfolio indicators" class="w-full rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-slate-700 bg-white" loading="lazy" decoding="async" />
  <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-slate-400">Administrator dashboard with requests to review, products and portfolio indicators.</figcaption>
</figure>

## Architecture on AWS

The frontend is a static React build in a private S3 bucket, served through CloudFront. The API runs as a
container on ECS Fargate behind an Application Load Balancer with HTTPS, and talks to PostgreSQL on RDS, to
Secrets Manager, to Textract and Rekognition, and to CloudWatch for logs. Cloudflare holds the DNS records and
ACM issues the certificates.

The network follows least privilege. The load balancer and the API tasks live in public subnets and the
database lives in isolated subnets, with no public access. The backend accepts traffic only from the load
balancer's security group, and the database accepts traffic only from the backend's. The tasks reach the
internet through a public IP instead of a NAT Gateway, a deliberate choice to avoid a fixed monthly cost in a
low-traffic environment. There are separate IAM roles for starting the task, for the application's calls to
AWS and for the browser's liveness session.

## Infrastructure as code and deployment

The whole environment is described in Terraform, including network, database, container registry, bucket and
distribution, IAM, secrets, certificates, the load balancer, the ECS service and the Rekognition collection.
The state lives in its own S3 bucket, separate from the website bucket, and plans are saved to a file and
reviewed before they are applied, so the infrastructure can be created or destroyed from a single command.

Releases are deliberately manual and repeatable. A script builds the backend image for Linux x86-64, logs in to
ECR without exposing the token and uploads it with an immutable tag, which keeps every previous release
available to roll back to. Updating the image tag in Terraform and applying the plan rolls out the new
version. The frontend is built, uploaded to S3 and the CloudFront cache is invalidated. Database credentials,
SMTP settings and the initial administrator password are loaded from Secrets Manager when the task starts.

<div class="not-prose grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
  <figure class="m-0">
    <img src="/images/projects/brunexa/aws-ecr.png" alt="ECR repository with the backend images and immutable deploy tags" class="w-full rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-slate-700" loading="lazy" decoding="async" />
    <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-slate-400">ECR keeps every backend release under an immutable tag.</figcaption>
  </figure>
  <figure class="m-0">
    <img src="/images/projects/brunexa/aws-cloudfront.png" alt="CloudFront distribution for the frontend with a custom domain and certificate" class="w-full rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-slate-700" loading="lazy" decoding="async" />
    <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-slate-400">CloudFront with a custom domain, an ACM certificate and HTTP/2.</figcaption>
  </figure>
  <figure class="m-0">
    <img src="/images/projects/brunexa/aws-s3.png" alt="Private S3 bucket holding the frontend build" class="w-full rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-slate-700" loading="lazy" decoding="async" />
    <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-slate-400">S3 holding the static build of the frontend.</figcaption>
  </figure>
  <figure class="m-0">
    <img src="/images/projects/brunexa/aws-secrets.png" alt="Secrets Manager listing the application secret" class="w-full rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-slate-700" loading="lazy" decoding="async" />
    <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-slate-400">Secrets Manager keeps credentials out of the image and the repository.</figcaption>
  </figure>
</div>

## Performance validation

The public calculation API was tested in production with k6, from a local machine, so the numbers include
network latency. After a 30-second warm-up, three runs of 60 seconds with 10, 50 and 100 virtual users
alternated between listing the institutions, calculating a credit and calculating the maximum amount a
customer can afford. Each response had to be HTTP 200 with a valid body, for example a complete 24-installment
schedule, since a fast reply is not worth much if the content is wrong. The targets were a p95 under 500 ms, a
p99 under 1 s and under 1 % errors, and the test aborted itself if errors reached 5 %.

<div class="not-prose overflow-x-auto my-6">
  <table class="w-full text-sm text-left">
    <thead>
      <tr class="border-b border-gray-300 dark:border-slate-600">
        <th class="py-2 pr-4">Virtual users</th>
        <th class="py-2 pr-4">Throughput</th>
        <th class="py-2 pr-4">p95 institutions</th>
        <th class="py-2 pr-4">p95 calculation</th>
        <th class="py-2 pr-4">p95 capacity</th>
        <th class="py-2">Errors</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b border-gray-200 dark:border-slate-700">
        <td class="py-2 pr-4">10</td><td class="py-2 pr-4">8.5 req/s</td><td class="py-2 pr-4">202 ms</td><td class="py-2 pr-4">178 ms</td><td class="py-2 pr-4">450 ms</td><td class="py-2">0 %</td>
      </tr>
      <tr class="border-b border-gray-200 dark:border-slate-700">
        <td class="py-2 pr-4">50</td><td class="py-2 pr-4">39.7 req/s</td><td class="py-2 pr-4">407 ms</td><td class="py-2 pr-4">406 ms</td><td class="py-2 pr-4">902 ms</td><td class="py-2">0 %</td>
      </tr>
      <tr>
        <td class="py-2 pr-4">100</td><td class="py-2 pr-4">63.0 req/s</td><td class="py-2 pr-4">913 ms</td><td class="py-2 pr-4">906 ms</td><td class="py-2 pr-4">1,397 ms</td><td class="py-2">0 %</td>
      </tr>
    </tbody>
  </table>
</div>

Across the three runs there were 6,893 requests, all valid. At 10 users the three routes met every target.
At 50 users only the capacity calculation, the heaviest one, went over the latency target, and at 100 users
all three did while still returning no errors. The service on a single small task degraded gradually in
latency and not through failures. These were short exploratory runs, with a single execution per level, no
CPU or memory measurements and no search for the exact saturation point, so the throughput is an observed
figure and not a sustained capacity.

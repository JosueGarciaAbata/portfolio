---
publishDate: 2026-09-28T10:00:00Z
title: Brunexa Bank — Online Banking
excerpt: An online bank where customers sign up with identity verification powered by AWS Textract and Rekognition, deployed on AWS with Terraform.
category: Projects
tags:
  - Java
  - Spring Boot
  - PostgreSQL
  - AWS
  - Terraform
  - k6
  - Security
metadata:
  title: Brunexa Bank — Online Banking with Biometric Identity Verification on AWS
  description: An online bank platform with ID document reading (Textract), face liveness and matching (Rekognition), duplicate registration prevention, and a production deployment on AWS with Terraform, ECS Fargate, RDS and CloudFront. Java, Spring Boot, React and PostgreSQL.
---

<div class="not-prose flex flex-wrap gap-2 my-6">
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">Identity Verification</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">Java 21 / Spring Boot</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">PostgreSQL</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">AWS Textract</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">AWS Rekognition</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">Terraform</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">k6</span>
</div>

## The problem

In a bank, trust starts at the front door. The platform had to confirm that each new customer is a real
person holding a real ID, and that nobody registers twice.

## The solution

Sign-up asks for a confirmed email, the ID number and photos of the document. AWS Textract reads the
document, and Rekognition checks that a live person is in front of the camera and that the face matches the
photo on the ID. The whole platform runs on AWS, with the frontend on S3 and CloudFront, the API on ECS
Fargate behind a load balancer with HTTPS, and PostgreSQL on RDS.

## What I did

I built the identity verification module.

I read ID cards and passports with AWS Textract.

I matched the document photo against a live selfie with Rekognition.

I added a face liveness check, so a photo of a person cannot pass.

I prevented duplicate registrations by searching each face in an indexed Rekognition collection.

The browser receives short-lived credentials limited to the liveness test, through STS and a dedicated IAM
role, so no long-lived AWS keys reach the client.

I stored the liveness confidence and the match similarity of every verification in PostgreSQL.

I wrote 18 unit tests for the OCR and credentials services.

I deployed the platform on AWS with Terraform, covering the network, database, load balancer, ECS service,
CloudFront, S3, certificates and Secrets Manager.

The network follows least privilege, with the database in isolated subnets and reachable only from the backend.

Each release goes to ECR with an immutable tag, so any previous version can be rolled back.

I load-tested the public API in production with k6, using 10, 50 and 100 virtual users.

At 10 users every target was met, and at 100 users the latency grew gradually instead of failing.

## Screens

<div class="not-prose grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
  <figure class="m-0 md:col-span-2">
    <img src="/images/projects/brunexa/signup-identity.png" alt="Brunexa sign-up step asking for the ID number and photos of both sides of the card" class="w-full rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-slate-700 bg-white" loading="lazy" decoding="async" />
    <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-slate-400">Sign-up step with the ID number, biometric consent and both sides of the card.</figcaption>
  </figure>
  <figure class="m-0">
    <img src="/images/projects/brunexa/aws-ecr.png" alt="ECR repository with the backend images and immutable deploy tags" class="w-full rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-slate-700" loading="lazy" decoding="async" />
    <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-slate-400">ECR keeps every backend release under an immutable tag.</figcaption>
  </figure>
  <figure class="m-0">
    <img src="/images/projects/brunexa/aws-cloudfront.png" alt="CloudFront distribution for the frontend with a custom domain and certificate" class="w-full rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-slate-700" loading="lazy" decoding="async" />
    <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-slate-400">CloudFront with a custom domain and an ACM certificate.</figcaption>
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

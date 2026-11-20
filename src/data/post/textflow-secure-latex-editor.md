---
publishDate: 2026-11-20T10:00:00Z
title: TextFlow — Secure LaTeX Editor
excerpt: A web LaTeX editor built around security, with isolated compilation and protection at every layer, from HTTPS on AWS to encrypted storage.
image: ~/assets/images/projects/textflow.png
category: Projects
tags:
  - Angular
  - Spring Boot
  - PostgreSQL
  - Docker
  - AWS
  - Security
metadata:
  title: TextFlow — Secure LaTeX Editor with Isolated Compilation on AWS
  description: A web editor to write, compile and share LaTeX documents with security built in. Isolated Docker compilation, encryption across layers, HTTPS with AWS Certificate Manager, a SonarQube quality gate and an AWS infrastructure defined with CloudFormation. Angular, Spring Boot, PostgreSQL and Docker.
---

<div class="not-prose flex flex-wrap gap-2 my-6">
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">Application Security</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">Isolated Compilation</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">Angular</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">Spring Boot</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">PostgreSQL</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">Docker</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">AWS / CloudFormation</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">SonarQube</span>
</div>

## The problem

A service that compiles other people's code and stores their private documents is a real target. TextFlow
was about security first and the editor second: how to keep data protected as it crosses each layer of a
web application.

## The solution

TextFlow protects data at every layer. Between the browser and the server, traffic goes over HTTPS through
CloudFront, with a certificate from AWS Certificate Manager, TLS 1.2 or newer, HSTS and secure headers.
Between the frontend and the backend, payloads are also encrypted with two application layers shared by
both sides. Between the backend and the database, a third layer uses a key that exists only on the server,
so the database holds only ciphertext and a SHA-256 hash for integrity.

Compilation is isolated. Each document is built in its own temporary Docker container, with a time limit
and no access to the application's data or secrets. Every request is also checked on the server against
the user's role in the project.

<figure class="not-prose m-0 my-8">
  <img src="/images/projects/textflow/architecture.png" alt="AWS architecture of TextFlow in CloudFormation Template Studio, showing the VPC, EC2 instance, CloudFront, ECR repositories, S3 and IAM roles" class="w-full rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-slate-700 bg-white" loading="lazy" decoding="async" />
  <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-slate-400">The AWS infrastructure, defined as a CloudFormation stack and seen in Template Studio.</figcaption>
</figure>

## What I did

I issued the TLS certificate with AWS Certificate Manager and put the app behind HTTPS.

I built the compilation module that turns each document into a PDF inside the isolated container.

I built the PDF viewer and the ZIP import and export.

Ctrl+S saves and compiles, and the last PDF is stored encrypted.

I set up a SonarQube quality gate that blocks pull requests.

It took security from E to A, reliability from C to A and coverage from 62.2% to 83.8%.

I refactored a 487-line service into 8 components.

I grew the backend tests from 78 to 171+, with 439 passing frontend tests.

I cleared 54 npm vulnerabilities.

I ran an authenticated OWASP ZAP scan that exposed a real 500 error.

I wrote 52 attack tests, including ZIP bombs and Zip Slip, and 143 authorization tests across endpoints and roles.

A k6 load test with 50 users reached 76 requests per second with a p95 of 109 ms.

## The editor

<div class="not-prose grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
  <figure class="m-0 md:col-span-2">
    <img src="/images/projects/textflow/editor.png" alt="TextFlow editor with the LaTeX source, the AI assistant and the compiled PDF side by side" class="w-full rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-slate-700 bg-white" loading="lazy" decoding="async" />
    <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-slate-400">Source, AI assistant that explains compilation errors, and the compiled PDF.</figcaption>
  </figure>
  <figure class="m-0">
    <img src="/images/projects/textflow/history.png" alt="Change history showing the differences between versions of a LaTeX document" class="w-full rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-slate-700" loading="lazy" decoding="async" />
    <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-slate-400">Change history of each document.</figcaption>
  </figure>
  <figure class="m-0">
    <img src="/images/projects/textflow/visual-editor.png" alt="Visual editing mode next to the compiled PDF" class="w-full rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-slate-700" loading="lazy" decoding="async" />
    <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-slate-400">Visual mode.</figcaption>
  </figure>
  <figure class="m-0">
    <img src="/images/projects/textflow/login.png" alt="Login screen with email and password or Google sign-in" class="w-full rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-slate-700" loading="lazy" decoding="async" />
    <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-slate-400">Login with email or Google.</figcaption>
  </figure>
  <figure class="m-0">
    <img src="/images/projects/textflow/labels.png" alt="Dialog to create a label for a project" class="w-full rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-slate-700" loading="lazy" decoding="async" />
    <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-slate-400">Labels to organize projects.</figcaption>
  </figure>
  <figure class="m-0 md:col-span-2">
    <img src="/images/projects/textflow/light-mode.png" alt="Projects dashboard in light mode with the account menu open" class="w-full rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-slate-700" loading="lazy" decoding="async" />
    <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-slate-400">Projects dashboard with light and dark themes.</figcaption>
  </figure>
</div>

---
publishDate: 2026-09-28T10:00:00Z
title: Brunexa Bank
excerpt: An online bank where customers simulate credits and investments and apply for them, with strong identity verification (email, ID document and face check on AWS) and a review process where no single person decides alone.
category: Projects
tags:
  - Java
  - Spring Boot
  - React
  - PostgreSQL
  - AWS
  - Security
metadata:
  title: Brunexa Bank — Online Banking with Secure Identity Verification
  description: An online bank platform to simulate credits and investments and apply for them, with email verification, ID document reading and face liveness checks on AWS, role-based access and a review flow with separation of duties. Java, Spring Boot, React and PostgreSQL.
---

Brunexa Bank is an online banking platform where anyone can simulate a credit or an investment without an
account, and then sign up to turn that simulation into a real application. It was built as a university
team project, and I worked mainly on the identity side: making sure that the person applying is who they say
they are.

<div class="not-prose flex flex-wrap gap-2 my-6">
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Identity Verification</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Java 21 / Spring Boot</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">React</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">PostgreSQL</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">AWS</span>
</div>

In a bank, trust starts at the front door, so sign-up is deliberately demanding. A new customer first
confirms their email, then the system reads their Ecuadorian ID card or passport with AWS, and finally a
short check on the camera confirms that a real, live person is present and not a photo. Only after those
steps can the customer submit an application.

The platform also takes care of who can do what once the application is inside. Roles and permissions
are stored in the database and verified by the server on every request, sessions are protected against
cross-site request forgery, and the review process separates duties: an advisor takes a request, asks for
more information or recommends a decision, and a credit analyst approves, rejects or sends it back, so
the person who recommends is never the one who approves.

Besides the identity flow, I built the login, the public landing page and part of the administrator
screens in React. The backend is Java 21 with Spring Boot over PostgreSQL, the frontend uses React with
TypeScript and Tailwind CSS, and AWS provides the document reading and face verification services.

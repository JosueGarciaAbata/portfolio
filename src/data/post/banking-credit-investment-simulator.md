---
publishDate: 2026-09-28T10:00:00Z
title: Banking Credit & Investment Simulator
excerpt: A web platform where customers simulate credits and investments and apply online, with secure sign-up that checks their email, ID card and face. I built the identity and verification part.
category: Projects
tags:
  - Java
  - Spring Boot
  - React
  - PostgreSQL
  - AWS
metadata:
  title: Banking Credit & Investment Simulator — Online Identity Verification
  description: A banking web platform to simulate credits and investments and apply online. I built customer sign-up with email verification, ID card reading and face verification on AWS, plus the login and landing page. Java, Spring Boot, React and PostgreSQL.
---

A banking web platform where people can simulate a credit or an investment, and then turn that
simulation into a real application that advisors and analysts review. It was built as a
university team project.

<div class="not-prose flex flex-wrap gap-2 my-6">
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Team Project</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Java 21 / Spring Boot</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">React</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">PostgreSQL</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">AWS</span>
</div>

## What the platform does

Customers simulate a credit or an investment without an account, then sign up to apply. Advisors take
the request and ask for more information or recommend a decision, and credit analysts approve or
reject it, so no single person decides alone.

## My part: knowing who the customer is

- **Sign-up with email verification:** a new customer confirms their email before moving on.
- **ID card reading:** the system reads the data from the Ecuadorian ID card or passport and checks it.
- **Face verification:** a short check on the camera confirms a real person is present, using AWS.
- **Login and landing page:** the sign-in flow, the public home page and part of the administrator screens, built in React.

## Tech stack

Java 21 and Spring Boot with PostgreSQL on the backend, React with TypeScript and Tailwind CSS on the
frontend, and AWS services for the face and identity checks.

---
publishDate: 2026-06-10T10:00:00Z
title: Hospital Management System
excerpt: A hospital management platform built as Spring Boot microservices, where authentication, administration, consultations and reporting each run behind a single API gateway.
image: ~/assets/images/projects/hospital-micro.png
category: Projects
tags:
  - Java
  - Spring Boot
  - Spring Cloud
  - Microservices
  - Docker
  - PostgreSQL
metadata:
  title: Hospital Management System — Spring Boot Microservices
  description: A microservices hospital platform with Spring Cloud Gateway, Eureka service discovery, centralized JWT auth, distributed PostgreSQL on Citus, aggregated OpenAPI docs and a React admin frontend.
---

A hospital management platform built as a set of Spring Boot microservices, where authentication,
administration, medical consultations and reporting each run as their own service behind a single
gateway, with a React admin interface on top.

<div class="not-prose flex flex-wrap gap-2 my-6">
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Microservices</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Spring Boot</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Spring Cloud Gateway</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Eureka</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">JWT Auth</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">PostgreSQL</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Citus Distributed SQL</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Docker</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">REST API</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">OpenAPI / Swagger</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">React</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Service Discovery</span>
</div>

A hospital is really several departments at once: front-desk access, staff and center
administration, the clinical consultations themselves, and the reporting that management relies on.
Packed into one monolith, those concerns tangle together, scale poorly and become risky to change.

To address this, each concern lives in its own Spring Boot service. A Spring Cloud Gateway is the
single entry point that routes and secures every request, an Eureka registry lets the services
discover each other dynamically, and a central auth service issues the JWT that the whole system
trusts. Doctors, specialties and medical centers are managed in one service, consultations in
another, and analytics in a third.

Data sits in PostgreSQL, and for scale it can run on Citus, sharded by medical center so the load
spreads across nodes as the network grows. Every service publishes its own OpenAPI specification,
merged into a single Swagger behind the gateway, and the whole stack ships through Docker Compose
with profiles that range from a simple setup to a scaled, distributed deployment.

On top of all that sits a React interface where administrators manage doctors, specialties and
centers, and read consultation analytics on a reporting dashboard, while the gateway keeps the
services themselves out of the browser's reach.

## Architecture highlights

<div class="not-prose grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">6 services</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">Microservices</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">Eureka, Gateway, Auth, Admin, Consulting and Report.</div>
  </div>
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">Gateway</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">Single entry point</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">Spring Cloud Gateway routes and secures all traffic.</div>
  </div>
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">Eureka</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">Service discovery</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">Services register and resolve each other dynamically.</div>
  </div>
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">JWT</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">Centralized auth</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">One auth service issues tokens for the whole system.</div>
  </div>
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">Citus</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">Distributed SQL</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">PostgreSQL sharded by medical center for scale.</div>
  </div>
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">OpenAPI</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">Aggregated docs</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">Per-service Swagger merged behind the gateway.</div>
  </div>
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">React</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">Admin frontend</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">Doctors, centers, consultations and report dashboards.</div>
  </div>
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">Docker</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">Compose profiles</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">From a simple setup to a scaled, distributed deployment.</div>
  </div>
</div>

## Gallery

<div class="not-prose grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
  <figure class="m-0 md:col-span-2">
    <img src="/images/projects/hospital/architecture.png" alt="Microservices architecture diagram with gateway, Eureka, services and PostgreSQL" class="w-full rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-slate-700 bg-white" loading="lazy" decoding="async" />
    <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-slate-400">Gateway, Eureka discovery, services and database at a glance.</figcaption>
  </figure>
  <figure class="m-0">
    <img src="/images/projects/hospital/reports-dashboard.png" alt="Reporting dashboard with consultation analytics charts" class="w-full rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-slate-700" loading="lazy" decoding="async" />
    <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-slate-400">Consultation analytics on the reporting dashboard.</figcaption>
  </figure>
  <figure class="m-0">
    <img src="/images/projects/hospital/doctors.png" alt="Admin table for managing doctors and specialties" class="w-full rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-slate-700" loading="lazy" decoding="async" />
    <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-slate-400">Doctor and specialty administration.</figcaption>
  </figure>
  <figure class="m-0">
    <img src="/images/projects/hospital/medical-centers.png" alt="Admin table for managing medical centers" class="w-full rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-slate-700" loading="lazy" decoding="async" />
    <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-slate-400">Medical center management with search and filters.</figcaption>
  </figure>
  <figure class="m-0">
    <img src="/images/projects/hospital/login.png" alt="Hospital platform sign-in screen" class="w-full rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-slate-700" loading="lazy" decoding="async" />
    <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-slate-400">Secure sign-in to the admin platform.</figcaption>
  </figure>
</div>

## Tech stack

Java 17 with Spring Boot 3, Spring Cloud Gateway and Netflix Eureka for the microservice backbone,
Spring Security with JWT for auth, and Spring Data JPA over PostgreSQL, optionally distributed with
Citus. APIs are documented with OpenAPI and Swagger. The frontend is React with Vite served through
Nginx, and the whole system is built with Maven and orchestrated with Docker Compose.

## Links

- **Backend:** [github.com/JosueGarciaAbata/hospital-management-system](https://github.com/JosueGarciaAbata/hospital-management-system)
- **Frontend:** [github.com/DavidJosueP2/Hospital-Front](https://github.com/DavidJosueP2/Hospital-Front)
  </content>

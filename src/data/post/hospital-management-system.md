---
publishDate: 2026-06-10T10:00:00Z
title: Hospital Management System
excerpt: A hospital platform built as Spring Boot microservices behind a single API gateway, with centralized JWT authentication and a database sharded by medical center.
image: ~/assets/images/projects/hospital-micro.png
category: Projects
tags:
  - Java
  - Spring Boot
  - Spring Cloud
  - Microservices
  - Docker
  - Azure
  - PostgreSQL
metadata:
  title: Hospital Management System — Spring Boot Microservices on Azure
  description: A microservices hospital platform with Spring Cloud Gateway, Eureka service discovery, Circuit Breaker, centralized JWT auth, distributed PostgreSQL on Citus, a React frontend and a deployment on Azure with Docker.
---

<div class="not-prose flex flex-wrap gap-2 my-6">
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">Microservices</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">Spring Boot</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">Spring Cloud Gateway</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">Eureka</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">JWT Auth</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">Citus / PostgreSQL</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">Docker</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">Azure</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">React</span>
</div>

## The problem

A hospital is several departments at once: access, administration, consultations and reporting. In one
monolith those concerns tangle together, scale poorly and become risky to change.

## The solution

Each concern lives in its own Spring Boot service. A gateway is the single entry point, a registry lets the
services find each other, and a central service issues the JWT the whole system trusts. The data sits in
PostgreSQL, sharded by medical center so the load spreads as the network grows, and a React interface sits
on top.

<figure class="not-prose m-0 my-8">
  <img src="/images/projects/hospital/architecture.png" alt="Microservices architecture diagram with gateway, Eureka, services and PostgreSQL" class="w-full rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-slate-700 bg-white" loading="lazy" decoding="async" />
  <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-slate-400">Gateway, Eureka discovery, services and database at a glance.</figcaption>
</figure>

## What I did

I developed the authentication service that issues the JWT.

I built the API Gateway as the single entry point.

I set up Eureka so the services discover each other.

I added Circuit Breaker so one failing service does not take down the rest.

I built the patients and reporting modules.

I contributed the patient management and login screens in React.

I set up distributed PostgreSQL with Citus, sharded by medical center.

I deployed the microservices on Azure with Docker.

<div class="not-prose grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
  <figure class="m-0">
    <img src="/images/projects/hospital/login.png" alt="Hospital platform sign-in screen" class="w-full rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-slate-700" loading="lazy" decoding="async" />
    <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-slate-400">Secure sign-in to the platform.</figcaption>
  </figure>
  <figure class="m-0">
    <img src="/images/projects/hospital/reports-dashboard.png" alt="Reporting dashboard with consultation analytics charts" class="w-full rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-slate-700" loading="lazy" decoding="async" />
    <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-slate-400">Consultation analytics on the reporting dashboard.</figcaption>
  </figure>
</div>

## Links

- **Backend:** [github.com/JosueGarciaAbata/hospital-management-system](https://github.com/JosueGarciaAbata/hospital-management-system)
- **Frontend:** [github.com/DavidJosueP2/Hospital-Front](https://github.com/DavidJosueP2/Hospital-Front)

---
publishDate: 2026-06-18T10:00:00Z
title: Medical Appointment Platform
excerpt: A medical clinic platform with a hexagonal Spring Boot backend, JWT role-based security and a React admin dashboard with real-time appointment metrics.
image: ~/assets/images/projects/clinic.png
category: Projects
tags:
  - Java
  - Spring Boot
  - React
  - PostgreSQL
  - Flyway
  - OpenAPI
metadata:
  title: Medical Appointment Platform — Spring Boot Hexagonal Backend and React Dashboard
  description: A medical appointment management platform with a Java 21 Spring Boot hexagonal backend over PostgreSQL with Flyway, JWT role-based security, an OpenAPI REST API, appointment booking with conflict detection and a React admin dashboard.
---

<div class="not-prose flex flex-wrap gap-2 my-6">
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">Java 21</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">Spring Boot</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">Hexagonal Architecture</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">PostgreSQL</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">Flyway</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">JWT Auth</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">OpenAPI</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">React</span>
</div>

## The problem

A clinic runs on its appointments. When they live on paper or in scattered tools, slots get double-booked,
no-shows pile up and patients are left guessing whether their visit still stands.

## The solution

A single API centralizes every flow. A Spring Boot backend, organized in a hexagonal architecture, exposes a
documented REST API over PostgreSQL with a Flyway-versioned schema. Access is protected with JWT and
role-based permissions, and a React web app sits on top.

## What I did

I contributed to the Spring Boot backend, organized in a hexagonal architecture.

I helped secure it with JWT and role-based access.

I helped version the PostgreSQL schema with Flyway and document the REST API with OpenAPI.

I built the appointment booking flow, with conflict detection.

I built doctor and patient management, with search, filtering and pagination on the server.

I developed the admin dashboard in React, with real-time appointment metrics.

It shows the appointments in calendar and agenda views.

<div class="not-prose grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
  <figure class="m-0 md:col-span-2">
    <img src="/images/projects/clinic/dashboard.png" alt="Admin dashboard managing medical appointments with live counters and a scheduling calendar" class="w-full rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-slate-700 bg-white" loading="lazy" decoding="async" />
    <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-slate-400">Appointment dashboard with live counters and scheduling calendar.</figcaption>
  </figure>
  <figure class="m-0">
    <img src="/images/projects/clinic/doctors.png" alt="Admin table for managing doctors, specialties, experience and ratings" class="w-full rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-slate-700" loading="lazy" decoding="async" />
    <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-slate-400">Doctor management with specialties, filters and search.</figcaption>
  </figure>
  <figure class="m-0">
    <img src="/images/projects/clinic/patients.png" alt="Admin table for managing patients with status and clinical notes" class="w-full rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-slate-700" loading="lazy" decoding="async" />
    <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-slate-400">Patient management with status and clinical notes.</figcaption>
  </figure>
</div>

## Links

- **Repository:** [github.com/DRTX2/clinic](https://github.com/DRTX2/clinic)

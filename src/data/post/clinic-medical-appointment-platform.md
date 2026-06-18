---
publishDate: 2026-06-18T10:00:00Z
title: Clinic — Medical Appointment Management Platform
excerpt: A multi-platform system to run a medical clinic end to end — patients and doctors, appointments with a full cancellation workflow, medical records and notifications — built with Spring Boot, React and a React Native mobile app.
image: ~/assets/images/projects/clinic.png
category: Projects
tags:
  - Spring Boot
  - React
  - React Native
  - PostgreSQL
  - Docker
metadata:
  title: Clinic — Medical Appointment Management Platform (Spring Boot + React + React Native)
  description: A multi-platform medical appointment management system built with a Java 21 / Spring Boot hexagonal backend over PostgreSQL with Flyway and JWT, a React + Vite web app and a React Native (Expo) mobile app with push notifications, covering appointments, a cancellation workflow, medical records, doctors and specialties, OTP password recovery and OpenAPI docs.
---

Clinic is a multi-platform system to run a medical clinic end to end: patients and doctors, appointment
requests with a complete cancellation workflow, medical records, doctor offices and specialties, plus a
notification system that reaches patients on their phones. It pairs a Spring Boot backend with a React
web app and a React Native mobile app.

<div class="not-prose flex flex-wrap gap-2 my-6">
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Java 21</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Spring Boot</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Spring Security</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">PostgreSQL</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">JPA / Hibernate</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Flyway</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">MapStruct</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Hexagonal Architecture</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">JWT Auth</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">REST API</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">OpenAPI / Swagger</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">React</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">React Native / Expo</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">TanStack Query</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Tailwind CSS</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Docker</span>
</div>

A medical clinic runs on its appointments: patients request a visit, doctors with their specialties and
offices fill up a schedule, visits get cancelled and rebooked, and every encounter leaves a medical
record behind. When that lives on paper or scattered tools, slots get double-booked, no-shows pile up
and patients are left guessing whether their appointment still stands.

To bring it together, the platform centralizes every flow behind a single API. A Spring Boot backend
organized in clean, separate layers — domain, application, infrastructure and presentation kept apart —
exposes a documented REST API over PostgreSQL with JPA/Hibernate, versioned schema through Flyway
migrations and DTO mapping with MapStruct. Access is protected with Spring Security and JWT, with
role-based permissions for doctors and patients and email-based OTP password recovery.

Patients reach the clinic from two front ends that talk to the same API: a React web app built with Vite,
TanStack Query and Tailwind for the in-clinic and administrative side, and a React Native (Expo) mobile
app so patients can manage their own appointments from their phone. Appointments carry a full lifecycle —
request, confirmation, a structured cancellation workflow and no-show handling — backed by a notification
system with templates, per-user preferences and delivery logs that pushes reminders and updates straight
to the mobile app.

## Highlights

<div class="not-prose grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">Multi-platform</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">Web & mobile</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">One API behind a React web app and a React Native mobile app.</div>
  </div>
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">Clean architecture</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">Layered backend</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">Domain, application, infrastructure and presentation kept apart.</div>
  </div>
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">Appointments</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">Full lifecycle</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">Requests, scheduling, cancellation workflow and no-shows.</div>
  </div>
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">Notifications</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">Templates & push</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">Templates, preferences and delivery logs, pushed to mobile.</div>
  </div>
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">Medical records</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">Per encounter</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">Clinical history tied to patients and their visits.</div>
  </div>
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">Secure auth</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">JWT & OTP</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">Role-based access with email-based OTP password recovery.</div>
  </div>
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">Versioned DB</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">Flyway migrations</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">Schema evolved through Flyway over PostgreSQL.</div>
  </div>
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">Documented API</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">OpenAPI & Docker</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">OpenAPI/Swagger spec, containerized with Docker.</div>
  </div>
</div>

## Gallery

<div class="not-prose grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
  <figure class="m-0 md:col-span-2">
    <img src="/images/projects/clinic/dashboard.png" alt="Admin dashboard managing medical appointments with live counters and a scheduling calendar" class="w-full rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-slate-700 bg-white" loading="lazy" decoding="async" />
    <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-slate-400">Appointment dashboard with live counters and scheduling calendar.</figcaption>
  </figure>
  <figure class="m-0">
    <img src="/images/projects/clinic/doctors.png" alt="Admin table for managing doctors, specialties, experience and ratings" class="w-full rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-slate-700" loading="lazy" decoding="async" />
    <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-slate-400">Doctor administration with specialties, filters and search.</figcaption>
  </figure>
  <figure class="m-0">
    <img src="/images/projects/clinic/patients.png" alt="Admin table for managing patients with status and clinical notes" class="w-full rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-slate-700" loading="lazy" decoding="async" />
    <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-slate-400">Patient administration with status and clinical notes.</figcaption>
  </figure>
  <figure class="m-0">
    <img src="/images/projects/clinic/landing.png" alt="Clinic platform marketing landing page" class="w-full rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-slate-700" loading="lazy" decoding="async" />
    <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-slate-400">Public landing page for patients and the clinic.</figcaption>
  </figure>
  <figure class="m-0">
    <img src="/images/projects/clinic/login.png" alt="Clinic platform sign-in screen" class="w-full rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-slate-700" loading="lazy" decoding="async" />
    <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-slate-400">Secure JWT-based sign-in.</figcaption>
  </figure>
</div>

## Tech stack

The backend is Java 21 with Spring Boot in a hexagonal architecture: Spring Data JPA over PostgreSQL,
Flyway migrations, MapStruct mapping, Spring Security with JWT, Spring Mail for OTP password recovery,
an OpenAPI/Swagger specification and Actuator health checks. The web frontend is React with Vite, TanStack
Query and TanStack Table, React Router, React Hook Form and Tailwind CSS. The mobile app is React Native
with Expo, React Navigation, NativeWind and Expo push notifications. The whole stack is containerized with
Docker.

## Links

- **Repository:** [github.com/DRTX2/clinic](https://github.com/DRTX2/clinic)

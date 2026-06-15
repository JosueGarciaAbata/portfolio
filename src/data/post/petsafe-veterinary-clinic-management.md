---
publishDate: 2026-06-15T10:00:00Z
title: PetSafe — Veterinary Clinic Management
excerpt: A full-stack platform to run a veterinary clinic end to end — owners and pets, appointments, a live queue, medical encounters, vaccinations and adoptions — built with NestJS and Angular.
image: ~/assets/images/projects/petsafe.png
category: Projects
tags:
  - NestJS
  - Angular
  - TypeScript
  - PostgreSQL
  - Docker
  - CI/CD
metadata:
  title: PetSafe — Veterinary Clinic Management Platform (NestJS + Angular)
  description: A full-stack veterinary practice management platform built with a NestJS hexagonal backend over PostgreSQL and an Angular frontend, with real-time queue and notifications, clinical records, vaccinations, adoptions, JWT auth, Playwright system tests and CI/CD to a VPS.
---

PetSafe is a full-stack platform to run a veterinary clinic end to end: owners and their pets,
appointments and the daily queue, medical encounters, vaccinations and even adoptions. It pairs a
NestJS backend with an Angular frontend.

<div class="not-prose flex flex-wrap gap-2 my-6">
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">NestJS</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Angular</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">TypeScript</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">PostgreSQL</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">TypeORM</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Hexagonal Architecture</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">WebSockets</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">JWT Auth</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">REST API</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">OpenAPI / Swagger</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Playwright</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Docker</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">CI/CD</span>
</div>

A veterinary clinic juggles a lot at once: owners and their pets, appointment requests and a live
waiting queue, the medical history of every visit, vaccination schedules, follow-ups and no-shows,
plus adoptions on the side. Run on paper or scattered tools, that information fragments and the daily
operation gets hard to keep in order.

To bring it together, the platform centralizes every flow behind a single API. A NestJS backend
organized in clean, separate layers, with its domain, application, infrastructure and presentation
concerns kept apart, exposes a documented REST API over PostgreSQL with TypeORM, while an Angular
interface turns it into the screens the clinic actually uses. Access is protected with JWT and
email-based password recovery.

The clinical core covers medical encounters with attachments and drafts, vaccinations, clinical
follow-ups and a QR code for each pet, while the operational side handles appointment requests,
scheduling, a live queue and no-show control, all kept in sync in real time through WebSockets.
Adoptions, system catalogs, notifications and operational reports round out the picture.

Quality and delivery are part of the build, not an afterthought. A broad Playwright system-test suite
exercises the real flows across the app, and the whole stack is containerized with Docker and shipped
through a CI/CD pipeline to a VPS, with its own deploy, rollback and health-check scripts.

## Highlights

<div class="not-prose grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">Clean architecture</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">Layered backend</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">Domain, application, infrastructure and presentation kept apart.</div>
  </div>
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">Real time</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">Queue & notifications</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">Live waiting queue and alerts over WebSockets.</div>
  </div>
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">Clinical core</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">Encounters & vaccines</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">Records with attachments, drafts, follow-ups and vaccinations.</div>
  </div>
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">Appointments</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">Requests & no-shows</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">Requests, scheduling, queue and no-show handling.</div>
  </div>
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">Pet QR</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">Per-pet code</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">QR codes linking straight to each pet's profile.</div>
  </div>
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">Adoptions</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">Beyond the clinic</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">An adoption workflow alongside the clinical side.</div>
  </div>
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">Secure auth</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">JWT & email</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">Token security with email-based password reset.</div>
  </div>
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">CI/CD</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">Tested & shipped</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">Playwright suites, Docker and deployment to a VPS.</div>
  </div>
</div>

## Tech stack

The backend is NestJS with TypeScript in a hexagonal architecture, TypeORM over PostgreSQL with
migrations and seeding, JWT authentication, WebSockets for real-time queue and notifications, SMTP
email and an OpenAPI specification. The frontend is Angular with Angular Material and Tailwind CSS,
covered by Playwright system tests. Everything is containerized with Docker and delivered to a VPS
through a CI/CD pipeline.

## Links

- **Backend:** [github.com/STRATIUM-UTA/PetSafe-Back](https://github.com/STRATIUM-UTA/PetSafe-Back)
- **Frontend:** [github.com/STRATIUM-UTA/PetSafe-Front](https://github.com/STRATIUM-UTA/PetSafe-Front)

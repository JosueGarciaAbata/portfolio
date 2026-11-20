---
publishDate: 2026-06-15T10:00:00Z
title: PetSafe — Veterinary Clinic Management
excerpt: A full-stack platform to run a veterinary clinic, with appointments, a real-time attention queue and adoptions, built with NestJS and Angular and deployed on a VPS.
image: ~/assets/images/projects/petsafe.png
category: Projects
tags:
  - NestJS
  - Angular
  - TypeScript
  - PostgreSQL
  - WebSockets
  - Docker
metadata:
  title: PetSafe — Veterinary Clinic Management Platform (NestJS and Angular)
  description: A full-stack veterinary clinic platform built with NestJS and Angular over PostgreSQL, with appointment scheduling, a real-time attention queue with WebSockets, adoptions, reporting, JWT auth, Playwright tests and a production deployment on a VPS.
---

<div class="not-prose flex flex-wrap gap-2 my-6">
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">NestJS</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">Angular</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">TypeScript</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">PostgreSQL</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">WebSockets</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">Docker</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">Playwright</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">Nginx</span>
</div>

## The problem

A veterinary clinic juggles owners and their pets, appointment requests and a live waiting queue. Run on
paper or scattered tools, that information fragments and the daily operation gets hard to keep in order.

## The solution

A single API centralizes every flow. A NestJS backend exposes a documented REST API over PostgreSQL, an
Angular interface turns it into the screens the clinic uses, and WebSockets keep the waiting queue in sync
in real time.

## What I did

I developed full-stack modules with Angular, NestJS and PostgreSQL.

They cover appointment scheduling, pets and owners, adoptions, settings and reporting.

I built a dashboard with daily and weekly appointment metrics.

I implemented the real-time attention queue with WebSockets.

I added JWT authentication and the OpenAPI documentation.

I built the Playwright test suite.

I contributed to the CI/CD pipeline and to the production deployment on a VPS.

That deployment uses Docker, Nginx, Certbot SSL certificates and domain management with Cloudflare.

<div class="not-prose grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
  <figure class="m-0">
    <img src="/images/projects/petsafe/login.png" alt="PetSafe sign-in screen" class="w-full rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-slate-700" loading="lazy" decoding="async" />
    <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-slate-400">Sign-in to the clinic platform.</figcaption>
  </figure>
</div>

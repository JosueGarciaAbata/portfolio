---
publishDate: 2026-06-09T10:00:00Z
title: Distributed Fuel and Fleet Management System
excerpt: A fleet platform built as NestJS microservices over gRPC that tracks how much fuel each trip really uses against what it should use.
image: ~/assets/images/projects/fuel-distributed.png
category: Projects
tags:
  - NestJS
  - gRPC
  - Microservices
  - PostgreSQL
  - Docker
  - Kubernetes
metadata:
  title: Distributed Fuel and Fleet Management System — NestJS Microservices over gRPC
  description: A distributed fleet and fuel management platform of NestJS microservices communicating over gRPC behind an API gateway, with route maps, estimated versus actual fuel per trip, efficiency reporting and a Kubernetes deployment.
---

<div class="not-prose flex flex-wrap gap-2 my-6">
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">NestJS</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">gRPC</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">Microservices</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">API Gateway</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">PostgreSQL</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">Docker</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">Kubernetes</span>
</div>

## The problem

Running a fleet means juggling drivers, vehicles, routes and the fuel each trip burns. As one big application,
that load is hard to scale and one failure can take everything down, while the gap between expected and
actual fuel goes unnoticed.

## The solution

Each concern is its own NestJS service behind an API gateway, and the services talk to each other through
typed gRPC contracts. Every trip records its estimated and real fuel use with an efficiency score, plotted
over the real route on a map, so overuse surfaces instead of hiding in a spreadsheet.

## What I did

I developed the routes module, with map integration.

I developed the trips module.

It calculates estimated versus actual fuel and an efficiency metric for each trip.

I implemented the gRPC communication between the NestJS microservices, behind the API Gateway.

I built the reporting for trip efficiency and fuel use.

I containerized the services for deployment on Kubernetes.

<div class="not-prose grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
  <figure class="m-0">
    <img src="/images/projects/fuel/trips-map.png" alt="Dashboard with a route map and a table of trips showing estimated and real fuel" class="w-full rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-slate-700" loading="lazy" decoding="async" />
    <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-slate-400">Route map and trips with estimated and real fuel.</figcaption>
  </figure>
  <figure class="m-0">
    <img src="/images/projects/fuel/route-fuel.png" alt="Route summary with estimated and real fuel totals and average efficiency" class="w-full rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-slate-700" loading="lazy" decoding="async" />
    <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-slate-400">Route summary with fuel totals and average efficiency.</figcaption>
  </figure>
</div>

## Links

- **Backend:** [github.com/DavidJosueP2/Distributed-Gasoline-System](https://github.com/DavidJosueP2/Distributed-Gasoline-System)
- **Frontend:** [github.com/JoelBonillaG/Distributed-Gasoline-System-Frontend](https://github.com/JoelBonillaG/Distributed-Gasoline-System-Frontend)

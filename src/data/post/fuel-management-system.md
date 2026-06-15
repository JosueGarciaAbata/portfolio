---
publishDate: 2026-06-09T10:00:00Z
title: Distributed Fuel Management System
excerpt: A distributed fleet and fuel platform built as NestJS microservices over gRPC, managing vehicles, drivers and routes while tracking how much fuel each trip really uses.
image: ~/assets/images/projects/fuel-distributed.png
category: Projects
tags:
  - Node.js
  - NestJS
  - gRPC
  - Microservices
  - Docker
  - Kubernetes
metadata:
  title: Distributed Fuel Management System — NestJS Microservices over gRPC
  description: A distributed fleet and fuel management platform of NestJS microservices communicating over gRPC, with RabbitMQ messaging, Eureka discovery, an API gateway, Kubernetes and Helm deployment, and a React frontend with route maps.
---

A distributed fleet and fuel management platform, built as a set of NestJS microservices that talk
over gRPC, to manage vehicles, drivers and routes and to track how much fuel each trip really uses.

<div class="not-prose flex flex-wrap gap-2 my-6">
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Microservices</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">NestJS</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">TypeScript</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">gRPC</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">RabbitMQ</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">API Gateway</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Eureka</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">PostgreSQL</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Kubernetes / Helm</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Docker</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">CI/CD</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Fleet Management</span>
</div>

Running a vehicle fleet means juggling drivers and their licenses, light and heavy vehicles, the
routes they cover and the fuel each trip burns. Handled as one big application, that load is hard to
scale and a single failure can take everything down, while the gap between expected and actual fuel
quietly goes unnoticed.

To address this, each concern is its own service behind an API gateway. Drivers, vehicles, users,
routes, fuel, email and logging run independently, register with a Eureka discovery server, and
communicate through typed gRPC contracts, with RabbitMQ carrying asynchronous events between them.
The gateway validates input and routes every request to the right service by name.

On the operational side, the platform manages vehicle models and units, drivers with their license
types and inclusions, and the routes and trips they run. Each trip records its estimated and real
fuel use along with an efficiency score, plotted over the real route on a map, so overuse and
inconsistencies surface instead of hiding in a spreadsheet.

The whole system is containerized with Docker and ships to Kubernetes through Helm charts, with
database migrations and a seeding strategy wired into the deployment, a React interface on top and
continuous integration keeping every service in check.

## Architecture highlights

<div class="not-prose grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">11 services</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">Microservices</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">Gateway, auth, users, drivers, vehicles, routes, fuel, email, logging and messaging.</div>
  </div>
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">gRPC</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">Service contracts</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">Typed communication between services via protocol buffers.</div>
  </div>
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">RabbitMQ</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">Async messaging</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">Event publishing through a dedicated broker service.</div>
  </div>
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">Eureka</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">Service discovery</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">Services register and the gateway routes them by name.</div>
  </div>
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">Fleet</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">Vehicles and drivers</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">Light and heavy vehicles, drivers, license types, routes and trips.</div>
  </div>
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">Fuel</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">Estimated vs real</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">Per-trip consumption and efficiency, mapped on real routes.</div>
  </div>
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">Kubernetes</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">Helm deploy</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">Charts, migrations and seeding for cluster deployment.</div>
  </div>
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">CI/CD</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">Docker and Actions</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">Containerized services shipped through GitHub Actions.</div>
  </div>
</div>

## Gallery

<div class="not-prose grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
  <figure class="m-0">
    <img src="/images/projects/fuel/trips-map.png" alt="Dashboard with a route map and a table of trips showing estimated and real fuel" class="w-full rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-slate-700" loading="lazy" decoding="async" />
    <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-slate-400">Trips with estimated and real fuel, mapped on the route.</figcaption>
  </figure>
  <figure class="m-0">
    <img src="/images/projects/fuel/route-fuel.png" alt="Route summary with estimated and real fuel totals and average efficiency" class="w-full rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-slate-700" loading="lazy" decoding="async" />
    <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-slate-400">Route summary: estimated vs real fuel and efficiency.</figcaption>
  </figure>
  <figure class="m-0">
    <img src="/images/projects/fuel/vehicles.png" alt="Admin table managing light vehicle models" class="w-full rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-slate-700" loading="lazy" decoding="async" />
    <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-slate-400">Vehicle model administration.</figcaption>
  </figure>
  <figure class="m-0">
    <img src="/images/projects/fuel/users.png" alt="Admin table managing system users and roles" class="w-full rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-slate-700" loading="lazy" decoding="async" />
    <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-slate-400">System users and roles.</figcaption>
  </figure>
</div>

## Tech stack

NestJS with TypeScript across every service, communicating over gRPC with protocol buffers and
RabbitMQ for asynchronous events, discovered through Eureka and fronted by an API gateway. Data lives
in PostgreSQL with managed migrations and seeding. The frontend is React with map-based route views,
and the platform is containerized with Docker and deployed to Kubernetes via Helm, with CI/CD
pipelines on GitHub Actions.

## Links

- **Backend:** [github.com/DavidJosueP2/Distributed-Gasoline-System](https://github.com/DavidJosueP2/Distributed-Gasoline-System)
- **Frontend:** [github.com/JoelBonillaG/Distributed-Gasoline-System-Frontend](https://github.com/JoelBonillaG/Distributed-Gasoline-System-Frontend)
  </content>

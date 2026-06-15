---
publishDate: 2026-06-08T10:00:00Z
title: Publication Management and Moderation System
excerpt: A full-stack marketplace where users publish products, discover what is for sale near them, and a moderation team keeps the catalog trustworthy.
image: ~/assets/images/projects/marketplace.png
category: Projects
tags:
  - Java
  - Spring Boot
  - React
  - PostgreSQL
  - Docker
  - CI/CD
metadata:
  title: Publication Management and Moderation System — Full-Stack Marketplace with Geolocation
  description: A Spring Boot and React marketplace with location-based product discovery, image storage, JWT security, a full publication moderation workflow, and a CI/CD pipeline with SonarQube, JaCoCo, JMeter and OWASP ZAP.
---

A full-stack marketplace where users publish products, discover what is for sale near them, and a
moderation team keeps the catalog trustworthy. It pairs a Spring Boot API with a React and TypeScript
interface around location, trust and clean engineering.

<div class="not-prose flex flex-wrap gap-2 my-6">
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Spring Boot</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">React</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">TypeScript</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">PostgreSQL</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">PostGIS / Geospatial</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">JWT Auth</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Image Storage</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">REST API</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Content Moderation</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Jenkins CI/CD</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Docker</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">SonarQube</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">OWASP ZAP</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">JMeter</span>
</div>

An open marketplace lives or dies on trust and relevance. Buyers want to find what is genuinely close
to them instead of scrolling endless listings, sellers want their photos and details handled
reliably, and someone has to keep scams, abuse and bad listings out before they spread through the
catalog.

To address this, the platform pairs a Spring Boot API with a React and TypeScript interface. Each
publication carries a real location, so the catalog can rank and filter products by distance with
spatial queries, while product images are stored and served back to the storefront. Access is
protected end to end with JWT, email verification and password recovery.

Trust is handled by a complete moderation workflow. Users report incidences on a listing, moderators
review and resolve them from their own dashboard, and sellers can appeal a decision, each with its
own states and history. Underneath, the backend is organized into clear layers of entities, DTOs,
mappers, repositories, services and REST controllers, documented with OpenAPI.

Quality is built into the pipeline rather than bolted on. The build measures coverage with JaCoCo,
runs static analysis with SonarQube, load tests with JMeter and dynamic security scans with OWASP
ZAP, alongside Selenium and Playwright end-to-end suites, all orchestrated through Jenkins and shipped
as Docker images.

## Functional highlights

<div class="not-prose grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">Full stack</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">Two services</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">A Spring Boot REST API and a React with TypeScript single-page app.</div>
  </div>
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">Geolocation</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">Nearby products</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">Distance filtering through PostGIS spatial queries.</div>
  </div>
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">Secure auth</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">JWT and email</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">Token security, email verification and password recovery.</div>
  </div>
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">Images</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">Image storage</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">Product photos uploaded, stored and served back to the catalog.</div>
  </div>
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">Moderation</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">Incidences and appeals</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">Reports, moderator review and a seller appeal flow.</div>
  </div>
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">Quality gates</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">Analysis and testing</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">SonarQube, JaCoCo coverage, JMeter load and OWASP ZAP scans.</div>
  </div>
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">End to end</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">Selenium and Playwright</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">Automated flows on both the API and the user interface.</div>
  </div>
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">CI/CD</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">Jenkins and Docker</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">Pipelines and containers for both services.</div>
  </div>
</div>

## Gallery

<div class="not-prose grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
  <figure class="m-0">
    <img src="/images/projects/marketplace/catalog.png" alt="Product catalog with category, price and distance filters" class="w-full rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-slate-700" loading="lazy" decoding="async" />
    <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-slate-400">Catalog with category, price and distance filters.</figcaption>
  </figure>
  <figure class="m-0">
    <img src="/images/projects/marketplace/moderation-dashboard.png" alt="Moderation dashboard tracking reported incidences" class="w-full rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-slate-700" loading="lazy" decoding="async" />
    <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-slate-400">Moderation dashboard for reported incidences.</figcaption>
  </figure>
  <figure class="m-0">
    <img src="/images/projects/marketplace/profile-location.png" alt="User profile with location and account security tabs" class="w-full rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-slate-700" loading="lazy" decoding="async" />
    <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-slate-400">User profile with location and security settings.</figcaption>
  </figure>
  <figure class="m-0">
    <img src="/images/projects/marketplace/login.png" alt="Marketplace Link sign-in screen" class="w-full rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-slate-700" loading="lazy" decoding="async" />
    <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-slate-400">Secure sign-in and onboarding.</figcaption>
  </figure>
</div>

## Tech stack

The backend is Java with Spring Boot, Spring Security, Spring Data JPA and PostgreSQL with Hibernate
Spatial for geolocation, MapStruct and Lombok for clean mapping, JWT for auth, image storage and
OpenAPI for documentation. The frontend is React with TypeScript, Vite, Tailwind CSS and
TanStack Query. Everything is containerized with Docker and delivered through Jenkins, with SonarQube,
JaCoCo, JMeter, OWASP ZAP, Selenium and Playwright guarding quality and security.

## Links

- **Backend:** [github.com/DavidJosueP2/Marketplace_Link](https://github.com/DavidJosueP2/Marketplace_Link)
- **Frontend:** [github.com/DavidJosueP2/Marketplace-Link-Front](https://github.com/DavidJosueP2/Marketplace-Link-Front)
  </content>

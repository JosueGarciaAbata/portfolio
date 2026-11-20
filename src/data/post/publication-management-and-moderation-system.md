---
publishDate: 2026-06-08T10:00:00Z
title: Publication Management and Moderation System
excerpt: A marketplace where users find products near them and a moderation team keeps the catalog trustworthy, with a Jenkins quality pipeline behind it.
image: ~/assets/images/projects/marketplace.png
category: Projects
tags:
  - Java
  - Spring Boot
  - React
  - PostgreSQL
  - PostGIS
  - Jenkins
metadata:
  title: Publication Management and Moderation System — Marketplace with PostGIS and Jenkins
  description: A Spring Boot and React marketplace with location-based product discovery using PostGIS, JWT security, an incident and appeal moderation workflow with email notifications, and a Jenkins quality pipeline with SonarQube, JaCoCo, JMeter and Playwright.
---

<div class="not-prose flex flex-wrap gap-2 my-6">
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">Spring Boot</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">React</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">PostgreSQL</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">PostGIS</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">JWT Auth</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">Jenkins</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">SonarQube</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">JMeter</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">Playwright</span>
</div>

## The problem

An open marketplace lives on trust and relevance. Buyers want what is genuinely close to them, and someone
has to keep scams and bad listings out before they spread through the catalog.

## The solution

A Spring Boot API and a React interface. Each publication carries a real location, so the catalog can filter
products by distance with spatial queries. A moderation workflow lets users report incidents and sellers
appeal decisions, and a CI pipeline checks the quality of every change.

## What I did

I developed the incident and appeal moderation module, in the backend and the frontend.

I added its business logic and the email notifications.

I implemented proximity-based product discovery with PostGIS spatial queries.

I secured the platform with JWT.

I built the CI quality pipeline in Jenkins.

It runs SonarQube analysis, JaCoCo coverage, JMeter load tests and Playwright end-to-end tests.

<div class="not-prose grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
  <figure class="m-0">
    <img src="/images/projects/marketplace/catalog.png" alt="Product catalog with category, price and distance filters" class="w-full rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-slate-700" loading="lazy" decoding="async" />
    <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-slate-400">Catalog with category, price and distance filters.</figcaption>
  </figure>
  <figure class="m-0">
    <img src="/images/projects/marketplace/moderation-dashboard.png" alt="Moderation dashboard tracking reported incidents" class="w-full rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-slate-700" loading="lazy" decoding="async" />
    <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-slate-400">Moderation dashboard for reported incidents.</figcaption>
  </figure>
</div>

## Links

- **Backend:** [github.com/DavidJosueP2/Marketplace_Link](https://github.com/DavidJosueP2/Marketplace_Link)
- **Frontend:** [github.com/DavidJosueP2/Marketplace-Link-Front](https://github.com/DavidJosueP2/Marketplace-Link-Front)

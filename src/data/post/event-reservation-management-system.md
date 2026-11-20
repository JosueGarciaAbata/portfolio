---
publishDate: 2026-06-03T10:00:00Z
title: Event Booking System
excerpt: A ticket booking backend for high-demand events, where 1,000 people compete for the same seat and exactly one wins.
image: ~/assets/images/projects/events.svg
category: Projects
tags:
  - Java
  - Spring Boot
  - PostgreSQL
  - Redis
  - Stripe
  - Gatling
metadata:
  title: Event Booking System — Concurrency Control with Spring Boot and Redis
  description: A ticket booking backend built with Java 21, Spring Boot 3, PostgreSQL and Redis. A distributed lock outside the transaction scope prevents duplicate reservations under extreme concurrency, validated with Gatling load tests.
---

<div class="not-prose flex flex-wrap gap-2 my-6">
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">Concurrency Control</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">Java 21</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">Spring Boot 3</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">PostgreSQL</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">Redis</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">Stripe</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">Gatling</span>
</div>

## The problem

When many people try to book the same seat at the same moment, a ticketing system can create double
reservations and inconsistent data. The test case was the worst one: 1,000 users going for the same seat,
where exactly one should win and the other 999 should get a clear conflict.

## The solution

A Redis lock holds the seat while the buyer checks out, PostgreSQL integrity constraints act as the final
guard, and Stripe Checkout handles the payment.

## What I did

I built the whole backend with Java 21, Spring Boot 3 and PostgreSQL.

I implemented the Redis lock for seat contention.

At first the whole booking flow ran inside one database transaction, so even the users who were going to lose opened one.

I moved the lock outside the transaction, so 999 requests are rejected before touching the database and only the winner opens one.

In the end it was not Redis alone, it was the transaction scope.

<div class="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">−67%</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">Median latency</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">Compared with the first version that used only the database.</div>
  </div>
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">+25%</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">Throughput</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">Compared with the same first version.</div>
  </div>
</div>

I load-tested it with Gatling at 1,000 simultaneous bookings.

There were no duplicate reservations.

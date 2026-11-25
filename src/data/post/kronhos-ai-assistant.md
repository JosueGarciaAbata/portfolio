---
publishDate: 2026-08-31T10:00:00Z
title: Kronhos — Internal AI Assistant
excerpt: A multi-tenant RAG support assistant that answers questions from a company's own documents, tickets and spreadsheets, on a web chat and on WhatsApp.
image: ~/assets/images/projects/kronhos.png
category: Projects
tags:
  - Python
  - FastAPI
  - Angular
  - AI
  - PostgreSQL
  - pgvector
  - RAG
  - WhatsApp
  - Azure
metadata:
  title: Kronhos — Internal AI Assistant with RAG on PostgreSQL and pgvector
  description: A multi-tenant AI support platform with RAG on PostgreSQL and pgvector, a custom agent orchestrator, DuckDB spreadsheet queries, WhatsApp, an Angular admin panel, GitHub Actions CI/CD and Prometheus monitoring. Built with Python, FastAPI and Angular.
---

<div class="not-prose flex flex-wrap gap-2 my-6">
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">Professional Experience</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">Python / FastAPI</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">Angular</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">PostgreSQL + pgvector</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">RAG</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">OpenAI</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">DuckDB</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">WhatsApp</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">GitHub Actions</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">Prometheus / Grafana</span>
</div>

## The problem

Support teams answer the same questions again and again, and the answers are scattered across documents,
tickets and spreadsheets. Finding them takes time, and each person answers a little differently.

## The solution

An assistant that answers in plain Spanish from the company's own documents, tickets, FAQs and spreadsheets,
on a web chat and on WhatsApp. Each company is a tenant with its own agents, knowledge and WhatsApp number.
It answers customers directly and takes repetitive questions off a support team of four.

<figure class="not-prose m-0 my-8">
  <img src="/images/projects/kronhos/architecture.png" alt="System architecture of the Kronhos AI support platform in five layers" class="w-full rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-slate-700 bg-white" loading="lazy" decoding="async" />
  <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-slate-400">The platform in five layers, from clients and edge to the application, the AI core and the data and external services.</figcaption>
</figure>

## What I did

I built the RAG assistant with Python, FastAPI, OpenAI and pgvector on PostgreSQL.

It answers questions in Spanish from the company's documents, tickets and FAQs.

I wrote the agent orchestrator with function calling, so each agent only uses the tools and APIs assigned to it.

I added spreadsheet queries with DuckDB, read-only and limited in time and memory.

I connected the agents to WhatsApp through webhooks.

I created the Angular admin panel to configure assistants, their tools and users with roles and JWT.

I set up CI/CD with GitHub Actions, with automatic migrations and health checks.

It deploys to a Linux VM on Azure behind Nginx.

I added Prometheus and Grafana monitoring, with retrieval latency, generation latency and token usage.

I load-tested the chat API with k6: 632 requests at 10 virtual users, with a p95 of 2.31 s.

<div class="not-prose grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
  <figure class="m-0">
    <img src="/images/projects/kronhos/assistant.png" alt="Admin panel assistant chat" class="w-full rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-slate-700 bg-white" loading="lazy" decoding="async" />
    <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-slate-400">The assistant inside the admin panel.</figcaption>
  </figure>
  <figure class="m-0">
    <img src="/images/projects/kronhos/conversations.png" alt="Admin panel listing WhatsApp conversations with their state" class="w-full rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-slate-700 bg-white" loading="lazy" decoding="async" />
    <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-slate-400">WhatsApp conversations with their state.</figcaption>
  </figure>
</div>

The code belongs to the company, so it is not public.

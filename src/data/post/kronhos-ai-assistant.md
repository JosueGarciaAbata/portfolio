---
publishDate: 2026-08-31T10:00:00Z
title: Kronhos — Internal AI Assistant
excerpt: A multi-tenant AI support platform that answers questions from a company's own documents, spreadsheets and APIs, on a web chat and on WhatsApp.
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
  title: Kronhos — Internal AI Assistant for Company Knowledge
  description: A multi-tenant AI support platform with RAG on PostgreSQL and pgvector, a custom agent orchestrator, WhatsApp, an admin panel and k6 performance tests. Built with Python, FastAPI, Angular and deployed on Azure.
---

A platform where companies ask questions in plain Spanish and get answers grounded in their own documents,
spreadsheets, FAQs and internal APIs, on a web chat that can be embedded in any site and on WhatsApp. Each
company is a tenant with its own agents, knowledge and WhatsApp number.

<div class="not-prose flex flex-wrap gap-2 my-6">
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Professional Experience</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Software Architecture</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Python / FastAPI</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Angular</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">PostgreSQL + pgvector</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">RAG</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">OpenAI</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">WhatsApp</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Azure</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">CI/CD</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">k6 / Prometheus</span>
</div>

## System architecture

<figure class="not-prose m-0 my-8">
  <img src="/images/projects/kronhos/architecture.png" alt="System architecture of the Kronhos AI support platform in five layers" class="w-full rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-slate-700 bg-white" loading="lazy" decoding="async" />
  <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-slate-400">The platform in five layers, from clients and edge to the application, the AI core and the data and external services.</figcaption>
</figure>

Requests enter through the embeddable chat widget, the Angular admin panel or WhatsApp. Nginx terminates TLS
on an Azure Linux VM and forwards to a FastAPI application served by Uvicorn with two workers under systemd.
Inside the application the code is split into thin controllers, services with the business rules, and
repositories over async SQLAlchemy. Domain exceptions travel up the stack and are translated into RFC 9457
problem+json responses in a single place, so the API reports errors in one consistent format.

Beside that stack sit the AI core and the data layer. A custom orchestrator drives the agents, a RAG pipeline
retrieves company knowledge from PostgreSQL with pgvector, and tools reach authorized external APIs or run
read-only SQL over uploaded CSV and Excel files with DuckDB. OpenAI provides the language model and the
embeddings, and UltraMsg connects the agents to WhatsApp.

## Multi-tenancy and security

Every company has its own agents, documents, datasets, contacts and WhatsApp account, so every query is
scoped by company. The company that embeds the chat signs its own token, and the backend validates it with a
per-company secret, kept separate from the tokens of the admin panel. The panel has three roles
(superadmin, admin and campaigns), and the keys of external APIs are stored encrypted with Fernet.

The per-user question limit (20 per minute) lives in PostgreSQL as an atomic upsert instead of in memory.
With two workers an in-memory counter would give each worker its own quota, while a database row keeps a
single quota per user. The login endpoint has its own limit at the proxy, 5 attempts per minute per IP.

## Knowledge with RAG on PostgreSQL

Documents and FAQs go through extraction, cleaning and recursive chunking into 1,000-character segments with
150 characters of overlap, so a sentence cut at a boundary still appears whole in one of the segments. Each
segment becomes a 1,536-dimension vector with text-embedding-3-small and is stored with pgvector under an
HNSW index using cosine distance. At query time the five closest segments are retrieved from the sources
assigned to that agent, and the answer carries its sources.

Keeping the vectors in the same PostgreSQL that holds the relational data means one database to back up,
migrate with Alembic and secure, instead of a second system to operate on the same VM. The embedding model
is global because the stored vectors depend on it, while the chat model is chosen per agent.

## Agents, tools and spreadsheets

The orchestrator is custom code on top of the OpenAI SDK and function calling rather than an agent
framework. The agent loop is capped at five turns, and each agent can only use the tools and authorized APIs
assigned to it, so the limits that matter for cost and safety are explicit in the code instead of hidden in
a library. Text splitting is the only place a library helps (langchain-text-splitters).

Spreadsheets are not embedded. They are loaded into DuckDB, profiled by column, and the model writes SQL
against them. That SQL is read-only and bounded by a 20-second timeout, 512 MB of memory and at most 100 rows
returned. A table of numbers is answered exactly by a query, which an approximate similarity search over
chunks cannot do.

## Cost and reliability controls

In production the model call is the expensive and fragile part, so it is limited at every level.

- Output is capped at 300 tokens per answer.
- At most 5 simultaneous model calls per worker (10 in total with two workers), each waiting up to 15
  seconds for a slot before the request is rejected as saturated.
- A 30-second timeout and 2 automatic retries on each OpenAI request.
- A WhatsApp conversation handles at most 12 contact messages before it is handed to a human advisor, which
  puts a ceiling on the spend of any single conversation.
- Token consumption for the model and for embeddings is counted and exported as metrics.

The model started as GPT-4o mini, and since each agent stores its own model, a cheaper or stronger one can be
assigned per agent without a deployment.

## WhatsApp

<figure class="not-prose m-0 my-8">
  <img src="/images/projects/kronhos/conversations.png" alt="Admin panel listing WhatsApp conversations with their state" class="w-full rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-slate-700 bg-white" loading="lazy" decoding="async" />
  <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-slate-400">Conversation log in the admin panel with contact, connection, state (closed, manual or attended) and last message.</figcaption>
</figure>

Each company connects its own UltraMsg account. Incoming messages arrive through a webhook and are answered
by the agent, which drives the conversation itself with the same knowledge and tools as the web chat.
Campaigns send messages with a short pause between each one so the provider API is not flooded, and every
conversation is stored and shown in the panel with its state, so a person can open the thread and take over.

<figure class="not-prose m-0 my-8">
  <img src="/images/projects/kronhos/assistant.png" alt="Admin panel assistant chat" class="w-full rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-slate-700 bg-white" loading="lazy" decoding="async" />
  <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-slate-400">The assistant inside the admin panel, next to agents, tools, knowledge sources and WhatsApp management.</figcaption>
</figure>

## Deployment and observability

A push to main triggers GitHub Actions, which connects to the VM over SSH, installs dependencies, applies
the Alembic migrations, restarts the service and polls /health until the application answers. Lint and
tests run in a separate CI workflow, and the frontend builds and deploys through its own workflow. Nginx and
the systemd unit are versioned in the repository.

Prometheus scrapes the API every 15 seconds and a Grafana dashboard shows retrieval latency, generation
latency and token usage, so a slow answer can be traced to the search or to the model. With two workers the
counters are written in multiprocess mode so that both are aggregated.

## Performance validation

The chat API was tested with k6.

<div class="not-prose overflow-x-auto my-6">
  <table class="w-full text-sm text-left">
    <thead>
      <tr class="border-b border-gray-300 dark:border-slate-600">
        <th class="py-2 pr-4">Test</th>
        <th class="py-2 pr-4">Peak virtual users</th>
        <th class="py-2 pr-4">Requests</th>
        <th class="py-2 pr-4">HTTP errors</th>
        <th class="py-2">p95 latency</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b border-gray-200 dark:border-slate-700">
        <td class="py-2 pr-4">Load</td><td class="py-2 pr-4">10</td><td class="py-2 pr-4">632</td><td class="py-2 pr-4">0 %</td><td class="py-2">2.31 s</td>
      </tr>
      <tr>
        <td class="py-2 pr-4">Stress</td><td class="py-2 pr-4">100</td><td class="py-2 pr-4">2,519</td><td class="py-2 pr-4">67.33 %</td><td class="py-2">8.46 s</td>
      </tr>
    </tbody>
  </table>
</div>

The load test held its latency with no failures at 10 concurrent users. Most of the errors in the stress test
were requests rejected by the per-user rate limit once it was reached, which is the limiter doing its job
and not a failure of the application.

The code belongs to the company, so it is not public.

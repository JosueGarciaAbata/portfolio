---
publishDate: 2026-08-31T10:00:00Z
title: Kronhos — Internal AI Assistant
excerpt: An AI assistant that answers a company's internal questions in Spanish using its own documents and tickets, available as a web chat and on WhatsApp. Built during my professional experience at Kronhos (May to August 2026).
category: Projects
tags:
  - Python
  - FastAPI
  - Angular
  - AI
  - PostgreSQL
  - WhatsApp
metadata:
  title: Kronhos — Internal AI Assistant for Company Knowledge
  description: A company assistant that answers staff questions in Spanish from internal documents and tickets, with a web chat, WhatsApp, an admin panel and configurable assistants. Built with Python, FastAPI, Angular and PostgreSQL.
---

An internal assistant that lets people at a company ask questions in plain Spanish and get answers based
on the company's own documents and support tickets, instead of searching through files by hand. I built it
during my professional experience at Kronhos, from May to August 2026.

<div class="not-prose flex flex-wrap gap-2 my-6">
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Professional Experience</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">AI Assistant</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Python / FastAPI</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Angular</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">PostgreSQL</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">WhatsApp</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">CI/CD</span>
</div>

The documents and tickets are loaded into the system and the assistant uses them to reply, so its answers
stay tied to real company content. It works where people already are: as a chat that can be embedded in a
website and as a WhatsApp channel. It can also read spreadsheets and web pages that are added as sources,
so a question about a table of data or a public page gets a proper answer.

An admin panel lets the team create several assistants, each with its own behavior and a limited list of
actions it is allowed to perform. Access is controlled with users, roles and permissions, and sensitive
keys are stored encrypted.

I worked on the backend, the admin panel and the delivery pipeline: the assistants and their permissions,
the user and role management, the WhatsApp and data source integrations, and the automatic testing and
deployment of both the backend and the frontend. The backend uses Python with FastAPI and PostgreSQL, the
frontend uses Angular, and the pipeline runs on GitHub Actions. The code belongs to the company, so it is
not public.

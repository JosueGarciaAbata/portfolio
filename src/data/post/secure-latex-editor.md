---
publishDate: 2026-10-05T10:00:00Z
title: Secure LaTeX Editor
excerpt: A web text editor to write, compile and share LaTeX documents, designed around safe compilation. Every document is turned into a PDF inside an isolated container, with strict access control and encrypted storage.
category: Projects
tags:
  - Angular
  - Spring Boot
  - PostgreSQL
  - Docker
  - Security
metadata:
  title: Secure LaTeX Editor — Safe Compilation, Isolation and Access Control
  description: A web editor to write, compile and share LaTeX documents with security built in. Documents are compiled inside isolated Docker containers, with access control, encrypted storage and integrity checks. Angular, Spring Boot, PostgreSQL and Docker.
---

A web text editor where people can write LaTeX documents, turn them into a PDF and share them with a
teammate, in the spirit of tools like Overleaf. It was built by a team of four for a software security
course, so the real challenge was not the editor itself but doing it safely: every feature had to come
with its own access controls, validations and tests.

<div class="not-prose flex flex-wrap gap-2 my-6">
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Application Security</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Isolated Compilation</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Angular</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Spring Boot</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">PostgreSQL</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Docker</span>
</div>

Compiling a document is the riskiest part of a platform like this, because a LaTeX file sent by a user
is really a small program, and a malicious one could try to read files or abuse the server. For that
reason each document is compiled inside its own temporary Docker container, with a time limit, a cap on
how many compilations can run at the same time, and no access to the application's data or secrets. If a
compilation fails or takes too long, the user simply gets the error log, and the system stays untouched.
The compilation module was my main responsibility, together with the PDF viewer and the import and export
of whole projects as ZIP files.

Around that, the platform protects what is stored and who can reach it. Users sign up with a verified email
or log in with Google, and every request is checked on the server against the user's role in the project,
so a viewer can read the result but never compile or change a file. Project files, their change history and
the last generated PDF are stored encrypted, and the PDF is checked for integrity before it is handed back.
Pressing Ctrl+S saves and compiles in one step, and the last successful PDF is shown again when the project
is reopened, even if a later attempt failed.

Projects can be shared with one more person as an editor or a viewer, and the limit is enforced on the
server even when requests arrive at the same time. The frontend is built with Angular and the backend with
Java and Spring Boot over PostgreSQL, covered by automated tests on both sides, including tests that run
against real Docker containers and real WebSocket connections.

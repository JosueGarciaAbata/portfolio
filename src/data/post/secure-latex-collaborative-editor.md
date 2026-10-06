---
publishDate: 2026-10-05T10:00:00Z
title: Secure Collaborative LaTeX Editor
excerpt: A web platform inspired by Overleaf to write, compile and share LaTeX documents, built with security in mind. I built the safe PDF compilation, the PDF viewer and the ZIP import and export.
category: Projects
tags:
  - Angular
  - Spring Boot
  - PostgreSQL
  - Docker
  - Security
metadata:
  title: Secure Collaborative LaTeX Editor — An Overleaf-style Platform
  description: A web platform inspired by Overleaf to write, compile and share LaTeX documents with security controls. I built the isolated PDF compilation in Docker, the PDF viewer and ZIP import and export. Angular, Spring Boot and PostgreSQL.
---

A web platform inspired by Overleaf where people can create LaTeX projects, edit their files, turn
them into a PDF and share them with a teammate. It was built by a team of four for a software security
course, so every feature comes with access controls, validations and tests.

<div class="not-prose flex flex-wrap gap-2 my-6">
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Team of 4</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Application Security</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Angular</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Spring Boot</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">PostgreSQL</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Docker</span>
</div>

## What the platform does

- Sign up with email verification, and log in with a password or a Google account.
- Create projects, edit LaTeX files and see the result as a PDF.
- Share a project with one more person as an editor or a viewer.
- Review the history of changes of each file, and import or export a whole project as a ZIP.

## My part: from LaTeX to PDF, safely

Compiling documents sent by users is risky, because a document can try to run things it should not.
My part was to make this safe and pleasant to use:

- **Isolated compilation:** each document is compiled inside a separate Docker container with limited time and resources, so it cannot touch the rest of the system.
- **Ctrl+S saves and compiles** in a single step, and the PDF appears right next to the code.
- **The last PDF is kept encrypted** and shown again when the project is reopened.
- **PDF viewer** with pages and zoom, and **ZIP import and export** of projects.

## Tech stack

Angular with TypeScript on the frontend, Java and Spring Boot with PostgreSQL on the backend, Docker
for the compilation sandbox, and automated tests on both sides.

---
publishDate: 2026-06-06T10:00:00Z
title: Asset Maintenance Management System
excerpt: A full-stack Laravel and React platform to manage physical assets and their maintenance, built by a team working under Scrum.
image: ~/assets/images/projects/agile-asset.svg
category: Projects
tags:
  - Laravel
  - PHP
  - React
  - Scrum
  - Agile
  - JWT
metadata:
  title: Asset Maintenance Management System — An Agile Team Project
  description: A full-stack Laravel and React system for managing assets, locations, suppliers and maintenance, built collaboratively under Scrum with its full set of ceremonies.
---

A full-stack platform to register physical assets and keep track of their maintenance over time, with
a Laravel API and a React interface. More than the product itself, this was the project where agile
delivery clicked for me.

<div class="not-prose flex flex-wrap gap-2 my-6">
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Scrum</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Agile</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Sprint Planning</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">User Stories</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Laravel</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">PHP</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">React</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">REST API</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">JWT Auth</span>
</div>

Organizations that own equipment and machinery tend to track it on scattered spreadsheets, where
maintenance history, replaced parts and who is responsible for what slowly get lost. When something
breaks, nobody can say when it was last serviced or which supplier handled it.

The platform answers that with a clear domain model: assets grouped by category and location,
suppliers and responsible staff, and maintenance records that capture their type, activities,
detailed steps and the components replaced along the way. A Laravel REST API with JWT authentication
exposes it all, and a React frontend turns it into management screens the team can actually use.

What made this project formative, though, was how it was built. The team worked in Scrum, breaking
the system into user stories and pulling them into sprints through sprint planning, syncing each
morning in a daily standup, and closing every cycle with a review and a retrospective that genuinely
changed how we worked next time.

That cadence is what stuck with me: planning honestly, surfacing blockers early in the daily, and
turning each retrospective into a real change for the next sprint. Working in that incremental,
transparent and self-correcting way is the lasting takeaway, more than any single feature we shipped.

## Tech stack

A Laravel and PHP backend exposing a REST API secured with JWT, over a relational database modeled
around assets, maintenance, suppliers and locations. The frontend is React with Vite. The real
backbone, though, was the agile process that held the teamwork together.

## Links

- **Source code:** [github.com/JosueGarciaAbata/agiles-proyecto](https://github.com/JosueGarciaAbata/agiles-proyecto)

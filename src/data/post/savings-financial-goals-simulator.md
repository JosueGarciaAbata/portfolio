---
publishDate: 2026-06-07T10:00:00Z
title: Savings & Financial Goals Simulator
excerpt: A full-stack Laravel and React app to plan savings goals, log contributions and track progress, designed and shipped end to end in a single overnight competition sprint.
image: ~/assets/images/projects/savings-goals.svg
category: Projects
tags:
  - Laravel
  - React
  - JWT
  - Material UI
  - PHP
  - Hackathon
metadata:
  title: Savings & Financial Goals Simulator — A Rapid Full-Stack Sprint
  description: A Laravel 12 and React app to set savings goals, register contributions, get automatic suggestions, flag at-risk goals and export PDF reports, built end to end under a tight competition deadline.
---

A web app to plan savings goals, log contributions, see progress and get nudged toward each target.
The catch is that it was designed and built end to end in a single overnight sprint for a
competition, from a blank repository to a working demo by the next morning.

<div class="not-prose flex flex-wrap gap-2 my-6">
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Rapid Delivery</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Hackathon</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Full Stack</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Laravel 12</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">React</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Material UI</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">JWT Auth</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">REST API</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">PDF Reports</span>
</div>

Setting a savings goal is easy; staying on track is the hard part. People lose sight of how close
they are, forget to keep contributing, and only notice a goal is slipping once it is too late to
catch up.

The app turns that into something tangible. Users create a goal with a target amount, category and
deadline, register their contributions, and watch a progress bar move while the system calculates how
close each goal is. On top of the basics it offers automatic weekly and monthly suggestions, flags
goals that have gone inactive or fallen behind, and exports a clean PDF report, all behind JWT
authentication on a Laravel REST API with a Material UI React frontend.

The real lesson, though, was the clock. Starting in the afternoon with a presentation the next
morning left no room to over-engineer, so the work became an exercise in scoping: deciding the
smallest version that still felt complete, splitting the frontend and backend so both could move in
parallel, and trimming ideas without breaking the demo. Shipping a secured, working full-stack
product under that pressure taught me to prioritize fast, stay organized and keep a clear head when
the deadline is real.

## Tech stack

A Laravel 12 REST API with JWT authentication and PDF report generation, a React frontend with
Material UI, and features like per-goal progress, automatic suggestions, and inactivity and at-risk
detection, all delivered within a single competition sprint.

## Links

- **Source code:** [github.com/JosueGarciaAbata/savings_financial_goals](https://github.com/JosueGarciaAbata/savings_financial_goals)

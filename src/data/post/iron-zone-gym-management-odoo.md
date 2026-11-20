---
publishDate: 2026-06-11T10:00:00Z
title: Iron Zone — Gym Management on Odoo
excerpt: A customized Odoo 18 platform that brings a gym's website, memberships and billing together into one system, deployed with Docker, Nginx and SSL.
image: ~/assets/images/projects/ironzone.png
category: Projects
tags:
  - Odoo
  - Python
  - XML
  - Docker
  - Nginx
metadata:
  title: Iron Zone — Gym Management Platform on Odoo 18
  description: A gym management solution built as a customized Odoo 18 ERP, with a subscriptions module for memberships and recurring billing, role and permission management, and a deployment with Docker, Nginx and Certbot SSL certificates.
---

<div class="not-prose flex flex-wrap gap-2 my-6">
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">Odoo 18</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">Python</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">XML Views</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">Docker</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">Nginx</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">Certbot</span>
</div>

## The problem

A gym juggles recurring memberships, payments, classes, training content and invoicing at once. With
scattered tools, that information drifts apart and the daily operation gets hard to control.

## The solution

Everything lives on a single Odoo 18 platform, adapted to the gym's workflow. Native apps are extended with
custom addons, so visitors browse plans and subscribe from the shop, and each order turns into recurring
billing.

## What I did

I developed the subscriptions module in Odoo, with Python and XML views.

It covers memberships and recurring billing.

I implemented role and permission management, with administrative views.

Access to each screen depends on the user's role.

I deployed the solution with Docker and continuous integration.

I configured Nginx and the SSL certificates with Certbot.

I fixed issues on the website and in the tests.

<div class="not-prose grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
  <figure class="m-0 md:col-span-2">
    <img src="/images/projects/ironzone/membership-plans.png" alt="Membership plans presented on the Iron Zone storefront" class="w-full rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-slate-700" loading="lazy" decoding="async" />
    <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-slate-400">Membership plans on the storefront.</figcaption>
  </figure>
</div>

## Links

- **Live app:** [iron-zone.stratiumhub.com](https://iron-zone.stratiumhub.com)
- **Source code:** [github.com/JoelBonillaG/iron_zone_odoo_das](https://github.com/JoelBonillaG/iron_zone_odoo_das)

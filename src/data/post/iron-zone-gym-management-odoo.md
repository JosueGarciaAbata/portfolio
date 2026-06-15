---
publishDate: 2026-06-11T10:00:00Z
title: Iron Zone — Gym Management on Odoo
excerpt: A customized Odoo 18 platform that brings a gym's website, online store, memberships, classes and billing together into one modular business system.
image: ~/assets/images/projects/ironzone.png
category: Projects
tags:
  - Odoo
  - Python
  - PostgreSQL
  - ERP Customization
  - Docker
  - XML Views
metadata:
  title: Iron Zone — Gym Management Platform on Odoo 18
  description: An end-to-end gym management solution built as a customized Odoo 18 ERP, with custom addons for memberships, online store, exercise guides, events, inventory and electronic invoicing.
---

Iron Zone is an end-to-end management platform for a gym and sports center, built as a customized
Odoo 18 solution. It pulls the public website, the online store, memberships, classes and billing
into a single system instead of a pile of disconnected tools.

<div class="not-prose flex flex-wrap gap-2 my-6">
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Odoo 18</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">ERP Customization</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Python</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">PostgreSQL</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Docker</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Modular Architecture</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">XML Views</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Access Control</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Business Workflows</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Membership Management</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Electronic Invoicing</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Gym Management</span>
</div>

A gym juggles recurring memberships and payments, a product catalog, class bookings, training
content, invoicing and local tax duties all at once, and with scattered tools that information drifts
apart and the daily operation gets hard to keep under control.

To bring it together, everything lives on a single Odoo 18 platform whose modular structure is
adapted to a specific gym workflow. Native apps for website, online store, sales, inventory, events
and accounting are extended with custom addons, so visitors browse plans and products, subscribe from
the shop, and each order turns into recurring billing and a valid electronic invoice.

Behind the storefront, custom modules model memberships and subscriptions, an exercise guide catalog
with machines and categories, an inventory layer, a task dashboard and a refreshed backend theme,
while customers, trainers, events, sales orders and invoices are managed from clean administrative
views with role based permissions. The whole stack runs on Docker with PostgreSQL, seeded with
realistic demo data and kept in check by a continuous integration pipeline.

## Functional highlights

<div class="not-prose grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">11</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">Custom addons</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">Six Iron Zone modules and five invoicing and localization addons.</div>
  </div>
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">Modular</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">Architecture</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">Website, store, subscriptions, inventory, tasks and guides.</div>
  </div>
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">Plans</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">Recurring billing</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">Memberships and periodic invoicing through custom subscriptions.</div>
  </div>
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">Store + portal</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">Online sales</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">Public shop, checkout and a client portal for orders and invoices.</div>
  </div>
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">4 roles</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">Access control</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">Visitor, portal client, trainer and administrator permissions.</div>
  </div>
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">Invoicing</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">Electronic invoicing</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">Electronic vouchers, signing, withholdings and tax reports.</div>
  </div>
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">Docker</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">Local stack</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">Odoo 18 and PostgreSQL 15 wired with Docker Compose.</div>
  </div>
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">CI</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">Automated checks</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">Manifests, views and Python validated on every change.</div>
  </div>
</div>

## Gallery

<div class="not-prose grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
  <figure class="m-0">
    <img src="/images/projects/ironzone/website-home.png" alt="Iron Zone public website home page built on Odoo" class="w-full rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-slate-700" loading="lazy" decoding="async" />
    <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-slate-400">Public website with a custom Iron Zone theme.</figcaption>
  </figure>
  <figure class="m-0">
    <img src="/images/projects/ironzone/membership-plans.png" alt="Membership plans presented on the Iron Zone storefront" class="w-full rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-slate-700" loading="lazy" decoding="async" />
    <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-slate-400">Membership plans on the storefront.</figcaption>
  </figure>
  <figure class="m-0">
    <img src="/images/projects/ironzone/exercise-guides.png" alt="Exercise guide catalog managed from the Odoo backend" class="w-full rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-slate-700" loading="lazy" decoding="async" />
    <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-slate-400">Exercise guide catalog in the backend.</figcaption>
  </figure>
  <figure class="m-0">
    <img src="/images/projects/ironzone/events-classes.png" alt="Classes and events organized on a scheduling board in Odoo" class="w-full rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-slate-700" loading="lazy" decoding="async" />
    <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-slate-400">Classes and events on a scheduling board.</figcaption>
  </figure>
  <figure class="m-0">
    <img src="/images/projects/ironzone/employees.png" alt="Staff and trainers managed across departments in Odoo" class="w-full rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-slate-700" loading="lazy" decoding="async" />
    <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-slate-400">Staff and trainers across departments.</figcaption>
  </figure>
  <figure class="m-0">
    <img src="/images/projects/ironzone/invoicing-sri.png" alt="Customer invoicing form with the electronic invoicing tab in Odoo" class="w-full rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-slate-700" loading="lazy" decoding="async" />
    <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-slate-400">Customer invoicing inside the ERP.</figcaption>
  </figure>
</div>

## Tech stack

Built on Odoo 18 with Python, its ORM and QWeb templating, backed by PostgreSQL 15 and packaged with
Docker Compose. Demo data is loaded over XML-RPC, payments can be tested through Stripe, end to end
flows are exercised with Playwright, and GitHub Actions keeps manifests, XML and code validated.

## Links

- **Live app:** [iron-zone.stratiumhub.com](https://iron-zone.stratiumhub.com)
- **Source code:** [github.com/JoelBonillaG/iron_zone_odoo_das](https://github.com/JoelBonillaG/iron_zone_odoo_das)
  </content>

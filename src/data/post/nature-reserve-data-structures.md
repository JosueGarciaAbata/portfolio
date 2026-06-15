---
publishDate: 2026-06-04T10:00:00Z
title: Nature Reserve Manager
excerpt: A Java application to manage a nature reserve, built on a generic linked list written from scratch with its own iterator and a criteria-based search abstraction.
image: ~/assets/images/projects/data-structures.svg
category: Projects
tags:
  - Java
  - Data Structures
  - Linked List
  - Generics
  - OOP
  - Algorithms
metadata:
  title: Nature Reserve Manager — Data Structures From Scratch
  description: A Java console application that manages areas, rangers, visitors, visits and incidents on top of a generic linked list implemented from scratch, with a custom iterator and a criteria-based search and filter abstraction.
---

A Java application that manages a nature reserve, its protected areas, park rangers, visitors, visits
and incidents, all stored in a generic linked list written by hand. This was the project where data
structures stopped being theory.

<div class="not-prose flex flex-wrap gap-2 my-6">
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Data Structures</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Linked List</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Generics</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Iterator Pattern</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">OOP</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Algorithms</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Java</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Search and Filter</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Complexity</span>
</div>

Running a nature reserve means keeping track of growing collections that all relate to each other:
the protected areas, the rangers assigned to them, the visitors who come in, the visits they make and
the incidents that occur along the way. The real challenge is querying those collections by every
condition the staff might ask for.

The application models that domain in Java and stores every collection in a generic linked list built
from the ground up. Nodes chain together to hold any type, the list exposes its own iterator so it
plugs straight into Java's for-each loops, and a small criteria abstraction lets the same list be
searched, filtered and queried over time intervals without reaching for the standard library.

Writing the node, the list, the iterator and each operation by hand, from insertion and removal to
indexed access and search, is what made the cost of every operation tangible rather than abstract.
And reaching for a reusable criteria predicate instead of copying the same loop over and over was an
early, lasting lesson in clean abstractions and how the collections I now use every day actually work
inside.

## Tech stack

Java with a generic linked list and a custom iterator implemented from scratch, a criteria-based
predicate for searching and filtering, and an object-oriented domain model for the reserve, its areas,
rangers, visitors, visits and incidents.

## Links

- **Source code:** [github.com/JosueGarciaAbata/proyecto-edd](https://github.com/JosueGarciaAbata/proyecto-edd)

---
publishDate: 2026-06-05T10:00:00Z
title: Creative Portfolio Platform
excerpt: A web platform where users publish and discover creative portfolios, built from scratch with PHP, MySQL and vanilla JavaScript, HTML and CSS.
image: ~/assets/images/projects/web-fundamentals.svg
category: Projects
tags:
  - PHP
  - MySQL
  - JavaScript
  - HTML
  - CSS
  - Web Fundamentals
metadata:
  title: Creative Portfolio Platform — Web Fundamentals From Scratch
  description: A PHP and MySQL web platform with user accounts, portfolios, a discover feed and comments, built without frameworks to learn the foundations of web development.
---

A web platform where people publish their creative portfolios, browse what others are sharing and
comment on it. Built from scratch without frameworks, this was the project where the foundations of
web development came together for me.

<div class="not-prose flex flex-wrap gap-2 my-6">
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Web Fundamentals</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">HTML</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">CSS</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">JavaScript</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">PHP</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">MySQL</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Authentication</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">CRUD</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Sessions</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">No Frameworks</span>
</div>

Someone with creative work needs a simple place to put it online: a profile, a few projects, and a
way for others to find it and react. Doing that properly still means handling accounts, storing data,
uploading images and moderating comments, even when the idea sounds small.

The platform covers that end to end. Visitors register and log in, recover a forgotten password by
email, build their own portfolio of projects, browse a discover feed filtered by interest, and leave
comments that owners can manage. A PHP backend talks to a MySQL database, while the pages themselves
are plain HTML, CSS and JavaScript.

What made it valuable was building all of that without a framework. Writing the HTML structure,
styling it by hand, wiring interactivity with vanilla JavaScript, and having PHP process forms,
manage sessions and run the SQL queries underneath made the request and response cycle concrete. It
is the groundwork that every framework I use today quietly abstracts away.

## Tech stack

Plain HTML, CSS and JavaScript on the front, a PHP backend over a MySQL database, with authentication,
password recovery by email, file uploads and comment management, all written without a framework.

## Links

- **Source code:** [github.com/JosueGarciaAbata/proyecto-mds](https://github.com/JosueGarciaAbata/proyecto-mds)

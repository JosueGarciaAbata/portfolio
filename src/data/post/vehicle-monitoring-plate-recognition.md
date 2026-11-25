---
publishDate: 2026-06-14T10:00:00Z
title: License Plate Recognition and Vehicle Monitoring
excerpt: A computer vision system that reads license plates, estimates vehicle speed for an operator to review.
image: ~/assets/images/projects/plate-ocr.png
category: Projects
tags:
  - Python
  - Computer Vision
  - YOLOv11
  - PyTorch
  - FastAPI
metadata:
  title: License Plate Recognition and Vehicle Monitoring 
  description: A computer vision pipeline that detects plates with YOLOv11, segments characters with U-Net, estimates speed with virtual lines, integrated into a FastAPI web monitoring application.
---

<div class="not-prose flex flex-wrap gap-2 my-6">
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">Python</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">YOLOv11</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">U-Net</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">PyTorch</span>
  <span class="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-700 text-muted dark:text-slate-300 px-3 py-0.5 text-sm font-medium">FastAPI</span>
</div>

## The problem

Inside a campus or private premises, identifying vehicles and keeping their speed in check usually falls on
a person watching and writing things down. It is slow, subjective and leaves no clean record.

## The solution

One continuous vision pipeline. A detector locates the plate, the characters are segmented and read, and
the result is validated against the Ecuadorian plate format. Two virtual lines on the frame measure the
speed.

## What I did

I developed license plate detection with YOLOv11.

I added the character segmentation with U-Net.

I post-processed the OCR to discard false characters, such as screws and spurious regions.

I implemented speed estimation with virtual lines.

I integrated the flow into a FastAPI web monitoring application.

I evaluated it on 74 real vehicles.

<div class="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">94.59%</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">Full-plate accuracy</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">70 of 74 vehicles read correctly, where one wrong character invalidates the plate.</div>
  </div>
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">96.13%</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">Detector mAP50</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">Plate detection with YOLOv11.</div>
  </div>
</div>

<div class="not-prose grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
  <figure class="m-0 md:col-span-2">
    <img src="/images/projects/plate-ocr/cv-pipeline.png" alt="Computer vision process replay: detection, segmentation and per-character recognition of a plate" class="w-full rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-slate-700" loading="lazy" decoding="async" />
    <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-slate-400">Replay of the detection, segmentation and per-character recognition of a plate.</figcaption>
  </figure>
</div>

## Links

- **Source code:** [github.com/JoelBonillaG/Plate_Detection_Segmentation_OCR](https://github.com/JoelBonillaG/Plate_Detection_Segmentation_OCR)

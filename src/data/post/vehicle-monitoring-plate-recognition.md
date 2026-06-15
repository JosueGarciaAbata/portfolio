---
publishDate: 2026-06-14T10:00:00Z
title: Vehicle Monitoring with License Plate Recognition
excerpt: An end-to-end computer vision system that detects vehicles, reads their license plate, estimates speed and turns it into a graded, explainable sanction with a Mamdani fuzzy engine.
image: ~/assets/images/projects/plate-ocr.png
category: Projects
tags:
  - Python
  - Computer Vision
  - Deep Learning
  - YOLOv11
  - PyTorch
  - FastAPI
metadata:
  title: Vehicle Monitoring with License Plate Recognition and Fuzzy Decision Support
  description: A computer vision pipeline that detects plates with YOLOv11n, segments characters with U-Net, classifies them with a CNN, estimates speed and suggests graded penalties with a Mamdani fuzzy inference system, wrapped in a full-stack web monitoring app.
---

An end-to-end computer vision system for vehicle monitoring inside institutional premises. From a
single camera it detects each car, reads its license plate, estimates speed, and turns those raw
measurements into a graded, explainable sanction an operator can review.

<div class="not-prose flex flex-wrap gap-2 my-6">
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Computer Vision</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Deep Learning</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">YOLOv11</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">U-Net Segmentation</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">CNN</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">OCR / ALPR</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Mamdani Fuzzy Logic</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">PyTorch</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">TensorFlow / Keras</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">FastAPI</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">PostgreSQL</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">React</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Real-time Video</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Decision Support</span>
</div>

Inside a campus or private premises, identifying vehicles and keeping their speed in check usually
falls on a person watching and writing things down. That is slow, subjective and inconsistent, and
it rarely leaves a clean record to follow up on.

To address this, the whole task is handled by one continuous vision pipeline. A YOLOv11n detector
locates the plate, a U-Net separates the characters, a convolutional network classifies each one,
and a validation step enforces the Ecuadorian plate format to drop incomplete reads. In parallel,
two virtual lines on the frame measure the crossing time of the car and turn it into speed.

On top of that reading sits a Mamdani fuzzy inference system that weighs how far over the limit the
car went and how often that plate has offended before, producing a severity level and a suggested
penalty in plain language rather than a rigid yes or no. Every event is stored, streamed live, and
surfaced in a dashboard where the operator confirms or rejects each case.

The result spans the full stack: trained vision models with their own data pipelines, a FastAPI
service exposing REST, WebSocket and live video streaming, a PostgreSQL event store, and a React
operator interface that replays the detection, segmentation and per-character recognition behind
every plate.

## Key results

<div class="not-prose grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">94.59%</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">Full-plate accuracy</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">Complete plate read correctly across 74 real vehicles.</div>
  </div>
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">96.13%</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">Detection mAP50</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">YOLOv11n plate detector on the held-out test set.</div>
  </div>
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">91.42%</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">Character accuracy</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">CNN classifier over 5,877 test character crops.</div>
  </div>
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">98.80%</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">Detection precision</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">Almost every detected region was a real plate.</div>
  </div>
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">3 networks</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">Deep learning stack</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">YOLOv11n detection, U-Net segmentation and CNN classification.</div>
  </div>
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">109,238</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">Character samples</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">Labeled crops used to train and test the classifier.</div>
  </div>
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">92.89%</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">Mean confidence</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">Average classifier confidence across recognized plates.</div>
  </div>
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">60 fps</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">Capture rate</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">1080p video sampled densely to track fast crossings.</div>
  </div>
</div>

### Integrated pipeline on real vehicles

Evaluated live on 74 vehicles, where a single wrong character invalidates the whole plate.

| Indicator                  | Value    |
| -------------------------- | -------- |
| Vehicles evaluated         | 74       |
| Correct reads              | 70       |
| Incorrect reads            | 4        |
| Accuracy                   | 94.59%   |
| Error                      | 5.41%    |
| Mean classifier confidence | 92.89%   |
| Character appearances      | 510      |
| Character classes emitted  | 33 of 36 |

### Individual model performance

| Stage                          | Result                                              |
| ------------------------------ | --------------------------------------------------- |
| Plate detection (YOLOv11n)     | Precision 98.80%, recall 93.46%, mAP50 96.13%       |
| Character classification (CNN) | 91.42% accuracy over 5,877 crops, 504 misclassified |
| Full pipeline (74 vehicles)    | 94.59% full-plate accuracy, 92.89% mean confidence  |

### Datasets

| Purpose                  | Train  | Validation | Test  | Total   |
| ------------------------ | ------ | ---------- | ----- | ------- |
| Plate detection          | 98,798 | 2,048      | 1,020 | 101,866 |
| Character segmentation   | 10,813 | 344        | 797   | 11,954  |
| Character classification | 87,242 | 16,119     | 5,877 | 109,238 |

### Models and configuration

| Component         | Setup                                                                               |
| ----------------- | ----------------------------------------------------------------------------------- |
| Plate detector    | YOLOv11n, single class, 416 px input, confidence 0.25, 0.08 crop margin             |
| Char segmentation | U-Net, 96 × 256 grayscale input, weighted BCE plus Dice loss, Adam, 50 epochs       |
| Char classifier   | CNN, 64 × 64 input, focal loss, GlobalAveragePooling, Adam, 60 epochs, 36 classes   |
| Speed estimation  | Two calibrated virtual lines about 5 m apart, plate tracking on 60 fps video        |
| Fuzzy decision    | Mamdani engine, speed excess and recidivism inputs, triangular and trapezoidal sets |

## Gallery

<div class="not-prose grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
  <figure class="m-0">
    <img src="/images/projects/plate-ocr/cv-pipeline.png" alt="Computer vision process replay: detection, segmentation and per-character recognition of a plate" class="w-full rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-slate-700" loading="lazy" decoding="async" />
    <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-slate-400">Detection, segmentation and per-character recognition behind one plate.</figcaption>
  </figure>
  <figure class="m-0">
    <img src="/images/projects/plate-ocr/dashboard-live.png" alt="Live monitoring dashboard with the camera feed and a real-time event list" class="w-full rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-slate-700" loading="lazy" decoding="async" />
    <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-slate-400">Live camera feed with events streaming in real time.</figcaption>
  </figure>
  <figure class="m-0">
    <img src="/images/projects/plate-ocr/event-detail.png" alt="Event detail with plate, speed, risk and suggested sanction" class="w-full rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-slate-700" loading="lazy" decoding="async" />
    <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-slate-400">Event detail with plate, speed and suggested sanction.</figcaption>
  </figure>
  <figure class="m-0">
    <img src="/images/projects/plate-ocr/fuzzy-mamdani.png" alt="Mamdani fuzzy inference view explaining the suggested penalty" class="w-full rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-slate-700" loading="lazy" decoding="async" />
    <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-slate-400">Mamdani fuzzy reasoning behind each penalty decision.</figcaption>
  </figure>
</div>

## Tech stack

Built in Python with Ultralytics YOLO, PyTorch and TensorFlow with Keras for the models, OpenCV for
capture and preprocessing, and NumPy with scikit-learn for evaluation. The application layer runs on
FastAPI with WebSocket and live MJPEG streaming, a PostgreSQL database and a React operator
interface, packaged with Docker.

## Links

- **Source code:** [github.com/JoelBonillaG/Plate_Detection_Segmentation_OCR](https://github.com/JoelBonillaG/Plate_Detection_Segmentation_OCR)
  </content>

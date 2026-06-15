---
publishDate: 2026-06-13T10:00:00Z
title: Digital Image Processing Pipeline
excerpt: An interactive desktop app that walks the full image processing pipeline, from a raw photo to detected regions, with every filter built from scratch instead of handed to a library.
image: ~/assets/images/projects/image-processing.png
category: Projects
tags:
  - Python
  - Computer Vision
  - Image Processing
  - NumPy
  - FFT
  - Desktop GUI
metadata:
  title: Digital Image Processing Pipeline — Filters Built From Scratch
  description: An interactive desktop application that implements a full digital image processing pipeline (smoothing, sharpening, thresholding, edge detection and region extraction) with hand-written 2D convolution and Fourier transforms.
---

An interactive desktop app that walks through the full digital image processing pipeline, from a raw
photo to the detected and cropped regions of interest it contains. Every filter is implemented from
scratch, so the point is not to apply a filter but to see what it does on the inside.

<div class="not-prose flex flex-wrap gap-2 my-6">
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Image Processing</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Computer Vision</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Spatial Filters</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Frequency Domain</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">FFT</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Convolution from Scratch</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Edge Detection</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Connected Components</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">NumPy</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">OpenCV</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Desktop App</span>
</div>

Turning a photo into usable objects or characters is not a single step but a chain of decisions:
sensor noise degrades the signal, edges blend into the background, a poorly chosen threshold erases
information, and an unfiltered region detector returns hundreds of useless boxes. In most tools that
whole process is a black box, which makes it hard to understand and harder to learn from.

To open that black box, each stage becomes an interactive panel that shows the input, the output and,
where it applies, the frequency spectrum. The pipeline is linear, so changing a parameter upstream
recalculates everything downstream, and a noise slider or a mask size ripples through smoothing,
sharpening, thresholding, edge detection and region cropping in real time.

Underneath, the 2D convolution and the centered Fourier transform are written by hand, and every
smoothing and sharpening operation exists in both spatial and frequency form so the same effect can
be compared from two angles, which is what makes the ringing of an ideal filter visible next to a
smoother Butterworth. Classic edge operators run side by side, and connected components are labeled
with a custom pixel traversal rather than a library call.

Heavy filtering runs off the UI thread so the window stays responsive even on large images, and the
final stage extracts each detected region, orders it left to right and normalizes it into a
fixed-size crop, ready to feed a classifier. It is, in effect, the transparent groundwork behind a
plate or character recognition system.

## What's inside

<div class="not-prose grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">7 stages</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">Full pipeline</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">Grayscale, noise, smoothing, sharpening, threshold, gradient and regions.</div>
  </div>
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">From scratch</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">Convolution and FFT</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">2D convolution and a centered Fourier transform written by hand.</div>
  </div>
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">Dual domain</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">Spatial and frequency</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">Every smoothing and sharpening filter in both domains.</div>
  </div>
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">6 operators</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">Edge detection</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">Roberts, Prewitt, Sobel, Kirsch, Frei-Chen and a frequency derivative.</div>
  </div>
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">Reactive</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">Cascade recompute</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">Changing one parameter updates only what comes after it.</div>
  </div>
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">Threaded</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">Responsive UI</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">Filters run off the UI thread so the window never freezes.</div>
  </div>
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">Own labeling</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">Connected components</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">Custom connected-pixel traversal instead of a library call.</div>
  </div>
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">64 × 64</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">Classifier-ready crops</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">Detected regions normalized to a fixed size for a downstream model.</div>
  </div>
</div>

## Gallery

<div class="not-prose grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
  <figure class="m-0">
    <img src="/images/projects/image-processing/edges-regions.png" alt="Edge detection output and detected region bounding boxes over a license plate" class="w-full rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-slate-700" loading="lazy" decoding="async" />
    <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-slate-400">Edge detection and region bounding boxes.</figcaption>
  </figure>
  <figure class="m-0">
    <img src="/images/projects/image-processing/preprocessing-smoothing.png" alt="Preprocessing stages and a smoothing filter comparing noisy input to clean output" class="w-full rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-slate-700" loading="lazy" decoding="async" />
    <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-slate-400">Preprocessing and smoothing, input next to output.</figcaption>
  </figure>
  <figure class="m-0">
    <img src="/images/projects/image-processing/sharpening-binarization.png" alt="Sharpening filter and adjustable threshold binarization" class="w-full rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-slate-700" loading="lazy" decoding="async" />
    <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-slate-400">Sharpening and real-time threshold binarization.</figcaption>
  </figure>
  <figure class="m-0">
    <img src="/images/projects/image-processing/character-crops.png" alt="Normalized character crops extracted from the detected regions" class="w-full rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-slate-700" loading="lazy" decoding="async" />
    <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-slate-400">Normalized character crops, ready for a classifier.</figcaption>
  </figure>
</div>

## Tech stack

Written in Python with NumPy for the numerical core, OpenCV for image loading and basic operations,
Pillow for display, and customtkinter for the desktop interface. The convolution engine and the
Fourier pipeline are hand-built, with filtering pushed onto background threads to keep the UI fluid.

## Links

- **Source code:** [github.com/JoelBonillaG/smoothing-filters](https://github.com/JoelBonillaG/smoothing-filters)
  </content>

---
publishDate: 2026-06-12T10:00:00Z
title: Fuzzy-Genetic Maternal Risk Assessment
excerpt: Explainable clinical decision-support system that classifies maternal risk into three levels using a Mamdani fuzzy engine whose rule base is learned automatically with a genetic algorithm.
image: ~/assets/images/projects/maternal.png
category: Projects
tags:
  - Python
  - FastAPI
  - React
  - Fuzzy Logic
  - Genetic Algorithms
  - Explainable AI
metadata:
  title: Fuzzy-Genetic Maternal Risk Assessment — Explainable Clinical Decision Support
  description: A Mamdani fuzzy decision-support system for maternal risk classification, with rule bases learned by a binary Michigan genetic algorithm and benchmarked against RIPPER and PRISM under the same fuzzy engine.
---

An explainable decision-support system that reads six routine vital signs and estimates whether a
pregnancy is at low, mid, or high risk. It is built so that every prediction can be opened up and
read back, line by line, instead of arriving as a number nobody can question.

<div class="not-prose flex flex-wrap gap-2 my-6">
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Fuzzy Logic</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Genetic Algorithms</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Mamdani Inference</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Hybrid AI</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Explainable AI</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Model Evaluation</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Medical Decision Support</span>
  <span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200 dark:ring-slate-700 px-3 py-1 text-sm font-medium">Risk Assessment</span>
</div>

Many maternal complications show up early in routine vital signs, yet catching them in time takes a
clinical judgement that is often missing where it matters most: rural clinics, check-ups run by
non-specialist staff, busy consultations. Risk rarely lives in a single value either, since a
slightly off reading becomes serious only when it lines up with the rest of the picture.

And in obstetrics the answer has to support a real decision, so a black box that just outputs a label
is not enough. Staff need to see why a risk level was suggested before acting on it, which means the
system has to reason in soft clinical terms and stay auditable at the same time.

To address this, the project reframes risk estimation as a transparent fuzzy decision-support
problem. Each vital sign is modelled with trapezoidal membership curves that map raw numbers into
clinical language, so a borderline pressure can belong partly to normal and partly to elevated
instead of flipping at a hard threshold.

From there a Mamdani inference engine fuzzifies the six inputs, fires the matching rules, aggregates
them by risk class and defuzzifies the result into a single score from 0 to 100, which is then turned
into low, mid, or high risk. When nothing fires, the case is flagged as unclassified rather than
guessed, so coverage gaps stay visible instead of being hidden.

The harder part is where the rules come from. Rather than writing them by hand, the system learns
them with a binary Michigan genetic algorithm, where each individual encodes one fuzzy rule and the
evolving population behaves as a candidate rule base. The same rules are also generated with RIPPER
and PRISM and scored inside the identical engine, so the comparison between approaches is honest.

All of this is wired into an explainable React interface: a clinician moves a slider per variable,
watches the membership curves react, runs the inference and gets back the risk level, the final
score and the exact rules and indicators that produced it. The whole loop, from fuzzy inference and
rule evolution to model evaluation and the visual explanation of each result, is part of the system.

## Key results

<div class="not-prose grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">0.5664</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">Final accuracy</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">Best configuration on the 738-case evaluation sample.</div>
  </div>
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">0.5629</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">Balanced accuracy</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">Main metric, fair across the three risk classes.</div>
  </div>
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">1,012</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">Instances evaluated</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">After dropping 2 physiologically infeasible records from 1,014.</div>
  </div>
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">6</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">Clinical variables</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">Age, systolic and diastolic pressure, glucose, temperature, heart rate.</div>
  </div>
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">8,640</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">Candidate rules</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">Full fuzzy rule space the search had to explore.</div>
  </div>
  <div class="rounded-xl bg-gray-50 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 p-4">
    <div class="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight break-words">159</div>
    <div class="text-sm font-medium mt-1 dark:text-slate-200">Clean rule base</div>
    <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">Trimmed from 368 after dropping 209 duplicate rules.</div>
  </div>
</div>

### Dataset at a glance

Public Maternal Health Risk Data Set from the UCI repository, gathered through IoT devices in rural
hospitals and clinics. The risk score is cut into labels at 39.92 and 73.12, derived from the class
distribution with 95% Wilson intervals.

| Class     | Records | Notes                                   |
| --------- | ------- | --------------------------------------- |
| Low risk  | 406     | Used to set the lower cut point (39.92) |
| Mid risk  | 336     | Used to set the upper cut point (73.12) |
| High risk | 272     | Everything above the upper cut point    |

### Comparing rule generators (20 runs)

Average over 20 independent runs. The genetic algorithm comes out ahead on both accuracy and
balanced accuracy.

| Method             | Accuracy        | Balanced accuracy | Balanced error  |
| ------------------ | --------------- | ----------------- | --------------- |
| Binary Michigan GA | 0.4937 ± 0.0223 | 0.5033 ± 0.0164   | 0.4967 ± 0.0164 |
| RIPPER             | 0.3876 ± 0.0407 | 0.3876 ± 0.0391   | 0.6124 ± 0.0391 |
| PRISM              | 0.0308 ± 0.0113 | 0.0338 ± 0.0098   | 0.9662 ± 0.0098 |

### Cleaned rule bases

Removing duplicates, then scoring the best base of each method inside the same engine.

| Method             | Initial rules | Clean rules | Accuracy | Balanced accuracy | No activation |
| ------------------ | ------------- | ----------- | -------- | ----------------- | ------------- |
| Binary Michigan GA | 368           | 159         | 0.5366   | 0.5397            | 27            |
| RIPPER             | 38            | 35          | 0.4723   | 0.4738            | 318           |
| PRISM              | 5             | 5           | 0.0573   | 0.0557            | 946           |

### Final system on the 738-case sample

Adding RIPPER as a support base covers the cases the evolved base leaves open, lifting accuracy and
balanced accuracy while dropping unclassified cases to zero.

| Configuration        | GA rules | Support rules | Accuracy | Balanced accuracy | No activation |
| -------------------- | -------- | ------------- | -------- | ----------------- | ------------- |
| Clean Michigan GA    | 159      | 0             | 0.5366   | 0.5380            | 22            |
| Michigan GA + RIPPER | 159      | 141           | 0.5664   | 0.5629            | 0             |

### Expert-validated cases

Five real profiles reviewed by health experts. In every case the category returned by the system was
considered correct.

| Age | Systolic | Diastolic | Glucose | Temp (°F) | Heart rate | Risk   | Score |
| --- | -------- | --------- | ------- | --------- | ---------- | ------ | ----- |
| 41  | 141      | 86        | 7.3     | 36.0      | 80         | Medium | 56.4  |
| 24  | 121      | 83        | 6.4     | 36.2      | 75         | Medium | 48.9  |
| 18  | 123      | 78        | 6.1     | 36.5      | 78         | Low    | 38.0  |
| 35  | 151      | 83        | 8.1     | 37.2      | 84         | High   | 86.4  |
| 36  | 127      | 84        | 11.9    | 36.0      | 85         | High   | 86.2  |

### Search space and tuning

The values that shaped the experiment, kept here so the results can be reproduced.

| Setting                 | Value                                                            |
| ----------------------- | ---------------------------------------------------------------- |
| Antecedent combinations | 4 × 5 × 4 × 3 × 4 × 3 = 2,880                                    |
| Candidate rule space    | 2,880 × 3 = 8,640                                                |
| Chromosome              | 21 bits — 6 antecedents × 3 bits + 3-bit consequent              |
| GA population / parents | 368 rules / 120 parents per generation                           |
| Selection               | Tournament (size 5), elitism 12                                  |
| Crossover / mutation    | 0.90 / 0.05                                                      |
| Generations / patience  | 1,500 max / 1,000 without improvement                            |
| Fitness                 | 0.45·Q + 0.35·A − 0.15·C − 0.005·D                               |
| RIPPER                  | optimization rounds 2, description tolerance 64                  |
| PRISM                   | bootstrap 0.75, min coverage 2, ≤ 6 conditions, ≤ 40 rules/class |
| Evaluation sample       | 738 cases, sized with a Hoeffding bound (95% confidence)         |

## Gallery

<div class="not-prose grid grid-cols-1 gap-6 my-8">
  <figure class="m-0">
    <img src="/images/projects/maternal/clinical-input.png" alt="Clinical input screen with membership curves and sliders for the six patient variables" class="w-full rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-slate-700" loading="lazy" decoding="async" />
    <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-slate-400">Set each vital sign with a slider and watch its curves move.</figcaption>
  </figure>
  <figure class="m-0">
    <img src="/images/projects/maternal/inference-result.png" alt="Inference result showing risk level, final score and the rules behind the decision" class="w-full rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-slate-700" loading="lazy" decoding="async" />
    <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-slate-400">Risk level, score, and the reasons behind it.</figcaption>
  </figure>
  <figure class="m-0">
    <img src="/images/projects/maternal/membership-rules.png" alt="Fuzzy inference detail with trapezoidal membership functions and the active rule base" class="w-full rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-slate-700" loading="lazy" decoding="async" />
    <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-slate-400">A look inside: membership curves and the rules in play.</figcaption>
  </figure>
</div>

## Tech stack

Python, FastAPI and Pydantic on the backend, with NumPy, pandas and scikit-learn, scikit-fuzzy for
the Mamdani engine, PyGAD for the genetic algorithm and wittgenstein for RIPPER. The frontend is
React, Vite and TypeScript with Tailwind CSS, Apache ECharts for the curves, plus Framer Motion and
Lucide. Shipping runs on GitHub Actions into Nginx and systemd on a VPS.

## Honest take

The final balanced accuracy of 0.5629 is moderate, and that is owned openly. With only six variables,
three broad risk labels and a single public dataset, the boundary between levels stays genuinely
fuzzy even for similar profiles. The natural next steps are testing on more datasets and checking how
stable the learned rules remain when the fuzzy ranges and search parameters change.

## Links

- **Live app:** [med-maternal-risk.stratiumhub.com](https://med-maternal-risk.stratiumhub.com)
- **Source code:** [github.com/JoelBonillaG/Fuzzy-Genetic-Maternal-Risk-Assessment](https://github.com/JoelBonillaG/Fuzzy-Genetic-Maternal-Risk-Assessment)
  </content>

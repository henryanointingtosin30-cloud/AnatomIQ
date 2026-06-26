# AnatomIQ — 300L Anatomy CBT Prep

[![License](https://img.shields.io/badge/license-Proprietary-blue.svg)](LICENSE)
[![Firebase](https://img.shields.io/badge/Firebase-Firestore-orange.svg)](https://firebase.google.com)
[![PWA](https://img.shields.io/badge/type-PWA-green.svg)](https://web.dev/progressive-web-apps/)

> A Progressive Web App for Computer-Based Testing (CBT) preparation, designed specifically for 300L Anatomy students.

**Copyright © 2026 AnatomIQ by Henry Anointing Tosin. All rights reserved.**  
Licensed for Medical Education use only. See [LICENSE](LICENSE) for details.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [License](#license)

---

## Overview

AnatomIQ is a single-page PWA that simulates real CBT exam conditions for medical anatomy students. It supports multiple academic levels (100L, 200L, 300L) with over **2,820 questions** organized by semester and course.

**Live Demo**: *https://anatom-iq-sigma.vercel.app/*  
**Supported IDs**: U23AN1001 — U24AN2009

---

## Features

### For Students
- 🔐 **Secure Login** — Student ID + State of Origin authentication
- 📚 **Multi-Level Banks** — 300L (1,520), 200L (700), 100L (600) questions
- ⏱️ **Real Exam Timer** — Color-coded countdown (green → amber → red)
- 🚩 **Question Flagging** — Mark tricky questions for review
- 📊 **Performance Analytics** — Score circles, stats breakdown, detailed review
- 💾 **Offline Support** — Firebase-powered offline capability

### For Admins
- ➕ **Add/Edit Questions** — Built-in question management panel
- 📤 **Bulk Upload** — Import questions via formatted text
- 📈 **Analytics Dashboard** — Track student performance

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | HTML5, CSS3, Vanilla JavaScript |
| **Backend** | Firebase Firestore |
| **Auth** | Firebase Auth (custom) |
| **PWA** | Web App Manifest, Service Worker |
| **Styling** | CSS Custom Properties, Flexbox, CSS Grid |
| **Icons** | Inline SVG |

---

## Getting Started

### Pre-requisites

- A modern web browser (Chrome 90+, Firefox 88+, Safari 14+)
- A Firebase project (free tier works)
- A static web host (Firebase Hosting, Netlify, Vercel, GitHub Pages)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/henryanointingtosin30-cloud/anatomiq.git
   cd anatomiq

## License

**Proprietary Software**

AnatomIQ v1.0  
Copyright © 2026 Henry Anointing Tosin. All rights reserved.

This software is licensed exclusively for medical education use.  
Unauthorized distribution, modification, or commercial use is strictly prohibited.

# 🕵️‍♂️ Leviii — Sherlock Writeups (Blue Team & DFIR)

A professional cybersecurity blog dedicated to **Hack The Box Sherlock** writeups, with a strong focus on **Digital Forensics and Incident Response (DFIR)** and  **Blue Team operations** .

🌐 **Live Site:** [https://cap-levi.github.io](https://cap-levi.github.io)

---

## 🎯 About This Project

This blog documents my hands-on journey through  **Hack The Box Sherlock challenges** , simulating real-world incident response and forensic investigations.

Primary focus areas include:

* **Digital Forensics & Incident Response (DFIR)**
* **Threat Detection & Log Analysis**
* **SIEM Operations & Threat Hunting**
* **Blue Team Methodologies**

📊 **Progress:** **49 / 128 Sherlocks Completed**

---

## 📁 Project Structure

<pre class="overflow-visible! px-0!" data-start="1039" data-end="1571"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(--spacing(9)+var(--header-height))] @w-xl/main:top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre!"><span><span>├── app/
│   ├── page.tsx              </span><span># Homepage</span><span>
│   ├── writeups/
│   │   └── page.tsx          </span><span># Writeups page with sidebar navigation</span><span>
│   ├── layout.tsx            </span><span># Root layout</span><span>
│   └── globals.css           </span><span># Global styles (green/black hacker theme)</span><span>
├── </span><span>public</span><span>/
│   ├── writeups/             </span><span># Markdown-based Sherlock writeups</span><span>
│   │   └── *.md
	└── index.json	      </span><span># Manages the Writeup tags, contains writeup ID's and tags for feching the *.md of your respective writeup</span><span>
│   └── assets/
│       └── images/
│           └── sherlock-image/
├── README.md
└── package.json
</span></span></code></div></div></pre>

---

## 🚀 Tech Stack

* **Framework:** Next.js (App Router, Static Export)
* **Styling:** Tailwind CSS + Custom Global CSS
* **Markdown Rendering:** Markdown-It
* **Deployment:** GitHub Pages
* **Hosting:** cap-levi.github.io

---

## 🎨 Design Highlights

* 🟢 **Cybersecurity Hacker Theme** (Green & Black Palette)
* ✨ **Smooth UI Animations** (fade & slide effects)
* 📚 **Fixed Sidebar Navigation** for writeups
* 📱 **Fully Responsive Design**
* ⌨️ **Terminal-Inspired Typography**
* 🧩 **Global Markdown Styling** (consistent across all writeups)

---

## 📝 Adding New Sherlock Writeups

### 1️⃣ Create a Markdown File

Add a new `.md` file inside:

<pre class="overflow-visible! px-0!" data-start="2231" data-end="2283"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(--spacing(9)+var(--header-height))] @w-xl/main:top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>public/writeups/my-sherlock-challenge.md
</span></span></code></div></div></pre>

---

### 2️⃣ Write the Content

Use standard Markdown syntax:

<pre class="overflow-visible! px-0!" data-start="2348" data-end="2453"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(--spacing(9)+var(--header-height))] @w-xl/main:top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-markdown"><span><span># Sherlock Challenge Name</span><span>

</span><span>## Overview</span><span>
...

</span><span>## Investigation Process</span><span>
...

</span><span>## Findings</span><span>
...
</span></span></code></div></div></pre>

---

### 3️⃣ Add Images (Optional)

Place images in:

<pre class="overflow-visible! px-0!" data-start="2509" data-end="2553"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(--spacing(9)+var(--header-height))] @w-xl/main:top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre!"><span><span>public</span><span>/assets/</span><span>images</span><span>/sherlock-image/</span><span>
</span></span></code></div></div></pre>

Reference them in Markdown:

<pre class="overflow-visible! px-0!" data-start="2584" data-end="2661"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(--spacing(9)+var(--header-height))] @w-xl/main:top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-markdown"><span><span>![</span><span>Screenshot</span><span>](</span><span>../assets/images/sherlock-image/screenshot.png</span><span>)
</span></span></code></div></div></pre>

---

### 4️⃣ Deploy

Commit and push:

<pre class="overflow-visible! px-0!" data-start="2702" data-end="2799"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(--spacing(9)+var(--header-height))] @w-xl/main:top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>git add .
git commit -m </span><span>"Add Sherlock writeup: <challenge name>"</span><span>
git push origin main
</span></span></code></div></div></pre>

The site will automatically update.

---

## 🖼️ Image Handling

* Images are served statically via `/public`
* Automatically styled via global CSS
* Optimized for readability in long forensic writeups

---

## 🔧 Local Development

### Install Dependencies

<pre class="overflow-visible! px-0!" data-start="3060" data-end="3083"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(--spacing(9)+var(--header-height))] @w-xl/main:top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>npm install
</span></span></code></div></div></pre>

### Run Development Server

<pre class="overflow-visible! px-0!" data-start="3113" data-end="3136"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(--spacing(9)+var(--header-height))] @w-xl/main:top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>npm run dev
</span></span></code></div></div></pre>

Visit: `http://localhost:3000`

---

### Production Build (Static Export)

<pre class="overflow-visible! px-0!" data-start="3213" data-end="3238"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(--spacing(9)+var(--header-height))] @w-xl/main:top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>npm run build
</span></span></code></div></div></pre>

---

## 📤 Deployment

### ✅ GitHub Pages (Primary)

This repository is a **GitHub Pages user site** (`Cap-Levi.github.io`).

Deployment occurs via static export:

<pre class="overflow-visible! px-0!" data-start="3404" data-end="3436"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(--spacing(9)+var(--header-height))] @w-xl/main:top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>git push origin main
</span></span></code></div></div></pre>

🌐 Live at: [https://cap-levi.github.io](https://cap-levi.github.io)

---

### Optional: Vercel

<pre class="overflow-visible! px-0!" data-start="3505" data-end="3545"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(--spacing(9)+var(--header-height))] @w-xl/main:top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>npm install -g vercel
vercel
</span></span></code></div></div></pre>

---

## 🎓 Sherlock Focus

This blog is **exclusively dedicated** to  **Hack The Box Sherlock challenges** , covering:

* Incident response simulations
* DFIR investigations
* Log correlation & threat hunting
* Blue Team operational workflows

🎯 **Goal:** Complete **all 128 Sherlock challenges** and document each investigation.

---

## 👤 Author

**Fazeel Azam**

Cybersecurity Graduate | Blue Team & DFIR Specialist

🔗 **Connect with me:**

* 📧 Email: [fazeelazam56@gmail.com]()
* 💼 LinkedIn: [https://www.linkedin.com/in/fazeelazam56/](https://www.linkedin.com/in/fazeelazam56/)
* 🧠 Hack The Box: [https://app.hackthebox.com/users/1691773](https://app.hackthebox.com/users/1691773)

---

## 📄 License

© 2025 Fazeel Azam

All rights reserved.

---

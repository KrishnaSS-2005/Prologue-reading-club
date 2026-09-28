# 📚 PROLOGUE — The Reading Club of LBSITW

A responsive, single-page website for **PROLOGUE**, the official reading club of LBSITW, built for the Tech Team selection task.

## 🔗 Live Site
Live Website (GitHub Pages): `https://<your-username>.github.io/<your-repo-name>/`

## 🖥️ Overview

The site is a single `index.html` page with anchored sections, built using **only HTML, CSS and vanilla JavaScript** (no frameworks, no build step) so it can be opened directly or hosted with GitHub Pages as-is.

| Section | What it covers |
|---|---|
| 🏠 Home | Hero intro, tagline, CTA buttons, and a rotating "up next" activity ticker |
| 📖 About | Club story, vision & mission, plus animated stat counters (members, books, events, years) |
| ✨ Why Join | Six benefit cards covering what members gain |
| 🎭 Activities | Card grid of recurring club activities |
| 📅 Events | Tabbed Upcoming / Past events list |
| 📝 Membership Registration | Full sign-up form with live validation |
| 🖼️ Gallery | Photo grid with a click-to-open lightbox (prev/next + keyboard + Esc) |
| 📱 Contact & Socials | Contact details, quick links, and social icons in the footer |

## ⚙️ Interactive JavaScript Features

- **Sticky/blurred navbar** that reacts to scroll position
- **Mobile hamburger menu** with slide-in panel
- **Rotating hero ticker** cycling through upcoming activities
- **Scroll-triggered animated counters** using `IntersectionObserver`
- **Tabbed Events section** (Upcoming / Past) with no page reload
- **Gallery lightbox** — click any photo to open a full-screen viewer with previous/next navigation, keyboard arrow support, and Escape-to-close
- **Membership form validation** — real-time (on blur) and on-submit checks for name, register number, department, year, email format, 10-digit phone number, a minimum-length motivation message, and the code-of-conduct checkbox, with inline error messages and a success confirmation (no backend required)

## 🎨 Design

- Warm cream / ink / brown palette matching the PROLOGUE brand mark
- `Playfair Display` for headings, `Inter` for body text (Google Fonts)
- Fully responsive: fluid grid layouts collapse from 3/4 columns on desktop down to a single column on mobile, with a dedicated mobile navigation drawer

## 📁 Project Structure

```
prologue-site/
├── index.html          # All page sections (single-page site with anchor navigation)
├── css/
│   └── style.css       # All styling, responsive breakpoints, and animations
├── js/
│   └── script.js       # All interactivity and form validation logic
├── assets/
│   └── logo.jpeg       # Club emblem, used as logo/favicon
└── README.md
```

## 🚀 Running Locally

No build tools or dependencies are required.

1. Download / clone this folder.
2. Open `index.html` directly in your browser, **or** serve it locally for the best experience:
   ```bash
   npx serve .
   # or
   python3 -m http.server 8000
   ```

## ☁️ Deploying to GitHub Pages  

1. Create a new GitHub repository and push this folder's contents to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: PROLOGUE reading club website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
2. In the repository, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`.
4. Save — GitHub will publish the site at:
   `https://<your-username>.github.io/<your-repo-name>/`

## ✅ Requirements Checklist

- [x] HTML, CSS & JavaScript only
- [x] Responsive on mobile and desktop
- [x] Multiple interactive JavaScript features
- [x] Membership form validation
- [x] Clean, commented, organized file structure
- [x] Ready for GitHub + GitHub Pages deployment

---

**Name:** _(fill in your name)_
**GitHub Repository:** _(fill in link)_
**Live Website (GitHub Pages):** _(fill in link)_

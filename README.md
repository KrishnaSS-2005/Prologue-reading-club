# 📚 PROLOGUE — The Reading Club of LBSITW

PROLOGUE is a responsive, single-page reading club website for the **LBS Institute of Technology for Women (LBSITW)**. It brings together book discovery, reading activities, events, membership registration, authentic reading imagery, and private browser-based reading reflections.

## 🔗 Live Links
**GitHub Repository:** https://github.com/KrishnaSS-2005/Prologue-reading-club
**Live Website (GitHub Pages):**https://krishnass-2005.github.io/Prologue-reading-club/

## 🖥️ Overview

This is a lightweight static website built with **HTML, CSS, and vanilla JavaScript**. It has no build step, framework, backend, account system, or database. The project can be opened directly in a browser or hosted on GitHub Pages.

## ✨ Features

### Intro experience

- Animated PROLOGUE opening screen
- “Enter PROLOGUE” and “Skip Intro” controls
- Automatic intro dismissal after a short delay
- Animated book-opening visual and progress indicator

### Home section

- Reading club introduction and tagline
- “Become a Member” call-to-action
- “Explore Activities” call-to-action
- Rotating “Up Next” activity ticker
- Scroll cue leading into the club story

### About PROLOGUE

- Club background and purpose
- Vision and purpose cards
- Warm editorial visual style
- PROLOGUE emblem imagery

### Animated club statistics

- Members
- Books discussed
- Events hosted
- Years active
- Counters animate when the section enters the viewport

### Why Join

Six benefit cards covering:

- Curated reading lists
- Public speaking
- Community connection
- Certificates and recognition
- Writing opportunities
- Author and speaker sessions

### Club Activities

Activity cards for:

- Weekly book discussions
- Author meet-and-greets
- Writing workshops
- Open mic nights
- Newsletter team
- Reading retreats

### Library

- Nine recommended books
- English, Malayalam, and Hindi titles
- Language filters
- Genre filters
- Real book cover images stored in the local `assets/books/` folder where reliable public editions are available
- Existing SVG fallbacks for editions without a reliable public cover endpoint
- Book preview modal with title, author, category, description, cover image, and reading link
- External reading/search links for each title

Current library titles:

1. *The Midnight Library* — Matt Haig
2. *Atomic Habits* — James Clear
3. *Pride and Prejudice* — Jane Austen
4. *Sapiens* — Yuval Noah Harari
5. *രണ്ടാമൂഴം* — എം. ടി. വാസുദേവൻ നായർ
6. *മയ്യazhippuzhayude തീരങ്ങളിൽ* — എം. മുകുന്ദൻ
7. *गोदान* — मुंशी प्रेमचंद
8. *मधुशाला* — हरिवंश राय बच्चन
9. *चंद्रकांता* — देवकीनंदन खत्री

### Events

- Upcoming events tab
- Past events tab
- Book-of-the-month discussion
- Open mic event
- Guest author talk
- Induction meet
- Writing workshop
- World Poetry Day celebration

### Gallery

- Six authentic reading and library photographs
- Local images stored in `assets/gallery/`
- Click any image to open the lightbox
- Previous and next image controls
- Keyboard arrow navigation
- Escape-to-close support
- Image captions inside the lightbox
- Responsive image-first layout on desktop and mobile

Gallery images include:

- Open book and glasses
- Reading cup beside a book
- Candlelight reading
- Quiet reading in bed
- Library shelves
- Book-club reading space

### Reading Journals

- Reflections are added inside the existing gallery lightbox
- Each entry includes a reader name and short reflection
- Entries are attached to the selected gallery image
- Saved entries appear immediately as journal cards
- Entries remain available when the same image is reopened
- Data is saved locally in the current browser using `localStorage`
- No account, server, or database is required
- Reflections do not sync across browsers or devices
- The local storage key is `prologueReadingJournals`

### Membership registration

The form includes:

- Full name validation
- Register number validation
- Department selection
- Year-of-study selection
- Email validation
- Ten-digit phone validation
- Motivation message minimum length
- Preferred activity checkboxes
- Code-of-conduct confirmation
- Inline validation messages
- Success confirmation after valid submission

Membership submission is a **front-end demo only**. It does not send information to a backend or email service.

### Navigation and usability

- Sticky header with blur effect after scrolling
- Responsive mobile navigation drawer
- Automatic mobile menu closing after navigation
- Smooth anchor scrolling
- Light and dark theme toggle
- Theme preference saved locally as `prologueTheme`
- Responsive layouts for desktop, tablet, and mobile screens

### Footer

- PROLOGUE club description
- LBSITW contact information
- Quick navigation links
- Social icon links
- Copyright footer

## 🎨 Design

- Warm cream, ink, brown, and gold palette
- Editorial book-club atmosphere
- `Playfair Display` for headings
- `Inter` for body text
- Rounded cards and soft shadows
- Responsive grids
- Animated hover states
- Full-screen gallery lightbox
- Journal panel with a paper-card visual treatment and decorative sparkle accent

## 🧰 Technology

- HTML5
- CSS3
- Vanilla JavaScript
- CSS animations and transitions
- Intersection Observer API for statistic counters
- Browser `localStorage` for theme and journal persistence
- Google Fonts for Playfair Display and Inter

No React, build tool, package manager, backend, or database is required inside this static project.

## 📁 Project Structure

```text
prologue-real-covers/
├── index.html                  # Complete single-page website
├── css/
│   └── style.css               # Theme, layout, responsive rules, and animations
├── js/
│   └── script.js               # Navigation, filters, lightbox, journals, and validation
├── assets/
│   ├── logo.jpeg               # PROLOGUE emblem and favicon image
│   ├── books/                  # Local book cover images and SVG fallbacks
│   ├── gallery/                # Local reading and library photographs
│   └── IMAGE_CREDITS.md        # Book and gallery image source notes
└── README.md                   # This guide
```

## 🚀 Run Locally

No build tools or dependencies are required.

### Option 1: Open directly

Open `index.html` in a browser.

### Option 2: Use Python’s local server

```bash
cd prologue-real-covers
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

### Option 3: Use `serve`

```bash
cd prologue-real-covers
npx serve .
```

## 📝 How to Use Reading Journals

1. Open the Gallery section.
2. Select any reading image.
3. Enter a reader name.
4. Write a short reflection.
5. Select **Save reflection**.
6. Close and reopen the same image to see the saved journal entry.

Journal entries are private to the current browser profile because they are stored with `localStorage`.

## 🖼️ Image Sources

- Book cover images are stored locally under `assets/books/`.
- Gallery photographs are stored locally under `assets/gallery/`.
- Source notes and Unsplash photo references are listed in `assets/IMAGE_CREDITS.md`.
- The site avoids relying on the original placeholder gallery images.

## ☁️ Deploy to GitHub Pages

1. Create a GitHub repository.
2. Copy the contents of this folder into the repository.
3. Commit and push the files:

```bash
git init
git add .
git commit -m "Add PROLOGUE reading club website"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git push -u origin main
```

4. Open the repository’s **Settings → Pages** page.
5. Select **Deploy from a branch**.
6. Choose the `main` branch and the `/ (root)` folder.
7. Save the settings and open the generated GitHub Pages URL.

## 🔒 Privacy and Storage Notes

- There is no login system.
- There is no backend API for the static site features.
- Membership form success is front-end only.
- Theme preference is stored locally.
- Reading journal entries are stored locally.
- Clearing browser site data removes local theme and journal data.
- Journal data is not uploaded or shared by this project.

## ✅ Completion Checklist

- [x] Single-page HTML website
- [x] Responsive desktop and mobile layout
- [x] Animated intro screen
- [x] Sticky navigation and mobile menu
- [x] Rotating activity ticker
- [x] Animated statistics
- [x] About, benefits, activities, events, library, gallery, membership, and contact sections
- [x] Language and genre library filters
- [x] Book preview modal
- [x] Local book cover images
- [x] Local reading-related gallery images
- [x] Gallery lightbox with keyboard controls
- [x] Per-image reading journals
- [x] Local journal persistence with `localStorage`
- [x] Theme toggle with local persistence
- [x] Membership form validation
- [x] Image source notes
- [x] GitHub Pages-ready structure

---

**Name:** Krishna S S
**GitHub Repository:** https://github.com/KrishnaSS-2005/Prologue-reading-club
**Live Website (GitHub Pages):**https://krishnass-2005.github.io/Prologue-reading-club/

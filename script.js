/* ==========================================================
   PROLOGUE — script.js
   Handles: sticky header, mobile nav, animated counters,
   hero ticker, event tabs, gallery lightbox, form validation
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {
  /* ---------- Intro screen: Enter / Skip ---------- */
  const introScreen = document.getElementById("introScreen");
  const closeIntro = () => {
    if (!introScreen) return;
    introScreen.classList.add("hide");
    document.body.classList.remove("intro-lock");
    setTimeout(() => { introScreen.remove(); }, 700);
  };
  if (introScreen) {
    document.body.classList.add("intro-lock");
    document.getElementById("enterPrologue")?.addEventListener("click", closeIntro);
    document.getElementById("skipIntro")?.addEventListener("click", closeIntro);
  }
  setTimeout(closeIntro, 4500);

  /* ---------- Dark / light mode ---------- */
  const themeToggle = document.getElementById("themeToggle");
  const applyTheme = (dark) => {
    document.body.classList.toggle("dark-mode", dark);
    if (themeToggle) {
      themeToggle.querySelector("span:first-child").textContent = dark ? "☀" : "☾";
      themeToggle.querySelector(".theme-label").textContent = dark ? "Light" : "Dark";
      themeToggle.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
    }
  };
  const savedTheme = localStorage.getItem("prologueTheme");
  applyTheme(savedTheme === "dark");
  themeToggle?.addEventListener("click", () => {
    const dark = !document.body.classList.contains("dark-mode");
    localStorage.setItem("prologueTheme", dark ? "dark" : "light");
    applyTheme(dark);
  });

  /* ---------- Library language + favourite genre filters ---------- */
  const filterButtons = document.querySelectorAll(".filter-btn");
  const bookCards = document.querySelectorAll("#libraryGrid .book-card");
  const libraryEmpty = document.getElementById("libraryEmpty");
  const filters = { language: "all", genre: "all" };
  const updateLibrary = () => {
    let visible = 0;
    bookCards.forEach(card => {
      const languageMatch = filters.language === "all" || card.dataset.language === filters.language;
      const genreMatch = filters.genre === "all" || card.dataset.genre === filters.genre;
      const show = languageMatch && genreMatch;
      card.classList.toggle("filtered-out", !show);
      if (show) visible++;
    });
    libraryEmpty?.classList.toggle("show", visible === 0);
  };
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const group = btn.dataset.filterGroup;
      filterButtons.forEach(b => { if (b.dataset.filterGroup === group) b.classList.remove("active"); });
      btn.classList.add("active");
      filters[group] = btn.dataset.filter;
      updateLibrary();
    });
  });
  updateLibrary();


  /* ---------- Sticky header on scroll ---------- */
  const header = document.getElementById("siteHeader");
  const onScroll = () => {
    if (window.scrollY > 40) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  };
  document.addEventListener("scroll", onScroll);
  onScroll();

  /* ---------- Mobile hamburger menu ---------- */
  const hamburger = document.getElementById("hamburgerBtn");
  const mainNav = document.getElementById("mainNav");

  hamburger?.addEventListener("click", () => {
    if (!mainNav) return;
    const isOpen = mainNav.classList.toggle("open");
    hamburger.classList.toggle("open", isOpen);
    hamburger.setAttribute("aria-expanded", isOpen);
  });

  // Close mobile menu after clicking a link
  mainNav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      hamburger.classList.remove("open");
      hamburger.setAttribute("aria-expanded", false);
    });
  });

  /* ---------- Hero ticker: rotate upcoming activities ---------- */
  const tickerItems = [
    "Book of the Month discussion — Oct 14",
    "Open Mic Night: Prose & Poetry — Nov 2",
    "Guest Talk with a local author — Nov 20",
  ];
  let tickerIndex = 0;
  const tickerText = document.getElementById("tickerText");
  const rotateTicker = () => {
    tickerText.style.opacity = 0;
    setTimeout(() => {
      tickerText.textContent = tickerItems[tickerIndex];
      tickerText.style.opacity = 1;
      tickerIndex = (tickerIndex + 1) % tickerItems.length;
    }, 250);
  };
  tickerText.style.transition = "opacity .25s ease";
  rotateTicker();
  setInterval(rotateTicker, 3800);

  /* ---------- Animated stat counters (on scroll into view) ---------- */
  const counters = document.querySelectorAll(".stat-number");
  const animateCounter = (el) => {
    const target = parseInt(el.dataset.target, 10);
    const duration = 1400;
    const startTime = performance.now();

    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const statObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.6 });

  counters.forEach((c) => statObserver.observe(c));

  /* ---------- Events: Upcoming / Past tabs ---------- */
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabPanels = document.querySelectorAll(".tab-panel");

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabButtons.forEach((b) => b.classList.remove("active"));
      tabPanels.forEach((p) => p.classList.remove("active"));

      btn.classList.add("active");
      document.getElementById(btn.dataset.tab).classList.add("active");
    });
  });

  /* ---------- Gallery lightbox ---------- */
  const galleryImgs = Array.from(document.querySelectorAll("#galleryGrid img"));
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxClose = document.getElementById("lightboxClose");
  const lightboxPrev = document.getElementById("lightboxPrev");
  const lightboxNext = document.getElementById("lightboxNext");
  let currentImgIndex = 0;

  const openLightbox = (index) => {
    currentImgIndex = index;
    lightboxImg.src = galleryImgs[index].src;
    lightboxImg.alt = galleryImgs[index].alt;
    lightbox.classList.add("open");
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    lightbox.classList.remove("open");
    document.body.style.overflow = "";
  };

  const showImage = (delta) => {
    currentImgIndex = (currentImgIndex + delta + galleryImgs.length) % galleryImgs.length;
    lightboxImg.src = galleryImgs[currentImgIndex].src;
    lightboxImg.alt = galleryImgs[currentImgIndex].alt;
  };

  galleryImgs.forEach((img, index) => {
    img.addEventListener("click", () => openLightbox(index));
  });

  lightboxClose.addEventListener("click", closeLightbox);
  lightboxPrev.addEventListener("click", () => showImage(-1));
  lightboxNext.addEventListener("click", () => showImage(1));
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") showImage(-1);
    if (e.key === "ArrowRight") showImage(1);
  });

  /* ---------- Membership form validation ---------- */
  const form = document.getElementById("membershipForm");
  const successMsg = document.getElementById("formSuccess");

  const setError = (fieldId, message) => {
    const input = document.getElementById(fieldId);
    const errorEl = document.getElementById(`err-${fieldId}`);
    if (message) {
      input.classList.add("invalid");
      errorEl.textContent = message;
    } else {
      input.classList.remove("invalid");
      errorEl.textContent = "";
    }
  };

  const validateField = (fieldId) => {
    const value = document.getElementById(fieldId).value.trim();

    switch (fieldId) {
      case "fullName":
        if (value.length < 3) return setError(fieldId, "Please enter your full name."), false;
        break;
      case "regNo":
        if (value.length < 4) return setError(fieldId, "Please enter a valid register number."), false;
        break;
      case "department":
        if (!value) return setError(fieldId, "Please select your department."), false;
        break;
      case "year":
        if (!value) return setError(fieldId, "Please select your year of study."), false;
        break;
      case "email": {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(value)) return setError(fieldId, "Enter a valid email address."), false;
        break;
      }
      case "phone": {
        const phonePattern = /^[6-9]\d{9}$/;
        if (!phonePattern.test(value)) return setError(fieldId, "Enter a valid 10-digit phone number."), false;
        break;
      }
      case "why":
        if (value.length < 15) return setError(fieldId, "Please write at least a short sentence."), false;
        break;
    }
    setError(fieldId, "");
    return true;
  };

  // Live validation as the user types/leaves a field
  ["fullName", "regNo", "department", "year", "email", "phone", "why"].forEach((id) => {
    const el = document.getElementById(id);
    el.addEventListener("blur", () => validateField(id));
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const fieldsToCheck = ["fullName", "regNo", "department", "year", "email", "phone", "why"];
    let allValid = true;
    fieldsToCheck.forEach((id) => {
      if (!validateField(id)) allValid = false;
    });

    // Agreement checkbox
    const agree = document.getElementById("agree");
    if (!agree.checked) {
      document.getElementById("err-agree").textContent = "You must agree to the code of conduct.";
      allValid = false;
    } else {
      document.getElementById("err-agree").textContent = "";
    }

    if (!allValid) {
      successMsg.textContent = "";
      const firstInvalid = form.querySelector(".invalid");
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    // Simulate successful submission (no backend) and bump the member counter
    const interests = Array.from(form.querySelectorAll("input[name='interest']:checked")).map(i => i.value);
    const memberCountEl = document.querySelector('.stat-number[data-target="120"]');
    if (memberCountEl) {
      const stored = parseInt(localStorage.getItem("prologueNewMembers") || "0", 10) + 1;
      localStorage.setItem("prologueNewMembers", stored);
    }

    successMsg.textContent = "🎉 Application received! Welcome to PROLOGUE — check your email for next steps.";
    form.reset();
    fieldsToCheck.forEach((id) => setError(id, ""));
    document.getElementById("err-agree").textContent = "";
  });

  /* ---------- On-site book preview ---------- */
  const previewModal = document.getElementById("bookPreviewModal");
  const previewTitle = document.getElementById("previewTitle");
  const previewAuthor = document.getElementById("previewAuthor");
  const previewMeta = document.getElementById("previewMeta");
  const previewSummary = document.getElementById("previewSummary");
  const previewRead = document.getElementById("previewRead");
  const previewArt = document.getElementById("previewBookArt");
  const openPreview = (card) => {
    if (!previewModal || !card) return;
    previewTitle.textContent = card.querySelector("h3")?.textContent.trim() || "Book preview";
    previewAuthor.textContent = card.querySelector(".book-author")?.textContent.trim() || "";
    previewMeta.textContent = card.querySelector(".book-tag")?.textContent.trim() || "Book";
    previewSummary.textContent = card.querySelector(".book-blurb")?.textContent.trim() || "Explore this title through the reading source.";
    previewRead.href = card.querySelector("[data-preview]")?.dataset.readUrl || "#";
    
    const coverImg = card.querySelector(".book-cover img");
    if (coverImg && previewArt) {
      previewArt.innerHTML = "";
      const img = document.createElement("img");
      img.src = coverImg.getAttribute("src") || "";
      img.alt = coverImg.getAttribute("alt") || "Book cover";
      previewArt.appendChild(img);
    } else if (previewArt) {
      previewArt.textContent = "📖";
    }
    previewModal.classList.add("open");
    previewModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("preview-open");
  };
  const closePreview = () => {
    previewModal?.classList.remove("open");
    previewModal?.setAttribute("aria-hidden", "true");
    document.body.classList.remove("preview-open");
  };
  document.querySelectorAll("[data-preview]").forEach(btn => btn.addEventListener("click", () => openPreview(btn.closest(".book-card"))));
  document.querySelectorAll("[data-close-preview]").forEach(el => el.addEventListener("click", closePreview));
  document.getElementById("previewClose")?.addEventListener("click", closePreview);
  document.addEventListener("keydown", e => { if (e.key === "Escape") closePreview(); });

});

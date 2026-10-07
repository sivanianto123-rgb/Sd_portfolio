// ===== Year =====
document.getElementById("year") && (document.getElementById("year").textContent = new Date().getFullYear());

// ===== Theme toggle =====
const root = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const THEME_KEY = "sd-portfolio-theme";

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  const icon = themeToggle.querySelector("i");
  icon.className = theme === "light" ? "fa-solid fa-moon" : "fa-solid fa-sun";
}

(function initTheme() {
  let saved = null;
  try { saved = localStorage.getItem(THEME_KEY); } catch (e) {}
  const prefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
  applyTheme(saved || (prefersLight ? "light" : "dark"));
})();

themeToggle.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
  applyTheme(next);
  try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
});

// ===== Mobile nav =====
const navBurger = document.getElementById("navBurger");
const navLinks = document.getElementById("navLinks");

navBurger.addEventListener("click", () => {
  navBurger.classList.toggle("open");
  navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navBurger.classList.remove("open");
    navLinks.classList.remove("open");
  });
});

// ===== Nav scroll shadow + back-to-top =====
const nav = document.getElementById("nav");
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY > 20;
  nav.classList.toggle("scrolled", scrolled);
  backToTop.classList.toggle("visible", window.scrollY > 500);
}, { passive: true });

// ===== Cursor glow (desktop only) =====
const cursorGlow = document.getElementById("cursorGlow");
if (window.matchMedia("(pointer: fine)").matches) {
  window.addEventListener("mousemove", (e) => {
    cursorGlow.style.left = e.clientX + "px";
    cursorGlow.style.top = e.clientY + "px";
  }, { passive: true });
} else {
  cursorGlow.style.display = "none";
}

// ===== Reveal on scroll =====
const revealEls = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

revealEls.forEach((el, i) => {
  el.style.transitionDelay = `${Math.min(i % 6, 6) * 60}ms`;
  revealObserver.observe(el);
});

// ===== Animated stat counters =====
const statNums = document.querySelectorAll(".stat-num");
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = parseInt(el.getAttribute("data-count"), 10);
    const duration = 1400;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target).toLocaleString();
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
    counterObserver.unobserve(el);
  });
}, { threshold: 0.5 });

statNums.forEach((el) => counterObserver.observe(el));

// ===== Active nav link highlight =====
const sections = document.querySelectorAll("section[id]");
const navAnchors = document.querySelectorAll(".nav-links a");

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const id = entry.target.getAttribute("id");
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (!link) return;
    if (entry.isIntersecting) {
      navAnchors.forEach((a) => a.classList.remove("active"));
      link.classList.add("active");
    }
  });
}, { threshold: 0.4 });

sections.forEach((s) => sectionObserver.observe(s));

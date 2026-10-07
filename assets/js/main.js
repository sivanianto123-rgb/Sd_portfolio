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

// ===== Nav scroll shadow =====
const nav = document.getElementById("nav");

window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 20);
}, { passive: true });

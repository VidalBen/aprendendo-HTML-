/**
 * Author: Fabiel Santos
 * Date: 2026-03-22
 * Time: Session (America/Sao_Paulo)
 * Project: aprendendo-HTML- (GitHub Pages) — Tuto Games UI behavior
 * Purpose: Mobile navigation toggle and close-on-link for improved UX.
 */

(function () {
  "use strict";

  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("mainNav");

  /**
   * Sets the mobile menu open or closed and updates ARIA attributes.
   * @param {boolean} open - Whether the menu should be visible.
   */
  function setNavOpen(open) {
    if (!mainNav || !navToggle) return;
    mainNav.classList.toggle("is-open", open);
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    navToggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  }

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      setNavOpen(!mainNav.classList.contains("is-open"));
    });

    mainNav.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener("click", function () {
        if (window.matchMedia("(max-width: 768px)").matches) {
          setNavOpen(false);
        }
      });
    });
  }
})();

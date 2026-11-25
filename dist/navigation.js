const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");
const compactLayout = window.matchMedia("(max-width: 54rem)");

function setMenu(open) {
  menuToggle.setAttribute("aria-expanded", String(open));
  siteNav.hidden = compactLayout.matches && !open;
}

function syncLayout() {
  const focusInNavigation = siteNav.contains(document.activeElement);
  const focusOnToggle = document.activeElement === menuToggle;

  menuToggle.hidden = !compactLayout.matches;
  setMenu(false);

  if (compactLayout.matches && focusInNavigation) menuToggle.focus();
  if (!compactLayout.matches && focusOnToggle) siteNav.querySelector("a").focus();
}

menuToggle.addEventListener("click", () => {
  setMenu(menuToggle.getAttribute("aria-expanded") === "false");
});

siteNav.addEventListener("click", (event) => {
  const link = event.target.closest("a");
  if (!link || !compactLayout.matches) return;

  const heading = document.querySelector(link.hash + " h2");
  setMenu(false);
  if (heading) {
    heading.tabIndex = -1;
    heading.focus({ preventScroll: true });
  }
});

document.querySelector(".masthead").addEventListener("keydown", (event) => {
  if (event.key !== "Escape" || menuToggle.getAttribute("aria-expanded") !== "true") return;

  setMenu(false);
  menuToggle.focus();
});

compactLayout.addEventListener("change", syncLayout);
syncLayout();

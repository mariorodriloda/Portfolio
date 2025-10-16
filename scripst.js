// Navbar efecto al hacer scroll
window.addEventListener("scroll", () => {
  const nav = document.querySelector("header");
  if (window.scrollY > 50) {
    nav.style.background = "rgba(14,14,18,0.98)";
    nav.style.boxShadow = "0 2px 10px rgba(0,0,0,0.5)";
  } else {
    nav.style.background = "rgba(14,14,18,0.9)";
    nav.style.boxShadow = "none";
  }
});

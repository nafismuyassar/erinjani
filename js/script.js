// Document Ready Event
document.addEventListener("DOMContentLoaded", () => {
  // Selectors
  const navbar = document.querySelector(".navbar");
  const navbarMenu = document.querySelector(".navbar-menu");
  const menuBtn = document.querySelector("#menu-btn");

  // Initialize Feather Icons
  feather.replace();

  // Toggle Mobile Menu
  if (menuBtn && navbarMenu) {
    menuBtn.onclick = (e) => {
      e.preventDefault();
      navbarMenu.classList.toggle("active");
    };
  }

  // Close Menu on Outside Click
  document.addEventListener("click", function (e) {
    if (
      menuBtn &&
      navbarMenu &&
      !menuBtn.contains(e.target) &&
      !navbarMenu.contains(e.target)
    ) {
      navbarMenu.classList.remove("active");
    }
  });

  // Navbar Scroll Effect
  window.onscroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  };

  // Page Load Animation
  setTimeout(() => {
    document.body.classList.add("loaded");
  }, 100);

  // Smooth Scroll for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
        // Close mobile menu if open
        if (navbarMenu.classList.contains("active")) {
          navbarMenu.classList.remove("active");
        }
      }
    });
  });
});

// Fix Back Button Browser History
window.addEventListener("pageshow", function (event) {
  if (event.persisted) {
    document.body.classList.add("loaded");
  }
});
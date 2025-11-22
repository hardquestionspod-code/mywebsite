document.addEventListener('DOMContentLoaded', () => {

  // ===== Search Filter =====
  const searchInput = document.getElementById("search");
  const videoCards = document.querySelectorAll(".video-card");

  if (searchInput && videoCards.length > 0) {
    searchInput.addEventListener("input", function () {
      const query = this.value.toLowerCase();
      videoCards.forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(query) ? "block" : "none";
      });
    });
  }

  // ===== Fade-in on Scroll (Intersection Observer) =====
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("show");
      });
    },
    { threshold: 0.1 }
  );

  videoCards.forEach(card => observer.observe(card));

  // ===== Hamburger Menu Toggle + Outside Click =====
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const body = document.body;

  if (hamburger && navLinks) {
    // Toggle menu on hamburger click
    hamburger.addEventListener('click', (e) => {
      navLinks.classList.toggle('show');
      body.classList.toggle('menu-open');
      e.stopPropagation(); // prevent immediate close
    });

    // Close menu on nav link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('show');
        body.classList.remove('menu-open');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (navLinks.classList.contains('show')) {
        if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
          navLinks.classList.remove('show');
          body.classList.remove('menu-open');
        }
      }
    });
  }

  // ===== Hero Parallax Scroll =====
  const hero = document.querySelector('.hero');
  if (hero) {
    window.addEventListener('scroll', () => {
      const scrollPosition = window.pageYOffset;
      hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    });
  }

});

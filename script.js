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
    { threshold: 0.1 } // Trigger when 10% of the element is in view
  );

  videoCards.forEach(card => observer.observe(card));

  // ===== Hamburger Menu Toggle =====
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }

  // ===== Hero Parallax Scroll =====
  const hero = document.querySelector('.hero');
  
  if (hero) {
    window.addEventListener('scroll', () => {
      const scrollPosition = window.pageYOffset;
      // Move background slower than scroll (parallax effect)
      hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    });
  }

});




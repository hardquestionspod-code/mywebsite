// Search
const searchInput = document.getElementById("search");
const videoCards = document.querySelectorAll(".video-card");

if(searchInput){
  searchInput.addEventListener("input", function(){
    const query = this.value.toLowerCase();
    videoCards.forEach(card => {
      const text = card.textContent.toLowerCase();
      card.style.display = text.includes(query) ? "block" : "none";
    });
  });
}

// Fade-in on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add("show");
  });
},{threshold:0.1});

videoCards.forEach(card => observer.observe(card));


const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

<script>
  const hero = document.querySelector('.hero');

  window.addEventListener('scroll', () => {
    let scrollPosition = window.pageYOffset;
    // Move background slower than scroll (parallax effect)
    hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
  });
</script>
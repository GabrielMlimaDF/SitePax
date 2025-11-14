function toggleMenu() {
  let menu = document.getElementById("mobileMenu");
  if (menu.style.right === "0px") {
    menu.style.right = "-100%"; // Fecha o menu
  } else {
    menu.style.right = "0px"; // Abre o menu
  }
}
//slider
 const slides = document.querySelectorAll(".slide");
      const dotsContainer = document.getElementById("dots");
      const pauseBtn = document.getElementById("pauseBtn");
      let current = 0;
      let paused = false;

      // Cria os dots dinamicamente
      slides.forEach((_, index) => {
        const dot = document.createElement("span");
        dot.addEventListener("click", () => goToSlide(index));
        dotsContainer.appendChild(dot);
      });

      const dots = dotsContainer.querySelectorAll("span");

      function updateSlider() {
        slides.forEach((slide, i) => {
          slide.classList.toggle("active", i === current);
          dots[i].classList.toggle("active", i === current);
        });
      }

      function goToSlide(index) {
        current = index;
        updateSlider();
      }

      function nextSlide() {
        current = (current + 1) % slides.length;
        updateSlider();
      }

      function prevSlide() {
        current = (current - 1 + slides.length) % slides.length;
        updateSlider();
      }

      document.getElementById("nextBtn").onclick = nextSlide;
      document.getElementById("prevBtn").onclick = prevSlide;
     pauseBtn.onclick = () => {
  paused = !paused;
  pauseBtn.innerHTML = paused
    ? `<span><svg width="7" height="8" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M6.5 3.13397C7.16667 3.51887 7.16667 4.48113 6.5 4.86603L2 7.4641C1.33333 7.849 0.5 7.36788 0.5 6.59808L0.5 1.40192C0.5 0.632124 1.33333 0.150998 2 0.535898L6.5 3.13397Z" fill="black"></path></svg></span>reproduzir`
    : `<span><svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect y="0.5" width="2" height="8" rx="1" fill="black"></rect><rect x="4" y="0.5" width="2" height="8" rx="1" fill="black"></rect></svg></span>pausar`;
};

      // Auto slide
      setInterval(() => {
        if (!paused) nextSlide();
      }, 5000);

      updateSlider();
//carroselartigos

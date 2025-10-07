
document.addEventListener("DOMContentLoaded", function () {
  console.log("🚀 Bootstrap 5 UI Project Loaded Successfully!");


  const exploreBtn = document.querySelector(".btn-warning");
  if (exploreBtn) {
    exploreBtn.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }

  // Contact form submit handler
  const contactForm = document.querySelector("form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault(); // prevent refresh
      alert("✅ Thank you! Your message has been sent.");
      this.reset(); // clear form
    });
  }
});
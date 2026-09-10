const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav ul a");
const setActive = () => {
  let current = "";
  sections.forEach((sec) => {
    const top = sec.offsetTop - 140;
    if (window.scrollY >= top) current = sec.getAttribute("id");
  });
  navLinks.forEach((link) => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === "#" + current,
    );
  });
};
window.addEventListener("scroll", setActive);
setActive();
const revealTargets = document.querySelectorAll(
  ".project, .skill-group, .stat",
);
revealTargets.forEach((el) => {
  el.style.opacity = 0;
  el.style.transform = "translateY(12px)";
  el.style.transition = "opacity .5s ease, transform .5s ease";
});
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 },
);
revealTargets.forEach((el) => io.observe(el));
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  status.textContent =
    "Thanks — your message has been noted. (Connect this form to a backend or a service like Formspree to actually send it.)";
  form.reset();
});

document.getElementById("year").textContent = new Date().getFullYear();

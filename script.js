const Menutoggler = document.querySelector("#MenuToggler");
const nav = document.querySelector("nav");
const Scrollup = document.querySelector(".Scrolup");
// events
Menutoggler.addEventListener("click", () => {
  console.log("close");
  nav.classList.toggle("Close");
});

// scroll up

Scrollup.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

// scroll reveal effects
ScrollReveal().reveal(".Home h6", {
  delay: 250,
  origin: "top",
});
ScrollReveal().reveal(".Home h1", {
  delay: 500,
  origin: "left",
});
ScrollReveal().reveal(".Home p", {
  delay: 700,
  origin: "bottom",
});
ScrollReveal().reveal(".AboutPic", {
  delay: 500,
  origin: "left",
});
ScrollReveal().reveal(".AboutInfo", {
  delay: 500,
  origin: "right",
});
ScrollReveal().reveal(".TestWrapper");
ScrollReveal().reveal(".ContactForm", {
  delay: 900,
  origin: "left",
});
ScrollReveal().reveal(".Svgimage", {
  delay: 500,
  origin: "right",
});
ScrollReveal().reveal(".p1", {
  delay: 600,
  origin: "right",
});
ScrollReveal().reveal(".p2", {
  delay: 700,
});
ScrollReveal().reveal(".p3", {
  delay: 800,
});
ScrollReveal().reveal(".p4", {
  delay: 900,
  origin: "right",
});
ScrollReveal().reveal(".p5", {
  delay: 950,
  origin: "right",
});

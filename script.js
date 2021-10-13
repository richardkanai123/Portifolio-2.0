const Menutoggler = document.querySelector("#MenuToggler");
const nav = document.querySelector("nav");
const Scrollup = document.querySelector(".Scrolup");
const SwitchBtn = document.querySelector(".switch");
const Body = document.querySelector("body");
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
  reset: true,
});
ScrollReveal().reveal(".Home h1", {
  delay: 500,
  origin: "left",
  reset: true,
});
ScrollReveal().reveal(".Home p", {
  delay: 700,
  origin: "bottom",
  reset: true,
});
ScrollReveal().reveal(".AboutPic", {
  delay: 500,
  origin: "left",
  reset: true,
});
ScrollReveal().reveal(".AboutInfo", {
  delay: 500,
  origin: "right",
  reset: true,
});
ScrollReveal().reveal(".TestWrapper");
ScrollReveal().reveal(".ContactForm", {
  delay: 900,
  origin: "left",
  reset: true,
});
ScrollReveal().reveal(".Svgimage", {
  delay: 500,
  origin: "right",
  reset: true,
});
ScrollReveal().reveal(".p1", {
  delay: 600,
  reset: true,
  origin: "right",
});
ScrollReveal().reveal(".p2", {
  delay: 700,
  reset: true,
});
ScrollReveal().reveal(".p3", {
  delay: 800,
  reset: true,
});
ScrollReveal().reveal(".p4", {
  delay: 900,
  origin: "right",
  reset: true,
});
ScrollReveal().reveal(".p5", {
  delay: 950,
  origin: "right",
  reset: true,
});

// mode toggler
SwitchBtn.addEventListener("click", () => {
  if (SwitchBtn.checked == true) {
    Body.style.background = "#f8f8f8";
  } else {
    Body.style.background = "#red";
  }

  alert("body.style.background");
});

const Menutoggler = document.querySelector('#MenuToggler')
const nav = document.querySelector("nav");
const Scrollup = document.querySelector(".Scrolup")


// events
Menutoggler.addEventListener('click', ()=>{
    console.log("close");
    nav.classList.toggle("Close")
})

// scroll up

Scrollup.addEventListener('click', ()=>{
    window.scrollTo(0,0)
})


// scroll reveal effects
ScrollReveal().reveal('.Home h6', {delay:250, origin:'top', distance:'20%', reset:true});
ScrollReveal().reveal('.Home h1', {delay:500, origin:'left', distance:'30%', reset:true});
ScrollReveal().reveal('.Home p', {delay:700, origin:'bottom', distance:'40%', reset:true})
ScrollReveal().reveal('.AboutPic', {delay:500, origin:'left', distance:'90%', reset:true})
ScrollReveal().reveal('.TestWrapper')
ScrollReveal().reveal('.ContactForm', {delay:900, origin:'left', distance:'90%', reset:true})
ScrollReveal().reveal('.Svgimage', {delay:500, origin:'right', distance:'90%', reset:true})

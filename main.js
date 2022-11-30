window.addEventListener("DOMContentLoaded");

const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
    threshold: 1,
    rootMargin: "0px 0px 50px 0px"
};

const appearOnScroll = new IntersectionObserver
(function(
    entries, 
    appearOnScroll
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    });
}, 
appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
})


// const button = document.querySelectorAll(".btn")

// const observer = new IntersectionObserver(entries => {
//         entries.forEach(entry => {
//             entry.target.classList.toggle("show", entry.isIntersecting)
//             if (entry.isIntersecting) observer.unobserve(entry.target)
//         })
//     }, 
//     {
//         threshold: 1,
//     }
// )

// button.forEach(button => {
//     observer.observe(button)
// })

// function typeMyName () {
//     const typed = new typed(".auto-type", {
//     string: ["Jenny Weijland"],
//     typeSpeed: 150,
//     loop: false,
// })
// }



/**Funktion som skapar och fadear in en bild som visar mina jobberfarenheter */


/**Funktion som skapar och fadear in en bild som visar mina utbildningar */

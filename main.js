window.addEventListener("DOMContentLoaded");

// const hiddenElements = document.querySelectorAll(".hidden");
// hiddenElements.forEach((el) => observer.observe(el));

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         console.log(entry)
//         if (entry.isIntersecting) {
//             entry.target.classList.add("show");
//         }else {
//             entry.target.classList.add("remove");
//         }
//     });
// });

// let options = {
//     root: document.querySelector('#scrollArea'),
//     rootMargin: '0px',
//     threshold: 1.0
//   }

const faders = document.querySelectorAll(".hidden");

const appearOptions = {
    root: null,
    threshold: 0.25,
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
            entry.target.classList.add(".fade-in");
            appearOnScroll.unobserve(entry.target);
        }
    });
}, 
appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
})


/**Funktion som skapar och fadear in en bild som visar mina jobberfarenheter */


/**Funktion som skapar och fadear in en bild som visar mina utbildningar */

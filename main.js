window.addEventListener("DOMContentLoaded", main);

function main() {
    const faders = document.querySelectorAll(".hidden");
    
    const appearOptions = {
        threshold: 0.6,
    };
    
    const appearOnScroll = new IntersectionObserver(
        function (entries) {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show')
                    appearOnScroll.unobserve(entry.target);
                }
            }
        },
        appearOptions
    );
    
    
    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    })
}

/**Funktion som skapar och fadear in en bild som visar mina jobberfarenheter */


/**Funktion som skapar och fadear in en bild som visar mina utbildningar */

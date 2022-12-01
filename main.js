window.addEventListener("DOMContentLoaded", main);

function main() {
    const faders = document.querySelectorAll(".hidden");
    
    const appearOptions = {
        root: null,
        threshold: 0.5,
        rootMargin: "0px"
    };
    
    const appearOnScroll = new IntersectionObserver(
        handleScrollIntersections,
        appearOptions
    );
    
    function handleScrollIntersections(entries) {
        console.log('SCROLL');
        for (const entry of entries) {
            console.log(entry.target, entry.intersectionRatio)
            entry.target.style.opacity = entry.intersectionRatio;
        }
    }
    
    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    })
}



/**Funktion som skapar och fadear in en bild som visar mina jobberfarenheter */


/**Funktion som skapar och fadear in en bild som visar mina utbildningar */

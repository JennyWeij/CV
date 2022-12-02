window.addEventListener("DOMContentLoaded", showOnScroll);

/**En funktion som med hjälp av intersection observer fadear in två bilder, 
 * när användaren scrollar neråt på webbsidan */
function showOnScroll() {
    const faders = document.querySelectorAll(".hidden");
    
    const appearOptions = {
        threshold: 0.7,
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



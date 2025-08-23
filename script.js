document.addEventListener('DOMContentLoaded', function() {

    const mask = document.getElementById('samurai-mask');

    // Scroll-based animation for the mask
    window.addEventListener('scroll', function() {
        let scrollPosition = window.scrollY;

        // Keep the effect subtle and only in the hero section
        if (scrollPosition < window.innerHeight) {
            let rotation = scrollPosition / 20;
            let opacity = Math.max(0, 0.3 - (scrollPosition / window.innerHeight * 0.3));
            mask.style.transform = `rotateZ(${rotation}deg)`;
            mask.style.opacity = opacity;
        }
    });

    // Fade-in animation for sections
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.2, // Trigger when 20% of the element is visible
        rootMargin: "0px 0px -50px 0px" // Start animation a bit sooner
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

});


/* ======================== Portfolio Section Horizontal Scroll Start ======================== */


ScrollTrigger.matchMedia({
	
    // large
    "(min-width: 1200px)": function() {
        let horizontalSections = document.querySelectorAll(".horizontal-scroll");

        horizontalSections.forEach((horizontalSection) => {
            let pinWrap = horizontalSection.querySelector(".pin-wrap");
            let pinWrapWidth = pinWrap.offsetWidth;
            let horizontalScrollLength = pinWrapWidth - window.innerWidth;
            gsap.to(pinWrap, {
                scrollTrigger: {
                    scroller: "[data-scroll-container]",
                    scrub: true,
                    trigger: horizontalSection,
                    pin: true,
                    start: "top top",
                    end: () => `+=${pinWrapWidth}`,
                    invalidateOnRefresh: true
                },
                x: -horizontalScrollLength,
                ease: "none"
            });
        });
    },
      
});   

/* ======================== Portfolio Section Horizontal Scroll End ======================== */



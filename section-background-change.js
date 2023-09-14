
  
/* ======================== On Scroll Body BG Colour Change Start ======================== */


const scrollColorElems = document.querySelectorAll("[data-bgcolor]");
scrollColorElems.forEach((colorSection, i) => {
    const prevclass = i === 0 ? "" : scrollColorElems[i - 1].dataset.bgclass;
    const prevBg = i === 0 ? "" : scrollColorElems[i - 1].dataset.bgcolor;
    const prevText = i === 0 ? "" : scrollColorElems[i - 1].dataset.textcolor;

    ScrollTrigger.create({
        trigger: colorSection,
        scroller: "[data-scroll-container]",
        // start: "top 50%",
        // end: "bottom 50%",

        start: 'top bottom-=50%',
        end: 'top top+=50%',

        marker: true,

        onEnter: () =>
        gsap.to("body", {         
            className: colorSection.dataset.bgclass,
            backgroundColor: colorSection.dataset.bgcolor,
            color: colorSection.dataset.textcolor,
            overwrite: "auto"
        }),

        onLeaveBack: () =>
        gsap.to("body", {       
            className: prevclass,
            backgroundColor: prevBg,
            color: prevText,
            overwrite: "auto"
        })

    });
});


/* ======================== On Scroll Body BG Colour Change End ======================== */
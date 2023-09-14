gsap.registerPlugin(ScrollTrigger);
const pageContainer = document.querySelector(".scroll-container");
pageContainer.setAttribute("data-scroll-container", "");


/* ======================== Locomotive Smooth Scroll Initialise Start ======================== */


const scroller = new LocomotiveScroll({
    el: pageContainer,
    inertia: 1,
    smooth: true,
    smoothMobile: true,
    multiplier: 0.8,
    touchMultiplier: 3,
});



scroller.on("scroll", function (t) {
    document.documentElement.setAttribute("data-direction", t.direction);
});

scroller.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(pageContainer, {
    scrollTop(value) {
        return arguments.length
        ? scroller.scrollTo(value, 0, 0)
        : scroller.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {
            left: 0,
            top: 0,
            width: window.innerWidth,
            height: window.innerHeight
        };
    },
    pinType: pageContainer.style.transform ? "transform" : "fixed"
});


/* ======================== Locomotive Smooth Scroll Initialise End ======================== */




// ========== update ScrollTrigger ***** IMPORTANT *****

new ResizeObserver(() => scroller.update()).observe(document.querySelector("[data-scroll-container]"))

ScrollTrigger.addEventListener('refresh', () => scroller.update())

ScrollTrigger.refresh();
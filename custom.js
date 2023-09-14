


/* ======================== Header Scroll Down Text Class Toggle Start ======================== */

const scrollOrderText = document.querySelector(".scroll-order-text");
scroller.on("scroll", function (t) {
    document.documentElement.setAttribute("data-direction", t.direction);
  
    const scrollPosition = t.scroll.y + window.innerHeight;
    const documentHeight = pageContainer.offsetHeight;
  
    if (scrollPosition > (documentHeight- 500)) {
      scrollOrderText.classList.add("scroll-up");
    } else {
      scrollOrderText.classList.remove("scroll-up");
    }
    
});

/* ======================== Header Scroll Down Text Class Toggle End ======================== */




/* ======================== Footer Map Link Nagnet Script Start ======================== */

$('.magnet-container').mouseleave(function(e){
  TweenMax.to(this, 0.3, {height: 150, width: 150});
  TweenMax.to('.map-link', 0.3,{scale:1, x: 0, y: 0});
});

$('.magnet-container').mouseenter(function(e){
  TweenMax.to(this, 0.3, {height: 200, width: 200});
  TweenMax.to('.map-link', 0.3,{scale:1.3});
});

$('.magnet-container').mousemove(function(e){   
  callParallax(e);
});

function callParallax(e){
  parallaxIt(e, '.map-link', 80);
  
}

function parallaxIt(e, target, movement){
  var $this = $('.magnet-container');
  var relX = e.pageX - $this.offset().left;
  var relY = e.pageY - $this.offset().top;
  
  TweenMax.to(target, 0.3, {
    x: (relX - $this.width()/2) / $this.width() * movement,
    y: (relY - $this.height()/2) / $this.height() * movement,
    ease: Power2.easeOut
  });
}

/* ======= Footer Map Link Nagnet Script End ======= */



/* ======= Get Quote Link Cursor Change Script Start ======= */

var cDirectionBlock = document.querySelectorAll('.c-direction-block');
var customCursor = document.querySelector('.custom-cursor');


cDirectionBlock.forEach(item => {
    item.onmouseover = function(){
        customCursor.classList.add('custom-cursor-img');
    };
    
    item.onmouseleave = function(){
        customCursor.classList.remove('custom-cursor-img');
    };
   
})


/* ========== rotated Cursor Change when cursor goese  Start ============ */

var cursorPositionX = null;
var cursorPositionY = null;
let pageWidth = window.innerWidth;
let halfPageWidth = pageWidth / 2; // 50% of window width
window.addEventListener('resize', function () {
  // update window width
  pageWidth = window.innerWidth;
  halfPageWidth = pageWidth / 2;  
});
document.addEventListener('mousemove', onMouseUpdate);

function onMouseUpdate(e) {
  cursorPositionX = e.pageX;
  cursorPositionY = e.pageY;
// add class when cursor goes more then 50% of window width
  if (cursorPositionX < halfPageWidth) {
    customCursor.classList.add('custom-cursor-left');
  } else {
    customCursor.classList.remove('custom-cursor-left');
  }

}

/* ======= Get Quote Link Cursor Change Script End ======= */


/* ======= Single Blog Progress Bar Script Start ======= */

let singleBlogNav = document.querySelector("#single-blog-nav");
let singleBlogNavWrapper = document.querySelector(".single-blog-nav-wrapper");
let progressBar = document.querySelector(".progress-bar");
let singleBlogNavHeight = singleBlogNavWrapper.clientHeight;

gsap.to(progressBar, {
  width:"100%",
  ease: "none",
  scrollTrigger: {
    scroller: "[data-scroll-container]",
    scrub: true,
    trigger: singleBlogNav,
    start: "top 100",
    end: `+=${singleBlogNavHeight + 500} bottom`,
    markers:true,
    // invalidateOnRefresh: true
  },
  
});

/* ======= Single Blog Progress Bar Script End ======= */
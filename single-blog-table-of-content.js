scroller.on("scroll", (scroll) => {
  const divs = document.querySelectorAll(".single-blog-nav-content[id^='section']");

  divs.forEach((div) => {
    const rect = div.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const divTop = rect.top;
    const divBottom = rect.bottom;
    const divHeight = rect.height;
    const middleOfViewport = viewportHeight / 2;

    const isVisible = rect.top < (middleOfViewport - 200);
    const isVisible2 = rect.bottom < (middleOfViewport);


    const navLinks = document.querySelectorAll(".single-blog-nav-list a");

    navLinks.forEach(link => {


      const target = link.getAttribute("href");
      // console.log(target);
      const divId = div.id;
         trnHref = "#" + divId;
      if (isVisible && !isVisible2) {
       
        // console.log("Div ID:", divId); // Print the ID of the div that becomes visible
        div.classList.add("active"); // Add the "active" class to the div

        // trnHref = "#" + divId;

        if (target === trnHref) {
          link.classList.add("active")
        }else{
          link.classList.remove("active")
        }


      } else {
        div.classList.remove("active"); // Remove the "active" class from the div if it is not visible
      }

    });
  });
});

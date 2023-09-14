// =============== hamburger menu Start

$(document).ready(function(){


    /* ======================== Hamburger Menu Script Start ======================== */

    $(".hamburger").click(function(){
        $(this).toggleClass("hamburger-animation");
        $(".nav-screen").toggleClass("nav-open");
        $(".header-logo").toggleClass("header-logo-slide");
    });

    /* ======================== Hamburger Menu Script End ======================== */



    /* ======================== Portfolio Scroll Section Image Touch and Class Add Script Start ======================== */

    var i = 0, timeOut = 0;
    
    $('.portfolio-item figure').on('mousedown touchstart', function(e) {
        $(this).addClass('active');
        timeOut = setInterval(function(){
        console.log(i++);
        }, 100);
    }).bind('mouseup mouseleave touchend', function() {
        $(this).removeClass('active');
        clearInterval(timeOut);
    });

    /* ======================== Portfolio Scroll Section Image Touch and Class Add Script End ======================== */


    
    /* ======================== Script Start ======================== */
    


    /* ======================== Script End ======================== */



        
    /* ======================== Script Start ======================== */

    /* ======================== Script End ======================== */

        


    /* ======================== Script Start ======================== */

    /* ======================== Script End ======================== */
  

    
});

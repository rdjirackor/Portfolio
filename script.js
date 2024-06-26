$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
//
    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Software Developer", "Freelancer", "Would-be Penetration Tester", "Would-be Cybersecurity Specialist"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Software Developer", "Freelancer", "Would-be Penetration Tester", "Would-be Cybersecurity Specialist"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    // Get a reference to the image element
var image = document.querySelector('.right-image');

// Define how much you want to move the image down in pixels (you can change this value)
var moveDownPixels = 95;
var moveRightPixels = 100;

// Calculate the new margin-top value
var currentMargin = parseInt(window.getComputedStyle(image).marginTop);
var newMargin = currentMargin + moveDownPixels + 'px';
var currentMargin1 = parseInt(window.getComputedStyle(image).marginRight);
var newMargin1 = currentMargin1 + moveRightPixels + 'px';

// Apply the new margin-top value to move the image down
image.style.marginTop = newMargin;

image.style.marginRight = newMargin1;




    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

$(document). ready(function(){
    // JavaScript to handle the menu button click
   document.addEventListener('DOMContentLoaded', function() {
       const menuBtn = document.querySelector('.menu-btn');
       const navLinks = document.querySelector('.nav-links');

       menuBtn.addEventListener('click', function() {
           navLinks.classList.toggle('active');
       });
   });

    //Typing animations
    var typed = new Typed(".typing", {
        strings: ["Web designer: Designing stunning websites using basic html, cascading stylesheets and javascript.",
        "Graphics designer: Designing logos, flyers, business/wedding cards and posters with Photoshop, Illustrator and CorelDraw.",
        "Digital marketer and product advertiser"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Inquire about me,",
        "Know more about me."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});
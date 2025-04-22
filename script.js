var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")

const elements = document.querySelectorAll(".element");
const heading = document.querySelector("#page4 h1");


document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
    blur.style.left = dets.x -250 +"px"
    blur.style.top = dets.y -250 +"px"
})

var aall = document.querySelectorAll("#nav a")
aall.forEach(function(elem){
        elem.addEventListener("mouseenter",function(){
           crsr.style.scale = 4
           crsr.style.backgroundColor = "transparent"
           crsr.style.border = "0.1px solid #fff"
           crsr.style.transition = "all 0.5s ease"
        })
        elem.addEventListener("mouseleave",function(){
            crsr.style.scale = 1
            crsr.style.backgroundColor = "#95C11E"
            crsr.style.border = "0px solid #95C11E"
            crsr.style.transition = "all 0.1s ease"
        })
})

// var eleall = document.querySelectorAll(".element")
// eleall.forEach(function(elem){
//         elem.addEventListener("mouseenter",function(){
//            crsr.style.scale = 4
//            crsr.style.backgroundColor = "transparent"
//            crsr.style.border = "0.1px solid #fff"
//            crsr.style.transition = "all 0.5s ease"
//         })
//         elem.addEventListener("mouseleave",function(){
//             crsr.style.scale = 1
//             crsr.style.backgroundColor = "#95C11E"
//             crsr.style.border = "0px solid #95C11E"
//             crsr.style.transition = "all 0.1s ease"
//         })
// })




gsap.to("#nav",{
    backgroundColor:"#000",
    height: "110px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})
gsap.to(".main",{
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: ".main",
        scroller: "body",
        // markers: true,
        start: "top -25%",
        end: "top -70%",
        scrub: 2
    }       
})

gsap.from("#about-us img,#about-us-in",{
    y:50,
    opacity:0,
    duration: 1,
    // stagger: 0.4,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        // markers: true,
        start: "top 60%",
        end: "top 55%",
        scrub: 2
    }
})
gsap.from(".cards",{
    scale:0.8,
    opacity:0,
    duration: 1,
    scrollTrigger: {
        trigger: ".cards",
        scroller: "body",
        // markers: true,
        start: "top 80%",
        end: "top 55%",
        scrub: 0.1
    }
})
gsap.from("#colon1",{
    x: -60,
    y: -70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        // markers: true,
        start: "top 85%",
        end: "top 75%",
        scrub: 3
    }
})
gsap.from("#colon2",{
        x: 60,
        y: 70,
        scrollTrigger: {
        trigger: "#colon2",
        scroller: "body",
        // markers: true,
        start: "top 105%",
        end: "top 95%",
        scrub: 2
    }
})


gsap.from("#page4 h1",{
    y:50,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        // markers: true,
        start: "top 95%",
        end: "top 85%",
        scrub: 1
    }
})


elements.forEach(element => {
    element.addEventListener("mouseenter", () => {
        heading.style.webkitTextStroke = "1px #95C11E";
        heading.style.transition = "all 0.5s ease"
    });

    element.addEventListener("mouseleave", () => {
        heading.style.webkitTextStroke = "1px white";
        heading.style.transition = "all 0.5s ease"
    });
});



let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll(".slide");
    let dots = document.querySelectorAll(".dot");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    dots[slideIndex - 1].classList.add("active");

    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Manual Control for Dots
function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
}
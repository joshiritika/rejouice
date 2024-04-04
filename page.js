function getAnimation(){
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,

    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
        };
    }
    });
}
getAnimation();

function get2Animation(){
    gsap.from(".elem h1",{
        y:160,
        stragger: 2,
        duration:2,
        ScrollTrigger:{
            trigger: "#page2",
            scroller: "#main",
            start:"top 50%",
            end:"top 49%",
            scrub:4
        }
    })
}
get2Animation();

function slider(){
        var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay:3000,
            disableOnInteraction: true,
        },
    });
}
slider()

function setEffect(){
    var page1content = document.querySelector("#page1-content");
    var cursor = document.querySelector("#cursor");

    page1content.addEventListener("mousemove",function(dets){
        gsap.to(cursor,{
            x:dets.x,
            y:dets.y
        })
    })
    page1content.addEventListener("mousemove",function(){
        gsap.to(cursor,{
            scale:1,
            opacity:1
        })
    })
    page1content.addEventListener("mouseleave",function(){
        gsap.to(cursor,{
            scale:0,
            opacity:0
        })
    })
}
setEffect();

function roundcircle(){
    var page4bottom = document.querySelector("#page4-bottom");
    var movecircle = document.querySelector("#round");

    page4bottom.addEventListener("mousemove",function(dets){
        gsap.to(movecircle,{
            x:dets.x,
            y:dets.y
        })
    })
    page4bottom.addEventListener("mousemove",function(){
        gsap.to(movecircle,{
            scale:1,
            opacity:1
        })
    })
    page4bottom.addEventListener("mouseleave",function(){
        gsap.to(movecircle,{
            scale:0,
            opacity:0
        })
    })
}
roundcircle()

var t1 = gsap.timeline()
t1.from("#loader h3",{
    x:40,
    opacity:0,
    stagger:0.1,
    duration:1,
})
t1.to("#loader h3",{
    opacity:0,
    x:-10,
    duration:1,
    stagger:0.1
})
t1.to("#loader",{
    opacity:0
})
t1.to("#loader",{
    display:"none"
})
t1.from("#page1-content h1 span",{
    y:100,
    opacity:0,
    stagger:0.1,
    duration:0.5,
    delay:-0.5
})
t1.from("#page6 #portion-2 h1 span",{
    y:100,
    opacity:0,
    stagger:0.50,
    duration:6,
    delay:0.5
})
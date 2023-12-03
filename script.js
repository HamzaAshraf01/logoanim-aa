// this code is copied form codepen to combine scroll trigger and locomotiv (puted in fuction)
// function init(){
//     gsap.registerPlugin(ScrollTrigger);
  
//   // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
//   const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true
//   });
//   // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
//   locoScroll.on("scroll", ScrollTrigger.update);
  
//   // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
//   ScrollTrigger.scrollerProxy("#main", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
//   });
  
//   ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
//   // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
//   ScrollTrigger.refresh();
  
//   }
//   init ()

//   rest part start

var tl = gsap.timeline() 



  gsap.set("#init-div" , {
  opacity: 0 ,
  scale: 0 ,
  opacity: 0  ,
  scale: 0 ,
  gap: "200px" ,
  'webkitFilter': 'blur(5000px)',
  yPercent: 0

  })
  gsap.set("#heading-1" , {
    opacity: 0  ,
    scale: 0.9 ,
    'webkitFilter': 'blur(10px)',
    skewY: 0 ,
    skewX: 20 ,
    yPercent: 0 ,
    stagger: 0

  
    })

  tl
  .to ("#init-div" , {
    opacity: 1 ,
    scale: 1 ,
    xPercent: 0 ,
    ease: "power4.out" ,
    duration: 2 ,
    gap: "0px" ,
    'webkitFilter': 'blur(0px)',
    

  } ,)
  .to ("#init-div" , {
    gap: "45px" ,
    

  },)
  

  .to("#div-1" , {
    rotate: "15deg" ,
    duration: 1 ,
    ease: "power4"
  } ,"ss")
  .to("#div-2" , {
    rotate: "-15deg" ,
    duration: 1 ,
    ease: "power4"
  } ,"ss")
  .to("#div-3" , {
    rotate: "15deg" ,
    duration: 1 ,
    ease: "power4"
  } ,"ss")
  .to("#div-4" , {
    rotate: "-15deg" ,
    duration: 1 ,
    ease: "power4"
  } ,"ss")

  .to("#init-div" , {
    yPercent: -10 ,
    duration: 1 ,
    ease: "power4"
  })
  .to("#heading-1" , {
    opacity: 1 , 
    scale : 1 ,
    'webkitFilter': 'blur(0px)',
    skewY: 0 ,
    skewX: 0 ,
    yPercent: -60 ,
    stagger: 0.1

  })
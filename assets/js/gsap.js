// locomotive 

// var header = document.querySelector("header")
// const scroll = new LocomotiveScroll({
//     el: header,
//     smooth: true,
// })

// var main = document.querySelector(".main")
// const scroll = new LocomotiveScroll({
//     el: main,
//     smooth: true,
//     lerp: 0.8,
// })

// window.addEventListener('load', () => {
//     scroll2.update();
// });

// var footer = document.querySelector("footer")
// const scroll3 = new LocomotiveScroll({
//     el: footer,
//     smooth: true,
// })


// scrollTrigger

gsap.to('.single-cookie1', {
    marginLeft: '-10%',
    marginTop: '-10%',
    duration: 2,
    scrollTrigger: {
        trigger: '.single-cookie4',
        scroller: 'body',
        // markers: true,
        start: 'top 30%',
        end: 'top 20%',
        scrub: 2,
    }
})

gsap.to('.single-cookie2', {
    marginLeft: '-10%',
    marginTop: '15%',
    duration: 2,
    scrollTrigger: {
        trigger: '.single-cookie2',
        scroller: 'body',
        // markers: true,
        start: 'top 50%',
        end: 'top 30%',
        scrub: 2,
    }
})

gsap.to('.single-cookie3', {
    marginLeft: '20px',
    marginTop: '-15%',
    duration: 2,
    scrollTrigger: {
        trigger: '.single-cookie3',
        scroller: 'body',
        // markers: true,
        start: 'top 20%',
        end: 'top 8%',
        scrub: 2,
    }
})

gsap.to('.single-cookie4', {
    marginLeft: '20px',
    marginTop: '5%',
    duration: 2,
    scrollTrigger: {
        trigger: '.single-cookie4',
        scroller: 'body',
        // markers: true,
        start: 'top 40%',
        end: 'top 30%',
        scrub: 2,
    }
})


// lenis js
// Initialize Lenis
const lenis = new Lenis();

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

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
        start: 'top 30%',
        end: 'top 20%',
        scrub: 2,
    }
})

gsap.to('.single-cookie4', {
    marginLeft: '20px',
    marginTop: '7%',
    duration: 2,
    scrollTrigger: {
        trigger: '.single-cookie4',
        scroller: 'body',
        // markers: true,
        start: 'top 45%',
        end: 'top 30%',
        scrub: 2,
    }
})

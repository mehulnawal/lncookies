// locomotive 

// var header = document.querySelector("header")
// const scroll = new LocomotiveScroll({
//     el: header,
//     smooth: true,
// })

// // var main = document.querySelector("main")
// // const scroll2 = new LocomotiveScroll({
// //     el: main,
// //     smooth: true,
// // })

// // var footer = document.querySelector("footer")
// // const scroll3 = new LocomotiveScroll({
// //     el: footer,
// //     smooth: true,
// })


// scrollTrigger
gsap.to('.single-cookie1', {
    top: '10%',
    duration: 2,
    scrollTrigger: {
        trigger: '.single-cookie1',
        scroller: 'body',
        // markers: true,
        start: 'top 30%',
        end: 'top 10%',
        scrub: 3,
    }
})

gsap.to('.single-cookie2', {
    top: '10%',
    duration: 2,
    scrollTrigger: {
        trigger: '.single-cookie1',
        scroller: 'body',
        // markers: true,
        start: 'top 30%',
        end: 'top 10%',
        scrub: 3,
    }
})

gsap.to('.single-cookie3', {
    top: '10%',
    duration: 2,
    scrollTrigger: {
        trigger: '.single-cookie1',
        scroller: 'body',
        // markers: true,
        start: 'top 30%',
        end: 'top 10%',
        scrub: 3,
    }
})

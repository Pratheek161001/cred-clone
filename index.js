let tl = gsap.timeline({
    scrollTrigger:{
      trigger: ".parttwo",
      start: "0% 50%", 
      end: "50% 50%",
      scrub: 1, 
      },
});
tl.to("#img3",
{ 
    bottom:"-7vh"
});
 tl.to("#img2,#img4",
{ 
    marginBottom:"-15vh"
});
 tl.to("#img1,#img5",
{ 
    marginBottom:"-25vh"
})

let tl2 = gsap.timeline({
    scrollTrigger:{
      trigger: ".part5",
      start: "40% 50%", 
      end: "170% 50%",
      pin: true,
      scrub:3, 
      },
});
tl2.to("#scroll-1",
{ 
    bottom:"30vh"
})
.to("#scroll-1",
{ 
    opacity:0,
},)
.to("#scroll-2",
{ 
    opacity:1,
},'one')
.to(".phone-img",
{ 
    x:"-20vw",
},'one')

.to("#scroll-2",
{ 
    bottom:"50vh"
})
.to("#scroll-2",
{ 
    opacity:0,
},)
.to("#scroll-3",
{ 
    opacity:1,
},'two')
.to(".phone-img",
{ 
    x:"-40vw",
},'two')

.to("#scroll-3",
{ 
    bottom:"50vh"
})
.to("#scroll-3",
{ 
    opacity:0,
},)
.to("#scroll-4",
{ 
    opacity:1,
},'three')
.to(".phone-img",
{ 
    x:"-60vw",
},'three')




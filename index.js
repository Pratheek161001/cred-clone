let tl = gsap.timeline({
    scrollTrigger:{
      trigger: ".parttwo",
      start: "0% 50%", 
      end: "50% 50%",
      markers:true, 
      scrub: 1, 
      },
});

tl.from("#img3",
{ 
    bottom:"-50vh"
})
 from("#img2,#img4",
{ 
    marginBottom:"-50vh"
})
 from("#img1,#img5",
{ 
    bottom:"-50vh"
})

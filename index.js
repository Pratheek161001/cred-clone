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

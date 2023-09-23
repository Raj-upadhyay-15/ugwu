const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function circleMouseFollower(){
    window.addEventListener("mousemove",function(dets){
        this.document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px ,${dets. clientY}px)`;
    })
}

circleMouseFollower();





document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;

    elem.addEventListener("mouseleave",function(dets){
      
        gsap.to(elem.querySelector("img"),{
            opacity:0,
            ease:Power3,
            duration:0.5,
        });
    });

    elem.addEventListener("mousemove",function(dets){
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;
        gsap.to(elem.querySelector("img"),{
            opacity:1,
            ease:Power1 ,
            top:diff,
            left:dets.clientX,
            rotate:gsap.utils.clamp(-20,20,diffrot*0.9),
        });
    });
});
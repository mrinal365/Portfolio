const intro=document.querySelector('.intro');
const video=intro.querySelector('video');
const text=intro.querySelector('h1');
//end section
const section=document.querySelector('section');
const end=document.querySelector('h1');
console.log("sbhvjhsvj");
//scrollmagic
const controller=new ScrollMagic.Controller();


//Scenes
const scene=new ScrollMagic.Scene({
    duration:10000,//pixels eg. 10000px
    triggerElement:intro,
    triggerHook:0
})
.addIndicators()
.setPin(intro)
.addTo(controller);


//video  animations
let accelamount=0.5;
let scrollpos=0;
let delay=0;

scene.on('update',e=>{
    scrollpos=e.scrollPos/1000;
    console.log(e) 
})

setInterval(()=>{
    delay+=(scrollpos-delay)*accelamount;
    console.log(scrollpos,delay);

    video.currentTime=scrollpos;
 }, 33.3);
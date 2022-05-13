let toTop=document.querySelector(".to-top");

window.addEventListener("scroll", ()=>{
    if(window.pageYOffset > 500){
        toTop.classList.add("active")
    }
    else{
        toTop.classList.remove("active")
    }
})
 
//=========SLIDER-1 START============

let sliderWrap=document.querySelector(".slider-1 .slider-under .slider-first");
let sliderWidth=document.querySelector(".slider-1 .slider-under .slider-first").clientWidth
let card=document.querySelector(".slider-1 .slider-under .first-1").clientWidth
let cardLenght=document.querySelectorAll(".slider-1 .slider-under .first-1").length / 2 
let next=document.querySelector(".slider-1 .slider-under .circle-span .next")
let prev=document.querySelector(".slider-1 .slider-under .circle-span .prev")
let c=0;
next.onclick=function(){
    move()
}
function move(){
    c++;
    if(c==cardLenght){
        c=0
    }
    sliderWrap.style.left= -c * (card + 30) +"px"
}

//=========SLIDER-1 END============

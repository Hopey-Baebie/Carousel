window.onload = function() {
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
    
  prevBtn.addEventListener("click", prevSlide);
  nextBtn.addEventListener("click", nextSlide);
}

let slideNumber = 0;

const slides = document.getElementsByClassName('slides');
const slider = document.getElementById("slide-container");
const currentSlide = slider.getElementsByClassName('current');

const prevSlide = () => {
  currentSlide[0].classList.remove("current");
     
  if(slideNumber == 0){
    slideNumber = slides.length-1;
  } else {
    slideNumber = slideNumber-1;
  }      
  slides[slideNumber].classList.add("current");
}


const nextSlide = () =>{
  currentSlide[0].classList.remove("current");

  if(slideNumber == (slides.length-1)){
    slideNumber = 0;  
  }
  else{
    slideNumber = slideNumber+1;
  }
     
  slides[slideNumber].classList.add("current");
}


function random() {
  currentSlide[0].classList.remove("current");

  slides[ran()].classList.add("current");
}

function ran( min = 0, max = 4 ) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}









































































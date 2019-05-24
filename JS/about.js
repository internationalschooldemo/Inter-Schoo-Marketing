let index = 0;
carouselShow();

function carouselShow() {
  let i;
  const carousel = document.querySelectorAll('.carousel');
  
  for (i = 0; i < carousel.length; i++) {
    carousel[i].style.display = "none";  
  }
  index++;
  if (index > carousel.length) {index = 1}    
  
  carousel[index-1].style.display = "block";  

  setTimeout(carouselShow, 2000); 
}
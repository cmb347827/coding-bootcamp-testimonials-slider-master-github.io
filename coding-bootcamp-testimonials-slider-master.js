'use strict'; 

const colors ={
	'White': 'hsl(0, 0%, 100%)',
	'Lighter Gray': 'hsl(11, 2%, 95%)',
};

$(window).resize(function(){
	location.reload();
});

$(window).on('load',function(){
	 //manually initialize the carousel using the carousel constructor method.
	  const carousel_el = document.querySelector('#bootcamp-carousel')

      const carousel = new bootstrap.Carousel(carousel_el, {
          keyboard: true,
          touch: true,
      });
	  
});

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("sliderPlaceholder");
  var y = document.getElementsByClassName("dots");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
     y[i].style.background = "none";
  }
  x[slideIndex-1].style.display = "inline-block";
  y[slideIndex-1].style.background = "white";
}

function  showBurgerContent(){
  var z = document.getElementById("hamburgerContent");
  if (z.style.opacity == 0) {
	z.style.display = "block";
	setTimeout(function(){
		z.style.right = "0px";
		z.style.opacity = "1";
	}, 200)
  } else {
    z.style.right = "-225px";
    z.style.opacity = "0";
	setTimeout(function(){
		z.style.display = "none";
	}, 200)
  }
}

var count = 0;

$(document).ready(function(){
  $('.mobileDropdown').on('click', function(){
    count = count + 1;
    if (!(count%2==0)) {
     $('.mobileDropArrow').css({
      'transform'         :'rotate(180deg)',
      '-webkit-transform' :'rotate(180deg)',
      '-moz-transform'    :'rotate(180deg)'
     });
     $('.mobileDropContent').css({
      'height': '120px',
      'visibility': 'visible'
     });
   } else {
     $('.mobileDropArrow').css({
      'transform':'rotate(0deg)',
      '-webkit-transform' :'rotate(0deg)',
      '-moz-transform'    :'rotate(0deg)'
    });
     $('.mobileDropContent').css({
      'height': '0px',
      'visibility': 'hidden'
     });    
   }
  });
});
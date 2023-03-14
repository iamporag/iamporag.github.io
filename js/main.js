$(document).ready (function(){
  new WOW().init();


  $(window).scroll(function() {
	  var scroll = $(window).scrollTop();
	  var box = $('.cta').height();
	  var header = $('.navbar-sticky').height();

	  if (scroll >= box - header) {
	    $(".navbar-sticky").addClass("background-header");
	  } else {
	    $(".navbar-sticky").removeClass("background-header");
	  }
	});
  
  $('.btn-dark').waypoint(function(direction){
       $('.btn-dark').addClass('animated slideInDown');
  }, {
    offset: ''
  });


  $('.classname').waypoint(function(direction){
      $('.classname').addClass('animated slideInUp');
  }, {
    offset: '70%'
  });
  $('.classname1').waypoint(function(direction){
      $('.classname1').addClass('animated fadeIn');
  }, {
    offset: '70%'
  });


  $(".iphone-btn").delay(2300).animate({bottom: "+=-3"}, 300);
  $(".iphone-btn").delay(300).animate({top: "+=-3"}, 100);

 
 

});





var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};


//Menubar Active And Scrolling auto active

const li = document.querySelectorAll(".nav-link");
const sec = document.querySelectorAll("section");

function activeMenu(){
  let len=sec.length;
  while(--len && window.scrollY + 97 < sec[len].offsetTop){}
  li.forEach(ltx => ltx.classList.remove("active"));
  li[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll", activeMenu);


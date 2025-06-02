$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

function newTyped(){}$(function(){$("#typed").typed({
// Change to edit type effect
strings: ["Backend developer", "Frontend developer", "Fullstack developer", "Python developer", "JavaScript developer", "C# developer", "C/C++ developer", "IoT developer"],
typeSpeed:90,backDelay:700,contentType:"html",loop:!0,resetCallback:function(){newTyped()}}),$(".reset").click(function(){$("#typed").typed("reset")})});

// Get the button
var myBtn = document.getElementById("myBtn");

// Show the button when the user scrolls down 20px from the top of the document
window.onscroll = function() {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		myBtn.style.display = "block";
	} else {
		myBtn.style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

$(document).ready(function() {
  $('.inline-code').on('click', function() {
  $(this).html('wow thanks for following directions lol');
  $(this).toggleClass('container');
});
//this is the same as .inline-code (it's referring to it)
$('p').on('click', function() {
  $(this).css({
    "color": "#42cbad",
    "font-weight": "700",
    "line-height": "40px",
    // "attribute": "value",
  });
});
$('h3').on('mouseover', function() {
  $(this)
  .animate({
    "letter-spacing": "10px",
    "font-size": "40px"
  }, 1000)
  .animate({
  	"letter-spacing": "5px",
  	"font-size": "20px"
  	}, 1000);
});

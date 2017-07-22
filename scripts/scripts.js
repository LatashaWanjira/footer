$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});

userHasScrolled = false;
window.onscroll = function(e) {
  userHasScrolled = true;
  if (userHasScrolled) {
    //do your code here
    document.getElementById("button").style.display = "block";
    userHasScrolled = false;
  } else {
    document.getElementById("button").style.display = "none";
  }
}

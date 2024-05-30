
/* Event Scroll to Back Top Button*/
document.addEventListener('DOMContentLoaded', ()=>{

  let backTop = $('#backTop');
  let oldScrollY = window.scrollY;

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300 && oldScrollY > window.scrollY) {
      backTop.addClass('visible');
    } else {
      backTop.removeClass('visible');
    }
    oldScrollY = window.scrollY;
  });
  
  backTop.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
    // JS Native: window.scrollTo({top: 0, behavior: 'smooth'});
  });
});

$(document).ready(function() {
  // for scrolling smoothly
  $('a[href^="#"]').on('click', function() {
    $('html, body').animate(
      {
        scrollTop: $($(this).attr('href')).offset().top
      },
      500
    );
    return false;
  });

  // Show navbar while scrolling up
  var sections = $('section');
  var nav = $('nav');
  var nav_height = nav.outerHeight();
  var zero = 0;

  $(window).on('scroll', function() {
    if ($(window).scrollTop()) {
      nav.addClass('white');
      nav.toggleClass('hide', $(window).scrollTop() > zero);
      zero = $(window).scrollTop();
    } else {
      nav.removeClass('white');
    }

    // var cursorPos = $(window).scrollTop();
    // sections.each(function() {
    //   var top = $(this).offset().top - nav_height,
    //     bottom = top + $(this).outerHeight();
    //   if (cursorPos >= top && cursorPos <= bottom) {
    //     nav.find('a').removeClass('active');
    //     nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
    //   }
    // });
  });

  // for open and close menu navbar
  $('#burger-pic').on('click', function() {
    $('#main-ul').toggleClass('open');
  });
});

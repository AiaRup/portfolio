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

//   $('.skill-list li a').mouseover(function() {
//     $(this).siblings().show();
//   });

//   $('.skill-list li a').mouseout(function() {
//     $(this).siblings().hide();
//   });
});

$(document).ready(function(){
  $('.image-slider').slick();
  $('.work-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      
    ]
  });

  $('.burger').click(function(){
    $('.burger').toggleClass('active');
    $('.nav').toggleClass('active');
  });

  let navItem = $('.nav__item');

  navItem.click(function (e){
    e.preventDefault();
  let dest = $(this).attr('data-scroll');
    $('html , body').animate({
      scrollTop:$(dest).offset().top
    }, 700)
  })

  $(window).scroll(function(){
   
    let fromTop = $(document).scrollTop();
    let blockHeight = $('.theater').height();
    if(fromTop > blockHeight){
      $('.header').addClass('fixed');
    }else{
      $('.header').removeClass('fixed');
    }
  });
});
      
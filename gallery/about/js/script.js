$(function () {
    $('.team-box-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        autoplay: true,
        speed: 1000,
        arrows: false,
        responsive: [
          {
              breakpoint: 992,
              settings: {
                  slidesToShow: 3,
              }
          },
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 2,
              }
          },
          {
              breakpoint: 576,
              settings: {
                  slidesToShow: 1,
              }
          }
        ]
      });
      
    //   team-box-slider ends


    $('.podcast-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        autoplay: true,
        speed: 1000,
        arrows: false,
        responsive: [
          {
              breakpoint: 992,
              settings: {
                  slidesToShow: 3,
              }
          },
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 2,
              }
          },
          {
              breakpoint: 576,
              settings: {
                  slidesToShow: 1,
              }
          }
        ]
      });
      
    //   podcast-slider ends


    $('.post-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        autoplay: true,
        speed: 1000,
        arrows: false,
        responsive: [
          {
              breakpoint: 992,
              settings: {
                  slidesToShow: 3,
              }
          },
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 2,
              }
          },
          {
              breakpoint: 576,
              settings: {
                  slidesToShow: 1,
              }
          }
        ]
      });
      
    //   podcast-slider ends

});

$(window).scroll(function(){
  $scrollamout = $(window).scrollTop();
  
  if($scrollamout > 400){
    $(".main-menu").addClass("sticky")
  }else{
    $(".main-menu").removeClass("sticky")
  }

})


  $('.ad_slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:'<img class="prevbtn arrow" src="./assets/images/adbanner/left-arrow.svg" alt="left-arrow">',
    nextArrow:' <img class="nextbtn arrow" src="./assets/images/adbanner/right-arrow.svg" alt="right-arrow">',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.all-card').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:'<img class="prevbtn arrow2" src="./assets/images/product-card/left-arrow-red.svg" alt="left-arrow">',
    nextArrow:' <img class="nextbtn arrow2" src="./assets/images/product-card/right-arrow-red.svg" alt="right-arrow">',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
       
        }
      }
    ]
  });

  $('.mobile-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:'<img class="prevbtn arrow2" src="./assets/images/mobile/left-arrow-red.svg" alt="left-arrow">',
    nextArrow:' <img class="nextbtn arrow2" src="./assets/images/mobile/right-arrow-red.svg" alt="right-arrow">',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          
        }
      }
    ]
  });




  $('.tv-top-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:'<img class="prevbtn arrow" src="./assets/images/adbanner/left-arrow.svg" alt="left-arrow">',
    nextArrow:' <img class="nextbtn arrow" src="./assets/images/adbanner/right-arrow.svg" alt="right-arrow">',
    fade:true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });




  $('.testimonial-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:'<img class="prevbtn arrow2" src="./assets/images/testimonial/left-arrow-red.svg" alt="left-arrow">',
    nextArrow:' <img class="nextbtn arrow2" src="./assets/images/testimonial/right-arrow-red.svg" alt="right-arrow">',
  
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          fade:false,
      
         
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
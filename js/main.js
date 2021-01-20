$(function(){
    //슬라이드
    $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true
      });
      $(window).scroll(function(){
          if($(document).scrollTop() >= 500 && $(document).scrollTop
            ()  <= $('#footer').offset().top - 1000) {
            $('#quickmenu').fadeIn(200);

          }else { $('#quickmenu').fadeOut(200);}
      })
}) //jq

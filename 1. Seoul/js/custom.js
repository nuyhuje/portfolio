$(function(){

  /* 헤더 - 언어별 사이트 이동 */
  $('#langBtn').click(function(e){
    e.preventDefault();

    link = $('#langSelect').val();
    window.open(link);
  });



  /* 메인 - 이미지 슬라이드 탭 메뉴 */
  $('#mainSlide .tap').click(function(e){
    e.preventDefault();

    $('#mainSlide .content').removeClass('active');
    $(this).parent('.content').addClass('active');
    $('#mainSlide .tap').removeClass('active');
    $(this).addClass('active');
    $('#mainSlide .status').addClass('pause');

    if($(this).parent('.cont1').hasClass('active')){
      slide1.autoplay.start();
      slide2.autoplay.stop();
    }else{
      slide1.autoplay.stop();
      slide2.autoplay.start();
    }
  });

  /* 메인 - 이미지 슬라이드 스와이퍼 */
  // 슬라이드 1
  var slide1 = new Swiper(".slide1", {
    loop: true,
    pagination: {
      el: ".slide1 .fraction",
      type: "fraction",
    },
    navigation: {
      nextEl: ".slide1 .next",
      prevEl: ".slide1 .prev",
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });

  // 슬라이드 2
  var slide2 = new Swiper(".slide2", {
    loop: true,
    pagination: {
      el: ".slide2 .fraction",
      type: "fraction",
    },
    navigation: {
      nextEl: ".slide2 .next",
      prevEl: ".slide2 .prev",
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });

  /* 메인 - 이미지 슬라이드 컨트롤 */
  $('#mainSlide .status').click(function(e){
    e.preventDefault();

    if ($(this).hasClass('pause')) {
      slide1.autoplay.stop();
      slide2.autoplay.stop();
      $(this).removeClass('pause');
    }else{
      slide1.autoplay.start();
      slide2.autoplay.start();
      $(this).addClass('pause');
    }
  });


  /* 메인 - 배너 이미지 슬라이드 스와이퍼 */
  var banner_slide = new Swiper(".banner_slide", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 43,
    pagination: {
      el: ".banner_slide .fraction",
      type: "fraction",
    },
    navigation: {
      nextEl: ".banner_slide .next",
      prevEl: ".banner_slide .prev",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });

  /* 메인 - 배너 이미지 슬라이드 컨트롤 */
  $('.banner_slide .status').click(function(e){
    e.preventDefault();

    if($(this).hasClass('pause')) {
      banner_slide.autoplay.stop();
      $(this).removeClass('pause');
    }else{
      banner_slide.autoplay.start();
      $(this).addClass('pause');
    }
  });


  /* 메인 - 링크 모음 (서브 메뉴 열림/닫힘) */
  $('.link_area .link_main').click(function(e){
    e.preventDefault();

    // $('.sub').stop().slideUp();
    // $(this).siblings('.sub').stop().slideDown();
    // $('.dept1').removeClass('on');
    // $(this).addClass('on')

    if($(this).hasClass('active')){
        $('.link_area .link_main').removeClass('active');
        $('.sub').stop().slideUp();
    }else{
        $('.link_area .link_main').removeClass('active');
        $(this).addClass('active')
        $('.sub').stop().slideUp();
        $(this).siblings('.sub').stop().slideDown();
    }
  })

  $('.link_area .sub li:first-child a').keydown(function(e){
    var v_keyCode = event.keyCode || event.which;

    if(v_keyCode == 9){
      if(event.shiftKey){
        $('.sub').stop().slideUp()
      }
    }
  })

  $('.link_area .sub li:last-child a').keydown(function(e){
    var v_keyCode = event.keyCode || event.which;

    if(v_keyCode == 9){
      if(!event.shiftKey){
        $('.sub').stop().slideUp()
      }
    }
  })

  /* $('.link_area .link_main').click(function(e){
    e.preventDefault();

    h = $(this).siblings('.sub').children('ul').outerHeight();

    if($(this).siblings('.sub').height() > 0) {
      $('.sub').stop().animate({ height: 0 }, 150);
      $('.link_area .link_main').removeClass('active');
    }else{
      $('.sub').stop().animate({ height: 0 }, 150);
      $(this).siblings('.sub').animate({ height: h }, 150);
      $('.link_area .link_main').removeClass('active');
      $(this).addClass('active');
    }
  }); */

  /* $('.link_area .link_main').click(function(e){
    e.preventDefault();

    menu = $(this).siblings('.sub').css('display')

    if(menu == 'none'){
      $(this).siblings('.sub').stop().slideDown();
      $('.link_area .link_main').removeClass('active');
      $(this).addClass('active');
    }else{
      $(this).siblings('.sub').stop().slideUp();
      $('.link_area .link_main').removeClass('active');
    }
  }); */
  

  
  /* 스크롤탑 버튼 */
  $(window).scroll(function(){

    curr = $(this).scrollTop();

    if(curr > 50){
      $('.btn_top').addClass('show');
    }else{
      $('.btn_top').removeClass('show');
    }
  });

  $('.btn_top').click(function(e){
    e.preventDefault();

    $('html, body').animate({scrollTop: 0}, 300);
  });
  

})
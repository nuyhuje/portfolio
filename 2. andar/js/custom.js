$(function(){

  /* 헤더 - 검색창 (열림/닫힘) */
  $('header .logo_area .header_ico.srh').click(function(e){
    e.preventDefault();

    $('.search').addClass('show');
  })
  // 닫힘
  $('.search .btn_back').click(function(e){
    e.preventDefault();

    $('.search').removeClass('show');
  })
  // 알림
  $('.search button').click(function(e){
    e.preventDefault();

    alert('검색어를 입력해주세요')
  });
  // // 검색창 라벨 나타남
  // $('.search').click(function(e){
  //   e.preventDefault();

  //   $('.search form label').removeClass('hidden');
  // });
  // // 검색창 라벨 숨김
  // $('.search form label').click(function(e){
  //   e.preventDefault();

  //   $(this).addClass('hidden');
  //   $('.search form input').focus();
  // });


  /* 헤더 - 사이드 메뉴 (열림/닫힘) */
  $('.gnb_wrap .menu').click(function(e){
    e.preventDefault();

    $('.aside, .aside_dimmed').addClass('on');
    $('body, .btn_scrolltop_box').addClass('hidden');
  });// 'on'클래스를 추가하면서 메뉴 열림
  
  $('.gnb_wrap .btn_close, .aside_dimmed').click(function(e){
    e.preventDefault();

    $('.aside, .aside_dimmed').removeClass('on');
    $('body, .btn_scrolltop_box').removeClass('hidden');
  });// 'on'클래스를 제거하면서 메뉴 닫힘

  /* 헤더 - 사이드 메뉴의 서브 메뉴 (열림/닫힘) */
  $('.aside .hidden_menu').click(function(e){
    e.preventDefault();

    h = $(this).siblings('.sub').children('ul').outerHeight();

    if($(this).siblings('.sub').outerHeight() > 0){
      $(this).siblings('.sub').stop().animate({height: 0}, 300)
      $(this).removeClass('on');
    }else {
      // $('.aside .sub').stop().animate({height: 0}, 300)
      $(this).siblings('.sub').stop().animate({height: h}, 300)
      $(this).addClass('on');
    }
  });


  /* 헤더 - 스크롤시 메인헤더 디자인 바뀌는 효과 */
  $(window).scroll(function(){
    curr = $(this).scrollTop();

    if(curr > 0){
      $('header .gnb_wrap').addClass('white');
    }else{
      $('header .gnb_wrap').removeClass('white');
      $('header .gnb_menu .btn_more-menu, header .gnb_menu .menu_slide, header .gnb_menu, header .gnb_menu .menu_all').removeClass('show')
    }
  });

  /* 헤더 - 확장된 영역 서브 메뉴 슬라이드 */
  var gnb_menu = new Swiper(".menu_slide", {
    slidesPerView: 'auto',
    spaceBetween: 20,
  });

  /* 헤더 - 확장된 영역 서브 메뉴 (열림/닫힘) */
  $('header .gnb_menu .btn_more-menu').click(function(e){
    e.preventDefault();

    $('header .gnb_menu .btn_more-menu, header .gnb_menu .menu_slide, header .gnb_menu, header .gnb_menu .menu_all').toggleClass('show');
  })



  /* 메인 - 배너 슬라이드 */
  var main_slide = new Swiper(".mainSwiper", {
    loop: true,
    effect: 'fade',
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".mainSwiper .swiper-pagination",
      clickable: true,
    },
  });

  
  /* 메인 - 컨텐츠 타입 3 슬라이드 */
  var t3_slide = new Swiper(".t3_Swiper", {
    slidesPerView: 2.2,
    spaceBetween: 10,
    freeMode: true,
  });



  /* 탑 스크롤 버튼 */
  $("body").on('mousewheel',function(e){
    var wheel = e.originalEvent.wheelDelta;
    
    if(wheel > 0){ //스크롤값을 가져온다.
      $(".btn_scrolltop_box").addClass('show'); //스크롤 올릴때
    } else {
      $(".btn_scrolltop_box").removeClass('show'); //스크롤 내릴때
      }
  });

  $('.btn_scrolltop_box .btn_top').click(function(e){
    e.preventDefault();

    $('html, body').animate({scrollTop: 0}, 700);
  });

  // $(window).scroll(function(){
  //   curr = $(this).scrollTop();

  //   if(curr){
  //     // $('.btn_scrolltop_box').addClass('show');
  //     $('.btn_scrolltop_box').fadeIn(500);
  //   }else{
  //     // $('.btn_scrolltop_box').removeClass('show');
  //     $('.btn_scrolltop_box').fadeOut(500);
  //   }
  // })


})
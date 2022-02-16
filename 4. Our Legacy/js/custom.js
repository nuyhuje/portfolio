$(function(){

  /* 헤더 - 로고/네비게이션 스크롤 애니메이션 */
  gsap.to("header .logo_wrap h1", {
    scrollTrigger: {
      trigger: ".main_banner",
      start: "50 10",
      end: "top bottom",
      scrub: 2,
      // markers: true,
    },
    width: 151,
    height: 21,
    top: 22,
    ease: "slow",
  });
  
  gsap.to("header nav .gnb", {
    scrollTrigger: {
      trigger: "header",
      start: "50 10",
      end: "top bottom",
      scrub: 2,
      // markers: true,
    },
    "margin-left": "275",
    // height: 21,
    // top: 22,
    // ease: "slow",
  });



  /* 메인 - 배너 이미지 호버/스크롤 애니메이션 */
  $('.main_banner a').mouseover(function(){

    gsap.to(".main_banner img", {
      scale: 1.02,
      duration: .2,
    })
  })
  $('.main_banner a').mouseout(function(){

    gsap.to(".main_banner img", {
      scale: 1,
      duration: .2,
    })
  })

  gsap.to(".main_banner img", {
    scrollTrigger: {
      trigger: "main",
      start: "top top",
      end: "bottom bottom",
      scrub: .1,
      // markers: true,
    },
    yPercent: 15,
    scale: 1.01,
    duration: .05,
  });


  /* 메인 - 배너 슬라이드 애니메이션 */
  gsap.to(".main_slide .bg", {
    scrollTrigger: {
      trigger: ".main_slide",
      start: "top 60%",
      end: "50px top",
      // markers: true,
    },
    height: 0,
    stagger: 0.1,
    duration: 2,
    ease: "expo.out",
  });


  /* 메인 - 컨텐츠 제목 스크롤 애니메이션 */
  $('.content_title').each(function(index, item){
    cont = $(this).find('h2');

    headTxt = new SplitType(cont, { types: 'words, chars', });
    gsap.fromTo(headTxt.chars, {
        yPercent: 100,
      }, {
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          // markers: true,
        },
        yPercent: 0,
        stagger: .03,
        duration: .8,
      });
  });


  /* 메인 - 배너 슬라이드 */
  var main_slide = new Swiper(".main_slide", {
    slidesPerView: 'auto',
    spaceBetween: 35,
    freeMode: true,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
  });


  /* 메인 - 상품 리스트 슬라이드 */
  var content_slide = new Swiper(".content_slide", {
    slidesPerView: 'auto',
    // spaceBetween: 30,
    freeMode: true,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
  });



  /* 마우스 포인터 */
  $(document).mousemove(function(e){
    gsap.to(".mouse_pointer", {
      x: e.clientX-65,
      // y: e.clientY-25,
      // x: e.clientX-0,
      y: e.clientY-0,
    });

    // 선택 영역에서 포인터 변경
    $('.swiper-wrapper').mouseover(function(){
      $('.mouse_pointer').addClass('show');
      // $('.mouse_pointer').stop().animate({'transform': "scale(2)"}, 5000, 'linear').addClass('show');
    })
    $('.swiper-wrapper').mouseout(function(){
      $('.mouse_pointer').removeClass('show');
    })

    // 선택 영역에서 마우스 버튼을 누르고 있을 때 포인터 변화
    // $('main').mousedown(function(){
    //   $('.mouse_pointer').addClass('change');
    // })
    // $('.swiper').mouseup(function(){
    //   $('.mouse_pointer').removeClass('change');
    // })
  });



})
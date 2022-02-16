$(function () {

  /* 헤더 - 메뉴 (열림/닫힘) */
  $('header .btn_menu, header .btn_close').click(function(e){
    e.preventDefault();

    $('header').toggleClass('show');
    $('body').toggleClass('hidden');
    // $('body').css("overflow", "scroll");

    menu.restart();
  })

  /* 헤더 - 메뉴 버튼 눌렀을 때 애니메이션 */
  menu = gsap.from('header .gnb .gnb_wrap > li',{
    yPercent: 50,
    opacity: 0,
    stagger: 0.1,
    duration: 1,
    // "filter": "blur(10px)",
  })
  menu.pause();



  /* 메인 - 클라이언트 슬라이드 */
  var clientSwiper = new Swiper(".clientSwiper", {
    // loop: true,
    slidesPerView: 'auto',
    // spaceBetween: 24,
    scrollbar: {
      el: ".swiper-scrollbar",
      // hide: true,
    },
    navigation: {
      nextEl: ".clientSwiper .btn_next",
      prevEl: ".clientSwiper .btn_prev",
    },
  });


  // gsap.to - 모션이 될 값
  // gsap.from - 모션 전 값

  /* 메인 메뉴 애니메이션 */
  gsap.from('.main_nav .nav_wrap .nav li',{
    // y: 100,
    yPercent: 50,
    // 반응형 구조 짤 때 처럼 퍼센트로 줄 때
    opacity: 0,
    // 100에서 시작할 때 투명도
    stagger: 0.1,
    // 모션이 하나 나오고 몇 초 뒤에 나오는 시간 (사이 간격)
    duration: 1,
    // 하나의 모션이 완성되는 시간
  })



  /* 푸터 - 패밀리 사이트 */
  $('footer .link_wrap button').click(function(e){
    e.preventDefault();

    $('footer .link_wrap .hidden_menu').toggleClass('show');
  })



  /* 스크롤탑 버튼 */
  $('.copyright .btn_scrollTop').click(function(e){
    e.preventDefault();

    $('html, body').animate({scrollTop: 0}, 0);
  })



  

  /* 스크롤했을 때 지정된 위치에서 시작하는 애니메이션 */
  // gsap.from('.whatwedo .content .txt_box, .whatwedo .content .img_box',{
  //   scrollTrigger: {
  //     trigger: ".whatwedo",
  //     start: "top 80%", //top앞(타겟의 위치)  top뒤(브라우저 시작점)
  //     end: "bottom top",
  //     markers: true,
  //     // toggleActions: "onEnter, onLeave, onEnterBack, and onLeaveBack,"
  //     toggleActions: "play pause resume reset"
  //     // 애니메이션이 탑에 갔다가 왔을 때 다시 작동하고 싶을 때
  //   },
  //   yPercent: 50,
  //   opacity: 0,
  //   stagger: 0.1,
  //   duration: 1,
  // })


  //index: 순서 (보통 0부터 시작 - Zero Base)
  //item: ".motion01"은 'this'와 비슷한 개념
  // $('.motion01').each(function(index, item){

  //     gsap.from(item,{
  //     scrollTrigger: {
  //       trigger: item,
  //       start: "0% 80%",
  //       end: "bottom top",
  //       // markers: true,
  //       toggleActions: "play pause resume reset"
  //     },
  //     yPercent: 50,
  //     opacity: 0,
  //     stagger: 0.1,
  //     duration: 1,
  //   })
  // })


})
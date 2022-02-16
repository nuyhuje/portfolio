$(function(){

  /* 페이지 로드될 때 애니메이션 - 메뉴 */
  const load = gsap.timeline({})

  // load.from('.loading', {visibility: "visible", opacity: 1, scale: 1.1, ease: 'power1', duration: 3, delay: 1.5})
  // load.fromTo('header', {yPercent: -100}, {yPercent: 0, ease: 'sine', duration: 2}, 3)
  // load.fromTo('.bigImg_wrap', {opacity: 0}, {opacity: 1, duration: 3}, 3)
  
  // .addLabel('nav')
  // load.from('.gnb .menu_01', {opacity: 0, y: 10}, 5, 'nav')
  //        .from('.gnb .menu_02', {opacity: 0, y: 10}, 5.5)
  //        .from('.gnb .menu_03', {opacity: 0, y: 10}, 6)
  //        .from('.gnb .menu_04', {opacity: 0, y: 10}, 6.5)
  //        .fromTo('.nav_line', {width: 0}, {width: 100+'%', ease: 'sine', duration: 2}, 5, 'nav');
  // 메뉴 간격 0.5초

  .addLabel('nav')
  load.from('.gnb .menu_01', {opacity: 0, y: 10}, 0.1, 'nav')
         .from('.gnb .menu_02', {opacity: 0, y: 10}, 0.6)
         .from('.gnb .menu_03', {opacity: 0, y: 10}, 1.1)
         .from('.gnb .menu_04', {opacity: 0, y: 10}, 1.6)
         .fromTo('.nav_line', {width: 0}, {width: 100+'%', ease: 'sine', duration: 2}, 'nav');
  // 메뉴 간격 0.5초

  /* 페이지 로드될 때 애니메이션 - 로고 */
  $('.logo_wrap').each(function(index, item){
    logo = $(this).find('h1');

    headTxt = new SplitType(logo, { types: 'chars', });
    gsap.fromTo(headTxt.chars, 
      {
        yPercent: 100,
        opacity: 0,
      }, 
      {
        yPercent: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 1,
        // delay: 1,
      });
  });

  /* 페이지 로드될 때 애니메이션 - 서브 타이틀 */
  gsap.from('header .logo_wrap p', {
    opacity: 0,
    stagger: 2,
    delay: 0.6,
    duration: 1.2,
  });


  /* 헤더 - 미디어쿼리 메뉴 (열림/닫힘) */
  const btn = $('header .btn_menu_wrapper');

  btn.on('click', function(){

    $(this).children('.btn_menu').toggleClass('active');
    $(this).children('.btn_menu').toggleClass('not-active');
    $('header').toggleClass('show');

    menu.restart();
  });

  /* 미디어쿼리 메뉴 버튼 눌렀을 때 텍스트 애니메이션 */
  menu = gsap.from('.m_menu_list ul li',{
    opacity: 0,
    stagger: 0.15,
    duration: 1,
  })
  // menu.pause();

  /* 미디어쿼리 메뉴 리스트 마우스 오버 효과 */
  document.querySelectorAll('.gnb li a, .m_menu_list ul li a').forEach(button => button.innerHTML = '<div><span>' + button.textContent.trim().split('').join('</span><span>') + '</span></div>');


  /* 헤더 - 메뉴 스크롤 애니메이션 (사라짐/나타남) */
  $('body').on('mousewheel', function(e){

    const wheel = e.originalEvent.wheelDelta;

    if(wheel > 0){
      $('header nav').removeClass('hide');
      // 스크롤 올릴 때
    }else{
      $('header nav').addClass('hide');
      // 스크롤 내릴 때
    }
  });

  /* 헤더 - 특정 위치에서 변화/사라지는 메뉴 스크롤 애니메이션 */
  $(window).scroll(function(){
    curr = $(window).scrollTop();

    target = $('main').offset().top;
    if(curr >= target){
      $('header nav').addClass('change');
    }else{
      $('header nav').removeClass('change');
    }

    target02 = $('.fullImg_wrap').offset().top;
    if(curr > target02){
      $('header nav').addClass('hidden');
    }else{
      $('header nav').removeClass('hidden');
    }
  });



  /* 메인 - 텍스트 애니메이션 Caption - 01  */
  gsap.from('.captionY', {
    scrollTrigger: {
      trigger: '.captionY',
      start: "top 85%",
      end: "bottom bottom",
      // markers: true,
    },
    yPercent: 70,
      opacity: 0,
      stagger: 0.1,
      duration: 1.5,
  });

  /* 메인 - 텍스트 애니메이션 Caption - 02  */
  const tl = gsap.timeline({
    defaults: {
      opacity: 0,
      duration: .7,
    },
    scrollTrigger: {
      trigger: ".half_n_half .txt_area",
      start: "85% 90%",
      end: "bottom bottom",
      // markers: true,
    },
  });
  tl.from(".captionTl", {yPercent: 70})
    .from(".captionTl_02", {yPercent: -70})

  /* 메인 - 텍스트 애니메이션 Caption - 03  */
  gsap.from('.captionY_02', {
    scrollTrigger: {
      trigger: '.bigImg_wrap_v2 .txt_area',
      start: "top 85%",
      end: "bottom bottom",
      // markers: true,
    },
    yPercent: 10,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
  });

  /* 메인 - 텍스트 애니메이션 Caption - 04  */
  const tl02 = gsap.timeline({
    defaults: {
      opacity: 0,
      duration: .7,
    },
    scrollTrigger: {
      trigger: ".half_n_half .txt_motion",
      start: "85% 90%",
      end: "bottom bottom",
      // markers: true,
    },
  });
  tl02.from(".captionTl_03", {yPercent: 70})
      .from(".captionTl_04", {yPercent: -70})

  /* 메인 - 텍스트 애니메이션 Caption - 05  */
  gsap.from('.captionY_03', {
    scrollTrigger: {
      trigger: '.half_n_half_05 .captionY_03',
      start: "top 95%",
      end: "bottom bottom",
      // markers: true,
    },
    yPercent: 70,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
  });

  /* 메인 - 텍스트 애니메이션 Caption - 06  */
  const tl03 = gsap.timeline({
    defaults: {
      opacity: 0,
      duration: .7,
    },
    scrollTrigger: {
      trigger: ".m_hnh_title_03 .caption",
      start: "50% 95%",
      end: "bottom bottom",
      // markers: true,
    },
  });
  tl03.from(".captionTl_05", {yPercent: 70})
      .from(".captionTl_06", {yPercent: -70})

  /* 메인 - 텍스트 애니메이션 Caption - 07  */
  const tl04 = gsap.timeline({
    defaults: {
      opacity: 0,
      duration: .7,
    },
    scrollTrigger: {
      trigger: ".bigImg_v2_02 .caption",
      start: "top 85%",
      end: "bottom bottom",
      // markers: true,
    },
  });
  tl04.from(".captionTl_07", {yPercent: 70})
      .from(".captionTl_08", {yPercent: -70})

  /* 메인 - 텍스트 애니메이션 Caption - 08  */
  gsap.from('.captionY_04', {
    scrollTrigger: {
      trigger: '.hnh_title_v2_02 .captionY_04',
      start: "top bottom",
      end: "bottom bottom",
      // markers: true,
    },
    yPercent: 70,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
  });

  /* 메인 - 텍스트 애니메이션 Caption - 09  */
  gsap.from('.captionY_05', {
    scrollTrigger: {
      trigger: '.bigImg_wrap_v2 .captionY_05',
      start: "top 90%",
      end: "bottom bottom",
      // markers: true,
    },
    yPercent: 10,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
  });

  /* 메인 - 텍스트 애니메이션 Caption - 10  */
  const tl05 = gsap.timeline({
    defaults: {
      opacity: 0,
      duration: .7,
    },
    scrollTrigger: {
      trigger: ".half_n_half_03 .caption",
      start: "top 90%",
      end: "bottom bottom",
      // markers: true,
    },
  });
  tl05.from(".captionTl_09", {yPercent: 70})
      .from(".captionTl_10", {yPercent: -70})

  /* 메인 - 텍스트 애니메이션 Caption - 11  */
  gsap.from('.captionY_06', {
    scrollTrigger: {
      trigger: '.half_n_half_03 .captionY_06',
      start: "top 95%",
      end: "bottom bottom",
      // markers: true,
    },
    yPercent: 70,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
  });

  /* 메인 - 텍스트 애니메이션 Caption - 12  */
  const tl06 = gsap.timeline({
    defaults: {
      opacity: 0,
      duration: .7,
    },
    scrollTrigger: {
      trigger: ".half_n_half_04 .caption",
      start: "top 95%",
      end: "bottom bottom",
      // markers: true,
    },
  });
  tl06.from(".captionTl_11", {yPercent: 70})
      .from(".captionTl_12", {yPercent: -70})
         

  /* 메인 - 텍스트 애니메이션 Title - 01 */
  $('.title_wrap').each(function(index, item){
    title = $(this).find('h2');

    headTxt = new SplitType(title, { types: 'words', });
    gsap.fromTo(headTxt.words, {
        yPercent: 50,
        opacity: 0,
      }, {
        scrollTrigger:{
          trigger:".title_wrap",
          start: "55% bottom",
          // markers:true,
        },
        yPercent: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1, 
      });
  });

  /* 메인 - 텍스트 애니메이션 Title - 02 */
  $('.title_v2').each(function(index, item){
    title = $(this).find('h2');

    headTxt = new SplitType(title, { types: 'words', });
    gsap.fromTo(headTxt.words, {
        yPercent: 50,
        opacity: 0,
      }, {
        scrollTrigger:{
          trigger:".title_v2",
          start: "50% bottom",
          // markers:true,
        },
        yPercent: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1, 
      });
  });

  /* 메인 - 텍스트 애니메이션 Title - 03 */
  $('.half_n_half_title').each(function(index, item){
    title = $(this).find('h2');

    headTxt = new SplitType(title, { types: 'chars', });
    gsap.fromTo(headTxt.chars, {
        yPercent: 50,
        opacity: 0,
      }, {
        scrollTrigger:{
          trigger: item,
          start: "top 60%",
          // markers:true,
        },
        yPercent: 0,
        opacity: 1,
        stagger: 0.12,
        duration: 1, 
      });
  });


  /* 메인 - 텍스트 애니메이션 Sub Title - 01 */
  $('.title_wrap').each(function(index, item){
    subTitle = $(this).find('.subY');

    headTxt = new SplitType(subTitle, { types: 'lines', });
    gsap.fromTo(headTxt.lines, {
        yPercent: 70,
        opacity: 0,
      }, {
        scrollTrigger:{
          trigger:".title_wrap .subtitle",
          start: "top 85%",
          // markers:true,
        },
        yPercent: 0,
        opacity: 1,
        stagger: 0.5,
        duration: 1,
        delay: 1.8,
      });
  });

  /* 메인 - 텍스트 애니메이션 Sub Title - 02 */
  $('.title_v2').each(function(index, item){
    subTitle = $(this).find('.subY');

    headTxt = new SplitType(subTitle, { types: 'lines', });
    gsap.fromTo(headTxt.lines, {
        yPercent: 70,
        opacity: 0,
      }, {
        scrollTrigger:{
          trigger:".title_v2 .subtitle",
          start: "top 85%",
          // markers:true,
        },
        yPercent: 0,
        opacity: 1,
        stagger: 0.5,
        duration: 1.8, 
      });
  });


  /* 푸터 - 텍스트 애니메이션 */
  const tl07 = gsap.timeline({
    scrollTrigger: {
      trigger: "footer",
      start: "top 90%",
      end: "bottom bottom",
      // markers: true,
    },
  })
  .addLabel('footer')
  tl07.from("footer .info_01", {y: 10, opacity: 0}, 'footer')
      .from("footer .info_02", {y: 10, opacity: 0})
      .from(" footer .info_03", {y: 10, opacity: 0})
      .from("footer .txt_area p", {opacity: 0}, 2.8)
      .from("footer .btn_area .btn_top", {yPercent: -25, opacity: 0}, 3.5)
      .fromTo('footer .btn_line', {width: 0}, {width: 100+'%', ease: 'sine', duration: 1.5}, 'footer')

  $('footer .txt_area').each(function(index, item){
    title = $(this).find('h2');

    headTxt = new SplitType(title, { types: 'words', });
    gsap.fromTo(headTxt.words, {
        yPercent: 50,
        opacity: 0,
      }, {
        scrollTrigger:{
          trigger:"footer .txt_area",
          start: "top 85%",
          // markers:true,
        },
        yPercent: 0,
        opacity: 1,
        stagger: 0.12,
        duration: 1,
        delay: 1.5,
      });
  });



  /* Half & Half Img - 01 */
  $('.hnh_motion').each(function(index, item){
    target = $(this).find('img');
    // yVal = $(this).data('y');

    motionTl01 = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: "top 100%",
        end: "bottom top",
        // markers: true,
        scrub: .1,
      },
      });
      motionTl01.from(target, {yPercent: -35})
      motionTl01.to(target, {yPercent: 10})
  });

  /* Half & Half Img - 02 */
  $('.hnh_motion02').each(function(index, item){
    target = $(this).find('img');

    motionTl01 = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: "top 100%",
        end: "bottom top",
        // markers: true,
        scrub: .1,
      },
      });
      // motionTl01.from(target, {yPercent: -52})
      motionTl01.from(target, {yPercent: -32})
      motionTl01.to(target, {yPercent: 5})
  });

  /* Half & Half Img - 03 */
  $('.hnh_motion03').each(function(index, item){
    target = $(this).find('img');

    motionTl01 = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: "top 100%",
        end: "bottom top",
        // markers: true,
        scrub: .1,
      },
      });
      motionTl01.from(target, {yPercent: -75})
      motionTl01.to(target, {yPercent: 10})
  });

  /* Half & Half Img - 04 */
  $('.hnh_motion04').each(function(index, item){
    target = $(this).find('img');

    motionTl01 = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: "top 100%",
        end: "bottom top",
        // markers: true,
        scrub: .1,
      },
      });
      motionTl01.from(target, {yPercent: -55})
      motionTl01.to(target, {yPercent: 2})
  });

  /* Half & Half Img - 05 */
  $('.hnh_motion05').each(function(index, item){
    target = $(this).find('img');

    motionTl01 = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: "top 100%",
        end: "bottom top",
        // markers: true,
        scrub: .1,
      },
      });
      motionTl01.from(target, {yPercent: -38})
      motionTl01.to(target, {yPercent: 10})
  });

  /* Half & Half Img - 06 */
  $('.hnh_motion06').each(function(index, item){
    target = $(this).find('img');

    motionTl01 = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: "top 100%",
        end: "bottom top",
        // markers: true,
        scrub: .1,
      },
      });
      motionTl01.from(target, {yPercent: -42})
      motionTl01.to(target, {yPercent: 43})
  });

  /* Half & Half Img - 07 */
  $('.hnh_motion07').each(function(index, item){
    target = $(this).find('img');

    motionTl01 = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: "top 100%",
        end: "bottom top",
        // markers: true,
        scrub: .1,
      },
      });
      motionTl01.from(target, {yPercent: -16})
      motionTl01.to(target, {yPercent: 16})
  });

  /* Half & Half Img - 08 */
  $('.hnh_motion08').each(function(index, item){
    target = $(this).find('img');

    motionTl01 = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: "top 100%",
        end: "bottom top",
        // markers: true,
        scrub: .1,
      },
      });
      motionTl01.from(target, {yPercent: -39})
      motionTl01.to(target, {yPercent: 7})
  });

  /* Half & Half Img - 09 */
  $('.hnh_motion09').each(function(index, item){
    target = $(this).find('img');

    motionTl01 = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: "top 100%",
        end: "bottom top",
        // markers: true,
        scrub: .1,
      },
      });
      motionTl01.from(target, {yPercent: -57})
      motionTl01.to(target, {yPercent: 5})
  });

  /* Half & Half Img - 10 */
  $('.hnh_motion10').each(function(index, item){
    target = $(this).find('img');

    motionTl01 = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: "top 100%",
        end: "bottom top",
        // markers: true,
        scrub: .1,
      },
      });
      motionTl01.from(target, {yPercent: -57})
      motionTl01.to(target, {yPercent: 54})
  });


  /* SingleImg - 01 */
  $('.singleImg_motion').each(function(index, item){
    target = $(this).find('img');

    motionTl02 = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: "top 100%",
        end: "bottom top",
        // markers: true,
        scrub: .1,
      },
      });
      motionTl02.from(target, {yPercent: -15})
      motionTl02.to(target, {yPercent: 13})
  });


   /* bigImg - 01 */
   $('.bigImg_motion').each(function(index, item){
    target = $(this).find('img');

    motionTl02 = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: "top 100%",
        end: "bottom top",
        // markers: true,
        scrub: .1,
      },
      });
      motionTl02.from(target, {yPercent: -28, scale: 1.07})
      motionTl02.to(target, {yPercent: 30, scale: 1})
  });

  /* bigImg v2 - 02 */
  $('.bigImg_motion02').each(function(index, item){
    target = $(this).find('img');

    motionTl02 = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: "top 100%",
        end: "bottom top",
        // markers: true,
        scrub: .1,
      },
      });
      motionTl02.from(target, {yPercent: -30, scale: 1.2})
      motionTl02.to(target, {yPercent: 38, scale: 1})
  });

  /* bigImg v2 - 03 */
  $('.bigImg_motion03').each(function(index, item){
    target = $(this).find('img');

    motionTl02 = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: "top 100%",
        end: "bottom top",
        // markers: true,
        scrub: .1,
      },
      });
      motionTl02.from(target, {yPercent: -30, scale: 1.18})
      motionTl02.to(target, {yPercent: 39, scale: 1})
  });

  
  /* Img Box */
  $('.half_n_half_title .img_box img, .half_n_half_img .img_box img').each(function(index, item){

    gsap.from(item, {
    scrollTrigger: {
      trigger: item,
      start: "top 80%",
      end: "bottom top",
      // markers: true,
    },
    scale: 0.5,
    opacity: 0,
    ease: "circ",
    duration: 2,
  })
});



  /* 스크롤탑 버튼 */
  $('footer .btn_top').click(function(e){
    e.preventDefault();

    $('html, body').animate({scrollTop: 0}, 2500, 'easeInOutCirc');
  });


});
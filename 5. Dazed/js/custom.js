$(function(){

  /* 페이지 로드될 때 로고, 메뉴 애니메이션 */
  const load = gsap.timeline({}); // 스토리 라인을 만드는 것
  
  load.from('.logo_area h1', {opacity: 0}, .3)
      .from('header .btn_menu', {opacity: 0}, .6)
      .from('.contact_area .mail', {opacity: 0}, 1.2)
      .from('.contact_area .sns', {opacity: 0}, 1.2)
      .from('.percent_box span, .percent_box i', {opacity: 0}, 1.2)
    //  .from('.gage', {height: 0}, 1.2)



  /* 헤더 - 스크롤시 특정 위치에서 로고 애니메이션 */
  const logo = gsap.timeline({
    scrollTrigger:{
      trigger: ".media_wrap",
      start: "top top",
      end: "bottom 20%",
      scrub: 1,
      // markers: true,
    }
  });
  
  logo.to(".logo_area .char4", {width: 0})
      .to(".logo_area .char2", {width: 0})
      .to(".logo_area .char3", {width: 0})
      .to(".logo_area .char5", {width: 0})
      .to(".logo_area .char1", {width: 29.41}, .1)
      .to(".logo_area .char2", {width: 27.64})
      .to(".logo_area .char3", {width: 25.25})
      .to(".logo_area .char4", {width: 25.77})
      .to(".logo_area .char5", {width: 29.41})


  /* 헤더 - 사이드 메뉴 (열림) */
  $('.btn_menu').click(function(e){
    e.preventDefault();

    $('body').addClass('show');

    // 메뉴 열었을 때 리스트 애니메이션
    menu = gsap.from('header .aside ul li', {
      rotation: -5,
      opacity: 0,
      stagger: 0.15,
      duration: 0.5,
    })
  });

  // (닫힘)
  $('.aside .btn_close, .aside_dimmed').click(function(e){
    e.preventDefault();

    $('body').removeClass('show');
  });
  

  /* 헤더 - 스크롤시 특정 위치에서 헤더 디자인 변경 */
  $(window).scroll(function(){
    const curr = $(this).scrollTop();

    if(curr > $(window).height()/2.5){
      $('header').addClass('white');
    }else{
      $('header').removeClass('white');
    }

  /* 스크롤 게이지, 스크롤 수치화 */
    h = $('body').outerHeight()-$(window).height();

    totalVal = parseInt((curr/h)*100); 
    // 전체 값에서 일부값을 구할 때 - (일부값 / 전체값) * 100
    // parseInt: 소수점 제거

    $('#currPercent').text(totalVal);

    if(totalVal < 10){
      $('#currPercent').text("0" + totalVal);
    }else{
      $('#currPercent').text(totalVal);
    }

    $('.gage span').css({height: totalVal+"%"});
  });



  /* 메인 - 비디오 영역 클릭시 특정 위치로 스크롤 이동 */
  $('.media_wrap video').click(function(e){
    e.preventDefault();

    var offset = $('#scroll').offset();
    $('html, body').animate({scrollTop: offset.top}, 1700);
  });


  /* 메인 - '포스트' 이미지 스크롤 애니메이션 */
  $('.img_area img').each(function(index, item){

    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: "top 80%",
        end: "top top",
        // markers: true,
        scrub: .1,
      },
      yPercent: 10,
    })
  });

  /* 메인 - '포스트, 메일링 폼' Y축 스크롤 애니메이션 */
  $('.post, #motion-1').each(function(index, item){

    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: "top 80%",
        end: "top top",
        // markers: true,
      },
      yPercent: 15,
      opacity: 0,
      stagger: 0.1,
      duration: .6,
    });
  });

  /* 메인 - '메일링 텍스트' X축 스크롤 애니메이션 */
  gsap.from('#motion-2', {
    scrollTrigger: {
      trigger: ".subscribe",
      start: "10% 80%",
      // markers: true,
    },
    xPercent: -15,
    opacity: 0,
    stagger: 0.1,
    duration: 1,
  });


  /* 메인 - '포스트' 유튜브 */
  $('.post .youtube').click(function(e){
    e.preventDefault();

    src = $(this).data('src');

    $('.popup').addClass('show');
    $('.youtube_area').append('<iframe width="560" height="315" src="https://www.youtube.com/embed/'+src+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
  });
  
  $('.popup .popup_close').click(function(e){
    e.preventDefault();

    $('.popup').removeClass('show');
    $('.popup iframe').remove();
  });


});
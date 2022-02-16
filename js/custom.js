$(function(){

  /* 페이지 로드 */
  const loading = gsap.timeline({})

  .addLabel("time")
  loading.fromTo("header .line", {width: 0}, {width: 100+"%", duration: 2.5, ease: "power4.out"}, "time")
         .from("header h1", {y: 30, opacity: 0, duration: 1}, "time")
         .from("header .clock", {y: 30, opacity: 0, duration: 1}, 1.2)
         .from("header .mode", {y: 30, opacity: 0}, 2.5)
         .from('.home', {opacity: 0, scale: 1.1, duration: 1.5}, .2)
         .from('.home .txt_area h2', {yPercent: 50, opacity: 0, duration: 1, ease: "power4.out"}, .5)
         .from('.home .txt_area p', {yPercent: 50, opacity: 0, duration: 1, ease: "power4.out"}, .75)
        //  .from('.home .txt_area h2', {opacity: 0, duration: 1}, 1)
        //  .from('.home .txt_area p', {opacity: 0, duration: 1}, 1.5)
         //  .fromTo('.fixed_title', {width: 0}, {width: 7.6087+"vh", duration: 2.5, ease: "power4.out"}, "time")
         .from('.fixed_title', {xPercent: -100, duration: 2, ease: "power2.out"}, 2.5)
         .from('.cursor', {opacity: 0}, 1.2)

  // "Latest Project" 텍스트 애니메이션
  /* $('.home .txt_area').each(function(index, item){
    title = $(this).find('h2, p');
  
      headTxt = new SplitType(title, { types: 'chars', });
      gsap.fromTo(headTxt.chars, 
        {
          yPercent: 50,
          opacity: 0,
        }, 
        {
          yPercent: 0,
          opacity: 1,
          stagger: .04,
          duration: .5,
          delay: .7,
        });
    }); */
  
  // "Fixed Title" 서브 타이틀 텍스트 애니메이션
  $('.fixed_title').each(function(index, item){
    sideTitle = $(this).find('h2, em');
  
      headTxt = new SplitType(sideTitle, { types: 'chars', });
      gsap.fromTo(headTxt.chars, 
        {
          yPercent: 50,
          opacity: 0,
        }, 
        {
          yPercent: 0,
          opacity: 1,
          stagger: .05,
          duration: .5,
          delay: 3.8,
        });
    });
  


  /* 헤더 - 시간 */
  var Target = document.getElementById("time");
  var Target_apm = document.getElementById("apm");

  function clock() {
      var time = new Date();
      var hours = time.getHours();
      var minutes = time.getMinutes();
      var seconds = time.getSeconds();
      var AmPm ="AM";
      if(hours > 12){   
          var AmPm ="PM";
          hours %= 12;
      }

      Target.innerText = 
      `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
      // :${seconds < 10 ? `0${seconds}` : seconds}` (초)

      Target_apm.innerText = `${AmPm}`;
  }
  clock();
  setInterval(clock, 1000); // 1초마다 실행



  /* 메인 - 스크롤시 특정 위치에서 서브 타이틀 효과 */
  $(window).scroll(function(){
    curr = $(window).scrollLeft();

    target = $('.projects .project_title').offset().left;
    // $('header').text('Current ' + curr + ',' + ' Target ' + target);

    if(curr >= target){
      $('.fixed_title, .pjt_hero').addClass('active');
    }else{
      $('.fixed_title, .pjt_hero').removeClass('active');
    } // Fixed Title -> Project Title

    // "Projects Sub Title"
    curr = $(window).scrollTop();

    target_02 = $('.projects').offset().top;
    // $('header').text('Current ' + curr + ',' + ' Target ' + target);

    if(curr >= 1669){
      $('.pjt_hero li:first-child, .pjt_hero li:nth-child(2)').addClass('show');
    }else{
      $('.pjt_hero li:first-child, .pjt_hero li:nth-child(2)').removeClass('show');
    } // Everest

    if(curr >= 3002){
      $('.pjt_hero li:nth-child(3)').addClass('show');
      $('.pjt_hero li:nth-child(2)').addClass('hidden');
    }else{
      $('.pjt_hero li:nth-child(3)').removeClass('show');
      $('.pjt_hero li:nth-child(2)').removeClass('hidden');
    } // Our Legacy
    
    if(curr >= 4335){
      $('.pjt_hero li:nth-child(4)').addClass('show');
      $('.pjt_hero li:nth-child(3)').addClass('hidden');
    }else{
      $('.pjt_hero li:nth-child(4)').removeClass('show');
      $('.pjt_hero li:nth-child(3)').removeClass('hidden');
    } // Creative Partners

    if(curr >= 5669){
      $('.pjt_hero li:nth-child(5)').addClass('show');
      $('.pjt_hero li:nth-child(4)').addClass('hidden');
    }else{
      $('.pjt_hero li:nth-child(5)').removeClass('show');
      $('.pjt_hero li:nth-child(4)').removeClass('hidden');
    } // Andar

    if(curr >= 7002){
      $('.pjt_hero li:nth-child(6)').addClass('show');
      $('.pjt_hero li:nth-child(5)').addClass('hidden');
    }else{
      $('.pjt_hero li:nth-child(6)').removeClass('show');
      $('.pjt_hero li:nth-child(5)').removeClass('hidden');
    } // Seoul
  });
  
  // "Project Title" 서브 타이틀 텍스트 애니메이션
  $('.pjt_hero li:first-child').each(function(index, item){
    sideTitle = $(this).find('h2, em');

    headTxt = new SplitType(sideTitle, { types: 'chars', });
    gsap.fromTo(headTxt.chars, {
        yPercent: 50,
        opacity: 0,
      }, {
        scrollTrigger:{
          trigger:".projects",
          start: "+=1300 16",
          // scrub: 1,
          // markers: true,
        },
        yPercent: 0,
        opacity: 1,
        stagger: .05,
        duration: .5,
      });
  }); // Dazed

  $('.pjt_hero li:nth-child(2)').each(function(index, item){
    sideTitle = $(this).find('h2, em');

    headTxt = new SplitType(sideTitle, { types: 'chars', });
    gsap.fromTo(headTxt.chars, {
        yPercent: 50,
        opacity: 0,
      }, {
        scrollTrigger:{
          trigger:".pjt_hero li:nth-child(2)",
          start: "+=1600 34",
          scrub: 1,
          // markers: true,
        },
        yPercent: 0,
        opacity: 1,
        stagger: .05,
        duration: .5,
      });
  }); // Everest 1669

  $('.pjt_hero li:nth-child(3)').each(function(index, item){
    sideTitle = $(this).find('h2, em');

    headTxt = new SplitType(sideTitle, { types: 'chars', });
    gsap.fromTo(headTxt.chars, {
        yPercent: 50,
        opacity: 0,
      }, {
        scrollTrigger:{
          trigger:".pjt_hero li:nth-child(3)",
          start: "+=2900 1",
          scrub: 1,
          // markers: true,
        },
        yPercent: 0,
        opacity: 1,
        stagger: .05,
        duration: .5,
      });
  }); // Our Legacy 3002

  $('.pjt_hero li:nth-child(4)').each(function(index, item){
    sideTitle = $(this).find('h2, em');

    headTxt = new SplitType(sideTitle, { types: 'chars', });
    gsap.fromTo(headTxt.chars, {
        yPercent: 50,
        opacity: 0,
      }, {
        scrollTrigger:{
          trigger:".pjt_hero li:nth-child(4)",
          start: "+=4250 18",
          scrub: 1,
          // markers: true,
        },
        yPercent: 0,
        opacity: 1,
        stagger: .05,
        duration: .5,
      });
  }); // Creative Partners 4335

  $('.pjt_hero li:nth-child(5)').each(function(index, item){
    sideTitle = $(this).find('h2, em');

    headTxt = new SplitType(sideTitle, { types: 'chars', });
    gsap.fromTo(headTxt.chars, {
        yPercent: 50,
        opacity: 0,
      }, {
        scrollTrigger:{
          trigger:".pjt_hero li:nth-child(5)",
          start: "+=5570 4",
          scrub: 1,
          // markers: true,
        },
        yPercent: 0,
        opacity: 1,
        stagger: .05,
        duration: .5,
      });
  }); // Andar 5669

  $('.pjt_hero li:nth-child(6)').each(function(index, item){
    sideTitle = $(this).find('h2, em');

    headTxt = new SplitType(sideTitle, { types: 'chars', });
    gsap.fromTo(headTxt.chars, {
        yPercent: 50,
        opacity: 0,
      }, {
        scrollTrigger:{
          trigger:".pjt_hero li:nth-child(6)",
          start: "+=6900 1",
          scrub: 1,
          // markers: true,
        },
        yPercent: 0,
        opacity: 1,
        stagger: .05,
        duration: .5,
      });
  }); // Seoul 7002


  /* 메인 - 'Home' 이미지 애니메이션 */
  gsap.to(".home img", {
    scrollTrigger: {
      trigger: ".container",
      start: "top top",
      end: "bottom top",
      scrub: .1,
      // markers: true,
    },
    xPercent: 15,
    duration: 3,
  });


  /* 메인 - 'Projects' 세로 스크롤 애니메이션 */
  const scroll = gsap.timeline({
    defaults: {
      duration: 10,
    },
    scrollTrigger: {
      trigger: ".container",
      start: "top top",
      // start: "bottom -=150",
      end: "+=8000",
      // end: "top top",
      // markers: true,
      pin: true,
      scrub: 1,
    },
  })
  scroll.to('.container', {xPercent: -50}) // x%: -35.1으로  값주면 이미지 효과 맞출수 있긴 하지만 문제점 발생

  // .addLabel('img')
  // scroll.to('.container', {xPercent: -100}, 'img') // x%: -35.1으로  값주면 이미지 효과 맞출수 있긴 하지만 문제점 발생

  // scroll.to('.fixed_title', {opacity: 0})
  .addLabel('pj01and02')
       .to('.projects .wrapper', {yPercent: -25}, 'pj01and02')
       .to('.pj_01 .hero', {height: 0}, 'pj01and02')
       .to('.pj_02 .hero', {height: "60vh"}, 'pj01and02')
      //  .to('.pj_01 video', {scale: 1.2, opacity: 0.1}, 'pj01and02') // 스크롤시 닫히는 이미지에 애니메이션
       .fromTo('.pj_02 img', {scale: 1.5, opacity: .1}, {scale: 1, opacity: 1}, 'pj01and02')
  .addLabel('pj02and03')
       .to('.pj_02 .hero', {height: 0}, 'pj02and03')
       .to('.pj_03 .hero', {height: "60vh"}, 'pj02and03')
       // .to('.pj_02 img', {scale: 1.2, opacity: 0.1}, 'pj02and03')
       .fromTo('.pj_03 img', {scale: 1.5, opacity: .1}, {scale: 1, opacity: 1}, 'pj02and03')
  .addLabel('pj03and04')
       .to('.pj_03 .hero', {height: 0}, 'pj03and04')
       .to('.pj_04 .hero', {height: "60vh"}, 'pj03and04')
       // .to('.pj_03 img', { scale: 1.2, opacity: 0.1}, 'pj03and04')
       .fromTo('.pj_04 video', {scale: 1.5, opacity: .1}, {scale: 1, opacity: 1}, 'pj03and04')
  .addLabel('pj04and05')
       .to('.pj_04 .hero', {height: 0}, 'pj04and05')
       .to('.pj_05 .hero', {height: "60vh"}, 'pj04and05')
       // .to('.pj_04 video', {scale: 1.2, opacity: 0.1}, 'pj04and05')
       .fromTo('.pj_05 img', {scale: 1.5, opacity: .1}, {scale: 1, opacity: 1}, 'pj04and05')
  .addLabel('pj05and06')
       .to('.pj_05 .hero', {height: 0}, 'pj05and06')
       .to('.pj_06 .hero', {height: "60vh"}, 'pj05and06')
       // .to('.pj_05 img', {scale: 1.2, opacity: 0.1}, 'pj05and06')
       .fromTo('.pj_06 img', {scale: 1.5, opacity: .1}, {scale: 1, opacity: 1}, 'pj05and06')



  /* 마우스 포인터 */
  $(document).mousemove(function(e){
    gsap.to(".cursor", {
      x: e.clientX-75,
      y: e.clientY-130,
    })

    $('.content').mouseover(function(){
      $('.cursor').addClass('show');
    })
    $('.content').mouseleave(function(){
      $('.cursor').removeClass('show');
    })
  });



  /* 다크/라이트 모드 */
  $('.mode a').click(function(e){
    e.preventDefault();

    $('.system').toggleClass('light');
  });


});
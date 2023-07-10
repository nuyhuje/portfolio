$(function () {
  /* 페이지 로드 */
  const loading = gsap
    .timeline({})

    .addLabel("time");
  loading
    .fromTo(
      ".header .header__line",
      { width: 0 },
      { width: 100 + "%", duration: 2.5, ease: "power4.out" },
      "time"
    )
    .from(".header h1", { opacity: 0, duration: 1 }, "time")
    .from(".header .clock", { opacity: 0, duration: 1 }, "time")
    .from(".header .mode", { opacity: 0 }, "time")
    .from(".section__home", { opacity: 0, scale: 1.1, duration: 1.5 }, 0.1)
    .from(
      ".section__home .text-wrapper h2",
      { yPercent: 50, opacity: 0, duration: 1, ease: "power4.out" },
      0.5
    )
    .from(
      ".section__home .text-wrapper p",
      { yPercent: 50, opacity: 0, duration: 1, ease: "power4.out" },
      0.75
    )
    //  .from('.section__home .text-wrapper h2', {opacity: 0, duration: 1}, 1)
    //  .from('.section__home .text-wrapper p', {opacity: 0, duration: 1}, 1.5)
    //  .fromTo('.title-fixed', {width: 0}, {width: 7.6087+"vh", duration: 2.5, ease: "power4.out"}, "time")
    .from(
      ".title-fixed",
      { xPercent: -100, duration: 1.8, ease: "power2.out" },
      1
    )
    .from(".cursor", { opacity: 0 }, 3.5);

  // "Latest Project" 텍스트 애니메이션
  /* $('.section__home .text-wrapper').each(function(index, item){
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
  $(".title-fixed").each(function (index, item) {
    sideTitle = $(this).find("h2, em");

    headTxt = new SplitType(sideTitle, { types: "chars" });
    gsap.fromTo(
      headTxt.chars,
      {
        yPercent: 50,
        opacity: 0,
      },
      {
        yPercent: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 0.5,
        delay: 3.8,
      }
    );
  });

  /* 헤더 - 시간 */
  var Target = document.getElementById("clock__time");
  var Target_apm = document.getElementById("clock__format");

  function clock() {
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    var AmPm = "AM";
    if (hours > 12) {
      var AmPm = "PM";
      hours %= 12;
    }

    Target.innerText = `${hours < 10 ? `0${hours}` : hours}:${
      minutes < 10 ? `0${minutes}` : minutes
    }`;
    // :${seconds < 10 ? `0${seconds}` : seconds}` (초)

    Target_apm.innerText = `${AmPm}`;
  }
  clock();
  setInterval(clock, 1000); // 1초마다 실행

  /* 메인 - 스크롤시 특정 위치에서 서브 타이틀 효과 */
  $(window).scroll(function () {
    curr = $(window).scrollLeft();

    target = $(".section__projects .section__side-main").offset().left;
    // $('.header').text('Current ' + curr + ',' + ' Target ' + target);

    if (curr >= target) {
      $(".title-fixed, .project-hero").addClass("active");
    } else {
      $(".title-fixed, .project-hero").removeClass("active");
    } // Fixed Title -> Project Title

    // "Projects Sub Title"
    curr = $(window).scrollTop();

    target_02 = $(".section__projects").offset().top;
    // $('.header').text('Current ' + curr + ',' + ' Target ' + target);

    if (curr >= 1669) {
      $(".project-hero li:first-child, .project-hero li:nth-child(2)").addClass(
        "show"
      );
    } else {
      $(
        ".project-hero li:first-child, .project-hero li:nth-child(2)"
      ).removeClass("show");
    } // Everest

    if (curr >= 3002) {
      $(".project-hero li:nth-child(3)").addClass("show");
      $(".project-hero li:nth-child(2)").addClass("hidden");
    } else {
      $(".project-hero li:nth-child(3)").removeClass("show");
      $(".project-hero li:nth-child(2)").removeClass("hidden");
    } // Our Legacy

    if (curr >= 4335) {
      $(".project-hero li:nth-child(4)").addClass("show");
      $(".project-hero li:nth-child(3)").addClass("hidden");
    } else {
      $(".project-hero li:nth-child(4)").removeClass("show");
      $(".project-hero li:nth-child(3)").removeClass("hidden");
    } // Creative Partners

    if (curr >= 5669) {
      $(".project-hero li:nth-child(5)").addClass("show");
      $(".project-hero li:nth-child(4)").addClass("hidden");
    } else {
      $(".project-hero li:nth-child(5)").removeClass("show");
      $(".project-hero li:nth-child(4)").removeClass("hidden");
    } // Andar

    if (curr >= 7002) {
      $(".project-hero li:nth-child(6)").addClass("show");
      $(".project-hero li:nth-child(5)").addClass("hidden");
    } else {
      $(".project-hero li:nth-child(6)").removeClass("show");
      $(".project-hero li:nth-child(5)").removeClass("hidden");
    } // Seoul
  });

  // "Project Title" 서브 타이틀 텍스트 애니메이션
  $(".project-hero li:first-child").each(function (index, item) {
    sideTitle = $(this).find("h2, em");

    headTxt = new SplitType(sideTitle, { types: "chars" });
    gsap.fromTo(
      headTxt.chars,
      {
        yPercent: 50,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: ".section__projects",
          start: "+=1300 16",
          // scrub: 1,
          // markers: true,
        },
        yPercent: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 0.5,
      }
    );
  }); // Dazed

  $(".project-hero li:nth-child(2)").each(function (index, item) {
    sideTitle = $(this).find("h2, em");

    headTxt = new SplitType(sideTitle, { types: "chars" });
    gsap.fromTo(
      headTxt.chars,
      {
        yPercent: 50,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: ".project-hero li:nth-child(2)",
          start: "+=1600 34",
          scrub: 1,
          // markers: true,
        },
        yPercent: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 0.5,
      }
    );
  }); // Everest 1669

  $(".project-hero li:nth-child(3)").each(function (index, item) {
    sideTitle = $(this).find("h2, em");

    headTxt = new SplitType(sideTitle, { types: "chars" });
    gsap.fromTo(
      headTxt.chars,
      {
        yPercent: 50,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: ".project-hero li:nth-child(3)",
          start: "+=2900 1",
          scrub: 1,
          // markers: true,
        },
        yPercent: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 0.5,
      }
    );
  }); // Our Legacy 3002

  $(".project-hero li:nth-child(4)").each(function (index, item) {
    sideTitle = $(this).find("h2, em");

    headTxt = new SplitType(sideTitle, { types: "chars" });
    gsap.fromTo(
      headTxt.chars,
      {
        yPercent: 50,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: ".project-hero li:nth-child(4)",
          start: "+=4250 18",
          scrub: 1,
          // markers: true,
        },
        yPercent: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 0.5,
      }
    );
  }); // Creative Partners 4335

  $(".project-hero li:nth-child(5)").each(function (index, item) {
    sideTitle = $(this).find("h2, em");

    headTxt = new SplitType(sideTitle, { types: "chars" });
    gsap.fromTo(
      headTxt.chars,
      {
        yPercent: 50,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: ".project-hero li:nth-child(5)",
          start: "+=5570 4",
          scrub: 1,
          // markers: true,
        },
        yPercent: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 0.5,
      }
    );
  }); // Andar 5669

  $(".project-hero li:nth-child(6)").each(function (index, item) {
    sideTitle = $(this).find("h2, em");

    headTxt = new SplitType(sideTitle, { types: "chars" });
    gsap.fromTo(
      headTxt.chars,
      {
        yPercent: 50,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: ".project-hero li:nth-child(6)",
          start: "+=6900 1",
          scrub: 1,
          // markers: true,
        },
        yPercent: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 0.5,
      }
    );
  }); // Seoul 7002

  /* 메인 - 'section__home' 이미지 애니메이션 */
  gsap.to(".section__home img", {
    scrollTrigger: {
      trigger: ".container",
      start: "top top",
      end: "bottom top",
      scrub: 0.1,
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
  });
  scroll
    .to(".container", { xPercent: -50 }) // x%: -35.1으로  값주면 이미지 효과 맞출수 있긴 하지만 이슈 발생

    // .addLabel('img')
    // scroll.to('.container', {xPercent: -100}, 'img') // x%: -35.1으로  값주면 이미지 효과 맞출수 있긴 하지만 이슈 발생

    // scroll.to('.title-fixed', {opacity: 0})
    .addLabel("pj01and02")
    .to(".section__projects .wrapper", { yPercent: -25 }, "pj01and02")
    .to(".pj_01 .hero", { height: 0 }, "pj01and02")
    .to(".pj_02 .hero", { height: "60vh" }, "pj01and02")
    //  .to('.pj_01 video', {scale: 1.2, opacity: 0.1}, 'pj01and02') // 스크롤시 닫히는 이미지에 애니메이션
    .fromTo(
      ".pj_02 img",
      { scale: 1.5, opacity: 0.1 },
      { scale: 1, opacity: 1 },
      "pj01and02"
    )
    .addLabel("pj02and03")
    .to(".pj_02 .hero", { height: 0 }, "pj02and03")
    .to(".pj_03 .hero", { height: "60vh" }, "pj02and03")
    // .to('.pj_02 img', {scale: 1.2, opacity: 0.1}, 'pj02and03')
    .fromTo(
      ".pj_03 img",
      { scale: 1.5, opacity: 0.1 },
      { scale: 1, opacity: 1 },
      "pj02and03"
    )
    .addLabel("pj03and04")
    .to(".pj_03 .hero", { height: 0 }, "pj03and04")
    .to(".pj_04 .hero", { height: "60vh" }, "pj03and04")
    // .to('.pj_03 img', { scale: 1.2, opacity: 0.1}, 'pj03and04')
    .fromTo(
      ".pj_04 video",
      { scale: 1.5, opacity: 0.1 },
      { scale: 1, opacity: 1 },
      "pj03and04"
    )
    .addLabel("pj04and05")
    .to(".pj_04 .hero", { height: 0 }, "pj04and05")
    .to(".pj_05 .hero", { height: "60vh" }, "pj04and05")
    // .to('.pj_04 video', {scale: 1.2, opacity: 0.1}, 'pj04and05')
    .fromTo(
      ".pj_05 img",
      { scale: 1.5, opacity: 0.1 },
      { scale: 1, opacity: 1 },
      "pj04and05"
    )
    .addLabel("pj05and06")
    .to(".pj_05 .hero", { height: 0 }, "pj05and06")
    .to(".pj_06 .hero", { height: "60vh" }, "pj05and06")
    // .to('.pj_05 img', {scale: 1.2, opacity: 0.1}, 'pj05and06')
    .fromTo(
      ".pj_06 img",
      { scale: 1.5, opacity: 0.1 },
      { scale: 1, opacity: 1 },
      "pj05and06"
    );

  /* 마우스 포인터 */
  $(document).mousemove(function (e) {
    gsap.to(".cursor", {
      x: e.clientX - 75,
      y: e.clientY - 130,
    });

    $(".content").mouseover(function () {
      $(".cursor").addClass("show");
    });
    $(".content").mouseleave(function () {
      $(".cursor").removeClass("show");
    });
  });

  /* 다크/라이트 모드 */
  $(".mode > a").click(function (e) {
    e.preventDefault();

    $(".system").toggleClass("light");
  });
});

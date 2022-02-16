$(function () {

  if(window.matchMedia('(max-width: 1023px)').matches){

    $('.half_n_half .txt_area .captionTl').html('Above: Charles Whylie on Island Peak')
    $('.half_n_half .txt_area .captionTl_03').html('Above: The Khumbu Glacier')
    $('.half_n_half .txt_area .captionTl_04').html('Below: Sherpa Porters in the icefall')

    $('.half_n_half_05 .captionY_03 span').html('Above & below: Crossing the crevasse')

    $('.half_n_half_title .caption .captionTl_06').html('Below: George, band cutting steps in the icefall')
    $('.hnh_title_v2_02 .caption span').html('Above & below: Bourdillon & Evans exhausted')

    $('.half_n_half_03 .txt_area .captionTl_09').html('Above: George Lowe changes film at 27,300 ft')
    $('.half_n_half_03 .txt_area .captionY_06 span').html('Above: Hillary approaching the South East Ridge')

    $('.half_n_half_04 .txt_area .captionTl_11').html('Above: Tenzing on the summit, shot by Hillary')

  }





  // gsap.registerPlugin(ScrollTrigger);

  // ScrollTrigger.saveStyles(".mobile, .desktop");
  
  /* ScrollTrigger.matchMedia({

    "(max-width: 1024px)": function () {

      $('.bigImg_motion').each(function (index, item) {
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
        motionTl02.from(target, {
          yPercent: -23,
          scale: 1.07
        })
        motionTl02.to(target, {
          yPercent: 30,
          scale: 1
        })
      });

    },


    "(max-width: 799px)": function () {

    },

    "all": function () {

    }

  }); */



});
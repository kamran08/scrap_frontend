

$(document).ready(function(){

 $(document).on("scroll",function(){
            $(this).scrollTop()>10?
            $("._landng_menu").addClass("_landng_menu_fixed"):
            $("._landng_menu").removeClass("_landng_menu_fixed")})

    // SLIDER 
    $("._lndng_slider_active").owlCarousel({
            loop: true,
            animateIn: "fadeIn",
            animateOut: "fadeOut",
            responsiveClass: true,
            autoplay: true,
            autoplayTimeout: 7e3,
            responsive: { 
              0: { items: 1 }, 
            600: { items: 1 }, 
            1000: { items: 2 } 
          },
        })

    // SLIDER
        $("._lndng2_slider_active").owlCarousel({
            loop: true,
             dotsEach: true,
            animateIn: "fadeIn",
            animateOut: "fadeOut",
            responsiveClass: true,
            autoplay: true,
            autoplayTimeout: 7e3,
            responsive: { 
              0: { items: 1 }, 
            600: { items: 1 }, 
            1000: { items: 2 } 
          },
        })



// mobile menu
  $("._lndng2_mbl_menu_r8 span").click(function() {
    $("._lndng2_mbl_menu_overlay").addClass("_lndng2_mbl_menu_overlay_active");
    $("._lndng2_mbl_menu_list_all").addClass("_side_left");
  });

  $("._close_sidbar span").click(function() {
    $("._lndng2_mbl_menu_overlay").removeClass("_lndng2_mbl_menu_overlay_active");
    $("._lndng2_mbl_menu_list_all").removeClass("_side_left");
  });


// landing page language dropdown          
    $("._lndng2_footer_lft_btn").click(function(){
      $("._lndng2_ftr_drpdwn").toggleClass("_lndng2_ftr_drpdwn_active");
    })

 $("._mbl_menu_search span").click(function(){
      $("._mbl_menu_search_input").toggleClass("_mbl_menu_search_input_active");
    })





});



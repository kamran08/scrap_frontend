<template>
    <div>
        <div class="_homeMenu">
            <div class="container">
                <div class="_homeMenu_con">
                    <div class="_homeMenu_logo">
                        <img class="_homeMenu_logo_img" src="/img/logo.png" alt="" title="">
                    </div> 

                    <ul class="_homeMenu_list">
                        <li class="_active">
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">How It Works</a>
                        </li>
                        <li>
                            <a href="">Features</a>
                        </li>
                        <li>
                            <a href="">Testimonial</a>
                        </li>
                    </ul>

                    <div class="_homeMenu_right">
                        <button class="_homeMenu_btn" @click="goToSignIn()">
                            Get Started <span class="_homeMenu_btn_errow"><i class="fas fa-long-arrow-alt-right"></i></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="">
           <div class="_landng_page">
                <!-- BANNER -->
                <div class="_lndng_bnr">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-12 col-md-6 col-lg-6 _pdng_r0">
                                <p class="_homeBanner_subTitle">Create bill</p>
                                <h1 class="_homeBanner_title">Get Support Online to Pay Your Bills</h1>
                                <p class="_homeBanner_text">
                                    Use Scrapabill to pay off your bills or debts quickly. It's an online social platform
                                    where friends and family meet, interact and tell stories to get cash support.
                                </p>
                                <ul class="_homeBanner_btn">
                                    <li>
                                        <a class="_homeBanner_btn_one" href="">Learn more <i class="fas fa-book-open"></i></a>
                                    </li>
                                    <li>
                                        <a class="_homeBanner_btn_two" href="">Contact us <i class="fas fa-address-book"></i></a>
                                    </li>
                                </ul>
                            </div>

                            <div class="col-12 col-md-6 col-lg-6 _pdng_l0">
                                <div class="_bnr_r8">
                                    <div class="_bnr_r8_img_main">
                                        <!-- CARD -->
                                        <div class="_bnr_r8_card">
                                            <span class="_clr1"><i class="far fa-address-card"></i></span>
                                            <p>ID verfication</p>
                                        </div>
                                        <!-- CARD -->

                                        <!-- CARD -->
                                        <div class="_bnr_r8_card">
                                            <span class="_clr1"><i class="fas fa-wallet"></i></span>
                                            <p>Top-up e-wallet</p>
                                        </div>
                                        <!-- CARD -->

                                        <!-- CARD -->
                                        <div class="_bnr_r8_card">
                                            <span class="_clr1"><i class="far fa-file-alt"></i></span>
                                            <p>Creat your bill</p>
                                        </div>
                                        <!-- CARD -->

                                        <!-- CARD -->
                                        <div class="_bnr_r8_card">
                                            <span class="_clr1"><i class="fas fa-file-invoice"></i></span>
                                            <p>Track transactions</p>
                                        </div>
                                        <!-- CARD -->

                                        <div class="_bnr_r8_img_all">
                                            <div class="_bnr_r8_img">
                                                <img src="/img/girl.png" alt="image">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
                <!-- BANNER -->

                <!-- BANNER BOTTOM CARD -->
                <div class="_bnr_btm_crd_sec _bg_wht">
                    <div class="container">
                        <div class="_bnr_btm_crd_all">
                            <div class="row">
                                <div class="col-12 col-md-4 col-lg-4">
                                    <div class="_bnr_btm_crd _bg_wht _dis_flex">
                                        <div class="_bnr_btm_crd_lft">
                                            <span class="_lndng_icon_card">
                                                <i class="far fa-file-alt"></i>
                                            </span>
                                        </div>
                                        <div class="_bnr_btm_crd_r8">
                                            <h4 class="_lndng_title2">Monitor bills due date</h4>
                                            <p class="_lndng_txt1">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Invidunt.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-4 col-lg-4">
                                    <div class="_bnr_btm_crd _bg_wht _dis_flex">
                                        <div class="_bnr_btm_crd_lft">
                                            <span class="_lndng_icon_card">
                                                <i class="fas fa-wallet"></i>
                                            </span>
                                        </div>
                                        <div class="_bnr_btm_crd_r8">
                                            <h4 class="_lndng_title2">View funding balance</h4>
                                            <p class="_lndng_txt1">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Invidunt.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-4 col-lg-4">
                                    <div class="_bnr_btm_crd _bg_wht _dis_flex">
                                        <div class="_bnr_btm_crd_lft">
                                            <span class="_lndng_icon_card">
                                                <i class="far fa-user"></i>
                                            </span>
                                        </div>
                                        <div class="_bnr_btm_crd_r8">
                                            <h4 class="_lndng_title2">Set up profile</h4>
                                            <p class="_lndng_txt1">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Invidunt.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- BANNER BOTTOM CARD -->

                <!-- HOW IT WORK -->
                <div class="container">
                    <div class="_lndng_how_it_wrk">
                        <div class="_lndng_how_it_wrk_top _text_center">
                            <h1 class="_lndng_title1">
                                How It's Work
                            </h1>
                            <p class="_lndng_txt1">
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy tempor Invidunt.
                            </p>
                        </div>

                        <div class="_lndng_how_it_wrk_card_all _dis_flex">
                            <!-- CARD -->
                            <div class="_lndng_wrk_card_main">
                                <div class="_lndng_wrk_card _bg_wht">
                                    <div class="_bnr_btm_crd_lft">
                                        <span class="_lndng_icon_card">
                                            <i class="far fa-file-alt"></i>
                                        </span>
                                    </div>
                                    <div class="_bnr_btm_crd_r8">
                                        <h4 class="_lndng_title2">
                                            Enter Bill
                                        </h4>
                                        <p class="_lndng_txt1">Lorem ipsum dolor sit amet, consetesadipscing elitr.</p>
                                    </div>
                                </div>
                            </div>
                            <!-- CARD -->

                            <!-- CARD -->
                            <div class="_lndng_wrk_card_main">
                                <div class="_lndng_wrk_card _bg_wht">
                                    <div class="_bnr_btm_crd_lft">
                                        <span class="_lndng_icon_card">
                                            <i class="far fa-file-alt"></i>
                                        </span>
                                    </div>
                                    <div class="_bnr_btm_crd_r8">
                                        <h4 class="_lndng_title2">
                                            Follow Bill
                                        </h4>
                                        <p class="_lndng_txt1">Lorem ipsum dolor sit amet, consetesadipscing elitr.</p>
                                    </div>
                                </div>
                            </div>
                            <!-- CARD -->

                            <!-- CARD -->
                            <div class="_lndng_wrk_card_main">
                                <div class="_lndng_wrk_card _bg_wht">
                                    <div class="_bnr_btm_crd_lft">
                                        <span class="_lndng_icon_card">
                                            <i class="far fa-file-alt"></i>
                                        </span>
                                    </div>
                                    <div class="_bnr_btm_crd_r8">
                                        <h4 class="_lndng_title2">
                                            Get Support
                                        </h4>
                                        <p class="_lndng_txt1">Lorem ipsum dolor sit amet, consetesadipscing elitr.</p>
                                    </div>
                                </div>
                            </div>
                            <!-- CARD -->

                            <!-- CARD -->
                            <div class="_lndng_wrk_card_main">
                                <div class="_lndng_wrk_card _bg_wht">
                                    <div class="_bnr_btm_crd_lft">
                                        <span class="_lndng_icon_card">
                                            <i class="far fa-file-alt"></i>
                                        </span>
                                    </div>
                                    <div class="_bnr_btm_crd_r8">
                                        <h4 class="_lndng_title2">
                                            Withdraw Funds
                                        </h4>
                                        <p class="_lndng_txt1">Lorem ipsum dolor sit amet, consetesadipscing elitr.</p>
                                    </div>
                                </div>
                            </div>
                            <!-- CARD -->

                            <!-- CARD -->
                            <div class="_lndng_wrk_card_main">
                                <div class="_lndng_wrk_card _bg_wht">
                                    <div class="_bnr_btm_crd_lft">
                                        <span class="_lndng_icon_card">
                                            <i class="far fa-file-alt"></i>
                                        </span>
                                    </div>
                                    <div class="_bnr_btm_crd_r8">
                                        <h4 class="_lndng_title2">
                                            Pay Bill
                                        </h4>
                                        <p class="_lndng_txt1">Lorem ipsum dolor sit amet, consetesadipscing elitr.</p>
                                    </div>
                                </div>
                            </div>
                            <!-- CARD -->
                        </div>

                        <div class="_lndng_wrk_btm _dis_flex _text_center">
                            <p class="_lndng_txt1">Lorem ipsum dolor sit amet, consetetur adipscing elitr.</p>
                            
                            <a href="">
                                Get Started <span><i class="fas fa-long-arrow-alt-right"></i></span>
                            </a>
                        </div>
                    </div>
                 </div>
                <!-- HOW IT WORK -->

                <!-- JOIN Scrapabill -->
                <div class="_lndng_join_scrabil _padd_b50 _padd_t50">
                    <div class="container">
                        <div class="row">
                            <div class="col-12 col-md-6 col-lg-6">
                                <div class="_lndng_join_lft_all">
                                    <div class="_lndng_join_lft">
                                        <img src="/img/man1.jpg" alt="image">
                                    </div>  
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-5">
                                <div class="_lndng_join_r8">
                                    <div class="_lndng_join_r8_top _mar_b55">
                                        <h1 class="_lndng_title1 _mar_b15">
                                            Why Join Scrapabill?
                                        </h1>
                                        <p class="_lndng_txt1">
                                            Cycles of bills and debt overload can cause stress, fear, depression, or anxiety.
                                        </p>
                                    </div>

                                    <div class="_lndng_join_r8_itm_all">

                                                <!-- ITEAM -->
                                        <div class="_lndng_join_r8_itm _dis_flex">
                                            <div class="_lndng_join_r8_itm_lft">
                                                <span class="_lndng_icon_card _mar_r20">
                                                    <i class="far fa-file-alt"></i>
                                                </span>
                                            </div>
                                            <div class="_lndng_join_r8_itm_r8">
                                                <h4 class="_lndng_title2">
                                                    Overcome Stress and Anxiety
                                                </h4>
                                                <p class="_lndng_txt1">
                                                    Cycles of bills and debt overload can cause stress, fear, depression, or anxiety.
                                                </p>
                                            </div>
                                        </div>
                                        <!-- ITEAM -->

                                        <!-- ITEAM -->
                                        <div class="_lndng_join_r8_itm _dis_flex">
                                            <div class="_lndng_join_r8_itm_lft">
                                                <span class="_lndng_icon_card _mar_r20">
                                                    <i class="far fa-file-alt"></i>
                                                </span>
                                            </div>
                                            <div class="_lndng_join_r8_itm_r8">
                                                <h4 class="_lndng_title2">
                                                    The Bills Never End
                                                </h4>
                                                <p class="_lndng_txt1">
                                                    With over 500 billion invoices issued worldwide each year, connect with friends to scrap bills together.
                                                </p>
                                            </div>
                                        </div>
                                        <!-- ITEAM -->

                                                <!-- ITEAM -->
                                        <div class="_lndng_join_r8_itm _dis_flex">
                                            <div class="_lndng_join_r8_itm_lft">
                                                <span class="_lndng_icon_card _mar_r20">
                                                    <i class="far fa-file-alt"></i>
                                                </span>
                                            </div>
                                            <div class="_lndng_join_r8_itm_r8">
                                                <h4 class="_lndng_title2">
                                                    We Make Life Enjoyable.
                                                </h4>
                                                <p class="_lndng_txt1">
                                                    Scrap bills you receive–mobile phone, rent, insurance, repairs, utilities, and save more money to enjoy your life.
                                                </p>
                                            </div>
                                        </div>
                                        <!-- ITEAM -->

                                                <!-- ITEAM -->
                                        <div class="_lndng_join_r8_itm _dis_flex">
                                            <div class="_lndng_join_r8_itm_lft">
                                                <span class="_lndng_icon_card _mar_r20">
                                                    <i class="far fa-file-alt"></i>
                                                </span>
                                            </div>
                                            <div class="_lndng_join_r8_itm_r8">
                                                <h4 class="_lndng_title2">
                                                    We Grow Your Network
                                                </h4>
                                                <p class="_lndng_txt1">
                                                    Get support from several people at once–friends, neighbors, associates, and those around you.
                                                </p>
                                            </div>
                                        </div>
                                        <!-- ITEAM -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- JOIN Scrapabill -->

                <!-- FEATURES -->
                <div class="_lndng_feature _padd_t50">
                    <div class="_lndng_feature_top _text_center _mar_b55">
                        <h1 class="_lndng_title1 _mar_b15">
                            Features
                        </h1>
                        <p class="_lndng_txt1">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy tempor Invidunt.
                        </p>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-12 col-md-4 col-lg-4">
                                <div class="_lndng_feature_card _bg_wht">
                                    <div class="_lndng_feature_card_top">
                                        <img src="/img/man1.jpg" alt="image">
                                    </div>
                                    <div class="_lndng_feature_card_btm _dis_flex">
                                        <div class="_lndng_feature_card_lft">
                                            <span class="_lndng_icon_card _mar_r20">
                                                <i class="far fa-file-alt"></i>
                                            </span>
                                        </div>

                                        <div class="_lndng_feature_card_r8">
                                            <h4 class="_lndng_title2">
                                                Top-up e-wallet
                                            </h4>
                                            <p class="_lndng_txt1">
                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Invidunt.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-12 col-md-4 col-lg-4">
                                <div class="_lndng_feature_card _bg_wht">
                                    <div class="_lndng_feature_card_top">
                                        <img src="/img/man1.jpg" alt="image">
                                    </div>
                                    <div class="_lndng_feature_card_btm _dis_flex">
                                        <div class="_lndng_feature_card_lft">
                                            <span class="_lndng_icon_card _mar_r20">
                                                <i class="far fa-file-alt"></i>
                                            </span>
                                        </div>

                                        <div class="_lndng_feature_card_r8">
                                            <h4 class="_lndng_title2">
                                                Top-up e-wallet
                                            </h4>
                                            <p class="_lndng_txt1">
                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Invidunt.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-12 col-md-4 col-lg-4">
                                <div class="_lndng_feature_card _bg_wht">
                                    <div class="_lndng_feature_card_top">
                                        <img src="/img/man1.jpg" alt="image">
                                    </div>
                                    <div class="_lndng_feature_card_btm _dis_flex">
                                        <div class="_lndng_feature_card_lft">
                                            <span class="_lndng_icon_card _mar_r20">
                                                <i class="far fa-file-alt"></i>
                                            </span>
                                        </div>

                                        <div class="_lndng_feature_card_r8">
                                            <h4 class="_lndng_title2">
                                                Top-up e-wallet
                                            </h4>
                                            <p class="_lndng_txt1">
                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Invidunt.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- FEATURES -->

                    <!-- OUR APP -->
                <div class="_lndng_our_app_sec">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-12 col-md-6 col-lg-6">
                                <div class="_lndng_our_app_lft">
                                    <div class="_lndng_our_app_pic">
                                        <img src="/img/phone.jpg" alt="image">
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-6">
                                <div class="_lndng_our_app_r8">
                                    <h1 class="_lndng_title1 _mar_b15">
                                        Try Our App Now
                                    </h1>
                                    <p class="_lndng_txt1">
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo.
                                    </p>
                                    <ul dir="_dis_flex _mar_t30px">
                                        <li>
                                            <a href="">
                                                <img src="/img/play_store1.jpg" alt="img">
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <img src="/img/play_store2.jpg" alt="img">
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- OUR APP -->

                <!-- SLIDER -->
                <div class="_lndng_slider_sec _padd_t100 _padd_b60">
                    <div class="container">
                        <div class="_lndng_slider_top _text_center">
                            <h1>
                                What our customer says <br> about our services
                            </h1>
                            <p class="_lndng_txt1">
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                            </p>
                        </div>

                        <div class="_lndng_slider_main">
                            <div class="_lndng_slider_active owl-carousel">
                                <!-- ITEM -->
                                <div class="_lndng_slider_card">
                                    <p>
                                        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirm od tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores."
                                    </p>
                                    <div class="_lndng_slider_card_btm _dis_flex _mar_t30">
                                        <div class="_lndng_slider_btm_lft">
                                            <img src="/img/man.jpg" alt="image">
                                        </div>
                                        <div class="_lndng_slider_btm_r8">
                                            <h3>Bianca A. Wells</h3>
                                            <p>CEO of Arttree</p>
                                        </div>
                                    </div>
                                    <!-- quote -->
                                    <div class="_lndng_sldr_qte">
                                        <span><i class="fas fa-quote-right"></i></span>
                                    </div>
                                    <!-- quote -->
                                </div>
                                <!-- ITEM -->

                                <!-- ITEM -->
                                <div class="_lndng_slider_card">
                                    <p>
                                        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirm od tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores."
                                    </p>
                                    <div class="_lndng_slider_card_btm _dis_flex _mar_t30">
                                        <div class="_lndng_slider_btm_lft">
                                            <img src="/img/man.jpg" alt="image">
                                        </div>
                                        <div class="_lndng_slider_btm_r8">
                                            <h3>Bianca A. Wells</h3>
                                            <p>CEO of Arttree</p>
                                        </div>
                                    </div>
                                    <!-- quote -->
                                    <div class="_lndng_sldr_qte">
                                        <span><i class="fas fa-quote-right"></i></span>
                                    </div>
                                    <!-- quote -->
                                </div>
                                <!-- ITEM -->

                                <!-- ITEM -->
                                <div class="_lndng_slider_card">
                                    <p>
                                        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirm od tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores."
                                    </p>
                                    <div class="_lndng_slider_card_btm _dis_flex _mar_t30">
                                        <div class="_lndng_slider_btm_lft">
                                            <img src="/img/man.jpg" alt="image">
                                        </div>
                                        <div class="_lndng_slider_btm_r8">
                                            <h3>Bianca A. Wells</h3>
                                            <p>CEO of Arttree</p>
                                        </div>
                                    </div>
                                    <!-- quote -->
                                    <div class="_lndng_sldr_qte">
                                        <span><i class="fas fa-quote-right"></i></span>
                                    </div>
                                    <!-- quote -->
                                </div>
                                <!-- ITEM -->

                                <!-- ITEM -->
                                <div class="_lndng_slider_card">
                                    <p>
                                        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirm od tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores."
                                    </p>
                                    <div class="_lndng_slider_card_btm _dis_flex _mar_t30">
                                        <div class="_lndng_slider_btm_lft">
                                            <img src="/img/man.jpg" alt="image">
                                        </div>
                                        <div class="_lndng_slider_btm_r8">
                                            <h3>Bianca A. Wells</h3>
                                            <p>CEO of Arttree</p>
                                        </div>
                                    </div>
                                    <!-- quote -->
                                    <div class="_lndng_sldr_qte">
                                        <span><i class="fas fa-quote-right"></i></span>
                                    </div>
                                    <!-- quote -->
                                </div>
                                <!-- ITEM -->
                            </div>
                        </div>
                    </div>
                </div>
                <!-- SLIDER -->

                <div class="_lndng_footer">

                    <div class="_lndng_footer_mnu _text_center">
                        <img src="/img/appifylab_logo.png" alt="image">
                        <p class="_lndng_txt1">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.
                        </p>
                        <ul class="_dis_flex">
                            <li>
                                <a href="">About us</a>
                            </li>
                            <li>
                                <a href="">How It Works</a>
                            </li>
                            <li>
                                <a href="">Privacy & police</a>
                            </li>
                            <li>
                                <a href="">Terms and condition</a>
                            </li>
                            <li>
                                <a href="">How It Works</a>
                            </li>
                            <li>
                                <a href="">Features</a>
                            </li>
                        </ul>
                    </div>

                    <div class="_lndng_footer_sbcrb _bg_wht">
                        <div class="container">
                            <div class="_lndng_footer_sbcrb_inner _dis_flex _dis_flex_cntr1">
                                <!-- LEFT -->
                                <div class="_lndng_footer_sbcrb_lft">
                                    <h3>
                                        Subscribe our newsletter
                                    </h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consetetur.
                                    </p>
                                </div>
                                <!-- LEFT -->

                                <!-- RIGHT -->
                                <div class="_lndng_footer_sbcrb_r8">
                                    <input type="text" placeholder="Please enter your address">
                                    <div class="_lndng_footer_sbcrb_btn _dis_flex _dis_flex_cntr1">
                                        <p>Get Subscribe Now</p>
                                        <span><i class="fas fa-long-arrow-alt-right"></i></span>
                                    </div>
                                </div>
                                <!-- RIGHT -->
                            </div>
                        </div>
                    </div>

                    <div class="_lndng_footer_social">
                        <div class="container">
                            <div class="_lndng_footer_social_inner _dis_flex_cntr1 _dis_flex">
                                <div class="_lndng_footer_social_lft">
                                    <ul>
                                        <li>
                                            <a href="">
                                                <span><i class="fab fa-facebook-f"></i></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <span><i class="fab fa-twitter"></i></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <span><i class="fab fa-linkedin-in"></i></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <span><i class="fab fa-instagram"></i></span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="_lndng_footer_social_r8">
                                    <p >
                                        Copyright 2021 'scrapabill'.
                                    </p>
                                </div>
                            </div>
                         </div>
                    </div>

                </div>
                 <!-- FOOTER -->

                 </div>

         </div>
    </div>
</template>

<script>
export default {
    middleware:"guest",
    methods:{
        goToSignIn(){
            this.$router.push('/login')
        }
    }
}
</script>
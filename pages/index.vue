<template>
	<div>
		<!-- MENU -->
	<div class="_landng_menu">
		<div class="container _lndng_cntnr">
			<div class="_landng_menu_inner _dis_flex">
				<!-- LOGO -->
				<div class="_landng_menu_lft">
					<a href="">
						<img src="/img/logo2.png" alt="image">
					</a>
				</div>
				<!-- LOGO -->

				<!-- MENU RIGHT -->
				<div class="_landng_menu_r8">
					<div class="_landng_menu_list">
						<ul class="_dis_flex">
							<li class="_active">
								<nuxtLink to="/">
									<span><i class="fas fa-home"></i></span>
								</nuxtLink>
							</li>
							<li>
								<a href="#1">Why Scrapabill?</a>
							</li>
							<li>
								<a href="#2">How It Works</a>
							</li>
							<li>
								<a href="#3">Features</a>
							</li>
							<li>
								<a href="#4">Testimonials</a>
							</li>
							<li>
								<a href="#5">Mobile</a>
							</li>
							<li>
								<nuxt-link to="/login">
									<Button type="primary" class="_landng_menu_btn"> 
										Login
										<!-- Get Started -->
									</Button>
								</nuxt-link>
							</li>
							<li>
								<nuxt-link to="/register">
									<Button type="primary" class="_landng_menu_btn"> 
										Sign Up
										<!-- Get Started -->
									</Button>
								</nuxt-link>
							</li>
						</ul>
					</div>
				</div>
				<!-- MENU RIGHT -->
			</div>
		</div>
	</div>
	<!-- MENU -->

	<!-- MOBILE MENU -->
	<div class="_lndng2_mbl_menu">
		<div class="_lndng2_mbl_menu_inner _dis_flex">
			<div class="_lndng2_mbl_menu_lft">
				<div class="_lndng2_mbl_menu_logo">
					<a href="">
						<img src="/img/logo2.png" alt="image">
					</a>
				</div>
			</div>
			<div class="_lndng2_mbl_menu_r8">
				<span><i class="fas fa-bars"></i></span>
			</div>
		</div>
	</div>

	<div class="_lndng2_mbl_menu_overlay">
		<div class="_mbl_menu_list">
			
			<div class="_lndng2_mbl_menu_list_all">
				<!-- CLOSE -->
				<div class="_close_sidbar">
					<span><i class="fas fa-times"></i></span>
				</div>
				<!-- CLOSE -->
				<ul>
					<li>
						<nuxtLink to="/">
							<span><i class="fas fa-home"></i></span>
						</nuxtLink>
					</li>
					<li>
						<a href="#1">Why Scrapabill?</a>
					</li>
					<li>
						<a href="#2">How It Works</a>
					</li>
					<li>
						<a href="#3">Features</a>
					</li>
					<li>
						<a href="#4">Testimonials</a>
					</li>
					<li>
						<a href="#5">Mobile</a>
					</li>
					<li>
						<nuxt-link to="/login">
							<Button type="primary" >Log in</Button>
						</nuxt-link>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<!-- MOBILE MENU -->

   <!-- BANNER -->
   <div class="_lndng2_banner">
   		<div class="container _lndng_cntnr">
   			<div class="row">
   				<div class="col-12 col-md-8 col-lg-8">
   					<div class="_lndng2_banner_lft">
   						<h1>
   							Get Cash Support Online to Pay Bills
   						</h1>
   						<p>
   							Scrapabill is an online social platform where friends, members and family meet, interact, and tell financial stories to get cash support for bills and debts.
   						</p>
   						<ul>
   							<li>
   								<input v-model="email" type="text" placeholder="Enter Email">
   								<button class="_lndng2_btn" @click="goToSignUp()">Get Started</button>
   							</li>
   							<li>
   								<button>Contact Us</button>
   							</li>
   						</ul>

   						<div class="_lndng2_banner_vdo">
   							<span><i class="fas fa-play"></i></span>
   							<img src="/img/man1.jpg" alt="image">
   						</div>
   					</div>
   				</div>
   				<div class="col-12 col-md-4 col-lg-4 align-self: flex-end;">
   					<div class="_lndng2_banner_r8">

   						<img src="/img/banner_top.svg" alt="image">
   						<!-- <img src="/img/man3.jpg" alt="image"> -->
   					</div>
   				</div>
   			</div>
   		</div>
   </div>
   <!-- BANNER -->

   <!-- Why Scrapabill -->
   <div class="_lndng2_abt _bg_wht" id="1">
   	   <div class="container _lndng_cntnr">
   	   		<div class="_lndng2_abt_top _text_center">
   	   			<h1 class="_lndng2_title1">
   	   				Why Scrapabill?
   	   			</h1>
   	   			<p class="_lndng2_txt1">
   	   				Join community support when in financial need. Use Scrapabill to pay off your bills and debts quickly. Want more practical reasons to Scrapabill?
   	   			</p>
   	   		</div>
   	   		<div class="row">
   	   			<div class="col-12 col-md-6 col-lg-6">
   	   				<div class="_lndng2_abt_crd _dis_flex">
   	   					<div class="_lndng2_abt_crd_lft _dis_flex_all">
   	   					 	<img src="/img/icon1.png" alt="icon">
   	   					</div>
   	   					<div class="_lndng2_abt_crd_r8">
   	   						<h3>
   	   							Bills Never End
   	   						</h3>
   	   						<p>
   	   							Over 1 billion invoices are issued daily worldwide. Paying bills is a part of life.
   	   						</p>
   	   					</div>
   	   				</div>
   	   			</div>

   	   			<div class="col-12 col-md-6 col-lg-6">
   	   				<div class="_lndng2_abt_crd _dis_flex">
   	   					<div class="_lndng2_abt_crd_lft _dis_flex_all">
   	   					 	<img src="/img/icon2.png" alt="icon">
   	   					</div>
   	   					<div class="_lndng2_abt_crd_r8">
   	   						<h3>
   	   							Grow Your Network
   	   						</h3>
   	   						<p>
   	   							Anyone living around you or abroad can willingly and faithfully join your bill support network.
   	   						</p>
   	   					</div>
   	   				</div>
   	   			</div>

   	   			<div class="col-12 col-md-6 col-lg-6">
   	   				<div class="_lndng2_abt_crd _dis_flex">
   	   					<div class="_lndng2_abt_crd_lft _dis_flex_all">
   	   					 	<img src="/img/icon3.png" alt="icon">
   	   					</div>
   	   					<div class="_lndng2_abt_crd_r8">
   	   						<h3>
   	   							Enjoy Your Life
   	   						</h3>
   	   						<p>
   	   							Scrap your bills regularly and enjoy life with the extra savings.

   	   						</p>
   	   					</div>
   	   				</div>
   	   			</div>

   	   			<div class="col-12 col-md-6 col-lg-6">
   	   				<div class="_lndng2_abt_crd _dis_flex">
   	   					<div class="_lndng2_abt_crd_lft _dis_flex_all">
   	   					 	<img src="/img/icon4.png" alt="icon">
   	   					</div>
   	   					<div class="_lndng2_abt_crd_r8">
   	   						<h3>
   	   							Overcome Debt Overload
   	   						</h3>
   	   						<p>
   	   							Overcome stress, fear, depression, or anxiety from cycles of bills and debt overload.

   	   						</p>
   	   					</div>
   	   				</div>
   	   			</div>
   	   		</div>
   	   </div>
   </div>
   <!-- Why Scrapabill -->

   <!-- How It Works -->
   <div class="_lndng2_works" id="2">
   		<div class="container _lndng_cntnr">
   			<div class="_lndng2_abt_top _text_center">
   	   			<h1 class="_lndng2_title1">
   	   				How It Works
   	   			</h1>
   	   			<p class="_lndng2_txt1">
   	   				Enter bills one at a time. When friends follow you, the support amount gets added to your bill until your active bill scraps. Take five easy steps to Scrapabill.
   	   			</p>
   	   		</div>

   			<div class="row justify-content-center">
   				<div class="col-12 col-lg-4 col-md-4">
   					<div class="_lndng2_wrk_crd _text_center">
   						<div class="_lndng2_wrk_crd_top _landng_wrk_clr1 _dis_flex_all">
   							<img src="/img/icon5.png">
   						</div>
   						<h3>
   							Enter Bill
   						</h3>
   						<p>
   							Enter bill details with your top-up.
   						</p>
   					</div>
   				</div>

   				<div class="col-12 col-lg-4 col-md-4">
   					<div class="_lndng2_wrk_crd _text_center">
   						<div class="_lndng2_wrk_crd_top _landng_wrk_clr2 _dis_flex_all">
   							<img src="/img/icon6.png">
   						</div>
   						<h3>
   							Follow Bill
   						</h3>
   						<p>
   							Follow an active bill on the platform.

   						</p>
   					</div>
   				</div>
   			

				<div class="col-12 col-lg-4 col-md-4">
					<div class="_lndng2_wrk_crd _text_center">
						<div class="_lndng2_wrk_crd_top _landng_wrk_clr3 _dis_flex_all">
							<img src="/img/icon7.png">
						</div>
						<h3>
							Get Support
						</h3>
						<p>
							Interact with friends to get more support.
						</p>
					</div>
				</div>

				<div class="col-12 col-lg-4 col-md-4">
					<div class="_lndng2_wrk_crd _text_center">
						<div class="_lndng2_wrk_crd_top _landng_wrk_clr4 _dis_flex_all">
							<img src="/img/icon8.png">
						</div>
						<h3>
							Withdraw Funds
						</h3>
						<p>
							Make withdrawal after your bill scraps.
						</p>
					</div>
				</div>

				<div class="col-12 col-lg-4 col-md-4">
					<div class="_lndng2_wrk_crd _text_center">
						<div class="_lndng2_wrk_crd_top _landng_wrk_clr5 _dis_flex_all">
							<img src="/img/icon9.png">
						</div>
						<h3>
							Pay Bill
						</h3>
						<p>
							Pay your bills to avoid penalties.
						</p>
					</div>
				</div>
			</div>
   		</div>
   </div>
   <!--How It Works -->

   <!-- Features -->
   <div class="_lndng2_feature" id="3">
   		<div class="container _lndng_cntnr">
   			<div class="row">
   				<div class="col-12 col-md-5 col-lg-4 _pad_l0">
   					<div class="_lndng2_feature_lft">
   						<!-- <img src="/img/girl1.png" alt="image"> -->
   						<img src="/img/feature.svg" alt="image">
   					</div>         
   				</div>               
   				<div class="col-12 col-md-7 col-lg-8">
   					<div class="_lndng2_feature_r8">
						<div class="_lndng2_feature_top _text_center">
			   				<h1 class="_lndng2_title1">
			   	   				Features
			   	   			</h1>
			   	   			<p class="_lndng2_txt1">
			   	   				With safety and security in mind, Scrapabill presents modern features.
			   	   			</p>
			   			</div>                                            
                              
			   			<ul>
			   				<li>         
			   					<img src="/img/done.png" alt="icon">
			   					<p>Instant Alert</p>
			   				</li>
			   				<li>
			   					<img src="/img/done.png" alt="icon">
			   					<p>Check Balance</p>
			   				</li>
			   				<li>
			   					<img src="/img/done.png" alt="icon">
			   					<p>Meet Friends</p>
			   				</li>
			   				<li>
			   					<img src="/img/done.png" alt="icon">
			   					<p>Support E-wallet</p>
			   				</li>            
			   				<li>
			   					<img src="/img/done.png" alt="icon">
			   					<p>ID Verification</p>
			   				</li>
			   				<li>
			   					<img src="/img/done.png" alt="icon">
			   					<p>GDPR Compliance</p>
			   				</li>
			   				<li>
			   					<img src="/img/done.png" alt="icon">
			   					<p>Manage Profile</p>
			   				</li>
			   				<li>
			   					<img src="/img/done.png" alt="icon">
			   					<p>Track Transactions</p>
			   				</li>
			   			</ul>                  
   					</div>
   				</div>
   			</div>
   		</div>
   </div>              
   <!-- Features -->                        

   <!-- Scrapabill For Business -->
   	<div class="_lndng2_bsns_sec_all _bg_wht">
	   <div class="_lndng2_bsns_sec">
	   		<div class="container _lndng_cntnr">
	   			<div class="_lndng2_bsns">
	   				<h1>
	   					Scrapabill For Business
	   				</h1>
	   				<p>
	   					Get support to move ahead with your business ideas, start-up, expansion, and growth.
	   				</p>        
	   				<button class="_lndng2_btn">Learn More</button>   
	   			</div>
	   		</div>
	   </div>
	</div>
   <!-- Scrapabill For Business -->

   <!-- Mobile App -->
   <div class="_lndng2_mbl_app" id="5">
	   	<div class="container _lndng_cntnr">
	   		<div class="_lndng2_mbl_app_inner _dis_flex">
	   			<div class="_lndng2_mbl_app_img">
	   				<img src="/img/mobile1.png" alt="image">
	   			</div>
	   			<div class="_lndng2_mbl_app_text">
	   				<h1 class="_lndng2_title1">
			   	   		Mobile App
			   	   	</h1>
			   	   	<p>
			   	   		Download the Scrapabill Mobile App and enjoy the convenience of scrapping household bills.
			   	   	</p>
			   	   	<ul>
			   	   		<li>
			   	   			<a href="">
			   	   				<img src="/img/mbl_apps1.png" alt="image">
			   	   			</a>
			   	   		</li>
			   	   		<li>
			   	   			<a href="">
			   	   				<img src="/img/mbl_apps2.png" alt="image">
			   	   			</a>
			   	   		</li>
			   	   	</ul>
	   			</div>
	   		</div>
	   	</div>
   </div>
   <!-- Mobile App -->

   <!-- Slider -->
   <div class="_lndng2_slider_sec _bg_wht">
   		<div class="container _lndng_cntnr">
   			<div class="_lndng2_slider_top">
   				<h1 class="_lndng2_title1">
   					Community Reviews
   				</h1>
   				<p>
   					Our bill scrappers are sharing their experiences
   				</p>
   			</div>

   			<div class="_lndng2_slider">
   				<div class="_lndng2_slider_active owl-carousel">

   					<div class="_lndng2_slider_sngl">
	   					<div class="_lndng2_slider_sngl_inner _text_center">
		   					<div class="_lndng2_slider_sngl_img">
		   						<img src="/img/man.jpg" alt="image">
		   					</div>
		   					 <h2>
		   					 	John Alex
		   					 </h2>
		   					 <ul class="_dis_flex">
		   					 	<li>
		   					 		<span><i class="fas fa-star"></i></span>
		   					 	</li>
		   					 	<li>
		   					 		<span><i class="fas fa-star"></i></span>
		   					 	</li>
		   					 	<li>
		   					 		<span><i class="fas fa-star"></i></span>
		   					 	</li>
		   					 	<li>
		   					 		<span><i class="fas fa-star"></i></span>
		   					 	</li>
		   					 	<li>
		   					 		<span><i class="fas fa-star"></i></span>
		   					 	</li>
		   					 </ul>
		   					 <p>
		   					 	When it comes to booking a holiday, we know 
								everyone likes something different - so we've 
								designed our getaways with you in mind.
		   					 </p>
	   					</div>
	   				</div>

	   				<div class="_lndng2_slider_sngl">
	   					<div class="_lndng2_slider_sngl_inner _text_center">
		   					<div class="_lndng2_slider_sngl_img">
		   						<img src="/img/man.jpg" alt="image">
		   					</div>
		   					 <h2>
		   					 	John Alex
		   					 </h2>
		   					 <ul class="_dis_flex">
		   					 	<li>
		   					 		<span><i class="fas fa-star"></i></span>
		   					 	</li>
		   					 	<li>
		   					 		<span><i class="fas fa-star"></i></span>
		   					 	</li>
		   					 	<li>
		   					 		<span><i class="fas fa-star"></i></span>
		   					 	</li>
		   					 	<li>
		   					 		<span><i class="fas fa-star"></i></span>
		   					 	</li>
		   					 	<li>
		   					 		<span><i class="fas fa-star"></i></span>
		   					 	</li>
		   					 </ul>
		   					 <p>
		   					 	When it comes to booking a holiday, we know 
								everyone likes something different - so we've 
								designed our getaways with you in mind.
		   					 </p>
	   					</div>
	   				</div>

	   				<div class="_lndng2_slider_sngl">
	   					<div class="_lndng2_slider_sngl_inner _text_center">
		   					<div class="_lndng2_slider_sngl_img">
		   						<img src="/img/man.jpg" alt="image">
		   					</div>
		   					 <h2>
		   					 	John Alex
		   					 </h2>
		   					 <ul class="_dis_flex">
		   					 	<li>
		   					 		<span><i class="fas fa-star"></i></span>
		   					 	</li>
		   					 	<li>
		   					 		<span><i class="fas fa-star"></i></span>
		   					 	</li>
		   					 	<li>
		   					 		<span><i class="fas fa-star"></i></span>
		   					 	</li>
		   					 	<li>
		   					 		<span><i class="fas fa-star"></i></span>
		   					 	</li>
		   					 	<li>
		   					 		<span><i class="fas fa-star"></i></span>
		   					 	</li>
		   					 </ul>
		   					 <p>
		   					 	When it comes to booking a holiday, we know 
								everyone likes something different - so we've 
								designed our getaways with you in mind.
		   					 </p>
	   					</div>
	   				</div>

	   				<div class="_lndng2_slider_sngl">
	   					<div class="_lndng2_slider_sngl_inner _text_center">
		   					<div class="_lndng2_slider_sngl_img">
		   						<img src="/img/man.jpg" alt="image">
		   					</div>
		   					 <h2>
		   					 	John Alex
		   					 </h2>
		   					 <ul class="_dis_flex">
		   					 	<li>
		   					 		<span><i class="fas fa-star"></i></span>
		   					 	</li>
		   					 	<li>
		   					 		<span><i class="fas fa-star"></i></span>
		   					 	</li>
		   					 	<li>
		   					 		<span><i class="fas fa-star"></i></span>
		   					 	</li>
		   					 	<li>
		   					 		<span><i class="fas fa-star"></i></span>
		   					 	</li>
		   					 	<li>
		   					 		<span><i class="fas fa-star"></i></span>
		   					 	</li>
		   					 </ul>
		   					 <p>
		   					 	When it comes to booking a holiday, we know 
								everyone likes something different - so we've 
								designed our getaways with you in mind.
		   					 </p>
	   					</div>
	   				</div>

	   			</div>	
   			</div>
   		</div>
   </div>
   <!-- Slider -->

   <!-- Membership and Compliance -->
   <div class="_lndng2_membership_sec _bg_wht">
   		<div class="container _lndng_cntnr">
   			<div class="_lndng2_membership">
   				<h1 class="_lndng2_title1">
   					Membership and Compliance
   				</h1>
   				<ul class="_dis_flex">
   					<li>
   						<img src="/img/membership1.png" alt="image">
   					</li>
   					<li>
   						<img src="/img/membership2.png" alt="image">
   					</li>
   					<li>
   						<img src="/img/membership3.png" alt="image">
   					</li>
   				</ul>
   			</div>
   		</div>
   </div>
   <!-- Membership and Compliance -->

   <!--  Subscribe to our newsletter  -->
   	<div class="_lndng2_sbscrbr_sec_all _bg_wht">
	   <div class="_lndng2_sbscrbr_sec">
	   		<div class="container _lndng_cntnr">
	   			<div class="_lndng2_sbscrbr_top _text_center">
	   				<h1 class="_lndng2_title1"> Subscribe to our newsletter </h1>
	   			</div>
	   			<div class="_lndng2_sbscrbr _text_center">
	   				<input type="text" placeholder="Email">
	   				<button class="_lndng2_btn">Subscribe</button>
	   			</div>
	   		</div>
	   </div>
	</div>
   <!--  Subscribe to our newsletter  -->

   <!--  Footer  -->
 
   <!--  Footer  -->
	</div>
</template>
<script>
export default {
    middleware:"guest",
	data(){
		return{

			email:''
		}
	},
    methods:{
        goToSignUp(){
			if(!this.email){
				this.i('Put your email first');
				return
			}

            this.$router.push('/register?email='+this.email)
        }
    }
}
</script>
<style scoped>
 ._cardMulti_more_text {
        position: absolute;
        background: #0400009c;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        color: #fff;
        font-size: 35px;
        transition: .2s all ease;
    }
</style>
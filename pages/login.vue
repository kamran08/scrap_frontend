<template>
    <div>
        <!-- CONTENT -->
       <div class="_signUp_page">
            <div class="row justify-content-center">
                <div class="col-12 col-md-5 col-lg-5 _pad_r_0">
                    <div class="_sign_all_lft">
                        <div  class="_sign_all_lft_logo">
                            <nuxt-link to="/">
                                <!-- <img  src="/img/appifylab_logo.png" alt="image"> -->
                                <img  src="/img/logo2.png" alt="image">
                            </nuxt-link>
                        </div> 
                        <div class="_sign_all_img">
                            <img  src="/img/sign1.png">
                            <!-- <img  src="/img/sitdeImage.webp"> -->
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-7 col-md-7 _pad_l_0">
                    <div class="_sign_r8_all">
                        <div class="_sign_r8_main">
                            <div class="_sign_r8_main_top">
                                <h1>Welcome to Scrapbill</h1>
                                <p>Let’s sign up first for enter into Uihut website. Uh She Up!</p>
                            </div>

                            <div class="_sign_r8_sngl_all">

                                <div class="_sign_r8_sngl" :class="error.email!=''? '_inpt1_eror': ''">
                                    <p>Email</p>
                                    <input type="email" @keyup="error.email = '' " placeholder="Enter your email" v-model="form.email">
                                        <p class="_inpt1_eror_p" v-if="error.email!=''">{{error.email}}</p>
                                </div>

                                <div class="_sign_r8_sngl" :class="error.password!=''? '_inpt1_eror': ''">
                                    <p>Password</p>
                                    <input type="password" @keyup="error.password = '' " placeholder="Enter your password" v-model="form.password">
                                        <p class="_inpt1_eror_p" v-if="error.password!=''">{{error.password}}</p>
                                </div>

                                <div class="_sign_r8_btn">
                                    <Button @click="login()" :loading="isLoading" :disabled="isLoading">{{ isLoading ? 'Please wait . . .' : 'Sign In'}}</Button>
                                </div>

                                <div class="_forgot_pass _text_right _mar_t10">
                                	<router-link to="/forgot_password">Forgot password?</router-link> 
                                </div>
 
	                            <div class="_signUp_card_btm">
	                                <p class="_signUp_btm_txt">Or Sign Up With</p>
	                                <ul>
	                                    <li>
	                                        <a href="http://localhost:3333/auth/google">
	                                            <span><i class="fab fa-google"></i></span>
	                                        </a>
	                                    </li>
	                                    <li>
	                                        <a href="http://localhost:3333/auth/facebook">
	                                            <span><i class="fab fa-facebook-f"></i></span>
	                                        </a>
	                                    </li>
	                                    <!-- <li>
	                                        <a href="">
	                                            <span><i class="fab fa-twitter"></i></span>
	                                        </a>
	                                    </li> -->
	                                </ul>
	                                <div class="_signUp_card_acnt _dis_flex _dis_flex_cntr1">
	                                    <p>Don't have an account?</p>
	                                   
	                                    <router-link to="/register">Sign Up</router-link> 
	                                </div>
	                            </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </div>
       <!-- CONTENT -->
    </div>
</template>

<script>
export default {
  middleware:"guest",
  data(){
    return{
        isLoading:false,
        
        form:{
            email:'',
            password:'',
        },
        error:{
            email:'',
            password:''
        },
        errorMsg:'',
        reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,

        
    }
  },

  methods:{

    async login() {

        this.clearData()
        let flag = 1
        if(!this.form.email  || this.form.email.trim()=='' || this.form.email==null){
            this.error.email ='Email is required!'
            flag = 0
        }
        if (this.form.email && !this.reg.test(this.form.email)) {
            this.error.email = "Invalid email format!";
            flag = 0;
        }

        if(!this.form.password  || this.form.password.trim()=='' || this.form.password==null){
            this.error.password ='Password is required!'
            return
        }
        
        if(this.form.password.trim().length <6 ){
            this.error.password ='Password must be at least 6 characters long!'
            flag = 0
        }
          
        

        if(flag==0) return
        this.isLoading = true;
        const res = await this.callApi('post','auth/login', this.form)
        if(res.status==200){
            this.s("Login Successful")
            this.clearData2()
                this.$store.commit('loginUser',(res.data))
               window.location = "/feed";
        }
        else if(res.status==401){ 
            // this.e(res.data[0].message)
            this.e("Invalid Credentials")
        }
        else{
            this.swr();
        }
        this.isLoading = false;
    },
    
    clearData() {
        this.error = {
            email:'',
            password:''
        }
    },
    
    clearData2() {
        this.error = {
            email:'',
            password:''
        },
        this.form = {
            email:'',
            password:'',
        }
    },

  },
  created(){
    
  },
  computed: {



       
    },


}
</script>

<style scoped>
.ivu-btn[disabled]{
    background: #ce6a6a;
}
</style>
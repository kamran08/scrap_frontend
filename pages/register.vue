<template>
    <div>
        <!-- CONTENT -->
       <div class="_signUp_page">
            <div class="row justify-content-center">
                <div class="col-12 col-md-5 col-lg-5 _pad_r_0">
                    <div class="_sign_all_lft">
                        <div  class="_sign_all_lft_logo">
                            <nuxt-link to="/">
                                <img  src="/img/logo2.png" alt="image">
                                <!-- <img  src="/img/appifylab_logo.png" alt="image"> -->
                            </nuxt-link>
                        </div> 
                        <div class="_sign_all_img">
                            <img  src="/img/sign_up_img.svg">
                        </div>
                    </div>
                </div>

                <div class="col-12 col-lg-7 col-md-7 _pad_l_0">
                    <div class="_sign_r8_all">
                        <div class="_sign_r8_main">
                            <div class="_sign_r8_main_top">
                                <h1 class="_sign_titl">Welcome to Scrapabill</h1>
                                <p>Tell your financial story, meet people, and get cash support.</p>
                            </div>

                            <div class="_sign_r8_sngl_all">
                                <div class="row">
                                    
                                    <div class="_sign_r8_sngl col" :class="error.firstName!=''? '_inpt1_eror': ''">
                                        <p>First Name</p>
                                        <input type="text" @keyup="error.firstName = '' " placeholder="Enter your first name" v-model="form.firstName">
                                        <p class="_inpt1_eror_p" v-if="error.firstName!=''">{{error.firstName}}</p>
                                    </div>
                                    
                                    <div class="_sign_r8_sngl col" :class="error.lastName!=''? '_inpt1_eror': ''">
                                        <p>Last Name</p>
                                        <input type="text" @keyup="error.lastName = '' " placeholder="Enter your last name" v-model="form.lastName">
                                        <p class="_inpt1_eror_p" v-if="error.lastName!=''">{{error.lastName}}</p>
                                    </div>
                                
                                </div>

                                <div class="_sign_r8_sngl" :class="error.email!=''? '_inpt1_eror': ''">
                                    <p>Email</p>
                                    <input type="email" @keyup="error.email = '' " placeholder="Enter your email" v-model="form.email">
                                        <p class="_inpt1_eror_p" v-if="error.email!=''">{{error.email}}</p>
                                </div>

                                <div class="_sign_r8_sngl" :class="error.password!=''? '_inpt1_eror': ''">
                                    <p>Password</p>
                                    <div class="_1inputreg_pass">
                                       <input :type="showPassword ? 'text' : 'password'" @keyup="error.password = '' " placeholder="Enter your password" v-model="form.password">
                                       <span @click="eyeClick()" ><i data-v-7dbb584a="" class="fas" :class="showPassword==false? 'fa-eye': 'fa-eye-slash'"></i></span> 
                                    </div>
                                    <p class="_inpt1_eror_p" v-if="error.password!=''">{{error.password}}</p>
                                </div>

                                <div class="_sign_r8_sngl" :class="error.repassword!=''? '_inpt1_eror': ''">
                                    <p>Confirm Password</p>
                                    <div class="_1inputreg_pass">
                                        <input :type="showPassword2 ? 'text' : 'password'" @keyup="error.repassword = '' " placeholder="Confirm your password" v-model="repassword">
                                        <span @click="eyeClick2()" ><i data-v-7dbb584a="" class="fas" :class="showPassword2==false? 'fa-eye': 'fa-eye-slash'"></i></span>
                                    </div>
                                        <p class="_inpt1_eror_p" v-if="error.repassword!=''">{{error.repassword}}</p>
                                </div>

                                <div class="_sign_r8_btn">
                                    <!-- <Button @click="register()" :loading="isLoading" :disabled="isLoading || checkTrue==false">{{ isLoading ? 'Please wait . . .' : 'Sign Up'}}</Button> -->
                                    <Button @click="register()" :loading="isLoading" >{{ isLoading ? 'Please wait . . .' : 'Sign Up'}}</Button>
                                </div>

                                <div class="_signUp_card_agre _dis_flex_cntr1 _dis_flex">
                                    <input type="checkbox" v-model="checkTrue" @click="checkTrue=true">
                                    <p>I have read and agreed to Scrapabill Terms of Service and Privacy Policy. I confirm that I am at least 18 years of age</p>
                                </div>

                            <div class="_signUp_card_btm">
                                <!-- <p class="_signUp_btm_txt">Or Sign Up With</p>
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
                                   
                                </ul> -->
                                <div class="_signUp_card_acnt _dis_flex _dis_flex_cntr1">
                                    <p>Have an account?</p>
                                     <nuxtLink to="/login">Sign In</nuxtLink> 
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
            firstName:'',
            lastName:'',
            email:'',
            password:'',
        },
        repassword:'',
        error:{
            firstName:'',
            lastName:'',
            email:'',
            password:'',
            repassword:'',
        },
        errorMsg:'',
        reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,

        checkTrue:false,
        showPassword:false,
        showPassword2:false,
    }
  },

  methods:{
    eyeClick(){
        this.showPassword= this.showPassword ? false : true;
    },
    eyeClick2(){
        this.showPassword2= this.showPassword2 ? false : true;
    },
    async register() {

        this.clearData()
        let flag = 1
        if(!this.form.firstName  || this.form.firstName.trim()=='' || this.form.firstName==null){
            this.error.firstName ='First name is required!'
            flag = 0
        }
        if(!this.form.lastName  || this.form.lastName.trim()=='' || this.form.lastName==null){
            this.error.lastName ='Last name is required!'
            flag = 0
        }
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
        
        if(!this.repassword  || this.repassword.trim()=='' || this.repassword==null){
            this.error.repassword ='Confirm password is required!'
            flag = 0
        }
        if (this.repassword && this.form.password != this.repassword) {
            this.error.repassword = "Password does not match!";
            flag = 0;
        }
          
        

        if(flag==0) return
        this.isLoading = true;
        const res = await this.callApi('post','auth/register', this.form)
        if(res.status==204){
            this.s("Registration Successful")
            this.clearData2()
               window.location = "/confirm_email";
        } 
        else if(res.status==401){
            this.e(res.data[0].message)
        }
        else{
            this.swr();
        }
        this.isLoading = false;
    },
    clearData() {
        this.error = {
            firstName:'',
            lastName:'',
            email:'',
            password:''
        }
    },
    clearData2() {
        this.error = {
            firstName:'',
            lastName:'',
            email:'',
            password:'',
            repassword:'',
        },
        this.form = {
            firstName:'',
            lastName:'',
            email:'',
            password:'',
        },
        this.repassword=''
    },

  },
  created(){
      if(this.$route.query && this.$route.query.email){
          this.form.email = this.$route.query.email
      }

    
  },
  computed: {



       
    },


}
</script>

<style scoped>
.ivu-btn[disabled]{
    background: #ce6a6a;
}
._1input_pass{
  position: relative;
}
._1input_pass span {
    position: absolute;
    right: 9px;
    top: 8px;
    cursor: pointer;
    color: #999;
    font-size: 14px;
}
</style>


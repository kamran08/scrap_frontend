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
                            </nuxt-link>                         
                        </div>      
                        <div class="_sign_all_img">             
                            <img  src="/img/sign1.png">
                        </div>
                    </div>                         
                </div>                                         

                <div class="col-12 col-lg-7 col-md-7 _pad_l_0" v-if="!isHide">
                    <div class="_sign_r8_all _forgt_pass">
                        <div class="_sign_r8_main">
                            <div class="_sign_r8_main_top">
                                <h1 class="_sign_titl">Find Your Account</h1>
                                <p>Please enter your email address to recover your account.</p>
                            </div>              
                       
                            <div class="_sign_r8_sngl_all"> 
                                
                                <div class="_sign_r8_sngl" :class="userDataError!=''? '_inpt1_eror': ''">
                                    <p>Email</p>
                                    <input type="email" @keyup="userDataError = '' " placeholder="Enter your email" v-model="email">
                                        <p class="_inpt1_eror_p" v-if="userDataError!=''">{{userDataError}}</p>
                                </div>

                                <div class="_sign_r8_btn">
                                    <Button @click="forgotPassword()" :loading="isLoading" :disabled="isLoading">{{ isLoading ? 'Please wait . . .' : 'Send'}}</Button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="col-12 col-lg-7 col-md-7 _pad_l_0" v-if="isHide2">
                    <div class="_sign_r8_all _forgt_pass">
                        <div class="_sign_r8_main">
                            <div class="_sign_r8_main_top">
                                <h1>Check your email for a code</h1>
                                <p>We’ve sent a 6-character code to your email. The code expires shortly, so please enter it soon.</p>
                            </div>              
                       
                            <div class="_sign_r8_sngl_all"> 
                                
                                <div class="_sign_r8_sngl" id="divOuter">
                                    <div id="divInner">
                                        <p>Enter your code</p>
                                        <input id="partitioned" @keyup="verifyError =''" v-model="verify.verificationCode" type="text" maxlength="6" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"  onKeyPress="if(this.value.length==6) return false;" autocomplete="off"/> 
                                         <p class="_inpt1_eror_p mt-2" v-if="verifyError!=''">{{verifyError}}</p> 
                                    </div>
                                    
                                </div>

                                <div class="_sign_r8_btn" >
                                    <Button @click="verifyCode()" :loading="isLoading2" :disabled="isLoading2">{{ isLoading2 ? 'Please wait . . .' : 'Verify email'}}</Button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div> 
                
                <div class="col-12 col-lg-7 col-md-7 _pad_l_0" v-if="isHide3">
                    <div class="_sign_r8_all">
                        <div class="_sign_r8_main">
                            <div class="_sign_r8_main_top">
                                <h1>Reset Your Password</h1>
                                <!-- <p>Let’s sign up first for enter into Uihut website. Uh She Up!</p> -->
                            </div>

                            <div class="_sign_r8_sngl_all">

                                <!-- <div class="_sign_r8_sngl" :class="error.email!=''? '_inpt1_eror': ''">
                                    <p>Email</p>
                                    <input type="email" @keyup="error.email = '' " placeholder="Enter your email" v-model="form.email">
                                        <p class="_inpt1_eror_p" v-if="error.email!=''">{{error.email}}</p>
                                </div> -->

                                <div class="_sign_r8_sngl" :class="reseterror.password!=''? '_inpt1_eror': ''">
                                    <p>New password</p>
                                    <input type="password" @keyup="reseterror.password = '' " placeholder="Enter your new password" v-model="reset.password">
                                        <p class="_inpt1_eror_p" v-if="reseterror.password!=''">{{reseterror.password}}</p>
                                </div>

                                <div class="_sign_r8_sngl" :class="reseterror.repassword!=''? '_inpt1_eror': ''">
                                    <p>Confrim Password</p>
                                    <input type="password" @keyup="reseterror.repassword = '' " placeholder="Confirm your password" v-model="repassword">
                                        <p class="_inpt1_eror_p" v-if="reseterror.repassword!=''">{{reseterror.repassword}}</p>
                                </div>

                                <div class="_sign_r8_btn">
                                    <Button @click="resetPassword()" :loading="isLoading3" :disabled="isLoading3">{{ isLoading2 ? 'Please wait . . .' : 'Reset Password'}}</Button>
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
        isLoading2:false,
        isLoading3:false,
        
        isHide:false,
        isHide2:false,
        isHide3:false,
        
        email:'',  
       
        userDataError:'',
        
        verify:{
          verificationCode:''
        },
        verifyError:'',
        
        reset:{
            password:'',
        },
        repassword:'',
        reseterror:{
            password:'',
            repassword:'',
        },
        
        
        reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,

        
    }
  },

  methods:{

    async forgotPassword() {

        this.clearData()
        let flag = 1
        if(!this.email  || this.email.trim()=='' || this.email==null){
            this.userDataError ='Email is required!'
            flag = 0
        }
        if (this.email && !this.reg.test(this.email)) {
            this.userDataError = "Invalid email format!";
            flag = 0;
        }
        if(flag==0) return
        this.isLoading = true;
        const res = await this.callApi('post','auth/send_resetLink', {email:this.email})
        if(res.status==200){
            this.isHide = true
            this.isHide2 = true
            this.s("Verification Code Sent Successfully")
          
        }
        else if(res.status==401){
            this.e(res.data[0].message)
        }
        else{
            this.swr();
        }
        this.isLoading = false;
    },
    
    async verifyCode() {
        this.clearData2()
        
        if(!this.verify.verificationCode  || this.verify.verificationCode.trim()=='' || this.verify.verificationCode==null){
            this.verifyError ='This field is required!'
            return
        }
        if(this.verify.verificationCode.trim().length < 6){
            this.verifyError ='The value must be at least 6 characters long!'
            return
        }
         
        this.isLoading2 = true;
        
        const res = await this.callApi('post','auth/verify_pass_reset_code', this.verify, this.verify.email=this.email)
        if(res.status==200){
            this.s("Verification Successful")
            this.isHide2=false
            this.isHide3=true
            //    window.location = "/resetPassword";
        }
        else if(res.status==401){
            this.e(res.data[0].message)
        }
        else if(res.status==404){
            this.e('Invalide Verification Code !')
        }
        else{
            this.swr();
        }
        this.isLoading2 = false;
    },
    
    async resetPassword() {

        this.clearData3()
        let flag = 1
        if(!this.reset.password  || this.reset.password.trim()=='' || this.reset.password==null){
            this.reseterror.password ='Password is required!'
            return
        }
        
        if(this.reset.password.trim().length <6 ){
            this.reseterror.password ='Password must be at least 6 characters long!'
            flag = 0
        }
        
        if(!this.repassword  || this.repassword.trim()=='' || this.repassword==null){
            this.reseterror.repassword ='Confirm password is required!'
            flag = 0
        }
        if (this.repassword && this.reset.password != this.repassword) {
            this.reseterror.repassword = "Password does not match!";
            flag = 0;
        }
           
        if(flag==0) return
        this.isLoading3 = true;
        let obj =this.reset
         obj.email =this.email
        const res = await this.callApi('post','auth/password_reset', obj)
        if(res.status==200){
            this.s("Reset Password Successfull")
            this.clearData4()
            this.$store.commit('loginUser',(res.data))
               window.location = "/feed";
        }
        else if(res.status==401){
            this.e(res.data[0].message)
        }
        else if(res.status==406){
            this.e('Invalide Verification Code.')
        }
        else{
            this.swr();
        }
        // this.isLoading3 = false;
    },
    
    
    
    
    
    clearData() {
        this.userDataError =''
    },
    
    clearData2() {
        this.verifyError =''
    },
    clearData3() {
        this.reseterror = {
            password:'',
            repassword:'',
        }
    },
    clearData4() {
        this.reset = {
            password:'',
        },
        this.repassword=''
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

#partitioned {
  padding-left: 15px;
  letter-spacing: 42px;
  border: 0;
  background-image: linear-gradient(to left, black 70%, rgba(255, 255, 255, 0) 0%);
  background-position: bottom;
  background-size: 50px 1px;
  background-repeat: repeat-x;
  background-position-x: 35px;
  width: 320px;
}

 input[type=number]::-webkit-inner-spin-button,
      input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
}

#divInner{
  left: 0;
  position: sticky;
}

#divOuter{
  width: 285px; 
  overflow: hidden;
}
</style>
<template>
    <div>
        <!-- CONTENT -->
       <div class="_signUp_page">
            <div class="row justify-content-center">
                <div class="col-12 col-md-5 col-lg-5 _pad_r_0">
                    <div class="_sign_all_lft">
                        <div  class="_sign_all_lft_logo">
                            <a href="">
                                <img  src="/img/appifylab_logo.png" alt="image">
                            </a>
                        </div> 
                        <div class="_sign_all_img">
                            <img  src="/img/sign1.png">
                        </div>
                    </div>
                </div>

                <div class="col-12 col-lg-7 col-md-7 _pad_l_0">
                    <div class="_sign_r8_all">
                        <div class="_sign_r8_main">
                            <div class="_sign_r8_main_top">
                                <h1>Reset Your Password</h1>
                                <!-- <p>Let’s sign up first for enter into Uihut website. Uh She Up!</p> -->
                            </div>

                            <div class="_sign_r8_sngl_all">

                                <div class="_sign_r8_sngl" :class="error.email!=''? '_inpt1_eror': ''">
                                    <p>Email</p>
                                    <input type="email" @keyup="error.email = '' " placeholder="Enter your email" v-model="form.email">
                                        <p class="_inpt1_eror_p" v-if="error.email!=''">{{error.email}}</p>
                                </div>

                                <div class="_sign_r8_sngl" :class="error.password!=''? '_inpt1_eror': ''">
                                    <p>New password</p>
                                    <input type="password" @keyup="error.password = '' " placeholder="Enter your new password" v-model="form.password">
                                        <p class="_inpt1_eror_p" v-if="error.password!=''">{{error.password}}</p>
                                </div>

                                <div class="_sign_r8_sngl" :class="error.repassword!=''? '_inpt1_eror': ''">
                                    <p>Confrim Password</p>
                                    <input type="password" @keyup="error.repassword = '' " placeholder="Confirm your password" v-model="repassword">
                                        <p class="_inpt1_eror_p" v-if="error.repassword!=''">{{error.repassword}}</p>
                                </div>

                                <div class="_sign_r8_btn">
                                    <Button @click="register()" :loading="isLoading" :disabled="isLoading">Sign Up</Button>
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
//   middleware:"guest",
  data(){
    return{
        isLoading:false,
        
        form:{
            email:'',
            password:'',
        },
        repassword:'',
        error:{
            email:'',
            password:'',
            repassword:'',
        },
        errorMsg:'',
        reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,

        
    }
  },

  methods:{

    async register() {

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
        const res = await this.callApi('post','auth/password_reset', this.form)
        if(res.status==200){
        //    const res = await this.callApi('post','/login', this.form)
        //    if(res){}
            this.s("Reset Password Successfull")
            this.clearData2()
            // if(this.idd){
            this.$store.commit('loginUser',(res.data))
            //     window.location = '/'+this.idd;
            // }
            // else
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
            password:'',
            repassword:'',
        },
        this.form = {
            email:'',
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
</style>


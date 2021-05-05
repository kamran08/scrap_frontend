<template>
    <div>
        <div class="_content">
            <div class="container">
                <div class="row">
                    <!-- Left section -->
                    <div class="col-12 col-md-5 col-lg-4">
                        <settingLeft/>
                    </div>
                    <!-- Left section -->

                    <!-- Right section -->
                    <div class="col-12 col-md-7 col-lg-7">
                        <div class="_advertise_card _mar_b30" v-if="!isHide">
                            <p class="_advertise_Sub_title _3title"><i class="fa fa-shield-alt"></i> Change Password</p>

                            <div class="_advertise_step_form">
                                <div class="_mar_b20">
                                    <!-- <Alert show-icon>
                                        Secure your Scrapabill account with a 2FA verification code sent to your mobile phone.
                                    </Alert> -->
                                </div>

                                <div class="row">
                                    
                                    <div class="col-12 col-md-12 col-lg-12">
                                        <div class="_1input_group" :class="error.currentPassword!=''? '_inpt1_eror': ''">
                                            <p class="_1label">Confirm Current Password</p>
                                            <div class="_1input_pass">
                                              <Input placeholder="Confirm Current Password" :type="showPassword ? 'text' : 'password'" v-model="form.currentPassword"/>
                                               <span @click="eyeClick()"><i data-v-7dbb584a="" class="fas" :class="showPassword==false? 'fa-eye': 'fa-eye-slash'"></i></span>  
                                            </div>
                                            <p class="_inpt1_eror_p" v-if="error.currentPassword!=''">{{error.currentPassword}}</p>
                                        </div>
                                    </div>
                                    
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="_1input_group" :class="error.newPassword!=''? '_inpt1_eror': ''">
                                            <p class="_1label">Your New Password</p>
                                            <div class="_1input_pass">
                                             <Input placeholder="Your New Password" :type="showPassword2 ? 'text' : 'password'" v-model="form.newPassword" />
                                             <span @click="eyeClick2()"><i data-v-7dbb584a=""  class="fas" :class="showPassword2==false? 'fa-eye': 'fa-eye-slash'"></i></span>   
                                            </div>
                                            
                                            <p class="_inpt1_eror_p" v-if="error.newPassword!=''">{{error.newPassword}}</p>
                                        </div>
                                    </div>
                                    
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="_1input_group" :class="error.repassword!=''? '_inpt1_eror': ''">
                                            <p class="_1label">Confirm New Password</p>
                                            <div class="_1input_pass">
                                              <Input placeholder="Confirm New Password" :type="showPassword3 ? 'text' : 'password'" v-model="repassword"/>
                                              <span @click="eyeClick3()" ><i data-v-7dbb584a="" class="fas" :class="showPassword3==false? 'fa-eye': 'fa-eye-slash'"></i></span>  
                                            </div>
                                            
                                            <p class="_inpt1_eror_p" v-if="error.repassword!=''">{{error.repassword}}</p>
                                        </div>
                                    </div>
                                    
                                    <div class="col-12 col-md-12 col-lg-12">
                                        <div class="_advertise_step_button">
                                            <Button @click="changePassword()" :loading="isLoading" :disabled="isLoading">Save Changes</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="_advertise_card _mar_b30" v-if="isHide">
                            <p class="_advertise_Sub_title _3title"><i class="fa fa-shield-alt"></i> Change Password</p>

                            <div class="_advertise_step_form">
                                <div class="_mar_b20">
                                    <Alert show-icon>
                                        Secure your Scrapabill account with a 2FA verification code sent to your email.
                                    </Alert>
                                </div>

                                <div class="row">
                                    
                                    <div class="col-12 col-md-12 col-lg-12">
                                        <input type="hidden" v-model="verify.password">
                                        <div class="_1input_group" :class="verifyError!=''? '_inpt1_eror': ''">
                                            <p class="_1label">Verification code</p>

                                            <Input placeholder="Verification code" v-model="verify.code"/>
                                            <p class="_inpt1_eror_p" v-if="verifyError!=''">{{verifyError}}</p>
                                        </div>
                                    </div>
                                    
                                    <div class="col-12 col-md-12 col-lg-12">
                                        <div class="_advertise_step_button">
                                            <Button @click="verifyEmail()" :loading="isLoading2" :disabled="isLoading2">Save Changes</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Right section -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import settingLeft from '~/components/settingLeft.vue'

export default {
  components: {
      settingLeft
  },

  data(){
        return{
        isLoading:false,
        isLoading2:false,
        isHide:false,
        
        form:{ 
            currentPassword:'',
            newPassword:''
        },
        repassword:'',
        error:{
            currentPassword:'',
            newPassword:'',
            repassword:'',
        },
        verify:{
            password:'',
            code:'',
        },
        verifyError:'',
        showPassword:false,
        showPassword2:false,
        showPassword3:false,
        
        
    }
  },

  methods:{
        eyeClick(){
        this.showPassword= this.showPassword ? false : true;
        },
        eyeClick2(){
        this.showPassword2= this.showPassword2 ? false : true;
        },
        eyeClick3(){
        this.showPassword3= this.showPassword3 ? false : true;
        },
        
        async changePassword() {
            this.clearData()
        let flag = 1
        if(!this.form.currentPassword  || this.form.currentPassword.trim()=='' || this.form.currentPassword==null){
            this.error.currentPassword ='Current password is required!'
            flag =0
        }
        
        if(!this.form.newPassword  || this.form.newPassword.trim()=='' || this.form.newPassword==null){
           return this.error.newPassword ='Password is required!'
        }
        
        if(this.form.newPassword.trim().length <6 ){
            this.error.newPassword ='Password must be at least 6 characters long!'
            flag = 0
        }
        
        if(!this.repassword  || this.repassword.trim()=='' || this.repassword==null){
            return this.error.repassword ='Confirm password is required!'
            
        }
        if (this.repassword && this.form.newPassword != this.repassword) {
            this.error.repassword = "Password does not match!"
           flag = 0
            
        }

        if(flag==0) return
        
        this.isLoading = true;
        const res = await this.callApi('post','profile/changePassword', this.form)
        if(res.status==200){
            this.s("The verification code has been sent to your email. Please check .")
            this.isHide = true
            this.verify.password =res.data
            this.clearData2()
        }
        else if(res.status==401){
            this.e(res.data[0].message)
        }
        else if(res.status==406){
            this.e('Password doesn`t match to our records.');
        }else{
            this.swr();
        }
        this.isLoading = false;
    },
    
        
    async verifyEmail() {
            
        let flag = 1
        if(!this.verify.code  || this.verify.code.trim()=='' || this.verify.code==null){
            this.verifyError ='This field is required!'
            flag =0
        }
        if(this.verify.code.trim().length <6 ){
            this.error.newPassword ='The verification code must be at least 6 charecters !'
            flag = 0
        }
        

        if(flag==0) return
        
        this.isLoading2 = true;
        const res = await this.callApi('post','profile/verifyChangePasswordCode', this.verify)
        if(res.status==200){
            this.s("Password changed successfully !")
            this.isHide = false
            this.verify={
                password:'',
                code:''
            }
        }
        else if(res.status==401){
            this.e(res.data[0].message)
        }
        else if(res.status==406){
            this.e('Invalid verifcation code !');
        }else{
            this.swr();
        }
        this.isLoading2 =false
    },
    
    clearData(){
        this.error={
            currentPassword:'',
            newPassword:'',
            repassword:'',
        }
    },
    clearData2(){
        this.form={ 
            currentPassword:'',
            newPassword:''
        }
    }
  },
  
  created(){
    
  }
}
</script>


<style scoped>
.ivu-btn[disabled]{
    background: #ce6a6a;
}

/* ._advertise_step_button button{
    border: none;
    background: #da1f26;
    color: #fff;
    padding: 10px 18px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
    min-width: 150px;
} */
</style>
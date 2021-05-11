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
                    <div class="col-12 col-md-7 col-lg-7"  v-if="!isHide">
                        <div class="_advertise_card _mar_b30">
                            <p class="_advertise_Sub_title _3title"><i class="fa fa-shield-alt"></i> Change Email</p>

                            <div class="_advertise_step_form">
                                <div class="row">
                                    <div class="col-12 col-md-12 col-lg-12">
                                        <div class="_1input_group" :class="emailError!=''? '_inpt1_eror': ''">
                                            <p class="_1label">New Email</p>
                                            <Input placeholder="New Email" type="email" v-model="newEmail" @keyup="emailError = '' "/>
                                             <p class="_inpt1_eror_p" v-if="emailError!=''">{{emailError}}</p>
                                             
                                        </div>
                                    </div>
                                    
                                    
                                    <div class="col-12 col-md-12 col-lg-12">
                                        <div class="_advertise_step_button">
                                            <Button @click="sendEmail()" :loading="isLoading" :disabled="isLoading" class="_btn1 _btn_150">{{ isLoading ? 'Please wait . . .' : 'Send'}} </Button>
                                            <!-- <button class="_btn1 _btn_150" style="background:#f59598;cursor:no-drop;" v-if="isLoading">Send</button> -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-12 col-md-7 col-lg-7" v-if="isHide">
                        <div class="_advertise_card _mar_b30">
                            <p class="_advertise_Sub_title _3title"><i class="fa fa-shield-alt"></i>Check your email for a code.</p>

                            <div class="_advertise_step_form">
                                <div class="row">
                                    <div class="col-12 col-md-12 col-lg-12">
                                        <div class="_1input_group" :class="tokenError!=''? '_inpt1_eror': ''">
                                            <p class="_1label">Verificaton code</p>

                                            <input type="hidden" v-model="formData.email"/>
                                            <Input placeholder="Verificaton code" v-model="formData.token" @keyup="tokenError = '' "/>
                                            <p class="_inpt1_eror_p" v-if="tokenError!=''">{{tokenError}}</p>
                                        </div>
                                    </div>
                                    
                                    <div class="col-12 col-md-12 col-lg-12">
                                        <div class="_advertise_step_button">
                                             <Button @click="verifyEmail()" :loading="isLoading2" :disabled="isLoading2" class="_btn1 _btn_150">{{ isLoading2 ? 'Please wait . . .' : 'Verify'}} </Button>
                                            <!-- <button @click="verifyEmail()" class="_btn1 _btn_150" v-if="!isLoading2">Verify </button>
                                            <button class="_btn1 _btn_150" style="background:#f59598;cursor:no-drop;" v-if="isLoading2">Verify</button> -->
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
middleware:"auth",
  components: {
      settingLeft
  },

  data(){
    return{
      newEmail:'',
      formData:{
          email:'',
          token:'',
      },
      emailError:'',
      tokenError:'',
      isLoading:false,
      isLoading2:false,
      isHide:false,
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
    }
  },

  methods:{
    async sendEmail() {

        let flag = 1
        if(!this.newEmail  || this.newEmail.trim()=='' || this.newEmail==null){
            this.emailError ='Email is required!'
            flag = 0
        }
        if (this.newEmail && !this.reg.test(this.newEmail)) {
            this.emailError = "Invalid email format!";
            flag = 0;
        }

        if(flag==0) return
        
        this.isLoading = true;
        const res = await this.callApi('post','profile/emailUpdate', {newEmail:this.newEmail})
        if(res.status==200){
            this.s("Request sent Successful")
            this.formData.email=res.data
            
            this.isHide = true;
                // this.$store.commit('loginUser',(res.data))
            //    window.location = "/feed";
        }
        else if(res.status==401){
            this.e(res.data[0].message)
        }
        else{
            this.swr();
        }
        this.isLoading = false;
    },
    async verifyEmail() {
        alert(this.newEmail)
        if(!this.formData.token  || this.formData.token.trim()=='' || this.formData.token==null){
            this.tokenError ='This field is required!'
            return
        }
        if(this.formData.token.trim().length < 6){
            this.tokenError ='The value must be at least 6 characters long!'
            return
        }
        // if(flag==0) return
        this.isLoading2 = true;
        const res = await this.callApi('post','profile/verifyEmailUpdate', this.formData)
        if(res.status==200){
        //    const res = await this.callApi('post','/login', this.form)
        //    if(res){}
            this.s("Verification Successful")
                this.$store.commit('loginUser',(res.data))
        }
        else if(res.status==401){
            this.e(res.data[0].message)
        }
        else{
            this.swr();
        }
        this.isLoading2 = false;
        this.isHide = false;
    },
  },
  
  created(){
    
  }
}
</script>

</script>

<style scoped>
.ivu-btn[disabled]{
    background: #ce6a6a;
}
</style>
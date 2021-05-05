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
                                        <input id="partitioned" @keyup="error =''" v-model="token" type="text" maxlength="6" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"  onKeyPress="if(this.value.length==6) return false;" autocomplete="off"/> 
                                         <p class="_inpt1_eror_p mt-2" v-if="error!=''">{{error}}</p> 
                                    </div>
                                    
                                </div>

                                <div class="_sign_r8_btn" >
                                    <Button type="button" @click="verify()" :loading="isLoading" :disabled="isLoading">{{ isLoading ? 'Please wait . . .' : 'Verify email'}}</Button>
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
      data(){
    return{
        isLoading:false,
        
        token:'',
        error:''
    }
  },
  
  methods:{ 
    async verify() {

        // this.clearData()
        
        if(!this.token  || this.token.trim()=='' || this.token==null){
            this.error ='Verification Code is required !'
            return
        }
        if(this.token.trim().length < 6){
            this.error ='The value must be at least 6 characters long!'
            return
        }
        // if(flag==0) return
        this.isLoading = true;
        const res = await this.callApi('post','auth/verify_reg_email', {verificationCode:this.token})
        if(res.status==200){
        //    const res = await this.callApi('post','/login', this.form)
        //    if(res){}
            this.s("Verification Successful")
            // this.clearData2()
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
            this.e(res.data.message)
        }
        else{
            this.swr();
        }
        this.isLoading = false;
    },
  }
}
</script>
<style scoped>
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
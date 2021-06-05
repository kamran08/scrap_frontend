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

                    <!-- Left section -->
                    <div class="col-12 col-md-7 col-lg-7">
                        <div class="_advertise_card _mar_b30">
                            <p class="_advertise_Sub_title _3title">
                                <i class="fas fa-user-cog"></i>
                                Add Suspend or Deactivate Account
                            </p>

                            <div class="_advertise_step_form">
                                <div class="row">
                                    <div class="col-12 col-md-12 col-lg-12">
                                        <!-- <p class="_advertise_sub_title">SYSTEM NOTIFICATIONS</p> -->
                                    </div>
                                    <div class="col-12 col-md-12 col-lg-12">
                                        <div class="_1chechGroup">
                                            <div class="_1chechGroup_icon">
                                               <i class="fas fa-toggle-on"></i>
                                            </div>
                                            <div class="_1chechGroup_details">
                                                <p class="_1chechGroup_title">Deactivate</p>
                                            </div>
                                            <div class="_1chechGroup_checkbox">
                                                <i-switch v-if="!isLoading"  v-model="deactivateStatus" :disabled="disabled" :before-change="deactivatedAlert" @on-change="deactivated">
                                                    <span slot="open"></span>
                                                    <span slot="close"></span>
                                                </i-switch>
                                                <i-switch v-else-if="isLoading" :disabled="disabled">
                                                    <span slot="open"></span>
                                                    <span slot="close"></span>
                                                </i-switch>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-12 col-md-12 col-lg-12">
                                        <div class="_1chechGroup">
                                            <div class="_1chechGroup_icon">
                                                <i class="fas fa-user-minus"></i>
                                            </div>
                                            <div class="_1chechGroup_details">
                                                <p class="_1chechGroup_title">Add Suspend</p>
                                                <!-- <p class="_1chechGroup_text">A sound will be played each time you receive a new activity notification</p> -->
                                            </div>
                                            <div class="_1chechGroup_checkbox">
                                                <i-switch v-if="!isLoading2" v-model="suspendStatus" :disabled="disabled" :before-change="suspendedAlert" @on-change="suspended">
                                                    <span slot="open"></span>
                                                    <span slot="close"></span>
                                                </i-switch>
                                                <i-switch v-else-if="isLoading2" :disabled="disabled" >
                                                    <span slot="open"></span>
                                                    <span slot="close"></span>
                                                </i-switch>
                                                <!-- <i-switch :value="disabled" :disabled="disabled">
                                                    <span slot="open"></span>
                                                    <span slot="close"></span>
                                                </i-switch> -->
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <!-- <div class="col-12 col-md-12 col-lg-12">
                                        <div class="_advertise_step_button">
                                            <Button class="_btn1 _btn_150" @click="submit">Save Changes</Button>
                                        </div>
                                    </div> -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Left section -->
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
      
      isLoading:false,
      isLoading2:false,
      disabled:false,
      deactivateStatus:'',
      suspendStatus:'',
     
      statusError:{
          deactivate:'',
          suspend:'',
      },
      
    }
  },

  methods:{
    
     deactivatedAlert () {
         if(this.deactivateStatus ==false){
            return new Promise((resolve) => {
                this.$Modal.confirm({
                    title: 'Confirm',
                    content: 'Are you sure to deactivate your account ?',
                    onOk: () => {
                        resolve();
                    }
                });
            });
        }
     },
    
     suspendedAlert () {
         if(this.suspendStatus ==false){
            return new Promise((resolve) => {
                this.$Modal.confirm({
                    title: 'Confirm',
                    content: 'Are you sure to suspend your account ?',
                    onOk: () => {
                        resolve();
                    }
                });
            });
        }
     },
     
     
     async deactivated(){
        this.isLoading =true
        this.isLoading2 =true
        
        let activeStatus ={
            id:this.authUser.id,
            deactivateStatus:this.deactivateStatus,
        }

         const res = await this.callApi('post','profile/deactiveStatus', activeStatus)
         if(res.status==200){
            this.disabled = true
             window.location.href="/login"
             this.s("Account Deactivated successfully!")
             
         }
         else if(res.status==422){
            for(let e of res.data.errors  )this.e(e.message);
         }
         else{
             this.swr();
         }
         this.isLoading =false;               
     },
     
     async suspended(){
        this.isLoading2=true;
        this.isLoading=true;
        
        
        let activeStatus ={
            id:this.authUser.id,
            suspendStatus:this.suspendStatus,
        }
         const res = await this.callApi('post','profile/suspendStatus', activeStatus)
         if(res.status==200){
             this.disabled =true;
             window.logcation.href="/login"
             this.s("Account Suspended Successfully!")
             
         }
         else if(res.status==422){
             for(let e of res.data.errors  )this.e(e.message);
         }
         else{
             this.swr();
         } 
         this.isLoading2=false;              
     },

     
     
     
     
     
     
  },
  
  created(){
    
  }
}
</script>
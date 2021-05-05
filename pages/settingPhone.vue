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
                        <div class="_advertise_card _mar_b30">
                            <p class="_advertise_Sub_title _3title"><i class="fa fa-shield-alt"></i> Change Phone Number</p>

                            <div class="_advertise_step_form">
                                <div class="row">
                                    <div class="col-12 col-md-12 col-lg-12">
                                        <div class="_1input_group">
                                            <p class="_1label">New Phone number</p>

                                            <Input v-model="formData.phone" placeholder="New Phone number"/>
                                        </div>
                                    </div>
                                    <!-- <div class="col-12 col-md-12 col-lg-12">
                                        <div class="_1input_group">
                                            <p class="_1label">Verificaton code</p>

                                            <Input placeholder="Verificaton code" />
                                        </div>
                                    </div> -->
                                    
                                    <div class="col-12 col-md-12 col-lg-12">
                                        <div class="_advertise_step_button">
                                            <Button @click="updatePhone()" :loading="isLoading" :disabled="isLoading" class="_btn1 _btn_150">{{ isLoading ? 'Please wait . . .' : 'Save Changes'}}</Button>
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
      formData:{
          phone:'',
      },
      isLoading:false
    }
  },

  methods:{
    async updatePhone() {
        if(this.formData.phone.trim() ==''){
            return
        }
        this.isLoading = true;
        const res = await this.callApi('post','profile/updatePhone', this.formData)
        if(res.status==200){
            this.s("Phone number updated Successfully")
        }
        else if(res.status==401){
            this.e(res.data[0].message)
        }
        else{
            this.swr();
        }
        this.isLoading = false;
    },
  },
  
  created(){
    this.formData=this.authUser
  }
}
</script>
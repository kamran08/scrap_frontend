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
                            <p class="_advertise_Sub_title _3title"><i class="fas fa-user"></i> Social Links</p>

                            <div class="_advertise_step_form">
                                <div class="row">
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="_1input_group">
                                            <p class="_1label">Facebook Profile URL</p>
                                            <Input placeholder="Facebook Profile URL" v-model="formData.facebook">
                                                <Icon type="logo-facebook" slot="prefix" style="color: #3B579D" />
                                            </Input>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="_1input_group">
                                            <p class="_1label">Twitter Profile URL</p>
                                            <Input placeholder="Twitter Profile URL" v-model="formData.twitter">
                                                <Icon type="logo-twitter" slot="prefix" style="color: #55ACEE"/>
                                            </Input>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="_1input_group">
                                            <p class="_1label">YouTube Profile URL</p>
                                            <Input placeholder="YouTube Profile URL"  v-model="formData.youtube">
                                                <Icon type="logo-youtube" slot="prefix" style="color: #E62117"/>
                                            </Input>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="_1input_group">
                                            <p class="_1label">Instagram Profile URL</p>
                                            <Input placeholder="Instagram Profile URL"  v-model="formData.instagram">
                                                <Icon type="logo-instagram" slot="prefix" style="color: #3f729b"/>
                                            </Input>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-12 col-lg-12">
                                        <div class="_1input_group">
                                            <p class="_1label">Linkedin Profile URL</p>
                                            <Input placeholder="Linkedin Profile URL"  v-model="formData.linkedin">
                                                <Icon type="logo-linkedin" slot="prefix" style="color: #1A84BC"/>
                                            </Input>
                                        </div>
                                    </div>
                                    <!-- <div class="col-12 col-md-6 col-lg-6">
                                        <div class="_1input_group">
                                            <p class="_1label">Vkontakte Profile URL</p>
                                            <Input placeholder="Vkontakte Profile URL">
                                                <i class="fab fa-vk fa-lg"  slot="prefix" style="color: #527498"></i>
                                            </Input>
                                        </div>
                                    </div> -->
                                    
                                    <div class="col-12 col-md-12 col-lg-12">
                                        <div class="_advertise_step_button">
                                            <button @click="updateSocial()" class="_btn1 _btn_150">Save Changes</button>
                                        </div>
                                    </div>
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
      formData:{
          facebook:'',
          twitter:'',
          youtube:'',
          instagram:'',
          linkedin:'',
      }
    }
  },

  methods:{
    async updateSocial() {
        
        this.isLoading = true;
        const res = await this.callApi('post','profile/updateSocialLink', this.formData)
        if(res.status==200){
            this.s("Profile link updated Successfully")
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
    // this.formData.twitteer=this.authUser.twitter
  }
}
</script>
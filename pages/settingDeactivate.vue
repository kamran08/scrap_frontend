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
                                                <i-switch>
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
                                                <i-switch>
                                                    <span slot="open"></span>
                                                    <span slot="close"></span>
                                                </i-switch>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="col-12 col-md-12 col-lg-12">
                                        <div class="_advertise_step_button">
                                            <button class="_btn1 _btn_150">Save Changes</button>
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
  components: {
      settingLeft
  },

  data(){
    return{
      
    }
  },

  methods:{
    
  },
  
  created(){
    
  }
}
</script>
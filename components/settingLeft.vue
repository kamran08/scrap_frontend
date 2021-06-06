<template>
    <div class="_advertise_left_card _box_shdw2  _mar_b30">
        <!-- <div class="_advertise_left_card_top">
            <p class="_advertise_left_card_title">Current Balance</p>
            <p class="_advertise_left_card_amm">$106.70</p>
        </div> -->

        <ul class="_setting_menu">
            <!-- <li :class="$route.path == '/settingNew'? '_active' : ''" class="_setting_menu_items">
                <nuxtLink class="_setting_menu_items_link" to="/settingNew"><i class="fas fa-cog"></i> Account Settings</nuxtLink>
            </li> -->
            <li class="_setting_menu_items">
                <p @click="setSideBar1" class="_setting_menu_items_link">
                    <i class="fas fa-user"></i> Edit Profile <span class="_setting_menu_down"><i class="fas fa-chevron-down"></i></span>
                </p>

                <ul v-if="$store.getters.getSideBar1" class="_setting_menu_sub">
                    <li :class="$route.path == '/settingBasic'? '_active' : ''">
                        <nuxtLink to="/settingBasic">Basic</nuxtLink>
                    </li>
                    <!-- <li :class="$route.path == '/settingWork'? '_active' : ''">
                        <nuxtLink to="/settingWork">Work</nuxtLink>
                    </li>
                    <li :class="$route.path == '/settingLoc'? '_active' : ''">
                        <nuxtLink to="/settingLoc">Location</nuxtLink>
                    </li> -->
                    <li :class="$route.path == '/settingSocial'? '_active' : ''">
                        <nuxtLink to="/settingSocial">Social Links</nuxtLink>
                    </li>
                </ul>
            </li>
            <li class="_setting_menu_items">
                <p @click="setSideBar2" class="_setting_menu_items_link">
                    <i class="fas fa-shield-alt"></i> Security Settings <span class="_setting_menu_down"><i class="fas fa-chevron-down"></i></span>
                </p>

                <ul v-if="$store.getters.getSideBar2" class="_setting_menu_sub">
                    <li :class="$route.path == '/settingPass'? '_active' : ''">
                        <nuxtLink to="/settingPass">Password</nuxtLink>
                    </li>
                    <li :class="$route.path == '/settingEmail'? '_active' : ''">
                        <nuxtLink to="/settingEmail">Email</nuxtLink>
                    </li>
                    <li :class="$route.path == '/settingPhone'? '_active' : ''">
                        <nuxtLink to="/settingPhone">Phone</nuxtLink>
                    </li>
                </ul>
            </li>
            <li  :class="$route.path == '/settingDeactivate'? '_active' : ''" class="_setting_menu_items">
                <a href="/settingDeactivate" class="_setting_menu_items_link">
                    <i class="fas fa-user-cog"></i>
                    Add Suspend or Deactivate Account
                </a>
            </li>
            <li class="_setting_menu_items">
                <a onclick="return false" class="_setting_menu_items_link">
                    <!-- <i class="fas fa-user-cog"></i> -->
                    Email notification:
                     <div class="col-12 col-md-12 col-lg-12">
                            <div class="_1chechGroup">
                                <div class="_1chechGroup_icon">
                                    <!-- <i class="fas fa-toggle-on"></i> -->
                                </div>
                                <div class="_1chechGroup_details">
                                    <!-- <p class="_1chechGroup_title">Deactivate</p> -->
                                </div>
                                <div class="_1chechGroup_checkbox">
                                    <i-switch v-if="!isLoading"  v-model="authUser.email_active"  :before-change="deactivatedAlert" @on-change="deactivated">
                                        <span  slot="1"></span>
                                        <span slot="0"></span>
                                    </i-switch>
                                    <i-switch v-else-if="isLoading" >
                                        <span slot="1"></span>
                                        <span slot="0"></span>
                                    </i-switch>
                                </div>
                            </div>
                        </div>
                </a>
            </li>
            <!-- <li :class="$route.path == '/settingNewsfeed'? '_active' : ''" class="_setting_menu_items">
                <nuxtLink class="_setting_menu_items_link" to="/settingNewsfeed"><i class="fas fa-stream"></i> Newsfeed</nuxtLink>
            </li>
            <li :class="$route.path == '/settingPrivacy'? '_active' : ''" class="_setting_menu_items">
                <nuxtLink class="_setting_menu_items_link" to="/settingPrivacy"><i class="fas fa-user-secret"></i> Privacy</nuxtLink>
            </li>
            <li :class="$route.path == '/settingNoti'? '_active' : ''" class="_setting_menu_items">
                <nuxtLink class="_setting_menu_items_link" to="/settingNoti"><i class="fas fa-bell"></i> Notifications</nuxtLink>
            </li>
            <li :class="$route.path == '/settingBlocking'? '_active' : ''" class="_setting_menu_items">
                <nuxtLink class="_setting_menu_items_link" to="/settingBlocking"><i class="fas fa-minus-circle"></i> Blocking</nuxtLink>
            </li>
            <li :class="$route.path == '/settingInformation'? '_active' : ''" class="_setting_menu_items">
                <nuxtLink class="_setting_menu_items_link" to="/settingInformation"><i class="fas fa-file-invoice"></i> Your Information</nuxtLink>
            </li>
            <li :class="$route.path == '/settingDelete'? '_active' : ''" class="_setting_menu_items">
                <nuxtLink class="_setting_menu_items_link" to="/settingDelete"><i class="fas fa-trash"></i> Delete Account</nuxtLink>
            </li> -->
        </ul>
    </div>
</template>

<script>
export default {
  components: {
      
  },

  data(){
    return{
      edit_Profile: true,
      isSecurity: true,
      isLoading:false,
      isLoading2:false,
      disabled:false,
      test:true,
      deactivateStatus:'',
      suspendStatus:'',
    }
  },

  methods:{
    setSideBar1(){
        let a = this.$store.getters.getSideBar1
        console.log(a)
        this.$store.commit('setSideBar1', !a)
    },
    setSideBar2(){
        let a = this.$store.getters.getSideBar2
        console.log(a)
        this.$store.commit('setSideBar2', !a)
    },
     deactivatedAlert () {
         if(this.deactivateStatus ==false){
            return new Promise((resolve) => {
                this.$Modal.confirm({
                    title: 'Confirm',
                    content: 'Are you sure to active email notification?',
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
        
        let ob ={
            email_active:this.authUser.email_active?1:0,
            id:this.authUser.id
        }
         const res = await this.callApi('post','profile/activeDeactiveEmailNotification', ob)
         if(res.status==200){
            this.disabled = true
            if(ob.email_active==1)
             this.s("Email Notification activated successfully!")
            else 
             this.s("Email Notification deactived successfully!")
             
         }
         else if(res.status==422){
            for(let e of res.data.errors  )this.e(e.message);
         }
         else{
             this.swr();
         }
         this.isLoading =false;               
     },
     
     
  },
  
  created(){
    
  }
}
</script>
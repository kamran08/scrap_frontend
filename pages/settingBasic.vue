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
                            <!-- Step one -->
                            <p class="_advertise_Sub_title _3title"><i class="fas fa-user"></i> Basic</p>

                            <!-- <div class="_advertise_card_img" v-if="userData.profilePic">
                                 <img :src="userData.profilePic" alt="image">
                                    <Upload
                                        action="//jsonplaceholder.typicode.com/posts/">
                                        <span><i class="ivu-icon ivu-icon-ios-camera"></i></span>
                                    </Upload>
                                
                            </div> -->
                            
                            <div class="_advertise_card_img">
                                <img :src="userData.profilePic?userData.profilePic:'/defultImage.jpeg'" alt="image">
                                <!-- <img :src="authUser.profilePic" alt="image"> -->
                                 <Upload
                                    :show-upload-list="false"
                                    
                                    :on-success="handleSuccess"
                                    :format="['jpg','jpeg','png']"
                                    :max-size="10048"
                                     action="https://api.scrapabill.com/feed/uploadImages"
                                    >
                                    <!-- action="http://127.0.0.1:3333/profile/uploadImages" -->
                                    <span><i class="ivu-icon ivu-icon-ios-camera"></i></span>
                                </Upload>
                            </div>

                            <div class="_advertise_step_form">
                                <div class="row">
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="_1input_group">
                                            <p class="_1label">First Name</p>

                                            <Input placeholder="First Name" v-model="userData.firstName" />
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="_1input_group">
                                            <p class="_1label">Last Name</p>

                                            <Input placeholder="Last Name" v-model="userData.lastName" />
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="_1input_group">
                                            <p class="_1label">Email</p>

                                            <Input disabled  placeholder="Email" :value="authUser.email"/>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="_1input_group">
                                            <p class="_1label">Phone</p>

                                            <Input disabled placeholder="Phone" :value="authUser.phone"/>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-12 col-lg-12">
                                        <div class="_1input_group">
                                            <p class="_1label">Country</p>

                                            <Select style="width:100%" v-model="userData.country">
                                                
                                                <Option v-for="(country, index) in countries" :value="country.name" :key="index">{{country.name}}</Option>
                                                
                                            </Select>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <p class="_1label">Birth date</p>

                                        <div class="row">
                                            <div class="col-12 col-md-12 col-lg-12">
                                                <DatePicker type="date" placeholder="select" style="width: 100%;" v-model="userData.birthDate"></DatePicker>
                                            </div>
                                    
                                        </div>
                                    </div>

                                      <div class="col-12 col-md-6 col-lg-6">
                                        <div class="_1input_group">
                                             <p class="_1label">Gender</p>
                                            <Select style="width:100%" placeholder="Gender" v-model="userData.gender">
                                                <Option value="male">Male</Option>
                                                <Option value="female">Female</Option>
                                                <Option value="others">Others</Option>
                                            </Select>
                                        </div>
                                    </div>
                                    
                                    <div class="col-12 col-md-12 col-lg-12">
                                        <div class="_advertise_step_button">
                                            <Button @click="updateBasicInfo()" :loading="isLoading" :disabled="isLoading" class="_btn1 _btn_150">{{ isLoading ? 'Please wait . . .' : 'Save Changes'}}</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Step one -->
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
      countries:[],
      userData:{
          firstName:'',
          lastName:'',
          country:'',
          birthDate:'',
          gender:'',
          profilePic:'',
      },
    
      isLoading:false,
    }
  },

  methods:{
    async getCountry(){
        const res = await this.callApi('get','https://restcountries.eu/rest/v2/all?fields=name')
        if(res.status ==200){
          this.countries =res.data
        }
    },
    async updateBasicInfo() {
        // let flag = 1
        // if(!this.form.firstName  || this.form.firstName.trim()=='' || this.form.firstName==null){
        //     this.error.firstName ='First name is required!'
        //     flag = 0
        // }
        // if(!this.form.lastName  || this.form.lastName.trim()=='' || this.form.lastName==null){
        //     this.error.lastName ='Last name is required!'
        //     flag = 0
        // }
        
        // if(flag==0) return
        this.isLoading = true;
        const res = await this.callApi('post','profile/updateBasicInfo', this.userData)
        if(res.status==200){
            this.s("Profile updated successfully")
            // this.$store.commit('loginUser',(res.data))
            this.authUser.firstName =this.userData.firstName
            this.authUser.lastName =this.userData.lastName
            this.authUser.profilePic =this.userData.profilePic
        }
        else if(res.status==401){
            this.e(res.data[0].message)
        }
        else{
            this.swr();
        }
        this.isLoading = false;
    },
    async getUserInfo() {
        
        const res = await this.callApi('get','profile/getUser', this.userData)
        if(res.status==200){
         this.userData =res.data
        }

        else{
            this.swr();
        }
        
    },
    handleSuccess (res, file) {
    this.userData.profilePic =res
    console.log(res)
    },
    
    
    
  },
  
  created(){
      this.userData = JSON.parse(JSON.stringify(this.authUser))
    this.getCountry()
    // this.userData =this.authUser
    // this.getUserInfo()
  }
}
</script>

<style scoped>
.ivu-btn[disabled]{
    background: #ce6a6a;
}

</style>
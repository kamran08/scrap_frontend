<template>
    <div>
        <!-- Shimmer -->
        <template v-if="isHide">
            <div class="_card1 _box_shdw2 _mar_b30">
                <div class="_statusBox_shimmer">
                    <div class="_statusBox_shimmer_pic _shim_animate"></div>
                    <div class="_statusBox_shimmer_details">
                        <div class="_statusBox_shimmer_name _shim_animate"></div>    
                    </div>
                    <div class="_statusBox_shimmer_input _shim_animate"></div>

                    <ul class="_statusBox_shimmer_button">
                        <li class="_shim_animate"></li>
                        <li class="_shim_animate"></li>
                        <li class="_shim_animate"></li>
                    </ul>
                </div>
            </div>
        </template>
        <!-- Shimmer -->

        <template v-if="isloaded">
            <div :class="isStatusboxOpen ? '_statusBox_open _statusBox _mar_b20' : '_statusBox'" class="_card1 _box_shdw2 _mar_b30">
                <div class="_card1_top _dis_flex _dis_flex_cntr1" v-if="authUser.profilePic">
                    <router-link to="/profile" class="_card1_top_img _mar_r10">
                        <img :src="authUser.profilePic" alt="image">
                    </router-link>
                    <router-link to="/profile" class="_titl1">{{authUser.firstName}} {{authUser.lastName}}</router-link>
                </div>
                
                <div class="_card1_top _dis_flex _dis_flex_cntr1" v-else>
                    <router-link to="/profile" class="_card1_top_img _mar_r10">
                        <img src="/img/man.jpg" alt="image">
                    </router-link>
                    <router-link to="/profile" class="_titl1">{{authUser.firstName}} {{authUser.lastName}}</router-link>
                </div>

                <div class="_card1_inpt">
                    <input @click="clickStatusbox" type="text" placeholder="What's on your mind or financial story?">
                </div>



                <div class="_statusBox_main_all">
                    <div class="_statusBox_main _padd">
                        <p class="_statusBox_close" @click="closeStatusbox"><Icon type="md-close" /></p>
                        <div class="_statusBox_main_top">
                            <div class="_statusBox_main_pic"><img src="/img/man.jpg" alt="" title="" class="_statusBox_main_img _1border_color" /></div>
                            <div class="_statusBox_main_details">
                                <p class="_statusBox_main_name"><a href="" class="_3link">Jacqueline J. Hill</a></p>
                                <div class="_statusBox_main_drop">
                                    <p class="_status_public" @click="isStatusType = true">Public</p>
                                    <!-- <Dropdown trigger="click" placement="bottom-start">
                                        <a href="javascript:void(0)" class="_statusBox_main_text">
                                            Public
                                            <i class="ivu-icon ivu-icon-ios-arrow-down"></i>
                                        </a>

                                        <DropdownMenu slot="list">
                                            <DropdownItem><p>Public</p></DropdownItem>
                                            <DropdownItem><p>Only Me</p></DropdownItem>
                                            <DropdownItem><p>Only Friends</p></DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown> -->
                                </div>
                            </div>
                        </div>
                        
                        <!-- Status -->
                        <div v-if="isStatusbox" class="_statusBox_textarea">
                            <textarea v-model="feed.feedTxt" type="text" placeholder="What's on your mind or financial story?" class="_statusBox_textarea_text"></textarea>
                            <Upload
                                multiple 
                                ref="uploads"
                                type="drag"
                                :on-success="handleSuccess"
                                :format="['jpg','jpeg','png']"
                                :max-size="2048"
                                action="http://127.0.0.1:3333/feed/uploadImages">
                                
                                <Button icon="ios-cloud-upload-outline">Photo / Video</Button>
                            </Upload>
                        </div>
                        <!-- Status -->

                        <!-- Bill -->
                     

                       
                        

                        <div class="_statusBox_main_bottom">
                            <button type="button" class="_btn1 _btn_long" @click="createFeed()">
                                <span class="_btn1_text">Post Story <i class="fas fa-long-arrow-alt-right"></i></span>
                            </button>
                        </div>
                    </div>
                    <div @click="isStatusboxOpen = false" class="_statusBox_overlay"></div>
                </div>
            </div>
        </template>

        <!-- Public modal -->
        <div v-if="isStatusType" class="_public_modal">
            <div class="_public_modal_main">
                <p @click="isStatusType = false" class="_public_modal_close"><i class="ivu-icon ivu-icon-md-close"></i></p>
                <p class="_public_modal_title">Select Audience</p>

                <div class="_public_modal_items">
                    <div class="_public_modal_checkbox">
                        <Checkbox></Checkbox>
                    </div>
                    <div class="_public_modal_icon"></div>

                    <div class="_public_modal_details">
                        <h2 class="_public_modal_type">Public</h2>
                        <p class="_public_modal_text">Control who can view your post. Erase sensitive information on your bills because everyone can view whatrver you posts.</p>
                    </div>
                </div>

                <div class="_public_modal_items">
                    <div class="_public_modal_checkbox">
                        <Checkbox></Checkbox>
                    </div>
                    <div class="_public_modal_icon"></div>

                    <div class="_public_modal_details">
                        <h2 class="_public_modal_type">Only Me</h2>
                        <p class="_public_modal_text">It's private. Only can view and access your bills or anything you post.</p>
                    </div>
                </div>
            </div>

            <div @click="isStatusType = false" class="_public_modal_overlay"></div>
        </div>
        <!-- Public modal -->
    </div>
</template>

<script>
export default {
  data(){
    return{
      isArticle : false,
      isStatusbox : false,
      isloaded: false,
      isHide: true,
      isBill: false,
      isStatusboxOpen: false,
      isStatusType: false,
      feed:{
          feedTxt:'',
          images:[],
          metaData:null,
          type:'feed',
      }
    //   image:''
    }
  },

  methods:{
    handleSuccess (res, file) {
        this.feed.images.push(res)
        console.log(res)
    },
    async createFeed(){
          if(this.feed.feedTxt == '' && !this.feed.images.length){
                // this.i("All fields are required.");
                return this.i("Please write some text or upload images.");
            }
            this.feed.images =JSON.stringify(this.feed.images)
            let obj = this.feed
            obj.user_id =this.authUser.id
        	// this.loading = true
        	const res = await this.callApi('post',`feed/createFeed`, obj)
            if(res.status==201){
               
                this.closeStatusbox() 
                let singleReturnedFeed =res.data
                singleReturnedFeed.user = this.$store.state.authUser
                
                this.$store.commit("setNewSingleFeed", singleReturnedFeed);
                this.s('Feed created Successfully !')
                this.clearData()
                
            }
            else if(res.status===401){
                for (let i of res.data) {
                    this.w(i.message);
                }   
            }
            else{
                alert('error')
            }
        //   this.loading = false
    },
    
    // async getFeedInfo2(){
    //     const res = await this.callApi('get',`feed/getFeed`)
    //     if(res.status === 200){
    //         // console.log(res.data)
    //         this.$store.commit("setFeed", res.data);
    //     }
    //     else{
    //         // this.swr();
    //     }
    // },
    clearData(){
        this.feed.feedTxt ='',
        this.feed.images =''
    },
    clickBill(){
        this.isStatusbox = false
        this.isArticle = false
        this.isStatusboxOpen = true
        this.isBill = true
    },
    clickStatusbox(){
        this.isStatusbox = true
        this.isArticle = false
        this.isStatusboxOpen = true
        this.isBill = false
    },
    clickArticle(){
        this.isStatusbox = false
        this.isStatusboxOpen = true
        this.isArticle = true
        this.isBill = false
    },
    closeStatusbox(){
        this.isStatusboxOpen = false
    }
  },
  
  created(){
    var self = this;
      var self2 = this;
      setTimeout(function() {
        self.$nextTick(function() {
          self.isloaded = true;
        })
        self2.$nextTick(function() {
          self2.isHide = false;
        })
    }, 1000);
  }
}
</script>
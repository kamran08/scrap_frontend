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

                <div class="_card1_inpt" @click="clickStatusbox">
                    <input @click="clickStatusbox" type="text" placeholder="What's on your mind or financial story?" disabled>
                </div>

                <div class="_card1_btm">
                    <ul class="_dis_flex">
                        <li @click="clickStatusbox" class="">
                            <p>Post a Story</p>
                            <span><i class="fas fa-arrow-right"></i></span>
                        </li>
                        <!-- <li @click="clickBill"> 
                            <p>Post Bill</p>
                            <span><i class="fas fa-arrow-right"></i></span>
                        </li>
                        <li @click="clickArticle">
                            <p>Write an Article</p>
                            <span><i class="fas fa-arrow-right"></i></span>
                        </li> -->
                    </ul>
                </div>

                <div class="_statusBox_main_all">
                    <div class="_statusBox_main _padd">
                        <p class="_statusBox_close" @click="closeStatusbox"><Icon type="md-close" /></p>
                        <div class="_statusBox_main_top">
                            <div class="_statusBox_main_pic"><img :src="authUser.profilePic" alt="" title="" class="_statusBox_main_img _1border_color" /></div>
                            <div class="_statusBox_main_details">
                                <p class="_statusBox_main_name"><a href="" class="_3link">{{authUser.firstName}} {{authUser.lastName}}</a></p>
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
                           
                            <div class="demo-upload-list" v-for="(item,i) in feed.images" :key="i">
                                <template v-if="item.status === 'finished'">
                                    <img :src="item.response">
                                    <div class="demo-upload-list-cover">
                                        <!-- <Icon type="ios-eye-outline" @click.native="handleView(item.name)"></Icon> -->
                                        <Icon type="ios-trash-outline" @click.native="handleRemove(item,i)"></Icon>
                                    </div>
                                </template>
                                <template v-else>
                                    <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
                                </template>
                            </div>
                            <Upload
                                multiple 
                                ref="uploads"
                                type="drag"
                                :on-progress="handleProgressCover"
                                :on-success="handleSuccess"
                                :show-upload-list="false"
                                :format="['jpg','jpeg','png']"
                                :max-size="10048"
                                action="https://api.scrapabill.com/feed/uploadImages"
                                >
                                <!-- :action="'http://localhost:3333/'+'feed/uploadImages'" -->
                                <!-- :action="BASE_URL+'feed/uploadImages'" -->
                                 <div style="width: 70px;height:58px;line-height: 58px;">
                                    <Icon type="ios-camera" size="20"></Icon>
                                </div>
                                <!-- <Button icon="ios-cloud-upload-outline">Photo</Button> -->
                            </Upload>
                        </div>
                        <!-- Status -->

                        <!-- Bill -->
                        <div v-if="isBill" class="_mar_t30">
                            <div class="row">
                                <div class="col-12 col-md-6 col-lg-6 _mar_b20">
                                    <Input placeholder="Bill Title*"/>
                                </div>
                                <div class="col-12 col-md-6 col-lg-6 _mar_b20">
                                    <Select placeholder="Bill Category*" style="width:100%">
                                        <Option>Accident</Option>
                                        <Option>Accessories</Option>
                                    </Select>
                                </div>
                                <div class="col-12 col-md-6 col-lg-6 _mar_b20">
                                    <Select placeholder="Bill Type*" style="width:100%">
                                        <Option>Balance</Option>
                                        <Option>Bill</Option>
                                        <Option>Cost</Option>
                                        <Option>Debt</Option>
                                        <Option>Expenses</Option>
                                    </Select>
                                </div>
                                <div class="col-12 col-md-6 col-lg-6 _mar_b20">
                                     <InputNumber
                                    :max="10000"
                                    style="width:100%"
                                     placeholder="Ammount*"
                                    :formatter="value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
                                    :parser="value => value.replace(/\$\s?|(,*)/g, '')"></InputNumber>
                                </div>
                                <div class="col-12 col-md-6 col-lg-6 _mar_b20">
                                    <DatePicker type="date" placeholder="Due Date" style="width: 100%"></DatePicker>
                                </div>
                                <div class="col-12 col-md-6 col-lg-6">
                                    <Input class="_mar_b20" placeholder="Bill Issuer’s Name*"/>
                                </div>
                                <div class="col-12 col-md-6 col-lg-6 _mar_b20">
                                    <Upload
                                        multiple
                                        type="drag"
                                        action="//jsonplaceholder.typicode.com/posts/">
                                        <div style="padding: 42px 0px;">
                                            <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                                            <p>Doc</p>
                                        </div>
                                    </Upload>
                                </div>
                                <div class="col-12 col-md-6 col-lg-6 _mar_b20">
                                    <Input type="textarea" :rows="7" placeholder="Bill Description*"/>
                                </div>

                                <div class="col-12 col-md-12 col-lg-12">
                                    <Checkbox>I Agree With Terms & Conditions.</Checkbox>
                                </div>
                            </div>
                        </div>
                        <!-- Bill -->

                        <!-- Article -->
                        <div v-if="isArticle" class="_mar_t30">
                            <div class="row">
                                <div class="col-12 col-md-12 col-lg-12 _mar_b20">
                                    <Input placeholder="Title*"/>
                                </div>
                                <div class="col-12 col-md-12 col-lg-12 _mar_b20">
                                    <Input type="textarea" :rows="7" placeholder="Description*"/>
                                </div>
                            </div>
                        </div>
                        <!-- Article -->
                        

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
      },
      
    //   image:''
    }
  },

  methods:{
        async handleRemove(item, i) {
            this.feed.images.splice(i, 1);
        },
        async handleProgressCover(event, file, fileList) {
            let a = fileList.length
            let b = this.feed.images.length
            if(a==b) {
                this.$set(this.feed.images,a-1, fileList[a-1])
            }
            else{
                this.feed.images.push(fileList[a-1])
            }
            // this.$set(this.feed,'images', JSON.parse(JSON.stringify(fileList)))
        //   this.feed.images = JSON.parse(JSON.stringify(fileList));
        //   console.log(fileList, 'files')
        //   console.log(this.edit_data.images)

            //   this.cover = file;
    },
    handleSuccess (res, file) {
        // console.log(file, 'files')
        // this.feed.images.push(file)
        // let a =  this.feed.images.length
        // this.feed.images[a-1].url = res
        // this.feed.images.push(res)
        // console.log(res)
    },
    async createFeed(){
          if(this.feed.feedTxt == '' || !this.feed.images.length){
                // this.i("All fields are required.");
                return this.i("Please write some text or upload images.");
            }
            let images = []
            if(this.feed.images.length){
                for(let it of this.feed.images){
                    images.push(it.response)
                }
            }
            // this.feed.images =JSON.stringify(images)
    // return
            let obj =  JSON.parse(JSON.stringify(this.feed))
            obj.images = JSON.stringify(images)
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
        this.feed.images =[]
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
<style>
    .demo-upload-list{
        display: inline-block;
        width: 60px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        border: 1px solid transparent;
        border-radius: 4px;
        overflow: hidden;
        background: #fff;
        position: relative;
        box-shadow: 0 1px 1px rgba(0,0,0,.2);
        margin-right: 4px;
    }
    .demo-upload-list img{
        width: 100%;
        height: 100%;
    }
    .demo-upload-list-cover{
        display: none;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0,.6);
    }
    .demo-upload-list:hover .demo-upload-list-cover{
        display: block;
    }
    .demo-upload-list-cover i{
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        margin: 0 2px;
    }
    .ivu-upload{
            width: 74px  !important; 
    }
</style>
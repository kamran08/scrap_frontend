<template>
    <div>
        <!-- CONTENT -->
        <div class="_content">
            <div class="_index_page">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-md-2 col-lg-3">
                            <leftSection/>
                        </div>
                        <div class="col-12 col-md-6 col-lg-6">
                            <!-- Status Box -->
                            <statusBox/>
                            <!-- Status Box -->

                            <div class="_indx_post_all">
                                <!-- Shimmer -->
                                <template v-if="isHide">
                                    <ul class="ideXMenuShimmer">
                                        <li class="_shim_animate"></li>
                                        <li class="_shim_animate"></li>
                                        <li class="_shim_animate"></li>
                                        <li class="_shim_animate"></li>
                                    </ul>
                                    
                                    <div v-for="(item, index) in 2" :key="index" class="_card_shimmer_box _box_shdw2 _mar_t30">
                                        <div class="_card_shimmer">
                                            <div class="_card_shimmer_profilePic _shim_animate"></div>
                                            <div class="_card_shimmer_details">
                                            <div class="_card_shimmer_name _shim_animate"></div>
                                            <div class="_card_shimmer_text _shim_animate"></div>
                                            </div>
                                        </div>

                                        <div class="_card_shimmer_status">
                                            <div class="_card_shimmer_status_text _shim_animate _shim_w90"></div>
                                            <div class="_card_shimmer_status_text _shim_animate _shim_w60"></div>
                                        </div>

                                        <div class="_card_shimmer_bottom">
                                            <div class="_card_shimmer_like like _shim_animate"></div>
                                            <div class="_card_shimmer_like comment _shim_animate"></div>
                                            <div class="_card_shimmer_like share _shim_animate"></div>
                                        </div>
                                    </div>
                                </template>
                                <!-- Shimmer -->

                                <template v-if="isloaded">
                                    <div class="_indx_post_lst">
                                        <ul class="_dis_flex">
                                            <li class="_active">All</li>
                                            <li>Status</li>
                                            <li>Bill</li>
                                            <li>Articles</li>
                                        </ul>
                                    </div>
                                    
                                    <!-- Image card --> 
                                    <div class="_indx_post_card _box_shdw2  _mar_b20 _mar_t30" v-for="(feed, index) in getFeed" :key="index">
                                        <div class="_indx_post_card_inner">
                                            <div class="_indx_post_card_top _dis_flex">
                                                <div class="_indx_post_card_top_lft">
                                                    <div class="_card1_top_img _mar_r10" v-if="feed.user.profilePic">
                                                        <img :src="feed.user.profilePic" alt="image">
                                                    </div>
                                                    <div class="_card1_top_img _mar_r10" v-else>
                                                        <img src="/img/man.jpg" alt="image">
                                                    </div>
                                                    <div class="_indx_post_card_top_titl">
                                                        <nuxtLink to="/profile"><h4>{{feed.user.firstName}} {{feed.user.lastName}}</h4></nuxtLink>
                                                        <p>{{feed.created_at | formateDate}} </p>
                                                    </div>
                                                    
                                                </div>
                                                <div v-if="feed.user.id == authUser.id" class="_card_top_more">
                                                    <Dropdown trigger="click" placement="bottom-end">
                                                        <a class="_more" href="javascript:void(0)">
                                                            <i class="fas fa-angle-down"></i>
                                                        </a>
                                                        <DropdownMenu slot="list">
                                                            <DropdownItem><span style="cursor:pointer;" @click="onClickEditFeed(feed, index)">Edit</span></DropdownItem>
                                                            <DropdownItem><span style="cursor:pointer;" @click="deleteFeed(feed, index)">Delete</span></DropdownItem>
                                                        </DropdownMenu>
                                                    </Dropdown>
                                                </div>
                                            </div>
                                            <div class="_indx_post_card_txt">
                                                <!-- <nuxtLink to="/singlePost"><h4 class="_clr_blck">Donate money for shelter less child education</h4></nuxtLink> -->
                                                <p v-if="!feed.isEdit">{{feed.feedTxt}}</p>
                                                
                                                <!-- <div class="_1card_comment_box_input_icon" v-if="feed.isEdit">
                                                    <div class="_1card_comment_box_input">
                                                        <input
                                                        type="text" v-model="editFeedInput.feedTxt" @keyup.enter="editFeed(feed)"
                                                        />
                                                </div>
                                                        <i style="margin-top:12px;cursor:pointer;" class="fas fa-times" @click="cancelFeedEditinput(feed)"></i>
                                                    </div> -->
                                                <!-- <div class="_indx_post_red_mre _mar_t15 _dis_flex">
                                                    <a href="" class="_clr1">Read More</a>
                                                    <span class="_icon_crcle"><i class="fas fa-arrow-right"></i></span>
                                                </div> -->
                                            </div>
                                            
                                            <!-- Single image -->
                                            <div class="_card_status_pic_all" v-if="JSON.parse(feed.images).length==1">
                                                <div  @click="imageModalOpen(feed.images,ind)" class="_card_status_pic" v-for="(image,ind) in JSON.parse(feed.images)" :key="ind">
                                                    <img class="_card_status_img" :src="image" alt="" title="">
                                                </div>
                                            </div>
                                            <!-- Single image -->

                                            <!-- Multipule image -->
                                            <div class="_cardMulti_pic_all" v-else>
                                                <div class="_cardMulti_pic_main" v-for="(image,ind) in JSON.parse(feed.images)" :key="ind">
                                                    <div @click="imageModalOpen(feed.images,ind)" class="_cardMulti_pic">
                                                        <img class="_cardMulti_img" :src="image" alt="" title="">
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Multipule image -->
                                        </div>

                                        <div class="_indx_post_card_btm _dis_flex">
                                            <div class="_indx_post_btm_lft">
                                                <ul>
                                                    <li>
                                                        <span>
                                                            <template v-if="likeLoad==index"><i class="fas fa-spinner"></i> </template>
                                                            <template v-else> 
                                                                <i @click="crateFeedLike(feed,index)" class="fas fa-heart" v-if="feed.hasUserLike"></i>
                                                                <i @click="crateFeedLike(feed,index)" class="far fa-heart" v-else></i>
                                                            </template>
                                                            
                                                        </span>{{feed.__meta__.likes_count}} Like
                                                        <!-- Bill Followers -->
                                                    </li>
                                                    <li @click="showComment(feed, index)">
                                                        <span><i class="far fa-comment"></i></span>{{feed.__meta__.comment_count}} Comments
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="_indx_post_btm_r8">
                                                <ul>
                                                    <li>
                                                        <span><i class="fas fa-share"></i></span>Reply
                                                    </li>
                                                    <li>
                                                        <span><i class="fas fa-share-alt"></i></span>Share
                                                    </li>
                                                    <!-- <li class="_clr_blck">
                                                        <span @click="isDropdown = !isDropdown"><i class="fas fa-ellipsis-h"></i></span>

                                                        
                                                        <div v-if="isDropdown" class="_indx_post_drpwn1 _box_shdw2">
                                                            <ul>
                                                                <li>
                                                                    Iteam 1
                                                                </li>
                                                                <li>
                                                                    Iteam 2
                                                                </li>
                                                                <li>
                                                                    Iteam 3
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        
                                                    </li> -->
                                                </ul>
                                            </div>
                                        </div>
                                        <!-- <span v-if="feed"> -->
                                            <!-- <span v-if=" feed.id == getComment.post_id"> -->
                                            <!--startcommentSection-->
                                            <commentBox v-if="feed.comments && feed.isOpen" :feed='feed'/>
                                            <!--endcommentSection--> 
                                            <!-- </span> -->
                                        
                                        <!-- </span> -->
                                    </div>
                                    <!-- Image card -->
                                </template>
                            </div>
                        </div>

                        <!-- Right Section -->
                        <div class="col-12 col-md-4 col-lg-3">
                            <rightSection/>
                        </div>
                        <!-- Right Section -->
                    </div>
                </div>	
            </div>
        </div>
        <!-- CONTENT -->

        <!-- Image modal -->
        <div v-if="isImage" class="_imageShow">
            <div class="_imageShow_main ghg">
                <div class="_imageShow_logo">
                    <p @click="isImage = false" class="_imageShow_close"><i class="ivu-icon ivu-icon-md-close"></i></p>
                </div>
                <div class="_imageShow_main_pic">
                    <div style="width: 100%; height: 100%;" v-if="singleItemImages[nextIndex]">
                        <img alt="" title="" class="_imageShow_main_img" :src="singleItemImages[nextIndex]">
                    </div>
                </div>
                <div class="_imageShow_next_pre _imageShow_next" @click="previous()"><i class="ivu-icon ivu-icon-md-arrow-dropleft"></i></div>
                <div class="_imageShow_next_pre _imageShow_pre"  @click="next()"><i class="ivu-icon ivu-icon-md-arrow-dropright"></i></div>
            </div>
        </div>
        <!-- Image modal -->
     

    <Modal
        v-model="editModal"
          title="Edit Feed"
          class-name="modal_center"
            :mask-closable="false"
      width="650"
        >
         <p slot="header">
        <i class="fas fa-edit"></i>
        <span class="_padd_l5">Edit Post</span>
      </p>

          <div>
        <div class="_modal_content">
          <div class="_statusEdit_top _mar_b15">
            <div class="_card_top">
              <div class="_card_pic">
                <img
                  class="_card_img"
                  v-lazy="authUser.profilePic"
                  alt=""
                  title=""
                />
              </div>

              <div class="_card_details">
                <p class="_card_name">
                  {{ authUser.firstName }}
                </p>
              </div>

             
            </div>
          </div>

          <div class="_statusEdit_statusBox">
            <Input
              type="textarea"
              :rows="8"
              v-model="edit_data.feedTxt"
              placeholder="What's on your mind ?"
            />
          </div>
          <!-- {{edit_data.images}} -->
          <template>

            <div class="demo-upload-list" v-for="(item,i) in edit_data.images" :key="i">
                <template v-if="item.status === 'finished'">
                    <img :src="item.url">
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
                :format="['jpg','jpeg','png']"
                :max-size="20480"
                :on-format-error="handleFormatErrorCover"
                :on-exceeded-size="handleMaxSizeCover"
                :show-upload-list="false"
                action="http://127.0.0.1:3333/feed/uploadImages"
                
            >
                
                <Button icon="ios-cloud-upload-outline">Photo / Video</Button>
        </Upload>
        </template>
        
        </div>
      </div>
             

       <div slot="footer">
        <Button @click="onClickEditPost" type="primary">Edit</Button>
        <Button @click="closeModal">Close</Button>
      </div>
    </Modal>
    </div>
</template>

<script>
import statusBox from '~/components/statusBox.vue'
import commentBox from '~/components/comment.vue'
import rightSection from '~/components/rightSection.vue'
import leftSection from '~/components/leftSection.vue'

export default {
    middleware:"auth",
  components: {
    statusBox,
    commentBox,
    rightSection,
    leftSection
  },

  data(){
    return{
        singleItem:{},
        editIndex:-1,
        editModal: false,
        singleImage: '',
        nextIndex: -1,
        likeLoad:-1,
    //   isDropdown: false,
    //   isCreateComment: false,
      isloaded: false,
      isHide: true,
      isModal: false,
      isImage: false,
       edit_data:{
        editIndex:-1,
        id:'',
        user_id:'',
        feedTxt:'',
        images:[],
        comments:[],
        singleItemImages:[],
        user:{},
        
      },
    }
  },
  async asyncData({app , store}) {
      try {
          let {data} = await app.$axios.get('/feed/getFeed')
          store.commit('setFeed',data)

      } catch (error) {
          console.log(error)
      }
  },
    mounted () {
            // this.edit_data.images = this.$refs.upload.fileList;
        },
  methods:{
    next(){
        let a = this.nextIndex+1
        console.log(this.nextIndex, 'first ')
        if(a>=this.singleItemImages.length){
            this.nextIndex = 0
            return
        }
        else {
            this.nextIndex+=1
        }
        console.log(this.nextIndex ,'last')
    },
    previous(){
        let a = this.nextIndex-1
        console.log(this.nextIndex ,'fist')
        if(a<=-1){
            this.nextIndex = this.singleItemImages.length-1
        }
        else {
            this.nextIndex--
        }
        console.log(this.nextIndex, 'last')

    },
      imageModalOpen(feed,i){
          this.singleItemImages = JSON.parse(feed)
          this.nextIndex = i
          this.isImage = true
      },
     handleMaxSizeCover(file) {
      this.$Notice.warning({
        title: "Exceeding file size limit",
        desc: "File  " + file.name + " is too large, no more than 20M.",
      });
    },
      handleFormatErrorCover(file) {
      this.$Notice.warning({
        title: "The file format is incorrect",
        desc:
          "File format of " +
          file.name +
          " is incorrect, please select jpg or png or gif.",
      });
    },
      async handleProgressCover(event, file, fileList) {
          this.edit_data.images.push(file)
          console.log(file, 'files')
        //   console.log(this.edit_data.images)

            //   this.cover = file;
    },
      handleRemove(item,i){
          this.edit_data.images.splice(i, 1);
      },
    handleSuccess (res, file) {
        let a =  this.edit_data.images.length
        this.edit_data.images[a-1].url = res
    },
    closeModal(){
        this.$store.commit('setUpdateFeed',this.singleItem)
        
        this.editModal = false
    },
    
    async onClickEditPost(){
    
        let images = []
        if(this.edit_data.images.length){
            for(let it of this.edit_data.images){
                images.push(it.url)
            }
        }
        // delete this.edit_data.images 
        this.edit_data.images = JSON.stringify(images)
        console.log( this.edit_data)
        // return 
        let res = await this.callApi('post', 'feed/updateFeed', this.edit_data)
        if(res.status==200){
            this.edit_data = res.data
            this.edit_data.editIndex = this.editIndex
            this.$store.commit('setUpdateFeed',this.edit_data)
            console.log(res.data)
            this.editIndex = -1
            this.editModal = false
        }
        else if(res.status==401){
            this.e(res.data.message)
        }   
        else this.swr()
    },
    async crateFeedLike(feed, index){
        this.likeLoad = index
        const res = await this.callApi('post','like/createLike',{feed_id:feed.id})
        this.likeLoad = -1
        if(res.status==200){
            if(res.data.hasUserLike){
                feed.hasUserLike = false
                feed.__meta__.likes_count--
            }
            else{
                feed.hasUserLike =this.authUser
                feed.__meta__.likes_count++
            }
            console.log(res.data)
        }
        else if(res.status==404 || res.status==401){
            this.e(res.data.message)
        }
        else this.swr()
    },
    async showComment(feed, index){
        if(feed.comments){
             this.$set(feed, 'isOpen', !feed.isOpen)
            return 
        }
        const res = await this.callApi('get',`comment/getComment/`+feed.id)
        if(res.status === 200){
            // feed.comments = res.data
           let obj = res.data
           obj.feed_id =feed.id
           
            this.$store.commit("setComment", obj);
            this.$set(feed, 'isOpen', !feed.isOpen)
            
        }
        else{
            this.swr();
        }
    },
    
    async deleteFeed(feed, i){
        let obj ={
        feed_id: feed.id,
        user_id: this.authUser.id
      }
    //   console.log(obj)
      const res = await this.callApi('post',`feed/deleteFeed/`, obj)
        
      if(res.status == 200){
          
        this.s('Feed Deleted Successfully !!')
        this.getFeed.splice(i, 1);
        // this.feed.__meta__.comment_count--
        
      }else{
        this.swr()
      }
    },
    
   onClickEditFeed(feed,i) {
       let feed1 = JSON.parse(JSON.stringify(feed))
       this.singleItem = JSON.parse(JSON.stringify(feed))
       this.singleItem.editIndex=i
       this.edit_data.images = []
       console.log(feed1)
       this.editIndex = i
           this.edit_data.editIndex=i
           this.edit_data.id=feed1.id
            this.edit_data.user_id=feed1.user_id
            this.edit_data.feedTxt=feed1.feedTxt
            let a=JSON.parse(feed1.images)
            for(let it of a){
                let ob = {
                    status:'finished',
                    url:it
                }
                this.edit_data.images.push(ob)
            }
        feed.isEdit =true
        this.editModal = true
    },
    
    cancelFeedEditinput(feed) {
      feed.isEdit =false
    },
    
    // async editFeed(feed){
    //   // console.log(this.editInput.commentTxt)
    //   if(this.editFeedInput.feedTxt == ""){
    //       return
    //   }
    //   const res = await this.callApi('post', 'feed/editFeed', this.editFeedInput)
    //     //   this.$store.commit("settodos", res.data);
    //   if(res.status == 200){
    //       // console.log(res.data)
    //       feed.feedTxt = this.editFeedInput.feedTxt
    //     this.s('Feed updated Successfully !!')
    //     feed.isEdit =false
        
        
    //   }else{
    //     this.swr()
    //   }
    // }
    
    
    
    

  },
  
  created() {
    //   this.getFeedData();
      
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
</style>

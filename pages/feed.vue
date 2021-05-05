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
                                                    <div class="_card1_top_img _mar_r10">
                                                        <img src="/img/man.jpg" alt="image">
                                                    </div>
                                                    <div class="_indx_post_card_top_titl">
                                                        <nuxtLink to="/profile"><h4>{{authUser.firstName}} {{authUser.lastName}}</h4></nuxtLink>
                                                        <p>22 March 2021</p>
                                                    </div>
                                                    
                                                </div>
                                                <p class="text-right">
                                                    <span style="cursor:pointer;">Edit</span>
                                                    <span style="cursor:pointer;">Delete</span>
                                                </p>
                                            </div>
                                            <div class="_indx_post_card_txt">
                                                <!-- <nuxtLink to="/singlePost"><h4 class="_clr_blck">Donate money for shelter less child education</h4></nuxtLink> -->
                                                <p>{{feed.feedTxt}}</p>

                                                <!-- <div class="_indx_post_red_mre _mar_t15 _dis_flex">
                                                    <a href="" class="_clr1">Read More</a>
                                                    <span class="_icon_crcle"><i class="fas fa-arrow-right"></i></span>
                                                </div> -->
                                            </div>
                                            <div class="_indx_post_card_txt">
                                                <div @click="isImage = true" class="_status_image" v-for="image in JSON.parse(feed.images)" :key="image">
                                                    <!-- <img class="_status_image_img" src="/img/image_1608022151387.jpeg" alt="" title=""> -->
                                                    <img class="_status_image_img" :src="image" alt="" title="">
                                                </div>
                                            </div>
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
                                                            
                                                        </span>{{feed.__meta__.likes_count}} Bill Followers
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
                    <div style="width: 100%; height: 100%;">
                        <img alt="" title="" class="_imageShow_main_img" src="/img/image_1608022151387.jpeg">
                    </div>
                </div>
                <div class="_imageShow_next_pre _imageShow_next"><i class="ivu-icon ivu-icon-md-arrow-dropleft"></i></div>
                <div class="_imageShow_next_pre _imageShow_pre"><i class="ivu-icon ivu-icon-md-arrow-dropright"></i></div>
            </div>
        </div>
        <!-- Image modal -->
    </div>
</template>

<script>
import statusBox from '~/components/statusBox.vue'
import commentBox from '~/components/comment.vue'
import rightSection from '~/components/rightSection.vue'
import leftSection from '~/components/leftSection.vue'

export default {
  components: {
    statusBox,
    commentBox,
    rightSection,
    leftSection
  },

  data(){
    return{
        likeLoad:-1,
    //   isDropdown: false,
    //   isCreateComment: false,
      isloaded: false,
      isHide: true,
      isModal: false,
      isImage: false,
    //   comments:{
    //       post_id:'',
    //       commentTxt:''
    //   }
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
  methods:{
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
        if(feed.comments.length){
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
    // async getFeedData(){
    //     const res = await this.callApi('get',`feed/getFeed`)
    //     if(res.status === 200){
    //         // console.log(res.data)
    //         this.$store.commit("setFeed", res.data);
    //     }
    //     else{
    //         // this.swr();
    //     }
    // },
    // async createComment(id){
    //   if(this.comments.commentTxt == ""){
    //       return
    //   }
    //   const res = await this.callApi('post', 'comment/createComment', {post_id: id, commentTxt: this.comments.commentTxt})
    //     //   this.$store.commit("settodos", res.data);
    //   if(res.status == 201){
    //       console.log(res.data)
    //     this.s('Comment Created Successfully !!')
    //     this.comments.commentTxt =''
        
    //   }else{
    //     this.swr()
    //   }
    // },
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
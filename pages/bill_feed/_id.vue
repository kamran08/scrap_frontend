<template>
    <div>
        <div class="_content">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-7 col-lg-8">
                    

                        <template v-if="isloaded">
                            <!-- card -->
                            <div class="_indx_post_card _box_shdw2  _mar_b30">
                                <div class="_indx_post_card_inner">
                                    <div class="_indx_post_card_top _dis_flex"  v-if="feed && feed.user">
                                        <div class="_indx_post_card_top_lft">
                                            <div class="_card1_top_img _mar_r10" v-if="feed && feed.user">
                                                <img v-if="feed.user.profilePic" :src="feed.user.profilePic" alt="image">
                                            </div>
                                            <div class="_indx_post_card_top_titl">
                                                <h4 v-if="feed.user">{{feed.user.firstName}} {{feed.user.lastName}}</h4>
                                                <p>{{feed.created_at | formateDate}}</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="_indx_post_card_txt _dis_flex_cntr1 _dis_flex" v-if="feed && feed.bill">
                                        <div class="" >
                                            <h4  class="_clr1" >{{feed.bill.title}}</h4>
                                            <p>
                                                {{feed.bill.descriptions}}
                                              
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <!-- {{feed}} -->
                                    <div class="_indx_post_card_btm _dis_flex" v-if="feed">
                                            <div class="_indx_post_btm_lft">
                                                <ul>
                                                    <li>
                                                        <span v-if="feed.meta"> 
                                                            <template v-if="likeLoad"><i class="fas fa-spinner"></i> </template>
                                                            <template v-else> 
                                                                <i @click="crateFeedLike(feed)" class="fas fa-heart" v-if="feed.hasUserLike"></i>
                                                                <i @click="crateFeedLike(feed)" class="far fa-heart" v-else></i>
                                                            </template>
                                                            
                                                        </span >{{feed.meta.likes_count}} Like
                                                        <!-- Bill Followers -->
                                                    </li>
                                                    <li >
                                                         <span>
                                                        <template v-if="followLoading"><i class="fas fa-spinner"></i> </template>
                                                            <template v-else> 
                                                                <i  class="fas fa-heart" v-if="feed.hasUserfollow"></i>
                                                                <i @click="crateFeedFollow(feed)" class="far fa-heart" v-else></i>
                                                            </template>
                                                        </span>{{feed.meta.follow_count}} Follow
                                                    </li>
                                                    <li @click="showComment(feed)">
                                                        <span><i class="far fa-comment"></i></span>{{feed.meta.comment_count}} Comments
                                                    </li>
                                                </ul>
                                            </div>
                                            <!-- <div class="_indx_post_btm_r8">
                                                <ul>
                                                    <li>
                                                        <span><i class="fas fa-share"></i></span>Reply
                                                    </li>
                                                    <li>
                                                        <span><i class="fas fa-share-alt"></i></span>Share
                                                    </li>
                                               
                                                </ul>
                                            </div> -->
                                        </div>
                               

                                <!-- Comment section -->
                                
                                
                                 <commentBox v-if="feed && feed.comments && feed.isOpen" :feed='feed'/>
                                <!-- Comment section -->
                            </div>
                            <!-- card -->
                        </template>
                    </div>

                    <div class="col-12 col-md-5 col-lg-4">
                        <!-- Shimmer -->
                        <!-- <template v-if="isHide">
                            <div class="_card_shimmer_box _box_shdw2 _mar_b20">
                                <div class="_card_shimmer">
                                    <div class="_card_shimmer_profilePic _shim_animate"></div>
                                    <div class="_card_shimmer_details">
                                    <div class="_card_shimmer_name _shim_animate"></div>
                                    <div class="_card_shimmer_text _shim_animate"></div>
                                    </div>
                                </div>

                                <div class="_mar_b50">
                                    <div class="_card_shimmer_status_text _shim_animate _shim_w90"></div>
                                    <div class="_card_shimmer_status_text _shim_animate _shim_w60"></div>
                                </div>

                                <div class="_card_shimmer_bottom">
                                    <div class="_card_shimmer_like like _shim_animate"></div>
                                    <div class="_card_shimmer_like comment _shim_animate"></div>
                                    <div class="_card_shimmer_like share _shim_animate"></div>
                                </div>
                            </div>
                        </template> -->
                        <!-- Shimmer -->

                        <template v-if="isloaded && feed">
                            <div class="_single_right  _box_shdw2  _mar_b20 _mar_b30">
                                <!-- <ul class="_single_right_dead _mar_b18"><li>Deadline:01 April, 2021</li> <li>Child Education</li></ul>
                                <div class="_indx_post_pgrs_qnty _mar_b15"><p>Bill Scrapped : $123</p></div>v-if="feed.bill && feed.bill.categories"
                                <div class="_indx_post_pgrs_qnty _mar_b15"><p>Fund Goal : $400</p></div> -->
                                <ul class="_single_right_dead _mar_b18"><li v-if="feed.bill">Due Date:{{feed.bill.date | formateDate}}</li> <li v-if="feed.bill && feed.bill.categories && feed.bill.types">{{feed.bill.categories.name}} {{feed.bill.types.name}}</li></ul>
                                <div class="_indx_post_pgrs_qnty _mar_b15"><p v-if="feed.bill.total_amount_scrapped">Processing:${{feed.bill.total_amount_scrapped }}</p><p v-else>Processing:$0</p></div>
                                <div class="_indx_post_pgrs_qnty _mar_b15"><p>Scrap Goal : ${{feed.bill.amount}}</p></div>
                                <Progress :percent="feed.bill | makePercent" :stroke-width="20" :status="(feed.bill | makePercent==100)?'success':'active'" text-inside />
                                <div class="_mar_t20">
                                    <button class="_btn1 _btn_long follow_active" type="button" v-if="feed.hasUserfollow" >Follow this bill</button>
                                    <button class="_btn1 _btn_long" type="button" v-else @click="crateFeedFollow(feed)">Follow this bill</button>
                                </div>
                            </div>

                            <div class="_single_right  _box_shdw2  _mar_b20 _mar_b30" v-if="feed.bill.doc && feed.bill.doc.split('.').pop()=='pdf' || feed.bill.doc.split('.').pop()=='doc'">
                                <p class="_follow_title" v-if="feed.bill.doc.split('.').pop()=='pdf'">Download the Pdf</p>
                                <p class="_follow_title" v-if="feed.bill.doc.split('.').pop()=='doc'">Download the Doc</p>

                                <div class="_follow_card_all">
                                    <!-- Item -->
                                    <div class="_follow_card" v-if="feed.bill.doc.split('.').pop()=='pdf'">
                                        <a  :href="feed.bill.doc" download class="_follow_card_pic" style="border-radius:0 !important;">
                                            <!-- <img class="_follow_card_img" src="" alt="" title=""> -->
                                            <i class="far fa-file-pdf" style="font-size:25px;color:red;"></i>
                                        </a>

                                        <div class="_follow_card_details">
                                            <a class="_follow_card_name" :href="feed.bill.doc" download>Download</a>
                                        </div>
                                    </div>
                                    <!-- Item -->
                                    <!-- Item -->
                                    <div class="_follow_card" v-else-if="feed.bill.doc.split('.').pop()=='doc'">
                                        <a  :href="feed.bill.doc" download class="_follow_card_pic" style="border-radius:0 !important;">
                                            <!-- <img class="_follow_card_img" src="" alt="" title=""> -->
                                            <i class="far fa-file-alt" style="font-size:25px;color:black;"></i>
                                        </a>

                                        <div class="_follow_card_details">
                                            <a class="_follow_card_name" :href="feed.bill.doc" download>Download</a>
                                        </div>
                                    </div>
                                    <!-- Item -->
                                </div>
                            </div>
                            
                            <div class="_single_right  _box_shdw2  _mar_b20 _mar_b30" v-if="feed.bill.doc && feed.bill.doc.split('.').pop()=='jpg' || feed.bill.doc.split('.').pop()=='jpeg'  || feed.bill.doc.split('.').pop()=='png'  || feed.bill.doc.split('.').pop()=='webp' ">

                                <div class="_follow_card_all">
                                    <!-- Item -->
                                    <div class="_follow_card">
                                        <img class="_follow_card_img" :src="feed.bill.doc" width="200" height="200" alt="" title="">
                                    </div>
                                    <!-- Item -->
                                    
                                  
                                </div>
                            </div>

                            <div class="_single_right  _box_shdw2  _mar_b20 _mar_b30">
                                <p class="_follow_title">People are following</p>

                                <div class="_follow_card_all" v-if="feed && feed.follow">
                                    <!-- Item -->
                                    <div v-if="item.user" class="_follow_card" v-for="(item,index) in feed.follow" :key="index">
                                        <a href="" class="_follow_card_pic">
                                            <img class="_follow_card_img" :src="item.user.profilePic" alt="" title="">
                                        </a>

                                        <div class="_follow_card_details" v-if="item.user">
                                            <a class="_follow_card_name" href="">{{item.user.firstName}} {{item.user.lastName}}</a>
                                        </div>
                                    </div>
                                    <!-- Item -->
                                    
                                  
                                </div>
                            </div>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import commentBox from '~/components/comment.vue'
export default {
     middleware:"auth",
  components: {
    commentBox,
  },
  data(){
    return{
      isloaded: false,
      isHide: true,
      likeLoad: false,
      followLoading:false,
    }
  },
  mounted() {
        const socket = io("http://localhost:3333", {
          withCredentials: true,
          transports: ['websocket']
          
        });
    if(this.feed)      
      socket.on(`bill_feed_${this.feed.id}`, (data) => {
        if(data.type=='new_follow'){
            this.feed.follow.unshift(data)
            this.feed.meta.follow_count++
        }
        else if(data.type=='support'){
            console.log(data , 'here is data')
            let ob = this.feed.bill
            ob.total_amount_scrapped = parseFloat(ob.total_amount_scrapped)+parseFloat(data.amount)
            this.feed.bill = ob
            console.log(this.feed , 'here is feed')
        }
        this.playSound()
        
        // socket.emit('my other event', { my: 'data' })
      })
  },

  methods:{
      async crateFeedLike(feed){
        this.likeLoad = true
        const res = await this.callApi('post','like/createLike',{feed_id:feed.id,user_id:feed.user_id})
        this.likeLoad = false
        if(res.status==200){
            if(res.data.hasUserLike){
                feed.hasUserLike = false
                feed.meta.likes_count--
            }
            else{
                feed.hasUserLike =this.authUser
                feed.meta.likes_count++
            }
            console.log(res.data)
        }
        else if(res.status==404 || res.status==401){
            this.e(res.data.message)
        }
        else this.swr()
    },
    async crateFeedFollow(feed){
        this.followLoading = true
        const res = await this.callApi('post','like/crateFeedFollow',{feed_id:feed.id,user_id:feed.user_id,bill_id:feed.bill.id})
        this.followLoading =false
        if(res.status==200){
            if(res.data.hasUserfollow){
                feed.hasUserfollow = false
                feed.meta.follow_count--
            }
            else{
                feed.hasUserfollow =this.authUser
                feed.meta.follow_count++
            }
            console.log(res.data)
        }
        else if(res.status==404 || res.status==401){
            this.e(res.data.message)
        }
        else if(res.status==403 ){
            this.e(res.data.message)
        }
        else this.swr()
    },
    async showComment(feed){
        if(feed.comments.length){
             this.$set(feed, 'isOpen', !feed.isOpen)
            return 
        }
        const res = await this.callApi('get',`comment/getComment/`+feed.id)
        if(res.status === 200){
            
           let obj = res.data
           obj.feed_id =feed.id
           feed.comments = obj
           
            // this.$store.commit("setComment", obj);
            this.$set(feed, 'isOpen', !feed.isOpen)
            
        }
        else{
            this.swr();
        }
    },
      
  },
  async asyncData({app , store,redirect,params}) {
      try {
          console.log(params ,'params')
          let feedId = ''
    
          if(params.id){
              feedId = params.id
          }
          
    var feed = {}
    if(params.id){

        let {data} = await app.$axios.get(`/feed/getBillFeed/${params.id}`)
        // if(data[0].type!='bill') redirect('/')
        // store.commit('setFeed',data)
         feed = data
         console.log(data)
         return {
            feedId:feedId,
            feed:feed
        }
        
    }
    return {
            feedId:feedId,
            feed:{}
        }
    // else redirect('/')
    
        

      } catch (error) {
          console.log(error)
      }
  },

  created() {
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
.follow_active{
    background: #6a5353;
}
</style>
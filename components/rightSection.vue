<template>
    <div class="_indx_r8_card_all">
        <div class="_indx_r8_card_top1">
            <h3>Most Recent Bills</h3>
        </div>

        <div class="_indx_r8_card_inner">
            <!-- Shimmer -->
            <template v-if="isHide">
                <div v-for="(item, index) in 3" :key="index" class="_card_shimmer_box _box_shdw2 _mar_b20">
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
            </template>
            <!-- Shimmer -->

            <template v-if="isloaded">
                <!-- CARD -->
              
                <div class="_indx_r8_card _box_shdw2 _mar_b20" v-for="(item,index) in billData" :key="index">
                    <div class="_indx_r8_card_top _dis_flex" v-if="item.user">
                        <div class="_indx_r8_card_pic" v-if="item.user.profilePic">
                            <img class="_indx_r8_card_img" :src="item.user.profilePic" alt="" title="">
                        </div>
                        <div class="_indx_r8_card_top_r8">
                            <nuxtLink class="_indx_r8_card_name" to="/profile">{{item.user.firstName}} {{item.user.lastName}}</nuxtLink>
                            <p>{{item.created_at | formateDate}}<span>{{item.meta.follow_count}} Bill Followers</span></p>
                        </div>
                    </div>

                    <h4 class="_indx_r8_card_title" v-if="item.bill">{{item.bill.title}}</h4>

                    <div class="_indx_r8_card_pgrs" v-if="item.bill">
                        <div class="_indx_r8_card_pgrs_top _dis_flex">
                            <div class="_indx_r8_card_pgrs_sngl">
                                 <p class="_clr_fnd" v-if="item.bill.total_amount_scrapped">Processing:${{item.bill.total_amount_scrapped }}</p>
                                <p class="_clr_fnd" v-else>Processing:$0</p>
                                <!-- <p class="_clr_fnd">Processing: $4,567</p> -->
                            </div>
                            <div class="_indx_r8_card_pgrs_sngl">
                                <p>Scrap Goal: ${{item.bill.amount}}</p>
                            </div>
                        </div>
                        <Progress :percent="item.bill | makePercent" :stroke-width="20" :status="(item.bill | makePercent==100)?'success':'active'" text-inside />
                        <!-- <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:70%;height: 14px;">
                            <span class="sr-only">70% Complete</span>
                            </div> -->
                    </div>

                    <div class="_indx_r8_card_btm _dis_flex">
                        <div class="_indx_r8_card_btm_lft">
                            <a href="">Follow Bill Now</a>
                            <span class="_icon_crcle"><i class="fas fa-arrow-right"></i></span>
                        </div>
                        <div class="_indx_r8_card_btm_r8">
                              <template v-if="followLoading==index"><i class="fas fa-spinner"></i> </template>
                                <template v-else> 
                                    <i class="fas fa-heart" v-if="item.hasUserfollow"></i>
                                    <i @click="crateFeedFollow(item,index)" class="far fa-heart" v-else></i>
                                </template>

                            <!-- <span class="_clr1"><i class="far fa-heart"></i></span> -->
                        </div>
                    </div>
                </div>
                <!-- CARD -->

               
            </template>
        </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
      followLoading: -1,
      isloaded: false,
      isHide: true,
      billData:[]
    }
  },

  methods:{
          async crateFeedFollow(feed, index){
            this.followLoading = index
            const res = await this.callApi('post','like/crateFeedFollow',{feed_id:feed.id,user_id:feed.user_id,bill_id:feed.bill.id})
            this.followLoading = -1
            if(res.status==200){
                if(res.data.hasUserfollow){
                    feed.hasUserfollow = false
                    feed.meta.follow_count--
                }
                else{
                    feed.hasUserfollow =this.authUser
                    feed.meta.follow_count++
                    let ob = this.authUser
                    ob.is_following = res.data
                    this.$store.commit('loginUser', ob)
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
  },
  
  async created() {
       this.isHide=true
        const res = await this.callApi('get','bill/get_most_resent_bill')
         this.isHide=false
        if(res.status == 200){
            this.isHide=false
            this.billData = res.data
            this.isloaded =true
        }
  }
}
</script>
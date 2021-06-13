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

                    <h4 class="_indx_r8_card_title">I need help to pay my house rent</h4>

                    <div class="_indx_r8_card_pgrs">
                        <div class="_indx_r8_card_pgrs_top _dis_flex">
                            <div class="_indx_r8_card_pgrs_sngl">
                                <p class="_clr_fnd">Processing: $4,567</p>
                            </div>
                            <div class="_indx_r8_card_pgrs_sngl">
                                <p>Scrap Goal: $6,787</p>
                            </div>
                        </div>
                        <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:70%;height: 14px;">
                            <span class="sr-only">70% Complete</span>
                            </div>
                    </div>

                    <div class="_indx_r8_card_btm _dis_flex">
                        <div class="_indx_r8_card_btm_lft">
                            <a href="">Follow Bill Now</a>
                            <span class="_icon_crcle"><i class="fas fa-arrow-right"></i></span>
                        </div>
                        <div class="_indx_r8_card_btm_r8">
                            <span class="_clr1"><i class="far fa-heart"></i></span>
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
      isloaded: false,
      isHide: true,
      billData:[]
    }
  },

  methods:{
      
  },
  
  async created() {
       this.isHide=true
        const res = await this.callApi('get','bill/get_most_resent_bill')
         this.isHide=false
        if(res.status == 200){
            this.isHide=false
            this.billData = res.data
        }
  }
}
</script>
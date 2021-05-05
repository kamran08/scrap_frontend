<template>
    <div>
        <!-- CONTENT -->
        <div class="_content">
            <div class="_index_page">
                <div class="container">
                    <!-- <div class="_bill_top">
                        <h2>Active Bill</h2>
                        <p>Loream ipsum dolor sit amet, consteture sadipcing</p>
                    </div> -->
                    <div class="row">
                        <div class="col-12 col-md-7 col-lg-8">
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
                                
                                <template  v-if="isloaded">
                                    <div class="_indx_post_lst">
                                        <ul class="_dis_flex">
                                            <li class="_active">Active Bills</li> 
                                            <li>Scrapped Bills</li> 
                                            <li>Pending Bills</li> 
                                            <li>Cancelled Bills</li>
                                        </ul>
                                    </div>

                                    <!-- card -->
                                    <div class="_indx_post_card _box_shdw2  _mar_b20 _mar_t30">
                                        <div class="_indx_post_card_inner">
                                            <div class="_indx_post_card_top _dis_flex">
                                                <div class="_indx_post_card_top_lft">
                                                    <div class="_card1_top_img _mar_r10">
                                                        <img src="/img/man.jpg" alt="image">
                                                    </div>
                                                    <div class="_indx_post_card_top_titl">
                                                        <nuxtLink to="/profile"><h4>Jacqueline J. Hill</h4></nuxtLink>
                                                        <p>22 March 2021</p>
                                                    </div>
                                                </div>

                                                <div class="_indx_post_card_top_r8">
                                                    <ul>
                                                        <li>Due Date: 01 April, 2021</li>
                                                        <li>Child Education</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div class="_indx_post_card_txt">
                                                <nuxtLink to="/singlePost"><h4 class="_clr1">Donate money for shelter less child education</h4></nuxtLink>
                                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

                                                <div class="_indx_post_pgrs _mar_t15">
                                                    <div class="_indx_post_pgrs_top _dis_flex">
                                                        <div class="_indx_post_pgrs_qnty">
                                                        <p>Processing:$123</p>
                                                        </div>
                                                        <div class="_indx_post_pgrs_qnty">
                                                            <p>Scrap Goal:$400</p>
                                                        </div>
                                                    </div>
                                                    <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:70%;height: 14px;">
                                                    <span class="sr-only">70% Complete</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="_indx_post_card_btm _dis_flex">
                                            <div class="_indx_post_btm_lft">
                                                <ul>
                                                    <li>
                                                        <span><i class="far fa-heart"></i></span>11 Bill Followers
                                                    </li>
                                                    <li>
                                                        <span><i class="far fa-comment"></i></span>21 Comments
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
                                                    <li class="_clr_blck">
                                                        <span @click="isDropdown = !isDropdown"><i class="fas fa-ellipsis-h"></i></span>

                                                        <!-- DROPDOWN -->
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
                                                        <!-- DROPDOWN -->
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- card -->

                                    <!-- card -->
                                    <div class="_indx_post_card _box_shdw2  _mar_b20 _mar_t30">
                                        <div class="_indx_post_card_inner">
                                            <div class="_indx_post_card_top _dis_flex">
                                                <div class="_indx_post_card_top_lft">
                                                    <div class="_card1_top_img _mar_r10">
                                                        <img src="/img/man.jpg" alt="image">
                                                    </div>
                                                    <div class="_indx_post_card_top_titl">
                                                        <nuxtLink to="/profile"><h4>Jacqueline J. Hill</h4></nuxtLink>
                                                        <p>22 March 2021</p>
                                                    </div>
                                                </div>

                                                <div class="_indx_post_card_top_r8">
                                                    <ul>
                                                        <li>Due Date: 01 April, 2021</li>
                                                        <li>Child Education</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div class="_indx_post_card_txt">
                                                <nuxtLink to="/singlePost"><h4 class="_clr1">Donate money for shelter less child education</h4></nuxtLink>
                                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

                                                <div class="_indx_post_pgrs _mar_t15">
                                                    <div class="_indx_post_pgrs_top _dis_flex">
                                                        <div class="_indx_post_pgrs_qnty">
                                                        <p>Processing:$123</p>
                                                        </div>
                                                        <div class="_indx_post_pgrs_qnty">
                                                            <p>Scrap Goal:$400</p>
                                                        </div>
                                                    </div>
                                                    <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:70%;height: 14px;">
                                                    <span class="sr-only">70% Complete</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="_indx_post_card_btm _dis_flex">
                                            <div class="_indx_post_btm_lft">
                                                <ul>
                                                    <li>
                                                        <span><i class="far fa-heart"></i></span>11 Bill Followers
                                                    </li>
                                                    <li>
                                                        <span><i class="far fa-comment"></i></span>21 Comments
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
                                                    <li class="_clr_blck">
                                                        <span @click="isDropdown = !isDropdown"><i class="fas fa-ellipsis-h"></i></span>

                                                        <!-- DROPDOWN -->
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
                                                        <!-- DROPDOWN -->
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- card -->
                                </template>
                            </div>
                        </div>

                        <div class="col-12 col-md-5 col-lg-4">
                            <rightSection/>
                        </div>
                    </div>
                </div>	
            </div>
        </div>
        <!-- CONTENT -->
    </div>
</template>

<script>
import rightSection from '~/components/rightSection.vue'

export default {
  components: {
    rightSection
  },

  data(){
    return{
      isloaded: false,
      isHide: true,
      isModal: false
    }
  },

  methods:{
      
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
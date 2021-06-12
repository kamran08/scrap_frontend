<template>
    <div>
        <div class="_content">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-7 col-lg-8">
                        <!-- Shimmer -->
                        <!-- <template v-if="isHide">
                            <div class="_card_shimmer_box _box_shdw2 _mar_b30">
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
                        </template> -->
                        <!-- Shimmer -->

                        <template v-if="isloaded">
                            <!-- card -->
                            <div class="_indx_post_card _box_shdw2  _mar_b30">
                                <div class="_indx_post_card_inner">
                                    <div class="_indx_post_card_top _dis_flex">
                                        <div class="_indx_post_card_top_lft">
                                            <div class="_card1_top_img _mar_r10">
                                                <img src="/static/img/man.jpg" alt="image">
                                            </div>
                                            <div class="_indx_post_card_top_titl">
                                                <h4>Jacqueline J. Hill</h4>
                                                <p>22 March 2021</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="_indx_post_card_txt _dis_flex_cntr1 _dis_flex">
                                        <div class="">
                                            <h4  class="_clr1">Donate money for shelter less child education</h4>
                                            <p>
                                                Lacinia sedinteg esque lacuse dolornu oin sque. Nequenu turpisve maurisma tiam netus musetiam sollic orem at tiam. 
                                                Vulput amet neque class leocur musetiam. Morbi unc llus enimdon id mauris rutrum faucibu euismo. Enimphas class ullam magnaves quam enean. Luctus vallis donec magnapro tempus pretium quis rhoncus. Telluss 
                                                Vulput amet neque class leocur musetiam. Morbi unc llus enimdon id mauris rutrum faucibu euismo. Enimphas class ullam magnaves quam enean. Luctus vallis donec magnapro tempus pretium quis rhoncus. Telluss 
                                                Vulput amet neque class leocur musetiam. Morbi unc llus enimdon id mauris rutrum faucibu euismo. Enimphas class ullam magnaves quam enean. Luctus vallis donec magnapro tempus pretium quis rhoncus. Telluss 
                                                naeos abitur consect posuered roin platea mollis sacras. Quiscras telluset commodo lum senectus eunulla.
                                            </p>
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

                                <!-- Comment section -->
                                <div class="_1card_comment_box _1card_comment_box_top">
                                    <div class="_1card_comment_box_pic _load_div"><img src="/static/img/man.jpg" alt="" title="" class="_1card_comment_box_img"></div>
                                    <div class="_1card_comment_box_input_icon">
                                        <div class="_1card_comment_box_input"><input type="text" placeholder="Write a comment..."></div>
                                    </div>
                                </div>

                                <div class="_comment_main"><a href="" class="_comment_pic"><img alt="" title="" src="/static/img/man.jpg" class="_comment_img"></a>
                                    <div class="_comment_details">
                                        <div class="_comment_details_top">
                                            <div class="_comment_name"><a href="" class="_comment_name_text">
                                                                Hussain shipu
                                                            </a></div>
                                            <div class="_comment_more">
                                                <div class="ivu-dropdown">
                                                    <div class="ivu-dropdown-rel"><a href="javascript:void(0)" class="_more"><i class="fas fa-angle-down"></i></a> </div>
                                                    <div class="ivu-select-dropdown" style="display: none;">
                                                        <ul class="ivu-dropdown-menu">
                                                            <li class="ivu-dropdown-item">
                                                                <p class="_drop_text">Edit</p>
                                                            </li>
                                                            <li class="ivu-dropdown-item">
                                                                <p class="_drop_text">Delete</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="_comment_status">
                                            <p class="_comment_status_text">
                                                new comment
                                            </p>
                                        </div>
                                        <div class="_comment_reply">
                                            <div class="_comment_reply_num">
                                                <ul class="_comment_reply_list">
                                                    <li>
                                                        Like
                                                    </li>
                                                    <li>
                                                        Comment
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="_comment_reply_time">
                                                <p class="_comment_reply_time_text">
                                                    2 days ago
                                                </p>
                                            </div>
                                        </div>
                                        <div keys="rep0" class="_reply">
                                            <div class="_reply_main"><a href="" class="_comment_pic"><img alt="" title="" src="/static/img/man.jpg" class="_comment_img"></a>
                                                <div class="_comment_details">
                                                    <div class="_comment_details_top">
                                                        <div class="_comment_name">
                                                            <a href="" class="_comment_name_text">Hussain shipu</a>
                                                        </div>
                                                        <div class="_comment_more">
                                                            
                                                        </div>
                                                    </div>
                                                    <div class="_comment_status">
                                                        <p class="_comment_status_text">
                                                            sdfsdf
                                                        </p>
                                                    </div>
                                                    <div class="_comment_reply">
                                                        <div class="_comment_reply_num">
                                                            <ul class="_comment_reply_list">
                                                                <li>

                                                                    <span class="_comment_reply_like">Like</span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div class="_comment_reply_time">
                                                            <p class="_comment_reply_time_text">
                                                                a few seconds ago
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="_1card_comment_box">
                                                <div class="_1card_comment_box_pic _load_div"><img alt="" title="" src="/static/img/man.jpg" class="_1card_comment_box_img"></div>
                                                <div class="_1card_comment_box_input_icon">
                                                    <div class="_1card_comment_box_input"><input type="text" placeholder="Write a reply..."></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Comment section -->
                            </div>
                            <!-- card -->
                        </template>
                    </div>

                    <div class="col-12 col-md-5 col-lg-4">
                        <!-- Shimmer -->
                        <template v-if="isHide">
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
                        </template>
                        <!-- Shimmer -->

                        <template v-if="isloaded">
                            <div class="_single_right  _box_shdw2  _mar_b20 _mar_b30">
                                <!-- <ul class="_single_right_dead _mar_b18"><li>Deadline:01 April, 2021</li> <li>Child Education</li></ul>
                                <div class="_indx_post_pgrs_qnty _mar_b15"><p>Bill Scrapped : $123</p></div>
                                <div class="_indx_post_pgrs_qnty _mar_b15"><p>Fund Goal : $400</p></div> -->
                                <ul class="_single_right_dead _mar_b18"><li>Due Date:01 April, 2021</li> <li>Child Education</li></ul>
                                <div class="_indx_post_pgrs_qnty _mar_b15"><p>Processing : $123</p></div>
                                <div class="_indx_post_pgrs_qnty _mar_b15"><p>Scrap Goal : $400</p></div>
                                <div role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" class="progress-bar _green" style="width: 70%; height: 14px;"><span class="sr-only">70% Complete</span></div>
                                <div class="_mar_t20">
                                    <button class="_btn1 _btn_long" type="button">Follow this bill</button>
                                </div>
                            </div>

                            <div class="_single_right  _box_shdw2  _mar_b20 _mar_b30">
                                <p class="_follow_title">People are following</p>

                                <div class="_follow_card_all">
                                    <!-- Item -->
                                    <div class="_follow_card">
                                        <a href="" class="_follow_card_pic">
                                            <img class="_follow_card_img" src="/static/img/man.jpg" alt="" title="">
                                        </a>

                                        <div class="_follow_card_details">
                                            <a class="_follow_card_name" href="">Hussian shipu</a>
                                        </div>
                                    </div>
                                    <!-- Item -->
                                    <!-- Item -->
                                    <div class="_follow_card">
                                        <a href="" class="_follow_card_pic">
                                            <img class="_follow_card_img" src="/static/img/pic.jpg" alt="" title="">
                                        </a>

                                        <div class="_follow_card_details">
                                            <a class="_follow_card_name" href="">Anjelina jullie</a>
                                        </div>
                                    </div>
                                    <!-- Item -->
                                    <!-- Item -->
                                    <div class="_follow_card">
                                        <a href="" class="_follow_card_pic">
                                            <img class="_follow_card_img" src="/static/img/image_1608022151387.jpeg" alt="" title="">
                                        </a>

                                        <div class="_follow_card_details">
                                            <a class="_follow_card_name" href="">David Backhum</a>
                                        </div>
                                    </div>
                                    <!-- Item -->
                                    <!-- Item -->
                                    <div class="_follow_card">
                                        <a href="" class="_follow_card_pic">
                                            <img class="_follow_card_img" src="/static/img/pic.jpg" alt="" title="">
                                        </a>

                                        <div class="_follow_card_details">
                                            <a class="_follow_card_name" href="">Joe Root</a>
                                        </div>
                                    </div>
                                    <!-- Item -->
                                    <!-- Item -->
                                    <div class="_follow_card">
                                        <a href="" class="_follow_card_pic">
                                            <img class="_follow_card_img" src="/static/img/man.jpg" alt="" title="">
                                        </a>

                                        <div class="_follow_card_details">
                                            <a class="_follow_card_name" href="">Hussian shipu</a>
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
export default {
  data(){
    return{
      isloaded: false,
      isHide: true,
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
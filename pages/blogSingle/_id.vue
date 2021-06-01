<template>
    <div>
        <div class="_content">
            <div class="container">
                <div class="_singleCard_menu">
                    <ul class="_singleCard_menu_list">
                        <li>
                            <router-link to="/blogList" class="">News</router-link>
                        </li> 
                        <li>{{singleNews.title}}</li>
                    </ul>
                </div>

                <div class="row">
                    <div class="col-12 col-md-8 col-lg-8">
                        <!-- card -->
                        <div class="_indx_post_card _box_shdw2  _mar_b30">
                            <div class="_indx_post_card_inner">
                                <div class="_indx_post_card_top _dis_flex">
                                    <div class="_indx_post_card_top_lft">
                                        <div class="_card1_top_img _mar_r10">
                                            <img src="/img/man.jpg" alt="image">
                                        </div>
                                        <div class="_indx_post_card_top_titl" >
                                            <h4 v-if="singleNews.user">{{singleNews.user.firstName}} {{singleNews.user.lastName}}</h4>
                                            <p>{{singleNews.created_at | formateDate}}</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="_singleCard_pic" v-if="singleNews.image">
                                    <img alt="" title="" class="_singleCard_img" :src="singleNews.image">
                                </div>

                                <div class="_indx_post_card_txt _dis_flex_cntr1 _dis_flex">
                                    <div class="">
                                        <!-- <h4  class="_clr1">Donate money for shelter less child education</h4> -->
                                        <p v-html="singleNews.description">
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
                                <div class="_1card_comment_box_pic _load_div"><img src="/img/man.jpg" alt="" title="" class="_1card_comment_box_img"></div>
                                <div class="_1card_comment_box_input_icon">
                                    <div class="_1card_comment_box_input"><input type="text" placeholder="Write a comment..."></div>
                                </div>
                            </div>

                            <div class="_comment_main"><a href="" class="_comment_pic"><img alt="" title="" src="/img/man.jpg" class="_comment_img"></a>
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
                                        <div class="_reply_main"><a href="" class="_comment_pic"><img alt="" title="" src="/img/man.jpg" class="_comment_img"></a>
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
                                            <div class="_1card_comment_box_pic _load_div"><img alt="" title="" src="/img/man.jpg" class="_1card_comment_box_img"></div>
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
                    </div>

                    <div class="col-12 col-md-4 col-lg-4">
                        <leftSection/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
import leftSection from '../leftSection.vue'

export default {
  components: {
    leftSection
  },

  data(){
    return{
      isDropdown:false,
      singleNews:{}
    }
  },

  methods:{
      
  },
  
  async created() {
      let id = this.$route.params.id
      console.log(id)
      const res = await this.callApi('get','news/getSingleNews/'+id)
      if(res.status == 200){
          this.singleNews = res.data
      }

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
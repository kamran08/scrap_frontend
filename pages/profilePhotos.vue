<template>
    <div>
        <!-- CONTENT -->
        <div class="_content">
            <div class="_index_page">
                <div class="container">
                    <div class="_prfl_card1 _bg_wht _b_radious5 _box_shdw2">
                        <div class="_prfl_card1_lft _dis_flex">
                            <div class="_prfl_card1_img">
                                <img src="/static/img/man.jpg" alt="image">
                                <div class="_prfl_card1_img_btm _dis_flex_all">
                                    <span><i class="far fa-check-circle"></i></span>
                                    <p>Verified User</p>
                                </div>
                            </div>

                            <div class="_prfl_card1_info">
                                <div class="_prfl_card1_info_top">
                                    <h2 class="_titl1 _mar_b5">Jacquline J. Hill</h2>
                                <p>Child welfare organization</p>
                                </div>

                                <div class="_prfl_card1_info_btm">
                                    <ul class="_dis_flex">
                                        <li>
                                            <h4>$2,300</h4>
                                            <p>Bill Scrapped</p>
                                        </li>
                                        <li>
                                            <h4>10</h4>
                                            <p>Bills entered</p>
                                        </li>
                                        <li>
                                            <h4>$200</h4>
                                            <p>Helped</p>
                                        </li>
                                        <li>
                                            <h4>1k</h4>
                                            <p>View</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="_prfl_card1_r8">
                            <div class="_prfl_card1_r8_top">
                                <!-- <ul>
                                    <li>
                                        <span><i class="fas fa-money-check-alt"></i></span>
                                        <p class="_prfl_r8_txt1">Cash balance</p>
                                        <p class="_prfl_r8_txt2">$14.5k</p>
                                    </li>
                                    <li>
                                        <span class="_clr1"><i class="fas fa-money-check-alt"></i></span>
                                        <p class="_prfl_r8_txt1">Funding balance</p>
                                        <p class="_prfl_r8_txt2">$14.5k</p>
                                    </li>
                                </ul> -->
                            </div>

                            <div class="_prfl_card1_r8_btm _dis_flex _dis_flex_cntr1">
                                <p>Share Profile On:</p>
                                <ul>
                                    <li>
                                        <a href="">
                                            <span><i class="fab fa-facebook-f"></i></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <span><i class="fab fa-twitter"></i></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <span><i class="fab fa-linkedin-in"></i></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <span><i class="fab fa-instagram"></i></span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="_indx_post_lst _mar_b20">
                        <ul class="_dis_flex">
                            <li><router-link to="/profile">All</router-link></li>
                            <li><router-link to="">Status</router-link></li>
                            <li><router-link to="">Bill</router-link></li>
                            <li><router-link to="">Articles</router-link></li>
                            <li class="_active"><router-link to="/profilePhotos">Photos</router-link></li>
                        </ul>
                    </div>

                    <div class="_prfl_cntnt _bg_wht _b_radious5 _box_shdw2 _mar_b30">
                        <div class="_friend_main">
                            <h2 class="_1frient_title _pre_icon _mar_b20"><i class="fas fa-image"></i> Photos</h2>
                            
                            <div class="_photo_main_all">
                                <div class="_photo_main">
                                    <div @click="isImage = true" class="_photo_main_pic _load_div">
                                        <img alt="" title="" class="_photo_main_img" src="https://app.joincarevan.info/uploads/image_1609569526445.jpg">
                                    </div>
                                    <div class="_photo_main_delete"><i aria-hidden="true" class="fa fa-trash"></i></div>
                                </div>
                                <div class="_photo_main">
                                    <div @click="isImage = true" class="_photo_main_pic _load_div">
                                        <img alt="" title="" class="_photo_main_img" src="https://joincarevan.info/uploads/image_1609669930850.jpeg">
                                    </div>
                                    <div class="_photo_main_delete"><i aria-hidden="true" class="fa fa-trash"></i></div>
                                </div>
                                <div class="_photo_main">
                                    <div @click="isImage = true" class="_photo_main_pic _load_div">
                                        <img alt="" title="" class="_photo_main_img" src="https://app.joincarevan.info/uploads/image_1609671051741.jpg">
                                    </div>
                                    <div class="_photo_main_delete"><i aria-hidden="true" class="fa fa-trash"></i></div>
                                </div>
                                <div class="_photo_main">
                                    <div @click="isImage = true" class="_photo_main_pic _load_div">
                                        <img alt="" title="" class="_photo_main_img" src="https://app.joincarevan.info/uploads/image_1609569526445.jpg">
                                    </div>
                                    <div class="_photo_main_delete"><i aria-hidden="true" class="fa fa-trash"></i></div>
                                </div>
                                <div class="_photo_main">
                                    <div @click="isImage = true" class="_photo_main_pic _load_div">
                                        <img alt="" title="" class="_photo_main_img" src="https://joincarevan.info/uploads/image_1609669930850.jpeg">
                                    </div>
                                    <div class="_photo_main_delete"><i aria-hidden="true" class="fa fa-trash"></i></div>
                                </div>
                                <div class="_photo_main">
                                    <div @click="isImage = true" class="_photo_main_pic _load_div">
                                        <img alt="" title="" class="_photo_main_img" src="https://app.joincarevan.info/uploads/image_1609671051741.jpg">
                                    </div>
                                    <div class="_photo_main_delete"><i aria-hidden="true" class="fa fa-trash"></i></div>
                                </div>
                                <div class="_photo_main">
                                    <div @click="isImage = true" class="_photo_main_pic _load_div">
                                        <img alt="" title="" class="_photo_main_img" src="https://app.joincarevan.info/uploads/image_1609569526445.jpg">
                                    </div>
                                    <div class="_photo_main_delete"><i aria-hidden="true" class="fa fa-trash"></i></div>
                                </div>
                                <div class="_photo_main">
                                    <div @click="isImage = true" class="_photo_main_pic _load_div">
                                        <img alt="" title="" class="_photo_main_img" src="https://joincarevan.info/uploads/image_1609669930850.jpeg">
                                    </div>
                                    <div class="_photo_main_delete"><i aria-hidden="true" class="fa fa-trash"></i></div>
                                </div>
                                <div class="_photo_main">
                                    <div @click="isImage = true" class="_photo_main_pic _load_div">
                                        <img alt="" title="" class="_photo_main_img" src="https://app.joincarevan.info/uploads/image_1609671051741.jpg">
                                    </div>
                                    <div class="_photo_main_delete"><i aria-hidden="true" class="fa fa-trash"></i></div>
                                </div>
                                <div class="_photo_main">
                                    <div @click="isImage = true" class="_photo_main_pic _load_div">
                                        <img alt="" title="" class="_photo_main_img" src="https://app.joincarevan.info/uploads/image_1609671051741.jpg">
                                    </div>
                                    <div class="_photo_main_delete"><i aria-hidden="true" class="fa fa-trash"></i></div>
                                </div>
                            </div>
                        </div>
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
                        <img alt="" title="" class="_imageShow_main_img" src="/static/img/image_1608022151387.jpeg">
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
export default {
  data(){
    return{
      isImage: false
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
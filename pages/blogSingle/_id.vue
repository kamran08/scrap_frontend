<template>
    <div>
        <div class="_content">
            <div class="container">
                <div class="_singleCard_menu">
                    <ul class="_singleCard_menu_list">
                        <li>
                            <router-link to="#" class="">News</router-link>
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
                                    <div class="_indx_post_card_top_lft" v-if="singleNews.user"> 
                                        <div class="_card1_top_img _mar_r10" v-if="singleNews.user.profilePic">
                                            <img :src="singleNews.user.profilePic" alt="image">
                                        </div>
                                        <div class="_indx_post_card_top_titl" >
                                            <h4 v-if="singleNews.user"> {{singleNews.user.firstName}} {{singleNews.user.lastName}}</h4>
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

                           

                            <!-- Comment section -->
                           

                            
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
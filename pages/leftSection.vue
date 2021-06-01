<template>
    <div class="_left_sec _box_shdw2  _mar_b30">
        <h2 class="_blogtitle">Latest News</h2>

        <div class="_blog2_card">
            <!-- Item -->
            <div class="_blog2_card_items" v-for="(item, index) in allnews" :key="index">
                <div class="_blog2_card_pic">
                    <img class="_blog2_card_img" :src="item.image" alt="" title="">
                </div>

                <div class="_blog2_card_details">
                   <router-link :to="'/blogSingle/'+item.id" class="_blog2_card_name">{{item.title}}</router-link>

                    <div class="_blog2_card_pro" v-if="item.user">
                        <div class="_blog2_card_pro_pic">
                            <img class="_blog2_card_pro_img" :src="item.user.profilePic?item.user.profilePic:'/img/avater.png'" alt="" title="">
                        </div>
                        <p class="_blog2_card_pro_name">{{item.user.firstName}} {{item.user.lastName}}</p>
                    </div>
                </div>
            </div>
            <!-- Item -->
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            allnews:[]
        }
    },
    methods:{
        

    },
  async  created(){
        const res = await this.callApi('get','news/getNews')
        if(res.status ==200)
          this.allnews = res.data

    },
//     async asyncData({app , store}) {
//       try {
//           var allnews = []
//           let {data} = await app.$axios.get('news/getNews')
//           if(data.status ==200)
//           allnews = data.data
//           console.log(allnews)
//           return {
//               allnews:allnews
//           }

//       } catch (error) {
//           console.log(error)
//       }
//   },
}
</script>
<style>
.over_flow_hiden{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
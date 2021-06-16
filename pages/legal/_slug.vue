<template>
    <div>
        <div class="_content">
            <div class="_privacy_sec">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-md-3 col-lg-3">
                            <div class="_privacy_lft">
                                <h3>Legal</h3>
                                <ul>
                                    <companyTitle/>
                                   
                                </ul>
                            </div>
                        </div>
                        <div class="col-12 col-md-9 col-lg-9">
                            <div class="_privacy_r8">
                                <div class="_privacy_r8_top">
                                    <h1>{{companyData.title}}</h1>
                                </div>

                                <div class="_privacy_r8_cntnt" v-html="companyData.description">
                                    <!-- {{ companyData.description }} -->
                                </div>

                                <!-- <div class="_privacy_r8_cntnt">
                                    <h4>Prohibited Uses</h4>
                                    <p>AppfyLab may release personal information if AppfyLab is required to by law.</p>
                                    <ul>
                                        <li>AppfyLab may release personal information</li>
                                        <li>That does not identify you specifically nor allow you</li>
                                        <li>About the number of registered users, number of unique visitors,</li>
                                        <li>AppfyLab does not share personal information of any kind with anyone.</li>
                                    </ul>
                                </div>

                                <div class="_privacy_r8_cntnt">
                                    <h4>Policy change</h4>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                    <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                </div> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    </div>
</template>


<script>
import companyTitle from "~/components/companyInfo.vue"
export default {
    components:{
        companyTitle
    },
    data(){
        return{
            // companyInfo:[]
        }
    },
    // async asyncData({app , store}) {
    //     try {
    //         let {data} = await app.$axios.get('/company/getCompanyInfo')
    //         // this.companyInfo.push(data);
    //         //   console.log(data)
    //         return { companyInfo: data }
    //         //   store.commit('setFeed',data)

    //     } catch (error) {
    //         console.log(error)
    //     }
    // },
    async asyncData({app , store, params}) {
		// if(this.getFeed.length){
		// 	return
		// }
      try {
          let {data} = await app.$axios.get(`/company/getSingleInfo/${params.slug}`)
        return { companyData: data }
        //   store.commit('setSingleFeed',data)
		  console.log(data)
      } catch (error) {
          console.log(error)
      }
  	},
    async created(){
        console.log(this.$route.query)
       
    
            // const res = await this.callApi('get','/company/getCompanyInfo')
            // if(res.status == 200){
            //     this.companyInfo = res.data
                
            // }
        
    },
    methods:{
        async getSingleData(){
            let slug = this.$route.params.slug
    
            const res = await this.callApi('get','/company/getSingleInfo/'+slug)
            if(res.status == 200){
                // this.companyData = res.data
                console.log(res.data)
            }
        }
    },

}
</script>
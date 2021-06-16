<template>
    <div>
        <div class="_2content">
            <div class="_faq_banner">
                <div class="_faq_banner_pic">
                    <img class="_faq_banner_img" src="/img/city.jpg" alt="" title="">
                </div>
                <div class="_faq_banner_main">
                    <h1 class="_faq_banner_title">We're here to help you.</h1>
                    <div class="_faq_banner_search">
                        <input type="" v-model="str" @onkeyup="searchCompnayData" placeholder="Search By Any Keyword">
                        <i class="fas fa-search"  @click="searchCompnayData"></i>
                    </div>
                </div>
            </div>

            <div class="_faq_con">
                <div class="container">
                    <h1 class="_faq_title">Frequently Asked Questions</h1>
                    <div class="row">
                        <div class="col-12 col-md-12 col-lg-12">
                            <div class="row">
                                <div class="col-12 col-md-3 col-lg-3">
                                    <companyTitle />
                                </div>

                                <div class="col-12 col-md col-lg" v-if="companyData">
                                    <div class="_faq_right">
                                        <h1 class="_faq_right_title">{{companyData.name}}</h1>

                                        <Collapse v-model="value1">
                                            <Panel :name="`${index}`" v-for="(item, index) in companyData.faqs"  :key="index">
                                                <i class="fas fa-plus _plus"></i>
                                                <i class="fas fa-minus _minus"></i>
                                                {{item.question}}
                                                <p slot="content" v-html="item.answer">
                                                </p>
                                            </Panel>
                                           
                                        </Collapse>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
 import companyTitle from "~/components/faqInfo.vue"
export default {
    components:{
        companyTitle
    },
    data(){
        return{
            value1:0,
            str:''
            // companyInfo:[]
        }
    },


    async created(){

       
            // this.getSingleData()
            // const res = await this.callApi('get','/company/getCompanyInfo')
            // if(res.status == 200){
            //     this.companyInfo = res.data
                
            // }
        
    },
    methods:{
        searchCompnayData(){
              
            let arrays=[]
            for(let item of this.mainData.faqs){
               let a = item.question.includes(this.str)
                if(a){
                    arrays.push(item)
                }
            }
            console.log(arrays)
          this.$set( this.companyData, 'faqs', arrays)
            // return
    //     this.companyData.faqs = this.mainData.faqs.filter((samsung) => {
    //          return this.str.toLowerCase().split(' ').every(v => samsung.name.toLowerCase().includes(v));
    //   });
            
    //    this.companyData.faqs= this.mainData.faqs.filter(d => this.str.every(v => d.toLowerCase().includes(v.toLowerCase())))

            //  this.mainData.filter(el => el.name == this.str);
        }
    },

        async asyncData({app , store, params}) {
		// if(this.getFeed.length){
		// 	return
		// }
      try {
          let {data} = await app.$axios.get(`/faq/getSinglefeqData/${params.id}`)
        return {
             companyData: data,
            mainData:data
        }
        //   store.commit('setSingleFeed',data)
		  console.log(data)
      } catch (error) {
          console.log(error)
      }
  	},

}
</script>
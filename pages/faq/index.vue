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
                                    <h1>{{alldata.title}}</h1>
                                </div>
                                <h4 class="panel-title plus"></h4> 

                                <!-- <div class="_privacy_r8_cntnt" v-html="alldata.description">
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
            alldata:[]
        }
    },
    async asyncData({app , store}) {
        try {
            let {data} = await app.$axios.get('/company/getCompanyInfoFirst')
            
            return { alldata: data }
            //   store.commit('setFeed',data)

        } catch (error) {
            console.log(error)
        }
    },
}
</script>
<style >
.plus::after {
    color: #E51D29;
    content: '+';
    position: absolute;
    right: 0;
    top: 10px;
    font-weight: bold;
    font-size: 20px;
}
.panel-title {
    margin: 0px !important;
}
.minus::after {
    color: #E51D29;
    content: '-';
    position: absolute;
    right: 0;
    top: 10px;
    font-weight: bold;
    font-size: 20px;
}
</style>
<template>
    <span>:
        <li :class="($route.path=='/legal/'+data.slug || ($route.path=='/legal' && index==0))?'_active':''" v-for="(data, index) in companyInfo" :key="index" @click="tab=index">
            <nuxtLink :to="'/legal/'+data.slug">
               {{data.title}}
            </nuxtLink>
        </li>
    </span>
</template>

<script>
export default {
    data(){
        return{
            tab:0,
            companyInfo:[]
        }
    },
    // async asyncData({app , store}) {
    //     try {
    //         let {data} = await app.$axios.get('/company/getCompanyInfo')
    //         return { companyInfo: data }
           

    //     } catch (error) {
    //         console.log(error)
    //     }
    // },
    async created(){
        const res = await this.callApi('get','/company/getCompanyInfo')
            if(res.status == 200){
                this.companyInfo = res.data
            }
    }
}
</script>
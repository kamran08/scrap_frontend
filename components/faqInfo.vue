<template>
    <span>
         <ul class="_faq_left">
             <!-- v-for="(item, index) in faqCategory" :key="index" -->
               <li :class="(tab==index)?'_active':''"  v-for="(item, index) in faqCategory" :key="index" @click="tab=index">
                    <nuxtLink :to="'/faq/'+item.id" :style="(tab==index)?'color: white;':''" v-if="item">
                            {{item.name}}
                    </nuxtLink>
                </li>
                <!-- <li class="_active">Activation and Deactivation</li>
                <li>Chat and messaging</li>
                <li>Company Info and Policies</li>
                <li>Friends and Followers</li>
                <li>Intellectual Property</li>
                <li>Membership Plans </li>
                <li>Notifications and Marketing Tools</li>
                <li>Password and Login</li>
                <li>Profile and Account Settings</li> -->
            </ul>


      
    </span>
</template>

<script>
export default {
    data(){
        return{
            tab:0,
            faqCategory:[]
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
        const res = await this.callApi('get','/faq/get_all_faq_cateogories')
            if(res.status == 200){
                this.faqCategory = res.data
            }
    }
}
</script>
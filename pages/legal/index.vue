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
                                    <!-- <li class="_active" v-for="(data, index) in companyInfo" :key="index">
                                        <nuxtLink :to="'/legal/'+data.slug">
                                        {{data.title}}
                                            
                                        </nuxtLink>
                                    </li> -->
                                     <!-- <li>
                                        <a href="">{{ companyInfo }}</a>
                                    </li> -->
                                    <!--<li>
                                        <a href="">Cookie Policy</a>
                                    </li>    
                                    <li>
                                        <a href="">Refund Policy</a>
                                    </li>
                                    <li>
                                        <a href="">Copyright Infringement</a>
                                    </li>
                                    <li>
                                        <a href="">Complaints/Reports</a>
                                    </li>     
                                    <li>
                                        <a href="">Disclaimer</a>
                                    </li>
                                    <li>
                                        <a href="">AML/KYC</a>
                                    </li>   					     -->
                                </ul>
                            </div>
                        </div>
                        <div class="col-12 col-md-9 col-lg-9">
                            <div class="_privacy_r8">
                                <div class="_privacy_r8_top">
                                    <h1>Terms of Service</h1>
                                </div>

                                <div class="_privacy_r8_cntnt">
                                    <h4>Our privacy policy</h4>
                                    <p>AppfyLab does not share personal information of any kind with anyone. We will not sell or rent your name or personal information to any third party. We DO NOT sell, rent or provide outside access to our mailing list or any data we store. Any data that a user stores via our facilities is wholly owned by that user or business. At any time a user or business is free to take their data and leave, or to simply delete their data from our facilities.</p>
                                    <p>AppfyLab only collects such personal information that is necessary for you to access and use our services. This personal information includes, but is not limited to, first and last name, physical address, zip code, email address, phone number, social security number, birth date, credit card information, financial information, and other personal information necessary to generate proper legal documents.</p>
                                    <p>AppfyLab may release personal information if AppfyLab is required to by law, search warrant, subpoena, court order or fraud investigation. We may also use personal information in a manner that does not identify you specifically nor allow you to be contacted but does identify certain criteria about our Site's users in general (such as we may inform third parties about the number of registered users, number of unique visitors, and the pages most frequently browsed).</p>
                                </div>

                                <div class="_privacy_r8_cntnt">
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
}
</script>
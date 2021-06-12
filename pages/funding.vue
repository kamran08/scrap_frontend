<template>
    <div>
        <div class="_content">
            <div class="_transition_page">
                <div class="container">
                    <div class="_transtn_top _dis_flex _dis_flex_cntr1 _box_shdw2 _bg_wht">
                        <div class="_transtn_top_lft _dis_flex _dis_flex_cntr1">
                            <span class="_clr1"><i class="far fa-arrow-alt-circle-down"></i></span>
                            <p class="_transtn_top_txt1">Support Balance </p>
                            <p class="_transtn_top_txt2">${{ total }}</p>
                        </div>
                        <div class="_transtn_top_r8">
                            <a class="_bg_clr1" href="">
                                Withdraw
                            <span class="_icon_crcle2"><i class="fas fa-long-arrow-alt-right"></i></span>
                        </a>
                        </div>
                    </div>

                    <div class="_transtn_hstry _dis_flex _dis_flex_cntr1">
                        <div class="_transtn_hstry_lft">
                            <h4>Transaction History</h4>
                            <p>View your support transaction history. Say Hello to your Bill Supporters</p>
                        </div>
                        <div class="_transtn_hstry_r8 _dis_flex">
                            <div class="">
                                <Input placeholder="Search" style="width: 200px; margin-right:10px;" />
                                <Select v-model="billId" placeholder="Select Bill" style="width:200px" filterable @on-change="getGainById(billId)">
                                    <Option v-for="(bill,index) in allBills" :key="index" :value="bill.id">{{bill.title}}</Option>
                                    <!-- <Option>Bill Two</Option> -->
                                </Select>
                                <!-- <p>Select Bill</p>
                                <span><i class="fas fa-chevron-down"></i></span> -->

                                <!-- DROPDOWN -->

                                <!-- DROPDOWN -->
                            </div>
                        </div>
                    </div>
                
                    <!-- TABLE -->
                    <div class="_transtn_table">
                        <!-- TABLE HEAD -->
                        <div class="_transtn_table_hd _dis_flex _dis_flex_cntr1">
                            <!-- ITEAM -->
                            <div class="_transtn_table_itm">
                                <p>Bill ID</p>
                            </div>
                            <!-- ITEAM -->

                                <!-- ITEAM -->
                            <div class="_transtn_table_itm">
                                <p>Bill Title</p>
                            </div>
                            <!-- ITEAM -->

                                <!-- ITEAM -->
                            <div class="_transtn_table_itm">
                                <p>Bill Supporters</p>
                            </div>
                            <!-- ITEAM -->

                                <!-- ITEAM -->
                            <div class="_transtn_table_itm">
                                <p>Date</p>
                            </div>
                            <!-- ITEAM -->

                                <!-- ITEAM -->
                            <div class="_transtn_table_itm">
                                <p class="text_right">Amount</p>
                            </div>
                            <!-- ITEAM -->
                        </div>
                        <!-- TABLE HEAD -->

                        <!-- TABLE BODY -->

                        <!-- ROW -->
                        <div v-for="(bill,i) in allBillsBy" :key="i" class="_transtn_tbl_bdy_row _amnt_top _dis_flex_cntr1 _dis_flex">
                            <ul>
                                <li>
                                    <span class="_down"><i class="fas fa-arrow-down"></i></span>
                                    <p>{{ bill.bill_id }}</p>
                                </li>
                                <li>
                                    <!-- <p>{{ singleBill.title }}</p> -->
                                </li>
                                <li>
                                    <div class="_table_pro">
                                        
                                        <div class="_table_pro_pic">
                                            <img class="_table_pro_img" src="/static/img/man.jpg" alt="" title="">
                                        </div>

                                        <p class="_table_pro_name">{{ bill.supporters.firstName }}</p>
                                    </div>
                                </li>
                                <li>
                                    <p>{{ bill.created_at |formateDate}}</p>
                                </li>
                                <li>
                                    <p class="_green">${{bill.amount}}</p>
                                </li>
                            </ul>
                        </div>
                        <!-- ROW -->
                        <!-- TABLE BODY -->
                        <!-- {{ total }} -->
                    </div>
                    <!-- TABLE -->
                </div>	
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            billId:'',
            allBillsBy:[],
            total:''
            
        }
    },
    computed: {
        // total() {
        //     return this.allBillsBy.reduce(function (sum, item) {
        //     return sum + item.amount
        //     }, 0)
        // }
    },
    async asyncData({app , store}) {
        try {
            let {data} = await app.$axios.get('bill/get_all_support_bill')
            return { allBills: data }
        //    console.log("from async data",data)

        } catch (error) {
            console.log(error)
        }
    },
    methods:{
        async getGainById(id){
        const res = await this.callApi('get','/bill/get_single_support_bill_byId/'+id)
            if(res.status == 200){
                this.allBillsBy = res.data
                
                const total = res.data.reduce((sum, equity) => {
                return sum + equity.amount;
                }, 0)
                this.total =total;
                
            }
        }
    }
    
}
</script>
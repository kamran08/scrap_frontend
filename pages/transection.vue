<template>
    <div>
        <div class="_content">
            <div class="_transition_page">
                <div class="container">
                    <div class="_transtn_top _dis_flex _dis_flex_cntr1 _box_shdw2 _bg_wht">
                        <div class="_transtn_top_lft _dis_flex _dis_flex_cntr1">
                            <span class="_clr1"><i class="fas fa-money-check-alt"></i></span>
                            <p class="_transtn_top_txt1">Cash Balance</p>
                            <p class="_transtn_top_txt2" v-if="totalBalance">${{totalBalance | formateValue}}
                            </p>

                        </div>
                        <div class="_transtn_top_r8" @click="openModal">
                            <!-- Top Up -->
                            <!-- <a class="_bg_clr1" href="https://sandbox.zumrails.com/#/connect/2b41b179-fe0f-4fda-85dd-5352dfad290f" > -->
                            <a class="_bg_clr1" href="" onclick="return false" >
                               Top Up
                            <span class="_icon_crcle2"><i class="fas fa-long-arrow-alt-right"></i></span>
                        </a>
                        </div>
                    </div>

                    <div class="_transtn_hstry _dis_flex _dis_flex_cntr1">
                        <div class="_transtn_hstry_lft">
                            <h4>Transaction History</h4>
                            <p>Check your cash top-up history</p>
                        </div>
                        <div class="_transtn_hstry_r8 _dis_flex">
                            <div class="">
                                <Select @on-select="get_all_topups1" placeholder="Transaction Type" style="width:150px" v-model="str">
                                    <Option value="topup">Top up</Option>
                                    <Option value="billsupport">Bill Support</Option>
                                </Select>

                                <!-- DROPDOWN -->

                                <!-- DROPDOWN -->
                            </div>

                            <!-- <div class="_transtn_top_r8">
                                <a class="_bg_clr1" href="">
                                    Add Balance
                                <span class="_icon_crcle2"><i class="fas fa-long-arrow-alt-right"></i></span>
                            </a>
                        </div> -->
                        </div>
                    </div>

                    <!-- TABLE -->
                    <div class="_transtn_table">
                        <!-- TABLE HEAD -->
                        <div class="_transtn_table_hd _dis_flex _dis_flex_cntr1">
                            <!-- ITEAM -->
                            <div class="_transtn_table_itm">
                                <p>ID</p>
                            </div>
                            <!-- ITEAM -->

                                <!-- ITEAM -->
                            <div class="_transtn_table_itm">
                                <p>Date</p>
                            </div>
                            <!-- ITEAM -->

                                <!-- ITEAM -->
                            <div class="_transtn_table_itm">
                                <p>Reason</p>
                            </div>
                            <!-- ITEAM -->

                                <!-- ITEAM -->
                            <div class="_transtn_table_itm">
                                <p>Card</p>
                            </div>
                            <!-- ITEAM -->

                                <!-- ITEAM -->
                            <div class="_transtn_table_itm">
                                <p>Amount</p>
                            </div>
                            <!-- ITEAM -->
                        </div>
                        <!-- TABLE HEAD -->

                        <!-- TABLE BODY -->

                        <!-- ROW -->
                        <!-- {{topupList}} -->
                        <div class="_transtn_tbl_bdy_row _amnt_top _dis_flex_cntr1 _dis_flex" v-for="(item,i) in topupList.data" :key="i">
                            <ul>
                                <li>
                                    <span v-if="item.type=='billsupport'"><i class="fas fa-arrow-up"></i></span>
                                    <span class="_down" v-else><i class="fas fa-arrow-down"></i></span>
                                    <p>{{item.id}}</p>
                                </li>
                                <li>
                                    <p>
                                        {{ item.created_at| luxon }}
                                    </p>
                                </li>
                                <li>
                                    <p>{{(str == 'billsupport')?'Bill Support':'Top up'}}</p>
                                </li>
                                <li>
                                    <p>***{{item.card_number}}</p>
                                </li>
                                <li>
                                    <p v-if="item.reason=='billsupport'" class="_red">-${{Math.abs(item.amount)}}</p>
                                    <p  v-else class="_green">${{item.amount}}</p> 
                                </li>
                            </ul>
                        </div>
                        <!-- ROW -->

                      
                         

                        <!-- ROW -->
                        <!-- <div class="_transtn_tbl_bdy_row _amnt_btm _dis_flex_cntr1 _dis_flex">
                            <ul>
                                <li>
                                    <span><i class="fas fa-arrow-up"></i></span>
                                    <p>01444</p>
                                </li>
                                <li>
                                    <p>Today 04:30 PM</p>
                                </li>
                                <li>
                                    <p>Top up</p>
                                </li>
                                <li>
                                    <p>***44433</p>
                                </li>
                                <li>
                                    <p class="_red">-$20</p>
                                </li>
                            </ul>
                        </div> -->
                        <!-- ROW -->
            
                        <!-- TABLE BODY -->
                    </div>
                    <!-- TABLE -->
                </div>	
            </div>
           
        </div>

        <Modal
        v-model="isModal"
          title="Top up"
          class-name="modal_center"
            :mask-closable="false"
            width="650"
        >
         <p slot="header">
        <i class="fas fa-edit"></i>
        <span class="_padd_l5">Top up</span>
      </p>

          <div>
        <div class="_modal_content">
          <div class="_statusEdit_top _mar_b15">
          
          </div>

          <div class="_statusEdit_statusBox">
               <InputNumber :min="1" v-model="amount"></InputNumber>
          </div>
     
        
        </div>
      </div>

          <div>
        <div class="_modal_content">
          <!-- <div class="_statusEdit_top _mar_b15">
          
          </div> -->

          <div >
                <stripe-element-card
                ref="elementRef"
                :pk="pulishableKey"
                @token="tokenCreated"
                />
                <!-- <Button @click="submit">Payment</Button> -->
            </div>
     
        
        </div>
      </div>
             

       <div slot="footer">
        <Button disabled type="primary" v-if="isLoading">Loading...</Button>
        <Button @click="submit" type="primary" v-else>Top up</Button>
        <Button @click="onClickCancelPayment" >Close</Button>
      </div>
    </Modal>

   
    </div>
</template>
<script>
export default {
     middleware:"auth",
    data(){
        return{
            isModal:false,
            isLoading:false,
            amount:0,
            str:'topup',
            modal: false,
            plan: null,
            customer: {},
            intent: {
                client_secret: "",
            },
            PMS: {},
            paymentMethod_id: "",
            loading: false,
            stripe: null,
            elements: null,
            card: undefined,
            payment_modal: false,
            load_payment: false,
            pulishableKey :'pk_test_51HFc6rHJ4ZmcYBNIc95m4g1R5mx2AufzWfuV6bZ3GuxphQHMdI4nuMEyz9ILMuV4K1gMUKYnIKZxtHURTSWjjqdi00E3a9HQex',
            token: null,
            // totalBalance: 0.00,
        }
    },
    methods:{
         submit () {
            if(this.amount==0 || this.amount<1){
                return this.i("input amount should be getter than 0")
            }
      // this will trigger the process
      let response = this.$refs.elementRef.submit();
      console.log(response);
    },
  async  tokenCreated (response) {
      this.isLoading =true
      if(this.amount==0 || this.amount<1){
            return this.i("input amount should be getter than 0")
        }
        if(response && response.id){

            let ob ={
                token:response.id,
                amount:this.amount
            }
            const res = await this.callApi('post', '/bill/submit_payment', ob)
             this.isLoading = false
            if(res.status == 200){
                this.$store.commit('storeTotalBalance', this.amount)
                this.topupList.data.unshift(res.data)
                this.amount = 0
                this.isModal = false
                this.s("Top up completed")
                this.isLoading = false
            }
             this.isLoading = false
        }
      // handle the token
      // send it to your server
    },
      async  get_all_topups1(e){

            const res = await this.callApi('get',`/bill/get_all_topups?str=${e}`)
            if(res.status == 200){
                this.topupList= res.data
            }
        },
    //   async  topUp(){
    //     //   this.isLoading=true
    //         if(this.amount==0 || this.amount<1){
    //             return this.i("input amount should be getter than 0")
    //         }
    //         const res = await this.callApi('post',`/bill/store_topups`, {amount:this.amount})
    //         if(res.status == 200){
    //             this.topupList.data.unshift(res.data)
    //             this.totalBalance += res.data.amount
    //             this.amount = 0
    //             this.isModal = false
    //             window.location= '/transection'
    //         }
    //     },
        openModal(){
            this.isModal = true
          
        },
        onClickCancelPayment() {
              this.isModal = false
        
        },

   
    },
    async created(){
       
    },
    filters: {
        
    },
    async asyncData({app , store,query}) {
      try {
          var topupList = {}
          let {data} = await app.$axios.get(`/bill/get_all_topups?str=topup`)

              topupList = data
              return {
                    topupList:topupList,
                }
          
          

      } catch (error) {
          console.log(error)
      }
  }, 


}
</script>
<style>
.new_stripe{
    padding-top: 20px;
    font-size: 14px;
}
.new_stripe button{
        color: darkslategrey;
    padding: 3px;
}
</style>

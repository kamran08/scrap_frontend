<template>
    <div>
        <div class="_content">
            <div class="_transition_page">
                <div class="container">
                    <div class="_transtn_top _dis_flex _dis_flex_cntr1 _box_shdw2 _bg_wht">
                        <div class="_transtn_top_lft _dis_flex _dis_flex_cntr1">
                            <span class="_clr1"><i class="far fa-arrow-alt-circle-down"></i></span>
                            <p class="_transtn_top_txt1">Support Balance </p>
                            <p class="_transtn_top_txt2">$14,500</p>
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
                            <p>View your support transation history. Say Hello to your Bill Supporters</p>
                        </div>
                        <div class="_transtn_hstry_r8 _dis_flex">
                            <div class="">
                                <Input placeholder="Search" style="width: 200px; margin-right:10px;" />
                                <Select placeholder="Select Bill" style="width:200px">
                                    <Option>Bill One</Option>
                                    <Option>Bill Two</Option>
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
                        <div v-for="i in 10" :key="i" class="_transtn_tbl_bdy_row _amnt_top _dis_flex_cntr1 _dis_flex">
                            <ul>
                                <li>
                                    <span class="_down"><i class="fas fa-arrow-down"></i></span>
                                    <p>01444</p>
                                </li>
                                <li>
                                    <p>This is title</p>
                                </li>
                                <li>
                                    <div class="_table_pro">
                                        <div class="_table_pro_pic">
                                            <img class="_table_pro_img" src="/static/img/man.jpg" alt="" title="">
                                        </div>

                                        <p class="_table_pro_name">Jacqueline J. Hill</p>
                                    </div>
                                </li>
                                <li>
                                    <p>29 March 2021</p>
                                </li>
                                <li>
                                    <p class="_green">$20</p>
                                </li>
                            </ul>
                        </div>
                        <!-- ROW -->
                        <!-- TABLE BODY -->
                    </div>
                    <!-- TABLE -->
                </div>	
            </div>
        </div>
    </div>
</template>
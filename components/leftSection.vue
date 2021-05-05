<template>
    <div class="_left_sec _box_shdw2  _mar_b30">
        <h2 class="_blogtitle">Latest News</h2>

        <div class="_blog2_card">
            <!-- Item -->
            <div class="_blog2_card_items" v-for="(item, index) in 6" :key="index">
                <div class="_blog2_card_pic">
                    <img class="_blog2_card_img" src="/img/man.jpg" alt="" title="">
                </div>

                <div class="_blog2_card_details">
                    <nuxtLink to="/blogSingle" class="_blog2_card_name">Liberom nec lacinia egestas vivamus maecenas. Noninte nislqu teger pharetr loremnul suscip. Amus usce</nuxtLink>

                    <div class="_blog2_card_pro">
                        <div class="_blog2_card_pro_pic">
                            <img class="_blog2_card_pro_img" src="/img/pic.jpg" alt="" title="">
                        </div>
                        <p class="_blog2_card_pro_name">Jacqueline J. Hill</p>
                    </div>
                </div>
            </div>
            <!-- Item -->
        </div>
    </div>
</template>
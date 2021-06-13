<template>
    <div>
        <div class="_content">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-6 col-lg-6">
                        <div class="_notiPage">
                            <h1 class="_notiPage2_title">All Notifications</h1>
                            <div class="_notiPage_card" v-for="i in 5" :key="i">
                                <div class="_notiPage_card_left">
                                    <div class="_notiPage_pic">
                                        <img class="_notiPage_img" src="https://api.scrapabill.com/uploads/1622886926258.jpeg" alt="" title="">
                                    </div>

                                    <div class="_notiPage_details">
                                        <h1 class="_notiPage_title">Boost started succesfully.</h1>
                                        <p class="_notiPage_time">19 days ago</p>
                                    </div>
                                </div>

                                <div class="_notiPage_card_drop">
                                    <Dropdown trigger="click" placement="bottom-end">
                                        <a class="_notiPage_card_drop_text" href="javascript:void(0)">
                                            <i class="fas fa-ellipsis-h"></i>
                                        </a>

                                        <DropdownMenu slot="list">
                                            <DropdownItem>Edit</DropdownItem>
                                            <DropdownItem>Delete</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
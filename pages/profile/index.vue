<template>
    <div>
        <!-- CONTENT -->
        <div class="_content">
            <div class="_index_page">
                <div class="container" v-if="feedUser">
                    <div class="_prfl_card1 _bg_wht _b_radious5 _box_shdw2">
                        <div class="_prfl_card1_lft _dis_flex">
                            <div class="_prfl_card1_img" v-if="feedUser">
                                <img v-if="feedUser && feedUser.profilePic" :src="feedUser.profilePic" alt="image">
                                <img v-else src="/img/man.jpg" alt="image">
                                <div class="_prfl_card1_img_btm _dis_flex_all">
                                    <span><i class="far fa-check-circle"></i></span>
                                    <p>Lives in {{feedUser.country?feedUser.country:""}}</p>
                                </div>
                            </div>

                            <div class="_prfl_card1_info">
                                <div class="_prfl_card1_info_top">
                                    <h2 class="_titl1 _mar_b5">{{feedUser.firstName}} {{feedUser.lastName}}</h2>
                                    <p>{{feedUser.company}}</p>
                                </div>

                                <div class="_prfl_card1_info_btm">
                                    <ul class="_dis_flex">
                                        <li>
                                            <h4>$2,300</h4>
                                            <p>Bills Scrapped</p>
                                        </li>
                                        <li>
                                            <h4>10</h4>
                                            <p>Bills Entered</p>
                                        </li>
                                        <li>
                                            <h4>$200</h4>
                                            <p>Bills Supported</p>
                                        </li>
                                        <li>
                                            <h4>{{feedUser.view}}</h4>
                                            <p>Views</p>
                                        </li>
                                        <!-- <li>
                                            <h4>1k</h4>
                                            <p>Clicks</p>
                                        </li> -->
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="_prfl_card1_r8">
                            <div class="_prfl_card1_r8_top">
                                <!-- <ul>
                                    <li>
                                        <span><i class="fas fa-money-check-alt"></i></span>
                                        <p class="_prfl_r8_txt1">Cash balance</p>
                                        <p class="_prfl_r8_txt2">$14.5k</p>
                                    </li>
                                    <li>
                                        <span class="_clr1"><i class="fas fa-money-check-alt"></i></span>
                                        <p class="_prfl_r8_txt1">Funding balance</p>
                                        <p class="_prfl_r8_txt2">$14.5k</p>
                                    </li>
                                </ul> -->
                            </div>

                            <div class="_prfl_card1_r8_btm _dis_flex _dis_flex_cntr1">
                                <p>Connect With Friends On</p>
                                <ul>
                                    <li>
                                        <a href="">
                                            <span><i class="fab fa-facebook-f"></i></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <span><i class="fab fa-twitter"></i></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <span><i class="fab fa-linkedin-in"></i></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <span><i class="fab fa-instagram"></i></span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="_indx_post_lst _mar_b20">
                        <ul class="_dis_flex">
                            <li :class="(isActive==1)?'_active':''" @click="isActive=1"><nuxtLink to="">All</nuxtLink></li>
                            <li class="_active" v-if="id" ><router-link :to="'/profile?id='+id">Status</router-link></li>
                            <li class="_active" v-else> <router-link to="/profile">Status</router-link></li>
                            <li :class="(isActive==3)?'_active':''" @click="isActive=3"><nuxtLink to="">Bill</nuxtLink></li>

                            <li :class="(isActive==4)?'_active':''" @click="isActive=4"><nuxtLink to="">Articles</nuxtLink></li>
                             <li v-if="id"><router-link :to="'/profilePhotos?id='+id">Photos</router-link></li>
                            <li v-else  @click="isActive=5"><nuxtLink to="/profilePhotos">Photos</nuxtLink></li>
                        </ul>
                    </div>

                    <div class="_prfl_cntnt _bg_wht _b_radious5 _box_shdw2">
                        <div class="row">
                            <div class="col-12 col-lg-8 col-md-8">
                                <div class="_prfl_cntnt_lft_all">
                                    <!-- Card status -->
                                    <!-- Card status -->
                                    
                                    <!-- Image card --> 
                                    <div class="_indx_post_card _box_shdw2  _mar_b20 _mar_t30" v-for="(feed, index) in getFeed" :key="index">
                                        <div class="_indx_post_card_inner" v-if="feed.type=='feed'">
                                            <div class="_indx_post_card_top _dis_flex">
                                                <div class="_indx_post_card_top_lft">
                                                    <div class="_card1_top_img _mar_r10" v-if="feed.user.profilePic">
                                                        <img :src="feed.user.profilePic" alt="image">
                                                    </div>
                                                    <div class="_card1_top_img _mar_r10" v-else>
                                                        <img src="/img/man.jpg" alt="image">
                                                    </div>
                                                    <div class="_indx_post_card_top_titl">
                                                        <nuxtLink to="/profile"><h4>{{feed.user.firstName}} {{feed.user.lastName}}</h4></nuxtLink>
                                                        <p>{{feed.created_at | formateDate}} </p>
                                                    </div>
                                                    
                                                </div>
                                                <div v-if="feed.user.id == authUser.id" class="_card_top_more">
                                                    <Dropdown trigger="click" placement="bottom-end">
                                                        <a class="_more" href="javascript:void(0)">
                                                            <i class="fas fa-angle-down"></i>
                                                        </a>
                                                        <DropdownMenu slot="list">
                                                            <DropdownItem><span style="cursor:pointer;" @click="onClickEditFeed(feed, index)">Edit</span></DropdownItem>
                                                            <DropdownItem><span style="cursor:pointer;" @click="deleteFeed(feed, index)">Delete</span></DropdownItem>
                                                        </DropdownMenu>
                                                    </Dropdown>
                                                </div>
                                            </div>
                                            <div class="_indx_post_card_txt">
                                                <!-- <nuxtLink to="/singlePost"><h4 class="_clr_blck">Donate money for shelter less child education</h4></nuxtLink> -->
                                                <p v-if="!feed.isEdit">{{feed.feedTxt}}</p>
                                                
                                                <!-- <div class="_1card_comment_box_input_icon" v-if="feed.isEdit">
                                                    <div class="_1card_comment_box_input">
                                                        <input
                                                        type="text" v-model="editFeedInput.feedTxt" @keyup.enter="editFeed(feed)"
                                                        />
                                                </div>
                                                        <i style="margin-top:12px;cursor:pointer;" class="fas fa-times" @click="cancelFeedEditinput(feed)"></i>
                                                    </div> -->
                                                <!-- <div class="_indx_post_red_mre _mar_t15 _dis_flex">
                                                    <a href="" class="_clr1">Read More</a>
                                                    <span class="_icon_crcle"><i class="fas fa-arrow-right"></i></span>
                                                </div> -->
                                            </div>
                                            
                                            <!-- Single image -->
                                            <div class="_card_status_pic_all" v-if="JSON.parse(feed.images).length==1">
                                                <div  @click="imageModalOpen(feed.images,ind)" class="_card_status_pic" v-for="(image,ind) in JSON.parse(feed.images)" :key="ind">
                                                    <img class="_card_status_img" :src="image" alt="" title="">
                                                </div>
                                            </div>
                                            <!-- Single image -->

                                            <!-- Multipule image -->
                                            <div class="_cardMulti_pic_all" v-else>
                                                <div class="_cardMulti_pic_main" v-for="(image,ind) in JSON.parse(feed.images)" :key="ind">
                                                    <div @click="imageModalOpen(feed.images,ind)" class="_cardMulti_pic">
                                                        <img class="_cardMulti_img" :src="image" alt="" title="">
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Multipule image -->
                                        </div>
                                        <div class="_indx_post_card_inner" v-else>
                                            <div class="_indx_post_card_top _dis_flex">
                                                <div class="_indx_post_card_top_lft">
                                                    <div class="_card1_top_img _mar_r10" v-if="feed.user && feed.user.profilePic">
                                                        <img :src="feed.user.profilePic" alt="image">
                                                    </div>
                                                    <div class="_indx_post_card_top_titl">
                                                         <nuxtLink :to="'/profile?id='+feed.user.id"><h4>{{feed.user.firstName}} {{feed.user.lastName}}</h4></nuxtLink>
                                                        <p>{{feed.created_at | formateDate}} </p>
                                                        <!-- <p>22 March 2021</p> -->
                                                    </div>
                                                </div>
                                               


                                                <div class="_indx_post_card_top_r8" v-if="feed.bill">
                                                    <ul>
                                                        <li>Due Date: <p>{{feed.bill.date | formateDate}} </p></li>
                                                        <li v-if="feed.bill.categories">{{feed.bill.categories.name}}</li>
                                                    </ul>
                                                </div>
                                                  <!-- <div v-if="feed.user.id == authUser.id" class="_card_top_more">
                                                    <Dropdown trigger="click" placement="bottom-end">
                                                        <a class="_more" href="javascript:void(0)">
                                                            <i class="fas fa-angle-down"></i>
                                                        </a>
                                                        <DropdownMenu slot="list">
                                                            <DropdownItem><span style="cursor:pointer;" @click="onClickEditFeed(feed, index)">Edit</span></DropdownItem>
                                                            <DropdownItem><span style="cursor:pointer;" @click="deleteFeed(feed, index)">Delete</span></DropdownItem>
                                                        </DropdownMenu>
                                                    </Dropdown>
                                                </div> -->
                                            </div>

                                            <div class="_indx_post_card_txt" v-if="feed.bill">
                                                <router-link to="/singlePost"><h4 class="_clr1">{{feed.bill.title}}</h4></router-link>
                                                <p>{{feed.bill.descriptions}}</p>

                                                <div class="_indx_post_pgrs _mar_t15">
                                                    <div class="_indx_post_pgrs_top _dis_flex">
                                                        <div class="_indx_post_pgrs_qnty">
                                                        <p v-if="feed.bill.total_amount_scrapped">Processing:${{feed.bill.total_amount_scrapped }}</p>
                                                        <p v-else>Processing:$0</p>
                                                        </div>
                                                        <div class="_indx_post_pgrs_qnty">
                                                            <p>Scap Goal:${{feed.bill.amount}}</p>
                                                        </div>
                                                    </div>
                                                     <Progress :percent="feed.bill | makePercent" :stroke-width="20" :status="(feed.bill | makePercent==100)?'success':'active'" text-inside />
                                                    <!-- <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:100%;height: 14px;"> -->
                                                    <!-- <span class="sr-only">70% Complete</span>
                                                    </div> -->
                                                </div>
                                            </div>
                                        </div>


                                        <div class="_indx_post_card_btm _dis_flex">
                                            <div class="_indx_post_btm_lft">
                                                <ul>
                                                    <li>
                                                        <span>
                                                            <template v-if="likeLoad==index"><i class="fas fa-spinner"></i> </template>
                                                            <template v-else> 
                                                                <i @click="crateFeedLike(feed,index)" class="fas fa-heart" v-if="feed.hasUserLike"></i>
                                                                <i @click="crateFeedLike(feed,index)" class="far fa-heart" v-else></i>
                                                            </template>
                                                            
                                                        </span>  {{(feed.meta)?feed.meta.likes_count:0}}  Like
                                                        <!-- Bill Followers -->
                                                    </li>
                                                      <li v-if="feed.type=='bill'">
                                                         <span>
                                                        <template v-if="followLoading==index"><i class="fas fa-spinner"></i> </template>
                                                            <template v-else> 
                                                                <i class="fas fa-heart" v-if="feed.hasUserfollow"></i>
                                                                <!-- <i @click="crateFeedFollow(feed,index)" class="fas fa-heart" v-if="feed.hasUserfollow"></i> -->
                                                                <i @click="crateFeedFollow(feed,index)" class="far fa-heart" v-else></i>
                                                            </template>
                                                        </span>{{feed.meta.follow_count}} Follow
                                                    </li>

                                                    <li @click="showComment(feed, index)">
                                                        <span><i class="far fa-comment"></i></span>{{feed.meta.comment_count}} Comments
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="_indx_post_btm_r8">
                                                <ul>
                                                    <li>
                                                        <span><i class="fas fa-share"></i></span>Reply
                                                    </li>
                                                    <li>
                                                        <span><i class="fas fa-share-alt"></i></span>Share
                                                    </li>
                                                    <!-- <li class="_clr_blck">
                                                        <span @click="isDropdown = !isDropdown"><i class="fas fa-ellipsis-h"></i></span>

                                                        
                                                        <div v-if="isDropdown" class="_indx_post_drpwn1 _box_shdw2">
                                                            <ul>
                                                                <li>
                                                                    Iteam 1
                                                                </li>
                                                                <li>
                                                                    Iteam 2
                                                                </li>
                                                                <li>
                                                                    Iteam 3
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        
                                                    </li> -->
                                                </ul>
                                            </div>
                                        </div>
                                        <!-- <span v-if="feed"> -->
                                            <!-- <span v-if=" feed.id == getComment.post_id"> -->
                                            <!--startcommentSection-->
                                            <commentBox v-if="feed.comments && feed.isOpen" :feed='feed'/>
                                            <!--endcommentSection--> 
                                            <!-- </span> -->
                                        
                                        <!-- </span> -->
                                    </div>
                                    <!-- Image card -->

                                   
                                </div>
                            </div>

                            <div class="col-12 col-lg-4 col-md-4">
                                <div class="_prfl_cntnt_r8_all">
                                    <div class="_indx_r8_card_top1 _mar_b10">
                                        <h3>Most Recent Bills</h3>
                                    </div>

                                    <!-- CARD -->
                                    <div class="_indx_r8_card _box_shdw2 _mar_b20">
                                        <div class="_indx_r8_card_top _dis_flex">
                                            <!-- <div class="_indx_r8_card_top_lft">
                                                <h4>22</h4>
                                                <p>Mar</p>
                                            </div> -->
                                            <div class="_indx_r8_card_pic">
                                                <img class="_indx_r8_card_img" src="/img/man.jpg" alt="" title="">
                                            </div>
                                            <div class="_indx_r8_card_top_r8">
                                                <nuxtLink class="_indx_r8_card_name" to="/profile">Jacqueline J. Hill</nuxtLink>
                                                <p>25 march 2021<span>21 Bill Followers</span></p>
                                            </div>
                                        </div>

                                        <h4 class="_indx_r8_card_title">I need help to pay my house rent</h4>

                                        <div class="_indx_r8_card_pgrs">
                                            <div class="_indx_r8_card_pgrs_top _dis_flex">
                                                <div class="_indx_r8_card_pgrs_sngl">
                                                    <p class="_clr_fnd">Processing: $4567</p>
                                                </div>
                                                <div class="_indx_r8_card_pgrs_sngl">
                                                    <p>Scrap Goal: $6,787 or $400</p>
                                                </div>
                                            </div>
                                            <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:70%;height: 14px;">
                                                <span class="sr-only">70% Complete</span>
                                                </div>
                                        </div>

                                        <div class="_indx_r8_card_btm _dis_flex">
                                            <div class="_indx_r8_card_btm_lft">
                                                <a href="">Follow Bill Now</a>
                                                <span class="_icon_crcle"><i class="fas fa-arrow-right"></i></span>
                                            </div>
                                            <div class="_indx_r8_card_btm_r8">
                                                <span class="_clr1"><i class="far fa-heart"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- CARD -->

                                    <div class="_indx_r8_card_top1 _mar_b10">
                                        <h3>Currently Following</h3>
                                    </div>

                                    <!-- CARD -->
                                    <div class="_indx_r8_card _box_shdw2 _mar_b20">
                                        <div class="_indx_r8_card_top _dis_flex">
                                            <!-- <div class="_indx_r8_card_top_lft">
                                                <h4>22</h4>
                                                <p>Mar</p>
                                            </div> -->
                                            <div class="_indx_r8_card_pic">
                                                <img class="_indx_r8_card_img" src="/img/man.jpg" alt="" title="">
                                            </div>
                                            <div class="_indx_r8_card_top_r8">
                                                <nuxtLink class="_indx_r8_card_name" to="/profile">Jacqueline J. Hill</nuxtLink>
                                                <p>25 march 2021<span>21 Bill Followers</span></p>
                                            </div>
                                        </div>

                                        <h4 class="_indx_r8_card_title">I need help to pay my house rent</h4>

                                        <div class="_indx_r8_card_pgrs">
                                            <div class="_indx_r8_card_pgrs_top _dis_flex">
                                                <div class="_indx_r8_card_pgrs_sngl">
                                                    <p class="_clr_fnd">Processing: $4567</p>
                                                </div>
                                                <div class="_indx_r8_card_pgrs_sngl">
                                                    <p>Scrap Goal: $6,787 or $400</p>
                                                </div>
                                            </div>
                                            <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:70%;height: 14px;">
                                                <span class="sr-only">70% Complete</span>
                                                </div>
                                        </div>

                                        <div class="_indx_r8_card_btm _dis_flex">
                                            <div class="_indx_r8_card_btm_lft">
                                                <a href="">Follow Bill Now</a>
                                                <span class="_icon_crcle"><i class="fas fa-arrow-right"></i></span>
                                            </div>
                                            <div class="_indx_r8_card_btm_r8">
                                                <span class="_clr1"><i class="far fa-heart"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- CARD -->
                                </div>
                            </div>

                        </div>
                    </div>
                </div>	
            </div>
        </div>
        <!-- CONTENT -->
          <!-- Image modal -->
        <div v-if="isImage" class="_imageShow">
            <div class="_imageShow_main ghg">
                <div class="_imageShow_logo">
                    <p @click="isImage = false" class="_imageShow_close"><i class="ivu-icon ivu-icon-md-close"></i></p>
                </div>
                <div class="_imageShow_main_pic">
                    <div style="width: 100%; height: 100%;" v-if="singleItemImages[nextIndex]">
                        <img alt="" title="" class="_imageShow_main_img" :src="singleItemImages[nextIndex]">
                    </div>
                </div>
                <div class="_imageShow_next_pre _imageShow_next" @click="previous()"><i class="ivu-icon ivu-icon-md-arrow-dropleft"></i></div>
                <div class="_imageShow_next_pre _imageShow_pre"  @click="next()"><i class="ivu-icon ivu-icon-md-arrow-dropright"></i></div>
            </div>
        </div>
        <!-- Image modal -->
         <Modal
        v-model="editModal"
          title="Edit Feed"
          class-name="modal_center"
            :mask-closable="false"
      width="650"
        >
         <p slot="header">
        <i class="fas fa-edit"></i>
        <span class="_padd_l5">Edit Post</span>
      </p>

          <div>
        <div class="_modal_content" v-if="authUser">
          <div class="_statusEdit_top _mar_b15">
            <div class="_card_top">
              <div class="_card_pic">
                <img
                  class="_card_img"
                  v-lazy="authUser.profilePic"
                  alt=""
                  title=""
                />
              </div>

              <div class="_card_details">
                <p class="_card_name">
                  {{ authUser.firstName }}
                </p>
              </div>

             
            </div>
          </div>

          <div class="_statusEdit_statusBox">
            <Input
              type="textarea"
              :rows="8"
              v-model="edit_data.feedTxt"
              placeholder="What's on your mind ?"
            />
          </div>
          <!-- {{edit_data.images}} -->
          <template>

            <div class="demo-upload-list" v-for="(item,i) in edit_data.images" :key="i">
                <template v-if="item.status === 'finished'">
                    <img :src="item.url">
                    <div class="demo-upload-list-cover">
                        <!-- <Icon type="ios-eye-outline" @click.native="handleView(item.name)"></Icon> -->
                        <Icon type="ios-trash-outline" @click.native="handleRemove(item,i)"></Icon>
                    </div>
                </template>
                <template v-else>
                    <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
                </template>
            </div>
          
           <Upload
                multiple 
                ref="uploads"
                type="drag"
                :on-progress="handleProgressCover"
                :on-success="handleSuccess"
                :format="['jpg','jpeg','png']"
                :max-size="20480"
                :on-format-error="handleFormatErrorCover"
                :on-exceeded-size="handleMaxSizeCover"
                :show-upload-list="false"
                action="https://api.scrapabill.com/feed/uploadImages"
                
            >
                <!-- :action="BASE_URL+'feed/uploadImages'" -->
                 <div style="width: 70px;height:58px;line-height: 58px;">
                                    <Icon type="ios-camera" size="20"></Icon>
                                </div>
                <!-- <Button icon="ios-cloud-upload-outline">Photo</Button> -->
        </Upload>
        </template>
        
        </div>
      </div>
             

       <div slot="footer">
        <Button @click="onClickEditPost" type="primary">Edit</Button>
        <Button @click="closeModal">Close</Button>
      </div>
    </Modal>
    </div>
</template>

<script>
import commentBox from '~/components/comment.vue'
export default {
    middleware:"auth",
      components: {
        commentBox,
    },
    data(){
        return {
            isActive:2,
            alldata:{},
            singleItem:{},
            editIndex:-1,
            editModal: false,
            likeLoad:-1,
            isloaded: false,
            isHide: true,
            isModal: false,
            isImage: false,
            edit_data:{
                editIndex:-1,
                id:'',
                user_id:'',
                feedTxt:'',
                images:[],
                comments:[],
                user:{},
        }
    }
    },
    methods:{
        async crateFeedFollow(feed, index){
        this.followLoading = index
        const res = await this.callApi('post','like/crateFeedFollow',{feed_id:feed.id,user_id:feed.user_id,bill_id:feed.bill.id})
        this.followLoading = -1
        if(res.status==200){
            if(res.data.hasUserfollow){
                feed.hasUserfollow = false
                feed.meta.follow_count--
            }
            else{
                feed.hasUserfollow =this.authUser
                feed.meta.follow_count++
            }
            console.log(res.data)
        }
        else if(res.status==403){
            this.e(res.data.message)
        }
        else if(res.status==404 || res.status==401){
            this.e(res.data.message)
        }
        else this.swr()
    },
         next(){
        let a = this.nextIndex+1
        console.log(this.nextIndex, 'first ')
        if(a>=this.singleItemImages.length){
            this.nextIndex = 0
            return
        }
        else {
            this.nextIndex+=1
        }
        console.log(this.nextIndex ,'last')
    },
    previous(){
        let a = this.nextIndex-1
        console.log(this.nextIndex ,'fist')
        if(a<=-1){
            this.nextIndex = this.singleItemImages.length-1
        }
        else {
            this.nextIndex--
        }
        console.log(this.nextIndex, 'last')

    },
      imageModalOpen(feed,i){
          this.singleItemImages = JSON.parse(feed)
          this.nextIndex = i
          this.isImage = true
      },
     handleMaxSizeCover(file) {
      this.$Notice.warning({
        title: "Exceeding file size limit",
        desc: "File  " + file.name + " is too large, no more than 20M.",
      });
    },
      handleFormatErrorCover(file) {
      this.$Notice.warning({
        title: "The file format is incorrect",
        desc:
          "File format of " +
          file.name +
          " is incorrect, please select jpg or png or gif.",
      });
    },
      async handleProgressCover(event, file, fileList) {
          this.edit_data.images.push(file)
          console.log(file, 'files')
        //   console.log(this.edit_data.images)

            //   this.cover = file;
    },
      handleRemove(item,i){
          this.edit_data.images.splice(i, 1);
      },
    handleSuccess (res, file) {
        let a =  this.edit_data.images.length
        this.edit_data.images[a-1].url = res
    },
    closeModal(){
        this.$store.commit('setUpdateFeed',this.singleItem)
        
        this.editModal = false
    },
    
    async onClickEditPost(){
    
        let images = []
        if(this.edit_data.images.length){
            for(let it of this.edit_data.images){
                images.push(it.url)
            }
        }
        // delete this.edit_data.images 
        this.edit_data.images = JSON.stringify(images)
        console.log( this.edit_data)
        // return 
        let res = await this.callApi('post', 'feed/updateFeed', this.edit_data)
        if(res.status==200){
            this.edit_data = res.data
            this.edit_data.editIndex = this.editIndex
            this.$store.commit('setUpdateFeed',this.edit_data)
            console.log(res.data)
            this.editIndex = -1
            this.editModal = false
        }
        else if(res.status==401){
            this.e(res.data.message)
        }   
        else this.swr()
    },
    async crateFeedLike(feed, index){
        this.likeLoad = index
        const res = await this.callApi('post','like/createLike',{feed_id:feed.id})
        this.likeLoad = -1
        if(res.status==200){
            if(res.data.hasUserLike){
                feed.hasUserLike = false
                feed.meta.likes_count--
            }
            else{
                feed.hasUserLike =this.authUser
                feed.meta.likes_count++
            }
            console.log(res.data)
        }
        else if(res.status==404 || res.status==401){
            this.e(res.data.message)
        }
        else this.swr()
    },
    async showComment(feed, index){
        if(feed.comments){
             this.$set(feed, 'isOpen', !feed.isOpen)
            return 
        }
        const res = await this.callApi('get',`comment/getComment/`+feed.id)
        if(res.status === 200){
            // feed.comments = res.data
           let obj = res.data
           obj.feed_id =feed.id
           
            this.$store.commit("setComment", obj);
            this.$set(feed, 'isOpen', !feed.isOpen)
            
        }
        else{
            this.swr();
        }
    },
    
    async deleteFeed(feed, i){
        let obj ={
        feed_id: feed.id,
        user_id: this.authUser.id
      }
    //   console.log(obj)
      const res = await this.callApi('post',`feed/deleteFeed/`, obj)
        
      if(res.status == 200){
          
        this.s('Feed Deleted Successfully !!')
        this.getFeed.splice(i, 1);
        // this.feed.meta.comment_count--
        
      }else{
        this.swr()
      }
    },
    
   onClickEditFeed(feed,i) {
       let feed1 = JSON.parse(JSON.stringify(feed))
       this.singleItem = JSON.parse(JSON.stringify(feed))
       this.singleItem.editIndex=i
       this.edit_data.images = []
       console.log(feed1)
       this.editIndex = i
           this.edit_data.editIndex=i
           this.edit_data.id=feed1.id
            this.edit_data.user_id=feed1.user_id
            this.edit_data.feedTxt=feed1.feedTxt
            let a=JSON.parse(feed1.images)
            for(let it of a){
                let ob = {
                    status:'finished',
                    url:it
                }
                this.edit_data.images.push(ob)
            }
        feed.isEdit =true
        this.editModal = true
    },
    
    cancelFeedEditinput(feed) {
      feed.isEdit =false
    },
    },
    async asyncData({app , store,query}) {
      try {
        //   console.log(query)
        var user = []
        var feedUser = {}
        let id = 0
        if(query.id) {
            id = query.id
        }
          let {data} = await app.$axios.get(`/feed/getFeed?user_id=${id}`)
          console.log(data , 'feed')
          if(data && data.feedData)
          store.commit('setFeed',data.feedData)
           if(data && data.feedUser)
           feedUser = data.feedUser
          return {
              feedUser:feedUser,
              id:query.id
          }
      } catch (error) {
          console.log(error)
      }
    }
      
  
    
}
</script>
<style>
    .demo-upload-list{
        display: inline-block;
        width: 60px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        border: 1px solid transparent;
        border-radius: 4px;
        overflow: hidden;
        background: #fff;
        position: relative;
        box-shadow: 0 1px 1px rgba(0,0,0,.2);
        margin-right: 4px;
    }
    .demo-upload-list img{
        width: 100%;
        height: 100%;
    }
    .demo-upload-list-cover{
        display: none;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0,.6);
    }
    .demo-upload-list:hover .demo-upload-list-cover{
        display: block;
    }
    .demo-upload-list-cover i{
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        margin: 0 2px;
    }
    .ivu-upload{
            width: 74px  !important; 
    }
</style>
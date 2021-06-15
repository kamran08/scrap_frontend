 <template>
  <div id="app">
    <div id="main-wrapper">
      <!-- Menu -->
      <div v-if="$route.path != '/' && $route.path != '/login' && $route.path != '/register' && $route.path != '/forgot_password' && $route.path != '/confirm_email' && $route.path != '/verify_email' && $route.path != '/resetPassword'" class="_menu">
        <div class="container">
          <div class="_menu_inner  _dis_flex _dis_flex_cntr1">
            <!-- LOGO -->
            <div class="_menu_logo">
              <nuxtLink to="/">
                <img src="/img/logo.png" alt="image">
                <!-- <img src="/img/finallogo.svg" alt="image"> -->
              </nuxtLink>
            </div>
            <!-- LOGO -->

            <!-- MIDDLE -->
            <div class="_menu_mdl">
              <!-- Ipad search -->
              <div class="_menu_input_ipad">
                <i class="fas fa-search"></i>
              </div>
              <!-- Ipad search -->
              <div class="_menu_input">
                <span><i class="fas fa-search"></i></span>
                <input type="text" placeholder="Search Scrapabill">
              </div>

              <div class="_menu_home">
                <ul>
                  <li :class="$route.path=='/feed'?'_menu_page _active_page':'_menu_page'">
                    <nuxtLink class="_menu_page_item" to="/feed"><span><i class="fas fa-home"></i></span></nuxtLink>
                  </li>
                  <li :class="$route.path=='/bill'?'_menu_page _active_page':'_menu_page'">
                    <nuxtLink class="_menu_page_item" to="/bill"><span><i class="far fa-file-alt"></i></span></nuxtLink>
                  </li>
                  <li :class="$route.path=='/transection'?'_menu_page _active_page':'_menu_page'">
                    <div class="_menu_blnc">
                      <nuxtLink class="_menu_page_item" to="/transection">
                        <p class="_menu_page_span"><i class="fas fa-wallet"></i> Cash Balance <span>${{totalBalance | formateValue}}</span></p>
                      </nuxtLink>
                    </div>
                  </li>
                  <li :class="$route.path=='/funding'?'_menu_page _active_page':'_menu_page'">
                    <div class="_menu_blnc">
                      <nuxtLink class="_menu_page_item" to="/funding">
                        <p class="_menu_page_span"><i class="far fa-arrow-alt-circle-down"></i> Support Balance 
                        <!-- <span>$14.5k</span> -->
                        </p>
                      </nuxtLink>
                    </div>
                  </li>
                    
                    <!-- Notification -->
                  <li class="_menu_list_items _menu_list_noti" >
                  <!-- <li class="_menu_list_items _menu_list_noti" @mouseleave="tab = false"> -->
                      <!-- <div @click="clickMenuDrop ('notiDrop')" class="_menu_noti"> -->
                        <!-- @click="tab=!tab" -->
                      <!-- <div  class="_menu_noti" @mouseover="openNotificationDropDown" > -->
                      <div  class="_menu_noti" @click="openNotificationDropDown" >
                        
                        <span class="_noti_icon" ><i class="far fa-bell"></i></span>
                        <span class="_noti_num" v-if="notiCount">{{notiCount}}</span>
                    </div>

                    <!-- Dropdown -->
                    <div v-if="tab" class="_1dropdown _noti_all">
                      <div class="_1dropdown_title">
                        <p class="_1dropdown_title_text _3title">Notifications</p>

                        <div class="_1dropdown_title_more">
                          <Dropdown trigger="click" placement="bottom-end">
                            <a class="_drop_a" href="javascript:void(0)">
                              <i class="fas fa-ellipsis-h"></i>
                            </a>
                            <DropdownMenu slot="list">
                              <DropdownItem><span>Mark all as read</span></DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                        </div>
                      </div>

                      <!-- Shimmer -->
                      <template v-if="!allNotification.length && loading">
                        <div class="_drop_shimmer_all">
                          <div class="_drop_shimmer">
                            <div class="_shimmer_profilePic _shim_animate din"></div>
                            <div class="_drop_shimmer_details">
                              <div
                                class="_shimmer_mess_name _shim_w50 _shim_animate"
                              ></div>
                              <div
                                class="_shimmer_mess_text _shim_w95 _shim_animate"
                              ></div>
                            </div>
                          </div>

                          <div class="_drop_shimmer">
                            <div class="_shimmer_profilePic _shim_animate din"></div>
                            <div class="_drop_shimmer_details">
                              <div
                                class="_shimmer_mess_name _shim_w40 _shim_animate"
                              ></div>
                              <div
                                class="_shimmer_mess_text _shim_w80 _shim_animate"
                              ></div>
                            </div>
                          </div>

                          <div class="_drop_shimmer">
                            <div class="_shimmer_profilePic _shim_animate din"></div>
                            <div class="_drop_shimmer_details">
                              <div
                                class="_shimmer_mess_name _shim_w50 _shim_animate"
                              ></div>
                              <div
                                class="_shimmer_mess_text _shim_w90 _shim_animate"
                              ></div>
                            </div>
                          </div>

                          <div class="_drop_shimmer">
                            <div class="_shimmer_profilePic _shim_animate din"></div>
                            <div class="_drop_shimmer_details">
                              <div
                                class="_shimmer_mess_name _shim_w60 _shim_animate"
                              ></div>
                              <div
                                class="_shimmer_mess_text _shim_w100 _shim_animate"
                              ></div>
                            </div>
                          </div>

                          <div class="_drop_shimmer">
                            <div class="_shimmer_profilePic _shim_animate din"></div>
                            <div class="_drop_shimmer_details">
                              <div
                                class="_shimmer_mess_name _shim_w50 _shim_animate"
                              ></div>
                              <div
                                class="_shimmer_mess_text _shim_w90 _shim_animate"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </template>
                      <!-- Shimmer -->
                      <!-- Notification Data -->
                      <template v-if="allNotification">
                        <div class="_1dropdown_body _1scrollbar">
                            <ul class="_1dropdown_body_list">
                              <!-- Items -->
                              <li class="_active" v-for="(item, index) in allNotification" :key="index">
                                <div class="_noti_items " :class="(item.seen)?'':'noti_active'">
                                  <div class="_noti_main" >
                                    <div class="_noti_pic" @click="gotToUrl(item,index)">
                                      <img class="_noti_img" v-if="item.image" :src="item.image" alt="" title=""/>
                                      <img class="_noti_img" v-else src="/img/pic.jpg" alt="" title=""/>
                                    </div>

                                    <div class="_noti_details">
                                      <!-- comment in your post. -->
                                      <p class="_noti_details_title" @click="gotToUrl(item,index)">
                                        <strong class="_noti_details_title_name" >{{item.message}}</strong>
                                      </p>

                                      <p class="_noti_details_time">
                                          {{item.created_at | timeSince}}


                                        <!-- <timeago :datetime="item.created_at" ></timeago> -->
                                        </p>
                                    </div>
                                  </div>

                                  <div class="_noti_more">
                                    <Dropdown trigger="click" placement="bottom-end">
                                      <a class="_noti_more_a" href="javascript:void(0)">
                                        <i class="fas fa-ellipsis-h"></i>
                                      </a>
                                      <DropdownMenu slot="list">
                                        <DropdownItem v-if="item.seen" ><span @click="mark_as_read_unread(item,0)">Mark as un read</span></DropdownItem>
                                        <DropdownItem v-else ><span @click="mark_as_read_unread(item,1)">Mark as read</span></DropdownItem>
                                        <DropdownItem ><span @click="delete_notification(item,index)">Delete</span></DropdownItem>
                                      </DropdownMenu>
                                    </Dropdown>
                                  </div>
                                </div>
                              </li>
                              <!-- Items -->
                            </ul>
                        </div>
                        <!-- See more -->
                        <div class="_drop_see">
                          <nuxt-link to="/notification"><span class="_drop_see_text">See all Notifications</span></nuxt-link>
                        </div>
                        <!-- See more -->
                      </template>
                      <!-- Notification Data -->

                      <!-- No Notifiaction -->
                      <template  v-else>
                        <div class="_drop_no_data">
                          <div class="_drop_no_data_icon">
                            <i class="fas fa-bell"></i>
                          </div>

                          <p class="_drop_no_data_text">No notification left.</p>
                        </div>
                      </template>
                      <!-- No Notifiaction -->
                    </div>
                    <!-- Dropdown -->
                  </li>
                  <!-- Notification -->

                  <li :class="$route.path=='/profile'?'_menu_page _active_page _menu_user_li':'_menu_page _menu_user_li'" v-if="authUser">
                    <nuxt-link class="_menu_page_item _menu_user_items" to="/profile">
                      <div class="_menu_user_items_pic">
                        <img v-if="authUser && authUser.profilePic" :src="authUser.profilePic" alt="image">
                        <img v-else src="/img/man.jpg" alt="image">
                      </div>
                      <p class="_menu_user_items_name" v-if="authUser">{{authUser.firstName}} {{authUser.lastName}}</p>
                      <p class="_menu_user_items_name" v-else></p>
                    </nuxt-link>
                  </li>

                  <li class="_menu_more" @mouseover="isProDrop = true" @mouseleave="isProDrop = false" v-if="authUser">
                      <a class="_menu_page_item"  ><i class="fas fa-sort-down"></i></a>
                      <div v-if="isProDrop" class="_1dropdown _proDrop">
                          <div class="_1dropdown_body">
                              <div class="_proDrop_top_all">
                                <nuxtLink class="_proDrop_top" to="/">
                                    <div class="_proDrop_pic">
                                      <img :src="authUser.profilePic" alt="image" title="" class="_proDrop_img">
                                    </div>
                                    <div class="_proDrop_details">
                                        <p class="_proDrop_name">
                                            {{authUser.firstName}} {{authUser.lastName}}
                                        </p> 
                                        <span class="_proDrop_email">{{authUser.email}}</span>
                                    </div>
                                </nuxtLink>
                              </div>
                              <ul class="_1dropdown_body_list _2dropdown_body_list _pro_drop_icon">
                                  <li>
                                    <nuxtLink to="/transection" class=""><i class="fas fa-wallet"></i> Cash Balance</nuxtLink>
                                  </li>
                                  <li>
                                    <nuxtLink to="/funding" class=""><i class="far fa-file-alt"></i> My Bill Support</nuxtLink>
                                  </li>
                                  <li>
                                    <nuxtLink to="/bill" class=""><i class="far fa-file-alt"></i> My Bills </nuxtLink>
                                  </li>
                                  <li>
                                    <nuxtLink to="/bill" class=""><i class="far fa-file-alt"></i> Enter Bill </nuxtLink>
                                  </li>
                                  <li>
                                    <nuxtLink to="/profile" class=""><i class="fas fa-newspaper"></i> My Articles</nuxtLink>
                                  </li>
                                  <li>
                                    <nuxtLink to="" class=""><i class="fas fa-plus"></i> Add Article</nuxtLink>
                                  </li>
                                  <li>
                                    <nuxtLink to="/settingBasic" class=""><i class="fas fa-cog"></i> Settings</nuxtLink>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0)" @click="logout()"><i class="fas fa-sign-out-alt"></i> Log Out</a>
                                  </li>
                              </ul>
                              <!-- <div class="_proDrop_mode">
                                  <h2 class="_proDrop_mode_title">Dark mode</h2>
                                  <div class="_proDrop_mode_switch">
                                    <label class="switch">
                                      <input type="checkbox"> 
                                      <span class="slider round"></span>
                                    </label>
                                  </div>
                              </div> -->
                              <!-- <ul class="_1dropdown_body_list _2dropdown_body_list">
                                  <li>
                                    <a href="/app/user/logout"><i class="fas fa-sign-out-alt"></i> Log Out</a>
                                  </li>
                              </ul> -->
                          </div>
                      </div>
                  </li>
                </ul>
              </div>
            </div>
            <!-- MIDDLE -->

            <!-- RIGHT -->
            <div class="_menu_r8">
              <ul class="_dis_flex">
                <li>
                  <a href="">
                    Enter Bill
                    <span><i class="fas fa-long-arrow-alt-right"></i></span>
                  </a>
                </li>
              </ul>
            </div>
            <!-- RIGHT -->
          </div>
        </div>
      </div>
      <!-- Menu -->

      <!-- MOBILE MENU -->
      <div v-if="$route.path != '/' && $route.path != '/login' && $route.path != '/register' && $route.path != '/forgot_password' && $route.path != '/confirm_email' && $route.path != '/verify_email' && $route.path != '/resetPassword'"  class="_mbl_menu">
        <div class="_mbl_menu_top _dis_flex_cntr1 _dis_flex">
          <div class="_mbl_menu_top_lft">
            <img src="/img/appifylab_logo.png" alt="image">
          </div>
          <div class="_mbl_menu_search">
            <input type="text" placeholder="Search Scrapabill" class="_mbl_menu_search_input">
              <span><i class="fas fa-search"></i></span>
          </div>
          <div class="_mbl_menu_top_r8 _dis_flex_cntr1">
            <a href="">
              Enter bill
              <span class="_icon_crcle2">
                <i class="fas fa-long-arrow-alt-right"></i>
              </span>
            </a>
          </div>
        </div>

        <div class="_mbl_menu_btm _dis_flex_cntr1 _dis_flex">
          <ul>
            <li>
              <nuxtLink to="/">
                <span><i class="fas fa-home"></i></span>
              </nuxtLink>
            </li>
            <li>
              <a href="">
                <span><i class="far fa-file-alt"></i></span>
              </a>
            </li>
            <li>
              <a href="">
                <span><i class="fas fa-wallet"></i></span>
              </a>
            </li>
            <li>
              <a href="">
                <span><i class="fas fa-briefcase"></i></span>
              </a>
            </li>
            <li class="_mbl_notfcn">
              <a href="">
                <span><i class="far fa-bell"></i></span>
                <span class="_noti_num">2</span>
              </a>
            </li>
            <li v-if="authUser">
              <div class="_menu_user" @mouseover="isProDrop = true" @mouseleave="isProDrop = false">
                <img src="/img/man.jpg" alt="image">
               <!--   <a class="_menu_page_item"  ><i class="fas fa-sort-down"></i></a> -->
                    <div v-if="isProDrop" class="_1dropdown _proDrop">
                        <div class="_1dropdown_body">
                            <div class="_proDrop_top_all">
                              <nuxtLink class="_proDrop_top" to="/">
                                  <div class="_proDrop_pic">
                                    <img :src="authUser.profilePic" alt="image" title="" class="_proDrop_img">
                                  </div>
                                  <div class="_proDrop_details">
                                      <p class="_proDrop_name">
                                          {{authUser.firstName}} {{authUser.lastName}}
                                      </p> 
                                      <span class="_proDrop_email">{{authUser.email}}</span>
                                  </div>
                              </nuxtLink>
                            </div>
                            <ul class="_1dropdown_body_list _2dropdown_body_list _pro_drop_icon">
                                <li>
                                  <nuxtLink to="/transection" class=""><i class="fas fa-wallet"></i> Cash Balance</nuxtLink>
                                </li>
                                <li>
                                  <nuxtLink to="/funding" class=""><i class="far fa-file-alt"></i> My Bill Support</nuxtLink>
                                </li>
                                <li>
                                  <nuxtLink to="/bill" class=""><i class="far fa-file-alt"></i> My Bills </nuxtLink>
                                </li>
                                <li>
                                  <nuxtLink to="/bill" class=""><i class="far fa-file-alt"></i> Enter Bill </nuxtLink>
                                </li>
                                <li>
                                  <nuxtLink to="/profile" class=""><i class="fas fa-newspaper"></i> My Articles</nuxtLink>
                                </li>
                                <li>
                                  <nuxtLink to="" class=""><i class="fas fa-plus"></i> Add Article</nuxtLink>
                                </li>
                                <li>
                                  <nuxtLink to="/settingBasic" class=""><i class="fas fa-cog"></i> Settings</nuxtLink>
                                </li>
                                <li>
                                  <a href="javascript:void(0)" @click="logout()"><i class="fas fa-sign-out-alt"></i> Log Out</a>
                                </li>
                            </ul>
                            <!-- <div class="_proDrop_mode">
                                <h2 class="_proDrop_mode_title">Dark mode</h2>
                                <div class="_proDrop_mode_switch">
                                  <label class="switch">
                                    <input type="checkbox"> 
                                    <span class="slider round"></span>
                                  </label>
                                </div>
                            </div> -->
                            <!-- <ul class="_1dropdown_body_list _2dropdown_body_list">
                                <li>
                                  <a href="/app/user/logout"><i class="fas fa-sign-out-alt"></i> Log Out</a>
                                </li>
                            </ul> -->
                        </div>
                    </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- MOBILE MENU -->

      <div class="_main_layout">
        
        <Nuxt />
        
      </div>

      <!-- FOOTER -->
      <div v-if="$route.path != '/' && $route.path != '/signIn' && $route.path != '/signUp'  && $route.path != '/forgot_password'" class="_footer">
          <div class="container">
              <div class="_footer_inner _dis_flex">
                  <div class="_footer_lft">
                    <!-- {{flyingNoti}} -->
                      <ul class="_dis_flex">
                          <li :class="$route.path=='/company'?'_active':''">
                              <nuxtLink to="/company">Company </nuxtLink>
                          </li>
                          <li :class="$route.path=='/community'?'_active':''">
                              <nuxtLink to="/community">Community </nuxtLink>
                          </li>
                          <li :class="$route.path=='/advertise'?'_active':''">
                              <nuxtLink to="/advertise">Advertise </nuxtLink>
                          </li>
                          <li :class="$route.path=='/legal'?'_active':''">
                              <nuxtLink to="/legal">Legal </nuxtLink>
                          </li>
                          <li :class="$route.path=='/help'?'_active':''">
                              <nuxtLink to="/help">Help</nuxtLink>
                          </li>
                      </ul>
                  </div>
                  <!-- <div class="_footer_r8">
                      <ul class="_dis_flex">
                          <li>
                              <a href="">Terms of Service</a>
                          </li>
                          <li>
                              <a href="">Privacy Policy</a>
                          </li>
                          <li>
                              <a href="">Refund Policy</a>
                          </li>
                          <li>
                              <a href="">AML/KYC Policy</a>
                          </li>
                          <li>
                              <a href="">Cookies Policy</a>
                          </li>
                          <li>
                              <a href="">Code of Coduc</a>
                          </li>
                      </ul>
                  </div> -->
              </div>

              <ul class="_footer_social">
                <li>
                  <a href=""><i class="fab fa-facebook-f"></i></a>
                </li>
                <li>
                  <a href=""><i class="fab fa-twitter"></i></a>
                </li>
                <li>
                  <a href=""><i class="fab fa-instagram"></i></a>
                </li>
                <li>
                  <a href=""><i class="fab fa-linkedin-in"></i></a>
                </li>
              </ul>
          </div>
      </div>
      <!-- FOOTER -->
    </div>
    <div >

     <FlyingNotificaiton
        :notificData="flyingNoti"  v-if="check"
      />
    </div>
        <!-- v-if="getShowFlyingNotification" -->
  </div>
</template>

<script>
 
import {  mapGetters } from 'vuex';
import FlyingNotificaiton from "~/pages/flyingNotification.vue";
export default {
   components: {
    FlyingNotificaiton,
  },
     computed: {
        ...mapGetters({
            allNotification:'getAllNotification',
            notiCount:'getNotificationCount',
            flyingNoti:'getflyingNoti',
            totalBalance:'getTotalBalance',
            authUser:'getAuthUser',
            
        }),
    },
  computed: {
    check(){
      // return 0
      let a =0
      if(this.flyingNoti){
        let b = this.flyingNoti
        a= b.length
      }
      
      return a
    }
  },

  data(){
    return{
      moreDrop : false,
      clickMenu: false,
      isChatBox: false,
      isNotification: false,
      isFriendReq: false,
      noData: false,
      isMessage: false,
      isloaded: false,
      isHide: true,
      isloaded2: false,
      isHide2: true,
      loading: false,
      tab: false,
      isMinimize: false,
      isMobileSearch: false,
      isProDrop: false,
      // allNotification:[]
    }
  },
 async asyncData({app , store}) {
      // try {
      //   var allNotification = []
      //     let {data} = await app.$axios.get('/notification/getNotification')
      //     // store.commit('setFeed',data)
      //     return {
      //       allNotification:data
      //     }

      // } catch (error) {
      //     console.log(error)
      // }
  },
  methods:{
    async getTotalBalance(){
       const res = await this.callApi('get','/bill/get_balance')
            console.log(res)
        if(res.status ==200){
            let a  = parseFloat(res.data.total).toFixed(2)
            // this.totalBalance = 
            this.$store.commit('storeTotalBalance', a)
        }
    },
    async gotToUrl(item,i){
       await this.mark_as_read_unread(item,1)
        window.location = item.url
        // this.$router.push(item.url)
    },
    async openNotificationDropDown() {
      this.tab = !this.tab
      this.$store.commit('setNotificationCount', 0)
    },
    async playSound() {
            let sound = "/pull-out.mp3";
            let audio = new Audio(sound);
            await audio.play();
        },
    async mark_as_read_unread(item,value) {
          const res = await this.callApi('post', 'notification/seenNotification', {id:item.id,seen:value})
          if(res.status==200){
            this.$set(item,'seen',value)
          }
      },
    async delete_notification(item,index) {
      // this.i("s")
          const res = await this.callApi('post', 'notification/deleteNotification', {id:item.id})
          if(res.status==200){
            let d = this.allNotification
             d.splice(index,1)
             this.$store.commit('setNotification', d)
          }
      },
    async logout(){
      const res = await this.callApi('get','auth/logout')
      if(res.status==200){
        window.location = '/login';
      }
      else{
          this.swr();
      }
    },
    clickMenuDrop(tab){
      if ( tab != "messageDrop" && tab != "notiDrop" && tab != "friReqDrop") {
        this.tab = "";
      }
      
      var self = this;
      var self2 = this;
      setTimeout(function() {
        self.$nextTick(function() {
          self.isloaded = !self.isloaded;
        })
        self2.$nextTick(function() {
          self2.isHide = !self2.isHide;
        })
      }, 1000);
      
      
      return (this.tab = tab);
    },
    method1() {
      /* Emit events */
      this.socket.emit('news', {
        hello: 'world' 
      }, (resp) => {
        console.log(resp);
        /* Handle response, if any */
      })
    }
  },
  mounted() {

    
      // this.socket = this.$nuxtSocket({
      //   channel: '/index'
      // })
      // /* Listen for events: */
      // this.socket
      // .on('news', (msg, cb) => {
      //   console.log(msg)
      // })
        const socket = io("http://localhost:3333", {
          withCredentials: true,
          transports: ['websocket']
          
        });


        console.log("running1")
      
      socket.on(`news_${this.authUser.id}`, (data) => {
        console.log("running")
        let a = this.allNotification
        a.push(data)
        this.$store.commit('setNotification', a)
        this.$store.commit('setflyingNoti', data)
        // console.log(data, 'mynotification')
        this.$store.commit('setNotificationCountIncriment', 1)
        this.playSound()
        
        // socket.emit('my other event', { my: 'data' })
      })
      // socket.on(`news`, (data) => {
      //   console.log(data)
      //   // socket.emit('my other event', { my: 'data' })
      // })
    },



  // mounted(){
  //    const socket = io()
  //     socket.on('news', (data) => {
  //       console.log(data)
  //       socket.emit('my other event', { my: 'data' })
  //     })
      
  // },
  
  async created() {
    
    if(this.authUser){
    const res =await this.callApi('get','notification/getNotification')
    if(res.status==200){

      this.$store.commit('setNotification', res.data.notification)
      this.$store.commit('setNotificationCount', res.data.notiCount)
      // console.log(res)
      // this.allNotification = res.data
    }
    this.getTotalBalance()
    }

    var self3 = this;
      var self4 = this;
      setTimeout(function() {
        self3.$nextTick(function() {
          self3.isloaded2 = true;
        })
        self4.$nextTick(function() {
          self4.isHide2 = false;
        })
    }, 1500);
  }
}
</script>
<style>
.noti_active{
  background: #6e6e6e;
}
</style>
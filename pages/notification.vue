<template>
    <div>
        <div class="_content">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-6 col-lg-6">
                        <div class="_notiPage">
                            <h1 class="_notiPage2_title">All Notifications</h1>
                            <div class="_notiPage_card" v-for="(item,index) in allData" :key="index">
                                <div v-if="item" class="_notiPage_card_left" @click="gotToUrl(item,index)">
                                    <div class="_notiPage_pic" v-if="item.image">
                                        <img class="_notiPage_img" :src="item.image" alt="" title="">
                                    </div>

                                    <div class="_notiPage_details" >
                                        <h1 class="_notiPage_title" :class="(item.seen)?'':'noti_active'">{{item.message}}.</h1>
                                        <p class="_notiPage_time">{{item.created_at | timeSince}} ago</p>
                                    </div>
                                </div>

                                <div class="_notiPage_card_drop" v-if="item">
                                    <Dropdown trigger="click" placement="bottom-end">
                                        <a class="_notiPage_card_drop_text" href="javascript:void(0)">
                                            <i class="fas fa-ellipsis-h"></i>
                                        </a>

                                        <DropdownMenu slot="list">
                                               <DropdownItem v-if="item.seen" ><span @click="mark_as_read_unread(item,0)">Mark as un read</span></DropdownItem>
                                                <DropdownItem v-else ><span @click="mark_as_read_unread(item,1)">Mark as read</span></DropdownItem>
                                                <DropdownItem ><span @click="delete_notification(item,index)">Delete</span></DropdownItem>
                                            <!-- <DropdownItem>Edit</DropdownItem>
                                            <DropdownItem>Delete</DropdownItem> -->
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                        <Button @click="moreData">More</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            lastId:0
        }
    },
    methods:{
        async gotToUrl(item,index){
         await this.mark_as_read_unread(item,1)
            window.location = item.url
            // this.$router.push(item.url)
        },
        async mark_as_read_unread(item,value) {
          const res = await this.callApi('post', 'notification/seenNotification', {id:item.id,seen:value})
          if(res.status==200){
            this.$set(item,'seen',value)
          }
      },
    async delete_notification(item,index) {
    //   this.i("s")
          const res = await this.callApi('post', 'notification/deleteNotification', {id:item.id})
          if(res.status==200){
            let d = this.allData
             d.splice(index,1)
             this.$store.commit('setNotification', d)
          }
      },
       async moreData(){
           if(!this.lastId && this.allData && this.allData.length){
               let a = this.allData.length
               this.lastId = this.allData[a-1].id
           }
            if(this.lastId){
                // if(this.allData.length ==0) this.lastId = -1
                let res = await this.callApi('get',`/notification/getNotification_with_more?limit=10&lastId=${this.lastId}`)
                if(res.status==200){
                    for(let it of res.data){
                        this.allData.unshift(res.it)
                        this.lastId = it.id

                    }
                }
            }
            else{
                 let res = await this.callApi('get',`/notification/getNotification_with_more?limit=10`)
                if(res.status==200){
                    for(let it of res.data){
                        this.allData = res.data
                        this.lastId = null

                    }
                }
            }
        }

    },
     async asyncData({app , store,query}) {
      try {
        
          let {data} = await app.$axios.get(`/notification/getNotification_with_more?limit=10`)
          return {
              allData:data
          }
      } catch (error) {
          console.log(error)
      }
    }
}
</script>
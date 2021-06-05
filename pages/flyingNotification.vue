<template>
  <div>
    <!--========== Flying Notification ========-->
    <div class="_flying_noti_all" v-if="lists.length">
        <!-- {{lists}} -->
      <div v-for="(item, index) in lists" :key="index" class="_flying_noti _mar_b15" >
        <div class="_flying_noti_icon">
          <i class="fas fa-bell"></i>
        </div>
        <!-- <div v-if="item.input" class="_flying_noti_details"> -->
        <div  class="_flying_noti_details">
          <p
            class="_flying_noti_title"
            v-if="item.message"
          >
         {{item.message}}
          <!-- {{ (item.input.firstName && item.input.lastName ) ? `${item.input.firstName} ${item.input.lastName} ${item.input.text}` : `${item.input.text}`}}. -->
          </p>
          <p class="_flying_noti_time">a few seconds ago</p>
        </div>
        <div @click="close(index)" class="_flying_noti_close">
          <i class="fas fa-times"></i>
        </div>
      </div>
    </div>
    <!--========== Flying Notification ========-->
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  props: ["notificData"],
  data() {
    return {
      lists: [],
    };
  },
  created(){
    //   this.lists = this.authUser
  },
  methods: {
    destroy(timer) {
      if (this.lists.length) {
        clearTimeout(timer);
        this.lists.splice(0, 1);
      }
    },
    hover(index) {
      this.i("running");
      if (
        this.lists[index].input.type == "feed-like" ||
        this.lists[index].input.type == "feed-comment-like" ||
        this.lists[index].input.type == "feed-reply-like"
      ) {
        this.$store.commit("increaseNotificationNumber", -1);
      }
      if (
        this.lists[index].input.type == "feed-reply" ||
        this.lists[index].input.type == "feed-share" ||
        this.lists[index].input.type == "feed-comment"
      ) {
        this.$store.commit("increaseNotificationNumber", -1);
      }
      if (
        this.lists[index].input.type == "friend-requset-sent" ||
        this.lists[index].input.type == "friend-request-accept"
      ) {
        this.$store.commit("inCreaseTotalFriendRequets", -1);
      }
    },
    // close(timer, i) {
    close(i) {
    //   clearTimeout(timer);
      this.lists.splice(i, 1);
    },
  },
  watch: {
    notificData(newVal, oldVal) {
      console.log("adfadf", newVal);
      let timer;
      timer = setTimeout(() => {
        this.destroy(timer);
      }, 5000);
      this.notificData.timer = timer;
     
      this.lists.push(this.notificData);
      console.log("ss", this.notificData);
      console.log("list", this.lists);
    },
  },

  mounted() {
    if (this.lists.length == 0) {
      let timer;
      timer = setTimeout(() => {
        this.destroy(timer);
      }, 5000);
      this.notificData.timer = timer;
      this.lists.push(this.notificData);
      console.log(this.notificData, "flying notification data")
    }
  },
};

</script>



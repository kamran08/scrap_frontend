<template>
  <span>
    <!-- Comment section -->
    <div class="_1card_comment_box _1card_comment_box_top">
      <div class="_1card_comment_box_pic _load_div" v-if="authUser.profilePic">
        <img
          :src="authUser.profilePic" 
          alt=""
          title=""
          class="_1card_comment_box_img"
        />
      </div>
      <div class="_1card_comment_box_pic _load_div" v-else>
        <img
          src="/img/man.jpg" 
          alt=""
          title=""
          class="_1card_comment_box_img"
        />
      </div>
      <div class="_1card_comment_box_input_icon">
        <div class="_1card_comment_box_input">
          <input
            type="text"
            v-model="comments.commentTxt"
            @keyup.enter="createComment(feed,feed.id)"
            placeholder="Write a comment..."
          />
        </div>
      </div>
    </div>
    
  <!-- {{feed.comments}} -->
    <div class="_comment_main" v-for="(comment, i) in feed.comments" :key="i" > 
      <!-- <span> -->
      <a href="" class="_comment_pic" v-if="comment.user.profilePic"
        ><img alt="" title="" :src="comment.user.profilePic" class="_comment_img"
      /></a>
      
      <a href="" class="_comment_pic" v-else
        ><img alt="" title="" src="/img/man.jpg" class="_comment_img"
      /></a>
      
      <div class="_comment_details">
        <div class="_comment_details_top">
          <div class="_comment_name">
            <a href="" class="_comment_name_text"> {{comment.user.firstName}} {{comment.user.lastName}} </a>
          </div>
          <div class="_comment_more" v-if="comment.user.id == authUser.id">
            <div class="ivu-dropdown">
              <div class="ivu-dropdown-rel" @click="openCommentDropDown(i)">
                <a href="javascript:void(0)" class="_more"
                  ><i class="fas fa-angle-down"></i
                ></a>
              </div>
              <div class="ivu-select-dropdown" v-if="commentDropDown==i">
                <ul class="ivu-dropdown-menu">
                  <li class="ivu-dropdown-item" @click="onClickEditComment(comment, i)">
                    <p class="_drop_text">Edit</p>
                  </li>
                  <li class="ivu-dropdown-item" @click="deleteComment(comment, i)">
                    <p class="_drop_text">Delete</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="_comment_status">
          <p class="_comment_status_text"  v-if="!comment.isEdit">{{comment.commentTxt}}</p>
            <div class="_1card_comment_box_input_icon" v-if="comment.isEdit">
              <div class="_1card_comment_box_input">
                <input
                  type="text" v-model="editInput.commentTxt" @keyup.enter="editComment(comment)"
                />
              </div>
                <i style="margin-top:12px;cursor:pointer;" class="fas fa-times" @click="cancelEditinput(comment)"></i>
            </div>
        </div>

        <div class="_comment_reply">
          <div class="_comment_reply_num">
            <ul class="_comment_reply_list">
              
              <li>
                <template v-if="likeLoad==i"><i class="fas fa-spinner"></i> </template>
                <template v-else>
                 <i v-if="comment.hasUserLike" @click="createCommentLike(comment,i)" class="fas fa-thumbs-up"></i> 
                 <i  v-else @click="createCommentLike(comment,i)" class="far fa-thumbs-up"></i>
                </template>({{comment.__meta__.likes_count}})
                Like</li>
              <li @click="showReply(comment,i)">Reply</li>
            </ul>
          </div>
          <div class="_comment_reply_time">
            <p class="_comment_reply_time_text">2 days ago</p>
          </div>
        </div>
        
        <!--reply Section -->
          <replyBox v-if="comment.replies && comment.isOpen" :comment='comment'/>
        <!--reply Section -->
        
      </div>
      <!-- </span> -->
    </div>
    <!-- Comment section -->
  </span>
</template>

<script>

import replyBox from '~/components/replyBox.vue'
export default {
  props:['feed'],
  components: {
    replyBox
  },
  data(){
    return{
      likeLoad:-1,
      comments:{
          // feed_id:'',
          commentTxt:''
      },
      isEdit : false,
      feedData : this.feed,
      editInput:{
        id:'',
        user_id:'',
        feed_id:'',
        commentTxt:''
      },
      commentDropDown:-1
      
    }
  },

  methods:{
    openCommentDropDown(index){
      if( index == this.commentDropDown) {
        this.commentDropDown = -1
        return;
      }
       this.commentDropDown = index
    },
    async createCommentLike(comment, i){
      this.likeLoad = i
        const res = await this.callApi('post','like/createCommentLike',{comment_id:comment.id})
        this.likeLoad = -1
        if(res.status==200){
            if(res.data.hasUserLike){
                comment.hasUserLike = false
                comment.__meta__.likes_count--
            }
            else{
                comment.hasUserLike =this.authUser
                comment.__meta__.likes_count++
            }
        }
        else if(res.status==404 || res.status==401){
            this.e(res.data.message)
        }
        else this.swr()
    },
    async showReply(comment, i){
        if(comment.replies.length){
             this.$set(comment, 'isOpen', !comment.isOpen)
            return 
        }
        const res = await this.callApi('get',`reply/getReply/`+comment.id)
        if(res.status === 200){
            // feed.comments = res.data
           let obj = res.data
           obj.comment_id =comment.id
          //  console.log(res.data)
            this.$store.commit("setReply", obj);
            this.$set(comment, 'isOpen', !comment.isOpen)
            
        }
        else{
            this.swr();
        }
    },
    async createComment(feed,id){
      if(this.comments.commentTxt == ""){
          return
      }
      const res = await this.callApi('post', 'comment/createComment', {feed_id: id, commentTxt: this.comments.commentTxt})
        //   this.$store.commit("settodos", res.data);
      if(res.status == 201){
          // console.log(res.data)
        this.s('Comment Created Successfully !!')
        this.comments.commentTxt =''
        this.feed.comments.unshift(res.data)
        feed.__meta__.comment_count ++
        
      }else{
        this.swr()
      }
    },
    
    async deleteComment(comment,i){
      let obj ={
        comment_id: comment.id,
        user_id: this.authUser.id
      }
      const res = await this.callApi('post',`comment/deleteComment/`, obj)
        //   this.$store.commit("settodos", res.data);
      if(res.status == 200){
          // console.log(res.data)
        this.s('Comment Deleted Successfully !!')
        this.feed.comments.splice(i, 1);
        this.feed.__meta__.comment_count--
        
      }else{
        this.swr()
      }
    },
    
    onClickEditComment(comment,i) {
      comment.isEdit =true
      this.editInput = {
        id:comment.id,
        user_id:comment.user_id,
        feed_id:comment.feed_id,
        commentTxt:comment.commentTxt
      }
      // obj.isEdit = true
      // console.log(obj)
    },
    
    
    cancelEditinput(comment) {
      comment.isEdit =false
      // obj.isEdit = true
      // console.log(obj)
    },
    
    async editComment(comment){
      // console.log(this.editInput.commentTxt)
      if(this.editInput.commentTxt == ""){
          return
      }
      const res = await this.callApi('post', 'comment/editComment', this.editInput)
        //   this.$store.commit("settodos", res.data);
      if(res.status == 200){
          // console.log(res.data)
          comment.commentTxt = this.editInput.commentTxt
        this.s('Comment updated Successfully !!')
        comment.isEdit =false
        
        
      }else{
        this.swr()
      }
    }
    
    
    
    
  },
  
  created() {

    }
    
}
</script>
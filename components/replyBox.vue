<template>
  <div keys="rep0" class="_reply">
    
    <div class="_reply_main"  v-for="(reply, i) in comment.replies" :key="i" >
      <a href="" class="_comment_pic"
        ><img alt="" title="" src="/img/man.jpg" class="_comment_img"
      /></a>
      <div class="_comment_details">
        <div class="_comment_details_top">
          <div class="_comment_name">
            <a href="" class="_comment_name_text">{{reply.user.firstName}} {{reply.user.lastName}}</a>
          </div>
          <div class="_comment_more"></div>
        </div>
        <div class="_comment_status">
          <p class="_comment_status_text" v-if="!reply.isEdit">{{reply.replyTxt}}</p>
          
            <div class="_1card_comment_box_input_icon" v-if="reply.isEdit">
              <div class="_1card_comment_box_input">
                <input type="text"
                  v-model="editReplyInput.replyTxt"
                  @keyup.enter="EditReply(reply)"
                   />
                   
              </div>
            </div>
              <span style="cursor:pointer;" v-if="reply.isEdit" @click="cancelReplyEditinput(reply)">cancel</span>
        </div>
        <div class="_comment_reply">
          <div class="_comment_reply_num">
            <ul class="_comment_reply_list">
              <li @click="onClickEditReply(reply)">
                <span class="_comment_reply_like">Edit</span>
              </li>
              <li @click="deleteReply(reply, i)">
                <span class="_comment_reply_like">Delete</span>
              </li>
            </ul>
            <ul class="_comment_reply_list">
              <li>

                <template v-if="likeLoad==i"><i class="fas fa-spinner"></i> </template>
                <template v-else>
                 <i v-if="reply.hasUserLike" @click="createReplyLike(reply,i)" class="fas fa-thumbs-up"></i> 
                 <i  v-else @click="createReplyLike(reply,i)" class="far fa-thumbs-up"></i>
                </template>({{reply.__meta__.likes_count}})
                <span class="_comment_reply_like">Like</span>
              </li>
            </ul>
          </div>
          <div class="_comment_reply_time">
            <p class="_comment_reply_time_text">a few seconds ago</p>
          </div>
        </div>
      </div>
    </div>
    <div class="_1card_comment_box">
      <div class="_1card_comment_box_pic _load_div">
        <img
          alt=""
          title=""
          src="/img/man.jpg"
          class="_1card_comment_box_img"
        />
      </div>
      <div class="_1card_comment_box_input_icon">
        <div class="_1card_comment_box_input">
          <input type="text"
            v-model="replies.replyTxt"
            @keyup.enter="createReply(comment)"
             placeholder="Write a reply..." />
        </div>
      </div>
    </div>
  </div>
</template>
<script>


export default {
  props:['comment'],
  components: {
    
  },
  data(){
    return{
      likeLoad:-1,
     replies:{
       replyTxt:'',
       
     },
    editReplyInput:{
        id:'',
        user_id:'',
        comment_id:'',
        replyTxt:''
      }
      
    }
  },

  methods:{
    
    async createReplyLike(reply,i){
        this.likeLoad = i
        const res = await this.callApi('post','like/createReplyLike',{reply_id:reply.id})
        this.likeLoad = -1
        if(res.status==200){
            if(res.data.hasUserLike){
                reply.hasUserLike = false
                reply.__meta__.likes_count--
            }
            else{
                reply.hasUserLike =this.authUser
                reply.__meta__.likes_count++
            }
        }
        else if(res.status==404 || res.status==401){
            this.e(res.data.message)
        }
        else this.swr()
    },
    async createReply(comment){
      let obj = this.replies
       obj.user_id = this.authUser.id
       obj.comment_id =comment.id
      //  console.log(obj.replyTxt)
      if(obj.replyTxt == ""){
          return
      }
      const res = await this.callApi('post', 'reply/createReply', obj)
        //   this.$store.commit("settodos", res.data);
      if(res.status == 200){
        this.replies.replyTxt =''
          
        this.s('Reply Created Successfully !!')
        
        this.comment.replies.push(res.data)
        
      }else{
        this.swr()
      }
       
       
    },
    
    async deleteReply(reply, i){
      let obj ={
        reply_id: reply.id,
        user_id: this.authUser.id
      }
      const res = await this.callApi('post',`reply/deleteReply/`, obj)
        //   this.$store.commit("settodos", res.data);
      if(res.status == 200){
          // console.log(res.data)
        this.s('Reply Deleted Successfully !!')
        this.comment.replies.splice(i, 1);
        
      }else{
        this.swr()
      }
    },
    
    onClickEditReply(reply) {
      reply.isEdit =true
      this.editReplyInput = {
        id:reply.id,
        user_id:reply.user_id,
        comment_id:reply.comment_id,
        replyTxt:reply.replyTxt
      }
    },
     
    cancelReplyEditinput(reply) {
      reply.isEdit =false
    },
    
    async EditReply(reply){
      // console.log(this.editInput.commentTxt)
      if(this.editReplyInput.replyTxt == ""){
          return
      }
      const res = await this.callApi('post', 'reply/editReply', this.editReplyInput)
        //   this.$store.commit("settodos", res.data);
      if(res.status == 200){
        reply.isEdit =false
          reply.replyTxt = this.editReplyInput.replyTxt
        this.s('Reply updated Successfully !!')
        
        
      }else{
        this.swr()
      }
    }
    
     
    
    
  },
  
  created() {

    }
    
}
</script>

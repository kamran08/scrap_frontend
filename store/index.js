//import Vuex from 'vuex'
//import axios from 'axios'
export const strict = false
export const state = () => ({
    user : 'no user',
    authUser: false,
    sideBar1:true,
    sideBar2:true,
    feed:[],
    comments:[],
    BASE_URL: process.env.BASE_URL,
    U_Id: process.env.U_Id,
})
// common getters
export const getters ={
  isLoggedIn (state) {
    return !!state.authUser
  },
   getBaseUrl (state) {
    return state.BASE_URL;
  },
  getAuthUser (state) {
    return state.authUser
  },
  getSideBar1(state) {
      return state.sideBar1
  },
  getSideBar2(state) {
      return state.sideBar2
  },
  getFeed (state) {
    return state.feed
  },
  getComment (state) {
    return state.comments
  },
  // getComment (state) {
  //   return state.comments
  // }
}
//mutations for changing data from action
export const mutations = {
  loginUser(state, data) {
    state.authUser = data
  },
  setSideBar1(state, data) {
      state.sideBar1 = data
  },
  setSideBar2(state, data) {
      state.sideBar2 = data
  },
  setFeed(state, data) {
    state.feed = data
    
  },
  setReply(state, data) {
    // state.comments = data
    for(let f of state.comments){
      if(f.id == data.comment_id){
        f.replies = data
        // console.log('from store',data)
        break;
      }
    }
    
  },
  setNewSingleFeed(state, data) {
    state.feed.unshift(data)
  },
  setUpdateFeed(state, data) {
    console.log(data ,'dslakjd')
    // let ind = data.editIndex
    // delete data.editIndex
    state.feed[data.editIndex] = data
  },
  setComment(state, data) {
    state.comments =data
   for(let f of state.feed){
     if(f.id == data.feed_id){
       f.comments = data
      //  console.log('from store',data)
       break;
     }
   }
   
  },
  // setReply(state, data) {
    
  //  for(let f of state.comments){

  //    if(f.id == data.comment_id){
  //      f.replies = data
  //      console.log(f.replies)
  //      break;
  //    }
  //  }
   
  // },
  
  setSingleComment(state, data){
     
  }
}
// actionns for commiting mutations
export const actions = {
  // setAuthuser(state, data) {
  //     state.commit('setAuthuser', data);
  //  },
  async nuxtServerInit({ commit }, { $axios }) {
  //  console.log('I am running as nuxt server init')

    //console.log('session is ', request.session)
    try {
      // get the initial data
      let { data } = await $axios.get('auth/myuser')
      commit('loginUser', data)
      //console.log(data)

    } catch (e) {
        console.log('nuxt server error ', e.response)
    }
  },
}

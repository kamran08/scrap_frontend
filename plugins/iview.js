import Vue from 'vue'
import iView from 'iview'
import locale from 'iview/dist/locale/en-US' // Change locale, check node_modules/iview/dist/locale

Vue.use(iView, {
  locale
})
 
import { mapActions, mapGetters } from 'vuex';
import VueTimeago from 'vue-timeago'

Vue.use(VueTimeago, {
  name: 'Timeago', // Component name, `Timeago` by default
  locale: 'en', // Default locale
  // We use `date-fns` under the hood
  // So you can use all locales from it
  locales: {
    'zh-CN': require('date-fns/locale/zh_cn'),
    ja: require('date-fns/locale/ja')
  }
})
// mixins for using common methods

Vue.mixin({
    filters: {
        formateDate: function (value) {
            if(!value) return ""
            let months=["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"
                    ]
               var dateObj = new Date(value);
                var month = dateObj.getUTCMonth(); //months from 1-12
                var day = dateObj.getUTCDate();
                var year = dateObj.getUTCFullYear();
                return day+" "+months[month]+" "+year
        }
    },
     
    computed: {
        ...mapGetters({
            BASE_URL:'getBaseUrl',
            authUser:'getAuthUser',
            isLoggedIn:'isLoggedIn',
            getSideBar1:'getSideBar1',
            getSideBar2:'getSideBar2',
            getFeed:'getFeed',
            // getComment:'getComment',
            
        }),
    },
  methods: {
      i(msg, i = 'Hey!') {
          this.$Notice.info({
              title: i,
              desc: msg
          });
      },
      s(msg, i = 'Great!') {
          this.$Notice.success({
              title: i,
              desc: msg
          });
      },
      w(msg, i = 'Hi!') {
          this.$Notice.warning({
              title: i,
              desc: msg
          });
      },
      e(msg, i = 'Oops!') {
          this.$Notice.error({
              title: i,
              desc: msg,

          });
      },
      swr() {
          this.$Notice.error({
              title: 'Oops',
              desc: 'Something went wrong, please try again later'
          });
      },
      async callApi(method, url, dataObj) {
          try {
              let data = await this.$axios({
                  config: {
                    withCredentials: true
                  },
                  method: method,
                  url: url,
                  data: dataObj,

              })
              return data

          } catch (e) {

              return e.response
          }
      },


  }
})


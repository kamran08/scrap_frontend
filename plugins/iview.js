import Vue from 'vue'
import iView from 'iview'
import locale from 'iview/dist/locale/en-US' // Change locale, check node_modules/iview/dist/locale
import VueLuxon from "vue-luxon";
Vue.use(VueLuxon);
Vue.use(iView, {
  locale
})
// stipe
// import { StripePlugin } from '@vue-stripe/vue-stripe';

// const options = {
//   pk: process.env.STRIPE_PUBLISHABLE_KEY,
//   stripeAccount: process.env.STRIPE_ACCOUNT,
//   apiVersion: process.env.API_VERSION,
//   locale: process.env.LOCALE,
// };

// Vue.use(StripePlugin, options);
// stipe

 
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
        makePercent: function (value1) {
            if(value1.total_amount_scrapped){
                let a = parseFloat(value1.total_amount_scrapped) * 100
                return  Math.ceil(a/parseFloat(value1.amount))
            }
            else{
                return 0
            }

            
        },
        formateDate: function (value) {
            if(!value) return ""
            let months=["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"
                    ]
                var dateObj = new Date(value);
                if (!isNaN(dateObj) == false) 
                { 

                    return ""
                } 
                var month = dateObj.getUTCMonth(); //months from 1-12
                var day = dateObj.getUTCDate();
                var year = dateObj.getUTCFullYear();
                return day+" "+months[month]+" "+year
        },

        timeSince: function(date) {
                if(!date) return ''
                date = new Date(date)

                var seconds = Math.floor((new Date() - date) / 1000);

                var interval = seconds / 31536000;

                if (interval > 1) {
                    return Math.floor(interval) + " years";
                }
                interval = seconds / 2592000;
                if (interval > 1) {
                    return Math.floor(interval) + " months";
                }
                interval = seconds / 86400;
                if (interval > 1) {
                    return Math.floor(interval) + " days";
                }
                interval = seconds / 3600;
                if (interval > 1) {
                    return Math.floor(interval) + " hours";
                }
                interval = seconds / 60;
                if (interval > 1) {
                    return Math.floor(interval) + " minutes";
                }
                return Math.floor(seconds) + " seconds";
        }
    },
     
    computed: {
        ...mapGetters({
            totalBalance:'getTotalBalance',
            BASE_URL:'getBaseUrl',
            authUser:'getAuthUser',
            isLoggedIn:'isLoggedIn',
            getSideBar1:'getSideBar1',
            getSideBar2:'getSideBar2',
            getFeed:'getFeed',
            allNotification:'getAllNotification',
            notiCount:'getNotificationCount',
            flyingNoti:'getflyingNoti',
            
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



export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
    env: {
    // baseUrl: process.env.BASE_URL,
    Stripe_Publishable_key: process.env.Stripe_Publishable_key,
    Stripe_Secret_key: process.env.STRIPE_SECRET_kEY,
  },
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'Scrapabill',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/css/bootstrap.css' },
      { rel: 'stylesheet', href: '/css/common.css' },
      { rel: 'stylesheet', href: '/css/main.css' },
      { rel: 'stylesheet', href: '/css/responsive.css' },
      { rel: 'stylesheet', href: '/css/form.css' },
      { rel: 'stylesheet', href: '/css/owl.carousel.min.css' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.8.2/css/all.css'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500;700;900&family=Saira+Semi+Condensed:wght@500;600;700;800;900&display=swap'},
      
    ],
    script: [
      { src: "/js/jquery-1.12.4.min.js" },
      { src: "/js/main.js" },
      { src: "/js/owl.carousel.min.js" },
      { src: "https://cdn.socket.io/4.0.1/socket.io.min.js" },
      { src: 'https://js.stripe.com/v3/' }
      // { src: 'https://unpkg.com/vue' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    'iview/dist/styles/iview.css'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
     { src: '@/plugins/iview', ssr: false },
     { src: '@/plugins/stripe', ssr: false },
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // 'nuxt-socket-io',
  ],
  // io: {
  //   // module options
  //   sockets: [{
  //     name: 'main',
  //     url: 'http://localhost:3333',
  //     // url: 'https://nuxt-socket-io.herokuapp.com'
  //   }]
  // },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: process.env.BASE_URL,
    // baseURL: "http://localhost:3333",
    // baseURL: "https://api.scrapabill.com/",
    credentials: true
    

  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },
  server: {
    port: 8000, // default: 3000
    // port: 3000, // default: 3000
    host: 'localhost' // default: localhost
  }

}

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'uploader-example',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Nuxt.js project'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: {color: '#3B8070'},
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, {isDev, isClient}) {
      /* configure bootstrap-vue image paths */
      const vueLoader = config.module.rules.find((rule) => rule.loader === 'vue-loader');
      vueLoader.options.transformToRequire = {
        'img': 'src',
        'image': 'xlink:href',
        'b-img': 'src',
        'b-img-lazy': ['src', 'blank-src'],
        'b-card': 'img-src',
        'b-card-img': 'img-src',
        'b-carousel-slide': 'img-src',
        'b-embed': 'src'
      };

      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios'
  ],
  axios: {
    /* set API_URL environment variable to configure access to the API
    */
    baseURL: process.env.API_URL || 'http://localhost:3001/',
    redirectError: {
      401: '/login',
      404: '/notfound'
    }
  }
}


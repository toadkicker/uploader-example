<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        uploader-example
      </h1>
      <h2 class="subtitle">
        Nuxt.js project
      </h2>
      <b-card class="text-left">
        <h5>New Widget</h5>
        <b-form ref="form" @submit.prevent="newWidget">
          <b-form-group label="Title">
            <b-form-input v-model="title"></b-form-input>
          </b-form-group>
          <uploader v-model="photo" @presigned="photo_data = $event"></uploader>
          <image-preview></image-preview>
          <b-btn type="submit" variant="primary">Create Widget</b-btn>
        </b-form>
      </b-card>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Article</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
  import AppLogo from '~/components/AppLogo.vue'
  import uploader from '~/components/uploader.vue'
  import ImagePreview from '~/components/ImagePreview.vue'

  export default {
    components: {
      AppLogo, uploader, ImagePreview
    },
    data() {
      return {
        photo: null,
        photo_data: null,
        title: null
      }
    },
    methods: {
      newWidget() {
        this.$axios.post('/widgets', {
          widget: {
            photo_data: this.photo_data,
            title: this.title
          }
        }).then((resp) => {
          if(resp.status === 201) {
            alert('success!');
            this.$refs.form.reset();
            this.$store.commit('image_preview/set', null)
          }
        })

      }
    }
  }
</script>

<style>
  .container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
</style>


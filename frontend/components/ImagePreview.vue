<template>
  <b-img thumbnail fluid :src="image" v-show="show && image"></b-img>
</template>

<script>
  export default {
    name: 'image-preview',
    computed: {
      image() {
        return this.$store.state.image_preview.image;
      }
    },
    data() {
      return {
        show: false
      }
    },
    mounted() {
      if (this.image && this.image.match(/http/)) {
        this.show = true
      }
    },
    watch: {
      image: function (newVal, oldVal) {
        this.show = true;
      }
    }
  }
</script>

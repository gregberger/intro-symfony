<template>
    <div class="asciinema-custom">
    <script :data-autoplay="dataAutoplay" :data-rows="rows" :id="asciiId" src="https://asciinema.org/a/326225.js" async></script>
    </div>
</template>

<script>
  export default {
    props: {
      "id": String,
      "rows": String,
      "autoplay": String

    },
    data (){
      return {
        asciiId: `asciicast-${this.id}`,
        dataAutoplay: this.autoplay | 0
      }
    }
  }

</script>

<style scoped>
    .asciinema-custom{

    }
</style>
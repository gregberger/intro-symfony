<template>
    <div class="asciinema-custom">
    <script data-autoplay="1" :data-rows="rows" :id="asciiId" src="https://asciinema.org/a/326225.js" async></script>
    </div>
</template>

<script>
  export default {
    props: {
      "id": String,
      "rows": String
    },
    data (){
      return {
        asciiId: `asciicast-${this.id}`,
        dataRows: this.rows | 80
      }
    }
  }

</script>

<style scoped>
    .asciinema-custom{

    }
</style>
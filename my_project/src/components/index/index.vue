<template>
  <div>
    11
  </div>
</template>

<script>
    export default {
      name: "index",
      data () {
        return {

        }
      },

      mounted () {
        this.$request({
          type: 'GET',
          url: 'api/allCtgy?',
          success: function (res) {
            console.log(res.data)
          }
        })
      }

    }
</script>

<style scoped>

</style>

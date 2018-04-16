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
          url: 'api/adwap/loadAds?adids=1%7C2%7C3%7C4%7C5',
          success: function (res) {
            console.log(res.data)
          }
        })
      }

    }
</script>

<style scoped>

</style>

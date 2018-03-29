<template>
    <div class="wrap">
      <div class="header">
        <div class="headerLeft">
          <img src="../../assets/login/whiteback.png" alt="">
        </div>

        <div class="headerCenter">
          注册
        </div>
      </div>

      <div class="content">
        <div class="inp">
          <input type="text" placeholder="请输入">
        </div>

        <div class="invite" >
          <div class="invite_top" @click="clicklist">
            邀请码
            <span class="inv_up">
              <img v-if="imgtrue" src="../../assets/login/up.png" alt="">
              <img v-if="imged" src="../../assets/login/unlist.png" alt="">
            </span>


          </div>

          <div class="up-rig"  v-if="displayed">
            <p>邀请码</p>
            <p>招商码</p>
          </div>
        </div>
      </div>

      <div class="footer">
        <div class="next">
          <p>下一步</p>
        </div>
      </div>


    </div>
</template>

<script>
    export default {
      name: "register",
      data() {
        return {
          displayed : false,
          imged: false,
          imgtrue : true
        }
      },
      mounted () {

      },
      methods : {
        clicklist () {
          this.displayed = !this.displayed
          this.imged = this.displayed
          this.imgtrue = !this.imged
        }
      }
    }
</script>

<style scoped>
  .up-rig p{
    width: 100%;
    background-color: black;
    color: white;
  }

  .up-rig {
    width: 101%;
    position: absolute;
    top: 40px;
    left: 0;

  }

  .inv_up {
    display: inline-block;
    position: relative;
    width: 25px;
    top: 6px;
  }

  .inv_up img{
    width: 100%;
  }

  .invite {
    width: 35%;
    border: 1px solid #000;
    text-align: center;
    line-height: 48px;
    height: 46px;
    color: #000;
    font-size: 1.5rem;
    border-left : none;
    float: left;
    position: relative;
  }

  .header {
    background: #000;
    color: #fff;
    height: 44px;
    width: 100%;
    box-shadow: 0 2px 3px rgba(0,0,0,.12);
  }

  .headerLeft {
    width: 10%;
    text-align: center;
    padding-top: 7px;
    float: left;
  }

  .headerLeft img {
    width: 30px;
  }

  .headerCenter {
    float: left;
    width: 80%;
    text-align: center;
    padding-top: 11px;
    font-size: 1.6rem;
  }

  .inp{
    width: 55%;
    float: left;
  }

  .inp input {
    width: 100%;
    height: 48px;
    outline: none;
    border: 1px solid black;
    padding: 0 2rem;
    font-size: 1.6rem;
    box-sizing: border-box;
  }

  .content {
    margin-left: 9%;
    margin-top: 70px;
  }


  .next {
    margin: 0 auto;
    margin-top: 250px;
    width: 83%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    background: #000;
    color: #fff;
    border-radius: 3px;
    font-size: 1.6rem;
  }

</style>

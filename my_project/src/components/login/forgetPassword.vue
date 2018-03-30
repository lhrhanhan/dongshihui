<template>
  <div class="wrap">
    <div class="header">
      <div class="header_left">
        <img src="../../assets/login/back.png" alt="">
      </div>

      <div class="headerCenter">
        <span>重置密码</span>
      </div>
    </div>
    <div class="content">
      <div class="userinfo">
        <div class="mobile-wrapper">
          <input class="input-mobile" type="text">
        </div>
      </div>
      <div class="userinfo"></div>
      <div class="userinfo"></div>
      <div class="userinfo"></div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
    export default {
        name: "forget-password"
    }
</script>

<style scoped>
  .input-mobile {
    height: 100%;
    outline: none;
    border: 0;
    padding: 0 2rem;
    font-size: 1.6rem;
  }

  .mobile-wrapper {
    height: 100%;
    width: 100%;
    position: relative;
  }

  .userinfo {
    height: 50px;
    border: 1px solid #000;
    margin-top: 10px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
  }

  .header{
    background: #fff;
    color: #000;
    border-bottom: 1px solid #e8e8e8;
    height: 44px;
    box-shadow: 0 2px 3px rgba(0,0,0,.12);
    overflow: hidden;
  }

  .header_left {
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
    padding-top: 10px;
  }

  .headerCenter span {
    font-size: 1.6rem;
  }

  .content {
    box-sizing: border-box;
  }

</style>

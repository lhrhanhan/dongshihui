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
          <input @input="outputed" ref="outh" class="input-mobile" type="text" placeholder="手机号">
          <i @click="clicked1" v-if="appeared"><img src="../../assets/login/x.png" alt=""></i>
        </div>
      </div>
      <div v-if="cleared" class="userinfo">
        <div class="userinfo_left">
          <input class="userimgcode" @input="validat" ref="validationed" type="text" placeholder="图形验证码">
          <i @click="clicked2" v-if="validation"><img src="../../assets/login/x.png" alt=""></i>
        </div>
        <div class="userinfo_right">
          <img src="http://sms.dshui.cc/image/getImageCode?mobile=13940871485&r=0.8721272108833074" alt="">
        </div>
      </div>
      <div class="userinfo">
        <div class="smsInput">
          <input @input="sms" ref="smsed" type="text" placeholder="短信验证码">
          <i @click="clicked3" v-if="smsmessge"><img src="../../assets/login/x.png" alt=""></i>
        </div>
        <div class="getSmsCode">
          <div class="count">
            <span v-if="isReally" @click="vali">获取验证码</span>
            <span v-if="!isReally">{{count}} 后重发</span>
          </div>
        </div>
      </div>
      <div class="userinfo">
        <div class="pwd">
          <input @input="pwd" ref="pw" type="text" placeholder="新密码">

        </div>

        <i @click="clicked4" v-if="pwded"><img src="../../assets/login/x.png" alt=""></i>
      </div>
    </div>
    <div class="footer">
      <div class="agreement">点击[提交]按钮,代表您已经阅读并且同意
        <a href="http://static.dshui.cc/doc/agreement_1.html">《董事惠用户协议》</a></div>
      <div class="registerBtn">提交</div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "forget-password",
      data () {
        return {
          appeared : false,
          username: '',
          validation: false,
          smsmessge : false,
          pwded : false,
          cleared : false,
          isReally : true,
          timer : null,
          count : ''
        }
      },
      mounted () {

      },
      methods : {
        vali () {
          alert('短信已发，请尽快使用')
          this.isReally = false
          const TIME_COUNT = 90
          if (!this.timer) {
            this.count = TIME_COUNT
            this.isReally = false
            this.timer = setInterval(()=> {
              if (this.count > 0 && this.count <= TIME_COUNT) {
                this.count--
              } else {
                this.isReally = true
                clearInterval(this.timer)
              }
            },1000)
          }
        },
        clicked1 () {
          this.$refs.outh.value = ''
        },
        clicked2 () {
          this.$refs.validationed.value = ''
        },
        clicked3 () {
          this.$refs.smsed.value = ''
        },
        clicked4 () {
          this.$refs.pw.value = ''
        },
        outputed () {
          this.appeared = true
          this.username = this.$refs.outh.value
          if (this.username === '') {
            this.appeared = false
          }
          if (!(/^1[3|4|5|8][0-9]\d{8}$/.test(this.username))) {
            this.cleared = false
          } else {
            this.cleared = true
          }
        },
        validat () {
          this.validation = true
          if (this.$refs.validationed.value === '') {
            this.validation = false
          }
        },
        sms () {
          this.smsmessge = true
          if (this.$refs.smsed.value === '') {
            this.smsmessge = false
          }
        },
        pwd () {
          this.pwded = true
          if (this.$refs.pw.value === '') {
            this.pwded = false
          }
        }
      }
    }
</script>

<style scoped>
  .pwd i {
    position: absolute;
    top: 19px;
    left: 90%;
  }

  .pwd {
    position: relative;
  }

  i {
    position: absolute;
    top: 19px;
    left: 90%;
  }

  .agreement {
    margin-left: 5%;
    margin-top: 35px;
    color: #999;
    font-size: 1.2rem;
  }

  .agreement a {
    color: #698ebf;
    text-decoration: none;
  }

  .registerBtn {
    width: 90%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    color: #fff;
    font-size: 1.6rem;
    margin: 2rem auto;
    background: #000;
    border-radius: 3px;
  }

  .pwd input{
    width: 97%;
    height: 100%;
    outline: none;
    border: 0;
    padding: 0 2rem;
    font-size: 1.6rem;
  }

  .count {
    display: inline-block;
    height: 44px;
    line-height: 44px;
    text-align: center;
    font-size: 1.3rem;
    color: #000;
  }

  .getSmsCode {
    width: 35%;
    border-left: 1px solid #000;
    text-align: center;
    line-height: 44px;
    height: 44px;
    margin: 3px 15px;
    font-size: 1.2rem;
  }

  .smsInput input {
    width: 97%;
    height: 100%;
    outline: none;
    border: 0;
    padding-left: 2rem;
    font-size: 1.6rem;
  }

  .smsInput {
    width: 65%;
    height: 48px;
    position: relative;
  }

  .userinfo_right {
    width: 35%;
    height: 44px;
    margin: 3px 15px;
    border-left: 1px solid #000;
  }

  .userinfo_right img {
    width: 100%;
    height: 100%;
  }

  .userimgcode {
    width: 97%;
    height: 100%;
    outline: none;
    border: 0;
    padding-left: 2rem;
    font-size: 1.6rem;
  }


  .userinfo_left {
    width: 65%;
    height: 48px;
    position: relative;
    box-sizing: border-box;
  }

  .mobile-wrapper {
    position: relative;
  }

  .mobile-wrapper i{
    position: absolute;
    top: 19px;
    left: 90%;
  }

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
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 90%;
    margin: 0 auto;
    margin-top: 10px;
    position: relative;
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
    margin-top: 37px;
  }

</style>

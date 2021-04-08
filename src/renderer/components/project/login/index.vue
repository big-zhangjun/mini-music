<template>
  <div class="login-card">
    <div class="code-icon"></div>
    <div class="init">
      扫码登录更安全
      <div class="iconfont icon-daosanjiao-"></div>
    </div>
    <img class="login-bg" src="@/assets/img/login-bg.png" alt="" />
    <div class="input-box">
      <div class="phone">
        <div class="icon-shouji iconfont"></div>
        <input type="text" v-model="phone" placeholder="请输入手机号" />
      </div>
      <div class="password">
        <div class="icon-mima1 iconfont"></div>
        <input type="text" v-model="password" placeholder="请输入密码" />
      </div>
    </div>
    <div class="login-btn" @click="login">登录</div>
    <div class="register">注册</div>
    <div class="login-mode">
      <div class="iconfont icon-weixin"></div>
      <div class="iconfont icon-QQ"></div>
      <div class="iconfont icon-weibo"></div>
      <div class="iconfont icon-iconfontwangyi"></div>
    </div>
  </div>
</template>

<script>
import { cellPhone } from "@/network/common"
export default {
  data() {
    return {
      phone: "",
      password: ""
    }
  },
  methods: {
    async login() {
      let params = {
        phone: this.phone,
        password: this.password
      }
      const res = await cellPhone(params)
    }
  }
}
</script>

<style lang="scss" scoped>
.login-card {
  position: fixed;
  width: 350px;
  height: 530px;
  background-color: #fff;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  box-shadow: 0px 2px 10px 4px rgba(0, 0, 0, 0.1);
  padding: 0 46px;
  box-sizing: border-box;
  .code-icon {
    width: 49px;
    height: 49px;
    position: absolute;
    left: 0;
    top: 0;
    background: url("~@/assets/img/code.png") no-repeat center;
    background-size: contain;
    cursor: pointer;
  }
  .init {
    font-size: 12px;
    color: #fff;
    background-color: #989898;
    line-height: 26px;
    padding: 0 15px;
    border-radius: 4px;
    left: 50px;
    top: 16px;
    position: absolute;
    .icon-daosanjiao- {
      font-size: 18px;
      color: #989898;
      position: absolute;
      left: -9px;
      top: -11px;
    }
  }
  .login-bg {
    margin-top: 50px;
  }
  .input-box {
    width: 100%;
    height: 80px;
    border: 1px solid #d8d8d8;
    border-radius: 4px;
    line-height: 40px;
    overflow: hidden;
    .iconfont {
      font-size: 23px;
      color: #999;
      width: 40px;
      text-align: center;
    }
    .phone,
    .password {
      display: flex;
    }
    .password {
      border-top: 1px solid #d8d8d8;
    }
    .icon-mima1 {
      font-size: 30px;
    }
    input {
      outline: none;
    }
    ::-webkit-input-placeholder {
      color: #ccc;
      font-weight: 400;
      font-size: 14px;
    }

    /* Firefox 4-18 */
    :-moz-placeholder {
      color: #ccc;
      font-weight: 400;
      font-size: 14px;
    }

    /* Firefox 19-50 */
    ::-moz-placeholder {
      color: #ccc;
      font-weight: 400;
      font-size: 14px;
    }
  }
  .login-btn {
    line-height: 42px;
    border-radius: 4px;
    background-color: #ea4848;
    color: #fff;
    width: 100%;
    text-align: center;
    cursor: pointer;
    margin-top: 40px;
    &:hover {
      background-color: #c72e2e;
    }
  }
  .register {
    text-align: center;
    line-height: 40px;
    cursor: pointer;
    text-decoration: underline;
    font-size: 14px;
  }
  .login-mode {
    display: flex;
    justify-content: space-between;
    .iconfont {
      width: 40px;
      line-height: 40px;
      text-align: center;
      font-size: 24px;
      border-radius: 50%;
      border: solid 1px #cccccc;
      cursor: pointer;
      transition: all 0.3s;
      margin-top: 10px;
    }
    .icon-weixin {
      color: #67b633;
      &:hover {
        background-color: #67b633;
        border: solid 1px #67b633;
        color: #fff;
      }
    }
    .icon-QQ {
      color: #34a0df;
      &:hover {
        background-color: #34a0df;
        border: solid 1px #34a0df;
        color: #fff;
      }
    }
    .icon-weibo {
      color: #ea4848;
      &:hover {
        background-color: #ea4848;
        border: solid 1px #ea4848;
        color: #fff;
      }
    }
    .icon-iconfontwangyi {
      color: #d33a31;
      &:hover {
        background-color: #d33a31;
        border: solid 1px #d33a31;
        color: #fff;
      }
    }
  }
}
</style>
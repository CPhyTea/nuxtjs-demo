<template>
  <div class="login-container">
    <div class="logo">
      <img class="logo-img" src="~/assets/login/login-logo.png" alt="">
    </div>

    <div class="login-left">
      <img class="insert-img" src="~/assets/login/login-insert.png" alt="">
    </div>
    <div class="login__right card">
      <div class="login-title-wrapper">
                <span class="login-title">
                    欢迎登录 <br>
                    {{ appName }}
                </span>
        <el-alert
          v-show="loginFail"
          class="login-fail-alert"
          title="您输入的账号或密码不正确，请重新输入"
          show-icon
          type="error"
          @close="loginFail = false"
        />
      </div>
      <el-form
        ref="loginForm"
        :model="loginForm"
        :rules="loginRules"
        class="login-form"
        autocomplete="on"
        label-position="left"
      >
        <el-form-item prop="username">
          <el-input
            ref="username"
            v-model.trim="loginForm.username"
            name="username"
            type="text"
            autocomplete="on"
            placeholder="账号"
          >
                        <span slot="prefix" class="svg-container">
                            <span class="login-user-wrapper">
                                <svg-icon name="login-user"/>
                            </span>
                        </span>
          </el-input>
        </el-form-item>

        <el-form-item
          prop="password"
          class="password"
        >
          <el-input
            :key="passwordType"
            ref="password"
            v-model.trim="loginForm.password"
            :type="passwordType"
            placeholder="密码"
            name="password"
            autocomplete="on"
            @keyup.enter.native="handleLogin"
          >
                        <span slot="prefix" class="svg-container">
                            <span class="login-user-wrapper">
                                <svg-icon name="login-password" class="prepend-icon"/>
                            </span>
                        </span>
          </el-input>
        </el-form-item>

        <el-button
          class="login-btn"
          type="primary"
          :loading="loading"
          @click.native.prevent="handleLogin"
        >
          {{ loading ? '登录中' : '登&nbsp;&nbsp;录' }}
        </el-button>
      </el-form>
      <div class="copyright">
        <div class="version">
          {{ getVersion() }}
        </div>
        <div class="copyright-text">
          Copyright © 2009 - 2021 江西通服科技有限公司.All Rights Reserved
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./login.ts">
</script>

<style scoped lang="scss" src="./style.scss">

</style>

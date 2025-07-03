<template>
  <el-container class="layout-container">
    <el-header class="layout-header">
      <Header></Header>
    </el-header>
    <el-container class="layout-content">
      <el-aside class="layout-menu">
        <Menu></Menu>
      </el-aside>
      <el-container class="layout-main">
        <Main></Main>
      </el-container>
    </el-container>
  </el-container>
</template>
<script setup lang="ts">
import Header from "@/layout/LayoutClassic/Header/index.vue";
import Menu from "@/layout/LayoutClassic/Menu/index.vue";
import Main from "@/layout/LayoutClassic/Main/index.vue";
</script>
<style lang="scss" scoped>
.layout-container {
  width: 100vw;
  height: 100vh;
  .layout-header {
    width: 100vw;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .layout-content {
    width: 100%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    .layout-menu {
      width: 20%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .layout-main {
      width: 80%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>

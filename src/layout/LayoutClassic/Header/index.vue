<template>
  <div class="header-box">
    <div class="logo">
      <img :src="logoUrl" alt="" class="logo-img" />
      <h1>Simona</h1>
    </div>
    <Collapse></Collapse>
    <BreadCrumb></BreadCrumb>
    <ToolBar></ToolBar>
  </div>
</template>
<script setup lang="ts">
import Collapse from "@/layout/LayoutClassic/Header/Components/Collapse.vue";
import BreadCrumb from "@/layout/LayoutClassic/Header/Components/BreadCrumb.vue";
import ToolBar from "@/layout/LayoutClassic/Header/Components/ToolBar.vue";
import logoUrl from "@/assets/logo.png";
</script>
<style scoped lang="scss">
.header-box {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}
.logo {
  height: 100%;
  display: flex;
  align-items: center;
  .logo-img {
    height: 100%;
    width: 100%;
  }
}
</style>

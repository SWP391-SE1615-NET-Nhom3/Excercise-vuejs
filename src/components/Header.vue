<script setup lang="ts">
import { ref } from 'vue';
import MonthPicker from '../../common/component/MonthPicker.vue'
defineProps<{
  title: string
  breadcrumb: string
}>()
const month = ref('')


</script>

<template>
  <header class="header">
    <div class="header-left">
      <div class="header-title">{{ title }}</div>
      <span v-if="breadcrumb != ''" class="icon-sidebar"><img src="../assets/iconassets/meteor-icons_angles-right.svg" alt="arrow" /></span>
      <div class="breadcrumb">{{ breadcrumb }}</div>
      <MonthPicker/>
    </div>


    <div  class="header-actions">
      <img src="../assets/iconassets/Ellipse 1.png" alt="user" class="avatar cursor-pointer" />
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  height: 101px;
  padding: 0 48px 0 40px;
  min-height: 88px;
  box-shadow: 0 1px 0 #ECECEC;
}

.header-left {
  display: flex;
  gap: 20px;
  text-align: center;
  align-items: center;
}

.header-title {
  font-weight: 700;
  color: #222;
  letter-spacing: 0.5px;
  font-size: 24px;
}

.breadcrumb {
  font-size: 1rem;
  margin-top: 2px;
  font-weight: 500;
  font-size: 24px;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
  margin-left: 12px;
  border: 2px solid #ECECEC;
}
</style>

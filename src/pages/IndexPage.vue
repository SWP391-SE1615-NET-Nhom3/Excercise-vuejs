<script setup lang="ts">
import EmployeeList from './components/EmployeeList.vue'
import Sidebar from '../components/Sidebar.vue'
import Header from '../components/Header.vue'
import { ref } from 'vue'

const currentMainMenu = ref('社員管理')
const currentSubMenu = ref('')

const handleMenuUpdate = (mainMenu: string, subMenu: string) => {
  currentMainMenu.value = mainMenu
  currentSubMenu.value = subMenu
}
</script>

<template>
  <div class="main-layout">
    <Sidebar @update:menu="handleMenuUpdate" />
    <div class="content-area">
      <Header 
        :title="currentMainMenu" 
        :breadcrumb="currentSubMenu || ''" 
      />
      <main class="main-content">
        <EmployeeList />
      </main>
    </div>
  </div>
</template>

<style scoped>
*{ 
   font-family: 'Inter', sans-serif;
}

.main-layout {
  display: flex;
  min-height: 100vh;
  height: 100vh;
  overflow: hidden;
}

.content-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  height: 100vh;
  overflow: hidden;
}

.main-content {
  padding: 32px 40px;
  flex: 1;
  background: #fafbfc;
  overflow: auto;
  min-height: 0;
}
</style>
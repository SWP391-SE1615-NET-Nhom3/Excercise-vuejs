<script setup lang="ts">
import { ref } from 'vue'

const activeItem = ref('社員管理')
const activeSubItem = ref('')

const emit = defineEmits<{
  (e: 'update:menu', mainMenu: string, subMenu: string): void
}>()

const handleItemClick = (item: string) => {
  activeItem.value = item
  activeSubItem.value = '' // Reset submenu active when clicking main item
  emit('update:menu', item, '')
}

const handleSubItemClick = (item: string) => {
  activeSubItem.value = item
  emit('update:menu', activeItem.value, item)
}
</script>

<template>
  <aside class="sidebar">
    <div class="sidebar-content">
      <div class="logo-area">
        <img src="../assets/iconassets/レイヤー 2.svg" alt="MAGIONET" class="logo cursor-pointer" />
      </div>
      <nav class="side-nav">
        <ul>
          <li 
            class="main-item" 
            :class="{ active: activeItem === '社員管理' }"
            @click="handleItemClick('社員管理')"
          >
            <span class="icon icon-sidebar">
              <img src="../assets/iconassets/famicons_people-outline.svg" alt="社員管理" class="icon-img" />
            </span>
            <span>社員管理</span>
          </li>
          <li 
            class="main-item"
            :class="{ active: activeItem === 'データ集計' }"
            @click="handleItemClick('データ集計')"
          >
            <span class="icon">
              <img src="../assets/iconassets/Vector.svg" alt="社員管理" class="icon-img" />
            </span>
            <span>データ集計</span>
            <ul class="submenu">
              <li 
                class="submenu-item"
                :class="{ active: activeSubItem === '勤怠管理' }"
                @click.stop="handleSubItemClick('勤怠管理')"
              >
                <span>勤怠管理</span>
              </li>
              <li 
                class="submenu-item"
                :class="{ active: activeSubItem === '目録管理' }"
                @click.stop="handleSubItemClick('目録管理')"
              >
                <span>目録管理</span>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 372px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0;
  box-shadow: 1px 0 0 #ECECEC;
  border-right: 1px solid #ECECEC;
}

.sidebar-content {
  margin: 0 24px;
}

.logo-area {
  width: 324px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 88px;
  margin-bottom: 8px;
}

.logo {
  width: 100%;
  height: 84px;
  object-fit: contain;
}

.side-nav {
  width: 324px;
}

.side-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
}

.main-item {
  position: relative;
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 16px 24px;
  font-size: 16px;
  font-weight: 700;
  margin-top: 0px;
  color: #333;
  border-radius: 8px;
  margin-bottom: 4px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}

.main-item .icon {
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.main-item .icon-img {
  width: 24px;
  height: 24px;
  filter: brightness(0);
  transition: filter 0.2s;
}

.main-item.active {
  background: #D32C2C;
  color: #fff;
}

.main-item.active .icon-img {
  filter: brightness(0) invert(1);
}

.main-item:not(.active):hover {
  background: #ececec;
}

.main-item .submenu {
  position: absolute;
  left: 48px;
  top: 100%;
  padding-left: 0;
  margin: 0;
  width: 100%;
  min-width: 0;
}

.main-item .submenu::before {
  content: "";
  position: absolute;
  left: -16px;
  top: 0;
  bottom: 18px;
  width: 1px;
  background: #E0E0E0;
}

.submenu-item {
  position: relative;
  padding: 8px 0 8px 24px;
  font-size: 15px;
  color: #888;
  border-radius: 8px;
  cursor: pointer;
  transition: color 0.2s;
  width: 100%;
  box-sizing: border-box;
}

.submenu-item.active {
  color: #D32C2C;
}

.submenu-item.active span {
  color: #D32C2C;
}

.submenu-item:hover {
  color: #D32C2C;
}

.submenu-item:hover span {
  color: #D32C2C;
}

.submenu-item::before {
  content: "";
  position: absolute;
  left: -15px;
  top: 50%;
  width: 24px;
  height: 1px;
  background: #E0E0E0;
  transform: translateY(-50%);
}
</style> 
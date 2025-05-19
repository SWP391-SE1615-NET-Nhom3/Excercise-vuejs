<script setup lang="ts">
import { ref, defineEmits, defineProps } from 'vue'

const props = defineProps({
  branches: {
    type: Array as () => string[],
    required: true
  },
  contracts: {
    type: Array as () => string[],
    required: true
  },
  statuses: {
    type: Array as () => string[],
    required: true
  }
})

const emit = defineEmits(['update:search', 'update:branch', 'update:contract', 'update:status'])

const search = ref('')
const branch = ref('全て')
const contract = ref('全て')
const status = ref('全て')

const updateSearch = (value: string) => emit('update:search', value)
const updateBranch = (value: string) => emit('update:branch', value)
const updateContract = (value: string) => emit('update:contract', value)
const updateStatus = (value: string) => emit('update:status', value)
</script>

<template>
  <div class="filter-area">
    <div class="action-bar">
      <div class="action-bar-left">
        <img class="icon-search" src="@/assets/iconassets/search.svg" alt="search">
        <input v-model="search" @input="updateSearch(($event.target as HTMLInputElement).value)" class="search-input"
          placeholder="名前、社員番号" />
      </div>
    </div>

    <div class="action-bar-filter">
      <div class="filter-item">
        <div class="filter-label">支店・会社</div>
        <select v-model="branch"
          @change="updateBranch(($event.target && ($event.target as HTMLSelectElement).value) || '')"
          class="filter-select">
          <option v-for="b in branches" :key="b">{{ b }}</option>
        </select>
      </div>

      <div class="filter-item">
        <div class="filter-label">契約形態</div>
        <select v-model="contract"
          @change="updateContract(($event.target && ($event.target as HTMLSelectElement).value) || '')"
          class="filter-select">
          <option v-for="c in contracts" :key="c">{{ c }}</option>
        </select>
      </div>

      <div class="filter-item">
        <div class="filter-label">ステータス</div>
        <select v-model="status"
          @change="updateStatus(($event.target && ($event.target as HTMLSelectElement).value) || '')"
          class="filter-select">
          <option v-for="s in statuses" :key="s">{{ s }}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<style scoped>
.filter-area {
  height: 175px;
}

.action-bar {
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  gap: 16px;
}

.action-bar-left {
  display: flex;
  gap: 16px;
  flex: 1;
  max-width: 735px;
  width: 100%;
  height: 48px;
  position: relative;
}

.icon-search {
  width: 18px;
  height: 18px;
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
}

.search-input {
  flex: 1;
  padding: 10px 16px;
  padding-left: 44px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #F5F5F5;
  font-size: 14px;
}

.action-bar-filter {
  display: flex;
  align-items: center;
  gap: 24px;
}

.filter-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.filter-label {
  font-size: 14px;
  color: #333;
  font-weight: 500;
}

.filter-select {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #F5F5F5;
  font-size: 14px;
  min-width: 200px;
  appearance: none;
  background-image: url('../../src/assets/iconassets/chevron-down.svg');
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 12px;
}
</style>

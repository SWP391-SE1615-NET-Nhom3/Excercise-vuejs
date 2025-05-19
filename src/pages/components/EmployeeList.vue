<script setup lang="ts">
import { ref, computed } from 'vue'
import EmployeeDialog from '../../../common/component/EmployeeDialog.vue'
import DialogConfirm from '../../..//common/component/DialogConfirm.vue'
import DownloadDialog from '../../..//common/component/DownloadDialog.vue'
import EmployeeFilter from '../../../common/component/EmployeeFilter.vue'
import EmployeeTable from './EmployeeTable.vue'
import { useEmployeeStore } from '../../stores/employee'

const employeeStore = useEmployeeStore()
const selectedEmployee = ref(null)

const dialogStates = ref({
  employee: false,
  confirm: false,
  download: false
})

// Constants
const FILTER_OPTIONS = {
  branches: ['全て', 'マジオネットHD㈱', '㈱マジオSD東日本', '㈱マジオトラスト'],
  contracts: ['全て', '正社員', '契約社員'],
  statuses: ['全て', '処理中', '訂正中', '承認待', '承認済']
}

// Filter states
const filterStates = ref({
  search: '',
  branch: '全て',
  contract: '全て',
  status: '全て'
})

// Computed
const filteredEmployees = computed(() => {
  return employeeStore.employees.filter(emp => {
    const searchMatch = !filterStates.value.search ||
      emp.code.includes(filterStates.value.search)
    const branchMatch = filterStates.value.branch === '全て' ||
      emp.branch === filterStates.value.branch
    const contractMatch = filterStates.value.contract === '全て' ||
      emp.contract === filterStates.value.contract
    const statusMatch = filterStates.value.status === '全て' ||
      emp.status === filterStates.value.status
    return searchMatch && branchMatch && contractMatch && statusMatch
  })
})

// Methods
const showEmployeeDetails = (employee) => {
  selectedEmployee.value = employee
  dialogStates.value.employee = true
}

const showDownloadModal = (employee) => {
  selectedEmployee.value = employee
  dialogStates.value.download = true
}
</script>

<template>
  <div class="employee-list">
    <EmployeeFilter v-model:search="filterStates.search" v-model:branch="filterStates.branch"
      v-model:contract="filterStates.contract" v-model:status="filterStates.status" :branches="FILTER_OPTIONS.branches"
      :contracts="FILTER_OPTIONS.contracts" :statuses="FILTER_OPTIONS.statuses" />

    <div class="w-full overflow-x-auto mb-3">
      <EmployeeTable :employees="filteredEmployees" @show-details="showEmployeeDetails"
        @show-download="showDownloadModal" />


    </div>

    <!-- Dialogs -->
    <EmployeeDialog v-model:visible="dialogStates.employee" v-model:visibleConfirm="dialogStates.confirm"
      :employee="selectedEmployee" title="勤怠データ >> 2025年04月" />

    <DialogConfirm v-model:visibleConfirm="dialogStates.confirm" />

    <DownloadDialog v-model:visibleConfirm="dialogStates.download" :employee="selectedEmployee" title="業務日報" />
  </div>
</template>

<style scoped>
.action-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  gap: 16px;
}

.icon-plus {
  width: 24px;
  height: 24px;
}

.select-option {
  padding: 6px;
  margin: 0 10px;
}

.icon-search {
  width: 18px;
  height: 18px;
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
}

.table-footer {
  margin-top: 12px;
}

.text-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 16px;
}

.filter-area {
  height: 175px;
}

.action-bar-filter {
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

.action-bar-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.search-input {
  flex: 1;
  padding: 10px 16px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  padding-left: 38px;
  background-color: #0000000F;
}

.filter-select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: #fff url('../../assets/iconassets/chevron-down.svg') no-repeat right 16px center/18px 18px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px 38px 10px 16px;
  font-size: 1rem;
  min-width: 160px;
  height: 48px;
  transition: border-color 0.2s, box-shadow 0.2s;
  outline: none;
  cursor: pointer;
}



.filter-select option {
  background: #fff;
  color: #222;
  font-size: 1rem;
}



.btn-red {
  background: #D32C2C;
  color: #fff;
  border: none;
  border-radius: 8px;
  width: 150px;
  height: 48px;
  padding: 10px 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 8px;
  box-shadow: 0 2px 8px rgba(211, 44, 44, 0.04);
}

.btn-red:hover {
  background: #b71c1c;
}

.text-left {
  padding-left: 12px;
}

.filter-item {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-right: 16px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
}
</style>

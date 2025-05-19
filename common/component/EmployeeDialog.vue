<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue'
import { useDialogStore } from '../../src/store'
const dialogStore = useDialogStore()
const props = defineProps({
  visible: {
    type: Boolean,
    required: true
  },
  visibleConfirm: {
    type: Boolean,
    required: true
  },
  employee: {
    type: [Object, null],
    required: true
  },
  title: {
    type: String,
    default: '勤怠データ >> 2025年04月'
  },
  width: {
    type: String,
    default: '1184px'
  },
  height: {
    type: String,
    default: '975px'
  }
})
const filteredEmployees = [
  { no: 1, code: 'M-0001', name: '田中 美咲', branch: 'マジオネットHD㈱', dept: '経営企画部', contract: '正社員', date: 'YY/MM/DD' },
  { no: 2, code: 'M-0002', name: '田中 美咲', branch: 'マジオネットHD㈱', dept: 'データ分析', contract: '契約社員', date: 'YY/MM/DD' },
  { no: 3, code: 'M-0003', name: '加藤 直樹', branch: '㈱マジオSD東日本', dept: 'デジタル推進課', contract: '契約社員', date: 'YY/MM/DD' },
  { no: 4, code: 'M-0004', name: '加藤 直樹', branch: '㈱マジオSD東日本', dept: '教育課', contract: '契約社員', date: 'YY/MM/DD' },
  { no: 5, code: 'M-0005', name: '高橋 健一', branch: '㈱マジオSD東日本', dept: 'あおぞら課 サポート係', contract: '契約社員', date: 'YY/MM/DD' },
  { no: 6, code: 'M-0006', name: '山本 優子', branch: '㈱マジオSD東日本', dept: '広報課', contract: '契約社員', date: 'YY/MM/DD' },
  { no: 7, code: 'M-0007', name: '小林 恵美', branch: '㈱マジオSD東海', dept: '講習課', contract: '契約社員', date: 'YY/MM/DD' },
];
const emit = defineEmits(['update:visible', 'update:visibleConfirm']);




const showConfirm = (param) => {
  dialogStore.showConfirmDialog(param)

  emit('update:visible', false);

  emit('update:visibleConfirm', true);
}



</script>

<template>
  <el-dialog :modelValue="props.visible" :width="props.width" :height="props.height" style="border-radius: 20px;"
    class="custom-dialog" @update:modelValue="$emit('update:visible', $event)">
    <template #header>
      <div class="dialog-header">
        <div class="custom-dialog-title">{{ title }}</div>
      </div>
    </template>
    <div class="dialog-content">
      <!-- Employee Info Section -->
      <div class="relative" style="height: 110px;">
        <div class="employee-info">
          <div class="info-group">
            <div class="info-item">
              <span class="label font-semibold">社員番号:</span>
              <span class="value">{{ employee.code }}</span>
            </div>
            <div class="info-item">
              <span class="label font-semibold">氏名:</span>
              <span class="value">{{ employee.name }}</span>
            </div>
          </div>

          <div class="info-group">
            <div class="info-item">
              <span class="label font-semibold">社員番号:</span>
              <span class="value">{{ employee.code }}</span>
            </div>
            <div class="info-item">
              <span class="label font-semibold">氏名:</span>
              <span class="value">{{ employee.name }}</span>
            </div>
            <div class="info-item">
              <span class="label font-semibold">氏名:</span>
              <span class="value">{{ employee.name }}</span>
            </div>
          </div>

          <div class="info-group">
            <div class="info-item">
              <span class="label font-semibold">社員番号:</span>
              <span class="value">{{ employee.code }}</span>
            </div>
            <div class="info-item">
              <span class="label font-semibold">氏名:</span>
              <span class="value">{{ employee.name }}</span>
            </div>
            <div class="info-item">
              <span class="label font-semibold">氏名:</span>
              <span class="value">{{ employee.name }}</span>
            </div>
          </div>
        </div>
      </div>
      <table class="ml-2.5 mr-2.5 bg-white border border-[#E5E5E5] text-sm border-separate" style="border-spacing: 0;">
        <thead>
          <tr class="h-[40px]">
            <th class="text-center align-middle font-semibold text-[#333] px-2 py-3 w-[51px] border border-[#E5E5E5]">No
            </th>
            <th class="text-left px-2 py-3 w-[139px] border border-[#E5E5E5]">社員番号</th>
            <th class="text-left px-2 py-3 w-[198px] border border-[#E5E5E5]">氏名</th>
            <th class="text-left px-2 py-3 w-[199px] border border-[#E5E5E5]">所属支店・会社</th>
            <th class="text-left px-2 py-3 w-[362px] border border-[#E5E5E5]">所属部署</th>
            <th class="text-left align-middle px-2 py-3 w-[190px] border border-[#E5E5E5]">契約形態</th>
            <th class="text-left align-middle px-2 py-3 w-[190px] border border-[#E5E5E5]">ステータス</th>

          </tr>
        </thead>
        <tbody>
          <tr v-for="emp in filteredEmployees" :key="emp.no" class="h-[56px]">
            <td class="text-center align-middle px-2 py-3 w-[51px] border border-[#E5E5E5]">{{ emp.no }}</td>
            <td class="text-left px-2 py-3 w-[139px] border border-[#E5E5E5]">{{ emp.code }}</td>
            <td class="text-left px-2 py-3 w-[198px] border border-[#E5E5E5]">{{ emp.name }}</td>
            <td class="text-left px-2 py-3 w-[199px] border border-[#E5E5E5]">{{ emp.branch }}</td>
            <td class="text-left px-2 py-3 w-[362px] border border-[#E5E5E5]">{{ emp.dept }}</td>
            <td class="text-left px-2 py-3 w-[190px] border border-[#E5E5E5]">{{ emp.contract }}</td>
            <td class="text-left px-2 py-3 w-[190px] border border-[#E5E5E5]">{{ emp.date }}</td>

          </tr>
        </tbody>
      </table>

      <!-- Footer Buttons -->
      <div class="dialog-footer">
        <button @click="showConfirm('nocomment')" class="btn btn-secondary"><span
            class="text-red-600 font-bold">最終承認依頼</span></button>
        <button @click="showConfirm('comment')" class="btn btn-red">訂正依頼</button>
      </div>
    </div>
  </el-dialog>
</template>

<style scoped>
.el-dialog__header {
  padding: 0 !important;
}


.dialog-header {
  padding: 20px 24px;
  border-bottom: 1px solid #E5E5E5;
  width: 100%;
}

.custom-dialog-title {
  font-weight: 700;
  font-size: 22px;
  color: #333;
}

.dialog-content {
  padding: 0;
}

.employee-info {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background: #F5F5F5;
  padding: 20px 24px;
  margin-bottom: 20px;
  position: absolute;
  top: -17px;
  left: -15px;
  right: -15px;
}

table {
  margin: 24px;
}

.info-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
}

.label {
  min-width: 80px;
  color: #333;
  font-size: 16px;
}

.value {
  color: #666;
}

/* Override element-plus dialog styles */

.dialog-footer {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin: 20px 0 10px;
}

.btn {
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
}

.btn-red {
  background-color: #d32c2c;
  color: white;
}

.btn-red:hover {
  background-color: #b71c1c;
}

.btn-secondary {
  background-color: #f5f5f5;
  color: #333;
}

.btn-secondary:hover {
  background-color: #e0e0e0;
}
</style>

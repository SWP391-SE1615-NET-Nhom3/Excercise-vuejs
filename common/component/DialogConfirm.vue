<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue'
import { useDialogStore } from '../../src/store'
import { computed } from 'vue'

const dialogStore = useDialogStore()
const commentText = ref('')
const props = defineProps({
  visibleConfirm: {
    type: Boolean,
    required: true
  },
  title: {
    type: String,
    default: '勤怠データ最終承認依頼'
  },
  width: {
    type: String,
    default: '600px'
  },
  height: {
    type: String,
    default: '385px'
  }
})

const emit = defineEmits(['update:visibleConfirm']);
const isSubmitDisabled = computed(() => {
  if (dialogStore.confirmType === 'comment') {
    return !commentText.value.trim()
  }
  return false
})
const showConfirm = () => {
  emit('update:visibleConfirm', false);
}
</script>

<template>
  <el-dialog :modelValue="props.visibleConfirm" :width="props.width" :height="props.height" style="border-radius: 20px;"
    class="custom-dialog" @update:modelValue="$emit('update:visibleConfirm', $event)">
    <template #header>
      <div class="dialog-header">
        <div class="custom-dialog-title">{{ title }}</div>
      </div>
    </template>
    <div class="dialog-content">
      <div class="notification flex justify-center font-medium">
        依頼内容をしっかり確認しましたか？ <br />
        問題がなければ送信を押して下さい。
      </div>
      <div>

        <div class="mt-8">
          <div class="title mb-2">依頼先</div>
          <div class="message-box flex">

            <div class="user-info">
              <img src="../../src/assets/iconassets/Blue - Light.svg" alt="user" class="avatar" />
              <div class="user-infos flex flex-col">
                <span class="name">佐藤 太郎</span>
                <span class="time">ID: 123456</span>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div v-if="dialogStore.confirmType === 'comment'" class="mt-4 w-full">
        <textarea v-model="commentText" class="input-area" placeholder="4月3日の打刻時間が間違えました。修正をお願いします。"></textarea>
      </div>
      <!-- Footer Buttons -->
      <div class="dialog-footer">
        <button @click="showConfirm()" class="btn btn-secondary"><span
            class="text-red-600 font-bold">キャンセル</span></button>
        <button @click="showConfirm()" :disabled="isSubmitDisabled"
          :class="['btn', isSubmitDisabled ? 'btn-disabled' : 'btn-red']">
          送信
        </button>
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
  width: 100%;
}

.btn-disabled {
  background-color: #cccccc;
  cursor: not-allowed;
  opacity: 0.5;
  transition: opacity 0.3s ease;
}

.custom-dialog-title {
  font-weight: 700;
  font-size: 22px;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dialog-content {
  padding: 0;
  margin: 0 31px;
}

.input-area {
  width: 100%;
  min-height: 88px;
  padding: 16px;
  border: none;
  border-radius: 8px;
  background: #F5F5F5;
  font-size: 14px;
  line-height: 1.5;
  resize: none;
}

.input-area::placeholder {
  color: #666;
}

.message-box {
  background: #EFF5FF;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 24px;
  min-height: 120px;
  height: 81px;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px;
  text-align: center;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #E0E0E0;
}

.name {
  font-weight: 600;
  color: #333;
  font-size: 14px;
}

.time {
  color: #666;
  font-size: 12px;
  margin-left: auto;
}

.notification {
  font-size: 15px;
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
  width: 100%;
  height: 48px;
  transition: all 0.3s ease;
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

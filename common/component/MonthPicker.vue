<script setup lang="ts">
import { ElDatePicker } from 'element-plus'
import 'element-plus/es/components/date-picker/style/css'

import { ref } from 'vue'
const month = ref('')
</script>

<template>
  <el-date-picker
    v-model="month"
    type="month"
    placeholder="月を選択"
    format="YYYY年MM月"
    value-format="YYYY-MM"
  />
</template>

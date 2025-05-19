<script setup lang="ts">
defineProps({
  employees: {
    type: Object,
    required: true
  }
})

defineEmits(['show-details', 'show-download'])
</script>

<template>
  <table class="min-w-[900px] bg-white border border-[#E5E5E5] text-sm border-separate" style="border-spacing: 0;">
    <thead>
      <tr class="h-[40px]">
        <th class="text-center px-2 py-3 w-[51px] border border-[#E5E5E5] bg-[#F5F5F5]">No</th>
        <th class="text-left px-2 py-3 w-[139px] border border-[#E5E5E5] bg-[#F5F5F5]">社員番号</th>
        <th class="text-left px-2 py-3 w-[198px] border border-[#E5E5E5] bg-[#F5F5F5]">氏名</th>
        <th class="text-left px-2 py-3 w-[199px] border border-[#E5E5E5] bg-[#F5F5F5]">所属支店・会社</th>
        <th class="text-left px-2 py-3 w-[362px] border border-[#E5E5E5] bg-[#F5F5F5]">所属部署</th>
        <th class="text-left px-2 py-3 w-[190px] border border-[#E5E5E5] bg-[#F5F5F5]">契約形態</th>
        <th class="text-left px-2 py-3 w-[190px] border border-[#E5E5E5] bg-[#F5F5F5]">ステータス</th>
        <th class="text-center px-2 py-3 w-[131px] border border-[#E5E5E5] bg-[#F5F5F5]">操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="emp in employees" :key="emp.no" class="h-[56px]">
        <td class="text-center align-middle px-2 py-3 w-[51px] border border-[#E5E5E5]">{{ emp.no }}</td>
        <td class="text-left px-2 py-3 w-[139px] border border-[#E5E5E5]">{{ emp.code }}</td>
        <td class="text-left px-2 py-3 w-[198px] border border-[#E5E5E5]">{{ emp.name }}</td>
        <td class="text-left px-2 py-3 w-[199px] border border-[#E5E5E5]">{{ emp.branch }}</td>
        <td class="text-left px-2 py-3 w-[362px] border border-[#E5E5E5]">{{ emp.dept }}</td>
        <td class="text-left px-2 py-3 w-[190px] border border-[#E5E5E5]">{{ emp.contract }}</td>
        <td class="text-left px-2 py-3 w-[190px] border border-[#E5E5E5]">{{ emp.status }}</td>
        <td class="text-left px-2 py-3 w-[131px] border border-[#E5E5E5] h-[56px]">
          <div class="flex gap-2 items-center">
            <button
              @click="$emit('show-details', emp)"
              class="inline-flex items-center justify-center bg-transparent border-none cursor-pointer text-[#d32c2c] hover:text-[#b71c1c] w-[40px] h-[40px]"
              title="詳細"
            >
              <img src="@/assets/iconassets/Eye.svg" alt="view" />
            </button>
            <button
              @click="$emit('show-download', emp)"
              class="inline-flex items-center justify-center bg-transparent border-none cursor-pointer text-[#d32c2c] hover:text-[#b71c1c] w-[40px] h-[40px]"
              title="ダウンロード"
            >
              <img src="@/assets/iconassets/IconDownload.svg" alt="download" />
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.table-container {
  overflow-x: auto;
  width: 100%;
}

thead th {
  font-weight: 600;
  color: #333;
}

tbody td {
  color: #666;
}

button:hover {
  opacity: 0.8;
}

/* Transition effects */
.table-row-enter-active,
.table-row-leave-active {
  transition: all 0.3s ease;
}

.table-row-enter-from,
.table-row-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>

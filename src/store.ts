import { defineStore } from 'pinia'

export const useDialogStore = defineStore('dialog', {
  state: () => ({
    confirmType: '',
  }),

  actions: {
    showConfirmDialog(type: string) {
      this.confirmType = type
    },
  },
})

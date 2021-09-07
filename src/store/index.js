import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => ({
    enteredValue: '',
    items: [],
  }),
  actions: {
    addEvent() {
      if (this.enteredValue == '') {
        alert('type something')
      } else {
        console.log(this.enteredValue)
        this.items.push(this.enteredValue)
      }
      return (this.enteredValue = '')
    },
    deleteEvent(item) {
      var index = this.items.indexOf(item)
      this.items.splice(index, 1)
    },
  },
})

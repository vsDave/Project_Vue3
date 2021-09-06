<template>
  <div>
    <h1 class="m-4 text-3xl font-bold text-center underline">To Do list</h1>
    <input
      type="text"
      placeholder=" type here"
      class="p-2 text-xl border border-gray-700 rounded-md"
      v-model="enteredValue"
    />
    <button
      @click="addEvent"
      class="p-2 mx-2 text-xl text-white bg-gray-600 rounded-md"
    >
      Add to do
    </button>
    <ul>
      <li
        class="flex justify-around p-2 m-10 text-xl border-b-2 border-gray-400"
        v-for="(item, index) in items"
        :key="index"
      >
        <h1 @click="doneTodo(index)" :id="index">
          {{ index + 1 }}.
          {{ item }}
        </h1>
        <button @click="deleteEvent(item)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const enteredValue = ref('')
    const items = ref([])
    function addEvent() {
      if (enteredValue.value == '') {
        alert('type something')
      } else {
        items.value.push(enteredValue.value)
      }
      return (enteredValue.value = '')
    }
    function deleteEvent(item) {
      var index = items.value.indexOf(item)
      items.value.splice(index, 1)
    }
    function doneTodo(index) {
      document.getElementById(index).style.textDecorationLine = 'line-through'
    }

    return { enteredValue, items, addEvent, deleteEvent, doneTodo }
  },
}
</script>

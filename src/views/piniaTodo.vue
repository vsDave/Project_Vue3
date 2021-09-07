<template>
  <div>
    <h1
      class="p-2 m-4 text-3xl font-bold text-center text-white underline bg-indigo-500 "
    >
      To Do list
    </h1>
    <input
      type="text"
      placeholder=" type here"
      class="p-2 text-xl border border-indigo-500 rounded-md"
      v-model="todoStore.enteredValue"
    />
    <button
      @click="todoStore.addEvent"
      class="p-2 mx-2 text-xl text-white bg-indigo-500 rounded-md"
    >
      Add to do
    </button>
    <ul>
      <li
        class="flex justify-around p-2 m-10 text-xl border-b-2 border-indigo-500 "
        v-for="(item, index) in todoStore.items"
        :key="index"
      >
        {{ index + 1 }}.
        {{ item }}

        <button
          class="font-bold text-gray-900"
          @click="todoStore.deleteEvent(item)"
        >
          Remove
        </button>
      </li>
    </ul>
  </div>
</template>
<script>
import { useStore } from '../store/index'
export default {
  setup() {
    const todoStore = useStore()

    return { todoStore }
  },
}
</script>

<template>
  <div class="flex flex-col mx-20 my-10 g-blue-400b">
    <h1
      style="font-family: 'Nova Cut', cursive"
      class="m-5 text-6xl text-center"
    >
      Services
    </h1>
    <div
      @click="item.isActive = !item.isActive"
      v-for="(item, index) in items"
      :key="index"
      :class="`flex flex-row justify-around p-6 mx-10 my-5 text-3xl text-center text-white  cursor-pointer ${
        item.isActive ? ' bg-purple-500 ' : ' bg-pink-500'
      }`"
    >
      <h1>{{ item.title }}</h1>
      <p>${{ item.amount }}.00</p>
    </div>
    <div
      class="flex flex-row justify-around p-6 mx-10 my-5 mb-10 text-3xl font-bold text-center text-white bg-green-600 "
    >
      <h1>Total</h1>

      <p>${{ total }}.00</p>
    </div>
  </div>
</template>

<script>
import { computed, reactive, ref } from 'vue'
export default {
  setup() {
    const tot = ref(0)
    const items = reactive([
      {
        id: 1,
        title: 'Web development',
        amount: 300,
        isActive: false,
      },
      {
        id: 2,
        title: 'Design',
        amount: 400,
        isActive: false,
      },
      {
        id: 3,
        title: 'Integration',
        amount: 250,
        isActive: false,
      },
      {
        id: 4,
        title: 'Training',
        amount: 220,
        isActive: false,
      },
    ])
    const total = computed(() => {
      let tot = 0
      items.filter((item) => {
        if (item.isActive) {
          tot += item.amount
        }
      })
      return tot
    })

    // function add(item) {
    //   console.log('h')
    //   item.isActive = !item.isActive
    //   //   if (item.isActive == true) {
    //   //     tot.value += item.amount
    //   //   } else {
    //   //     tot.value -= item.amount
    //   //   }
    // }
    return { items, tot, total }
  },
}
</script>

<style></style>

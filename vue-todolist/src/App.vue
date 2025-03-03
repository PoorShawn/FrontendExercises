<template>
  <h1>Vue Todolist</h1>
  <div>
    <div class="formArea">
      <input type="text" v-model="newItem"/>
      <button @click="handleInput">Add</button>
    </div>
    <ul class="listArea">
      <li
        v-for="item in data"
        :key="index"
        :style="{ textDecoration: item.completed ? 'line-through' : 'none'}"
      >
        <input type="checkbox" v-model="item.completed"/>
        {{ item.name }}
        <button @click="handleDelete(index)">delete</button>
      </li>
    </ul>

  </div>
</template>

<script setup>
import { ref } from 'vue';

let data = ref([
  {
    name: "make dinner",
    completed: false
  },
  {
    name: "make lunch",
    completed: false
  },
  {
    name: "make breakfast",
    completed: false
  }
])

let newItem = ref("");

const handleInput = () => {
  data.value[data.value.length] = {
    name: newItem.value,
    completed: false
  };
}

const handleDelete = (index) => {
  data.value.splice(index, 1);
}

</script>

<style scoped>
/* 样式设置 */
ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 5px 0;
}
</style>
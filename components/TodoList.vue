<template>
  <div>
    <ul>
      <item-todo
        v-for="item in todos"
        :title="item.title"
        :key="item.id"
        :id="item.id"
      />
    </ul>
  </div>
</template>

<script>
import ItemTodo from "./ItemTodo.vue";
export default {
  name: "TodoList",
  props: ["todos"],
  components: {
    ItemTodo,
  },
  props: ["todos"],
};
</script>

<style>
</style>
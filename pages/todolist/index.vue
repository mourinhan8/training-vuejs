<template>
  <div>
    <h1>This is my todo list</h1>
    <div>
      <todo-list :todos="todos" />
    </div>
  </div>
</template>

<script>
import TodoList from "../../components/TodoList.vue";
export default {
  components: {
    TodoList,
  },
  data() {
    return {
      todos: [],
    };
  },
  created: async function () {
    const config = {
      params: {
        _limit: 5,
      },
    };
    try {
      const res = await this.$axios.$get(
        "https://jsonplaceholder.typicode.com/todos",
        config
      );
      this.todos = res;
    } catch (err) {
      console.log(err);
    }
  },
};
</script>

<style>
</style>
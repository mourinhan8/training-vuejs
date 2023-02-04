<template>
  <li><input type="checkbox" /> {{ title }}</li>
</template>

<script>
export default {
  name: "ItemTodo",
  props: ["title", "id"],
};
</script>

<style>
</style>
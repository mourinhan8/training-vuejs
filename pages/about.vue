<template>
  <div>
    <h1>About page</h1>
    <p>This is an app that display API of jokes</p>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "About the app",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Best place for corny dad jokes",
        },
      ],
    };
  },
};
</script>

<style>
</style>
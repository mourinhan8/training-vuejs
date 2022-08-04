<template>
  <div>
    <search-jokes @search-text="searchText" />
    <joke-list
      v-for="joke in jokes"
      :key="joke.id"
      :id="joke.id"
      :joke="joke.joke"
    />
  </div>
</template>

<script>
import JokeList from "../../components/Joke";
import SearchJokes from "../../components/SearchJokes.vue";
export default {
  components: {
    JokeList,
    SearchJokes,
  },
  data() {
    return {
      jokes: [],
    };
  },
  created: async function () {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };
    try {
      const res = await this.$axios.$get(
        "https://icanhazdadjoke.com/search",
        config
      );
      this.jokes = res.results;
    } catch (e) {
      console.log(err);
    }
  },
  methods: {
    async searchText(text) {
      const config = {
        headers: {
          Accept: "application/json",
        },
      };
      try {
        const res = await this.$axios.$get(
          `https://icanhazdadjoke.com/search?term=${text}`,
          config
        );
        this.jokes = res.results;
      } catch (e) {
        console.log(err);
      }
    },
  },
  head() {
    return {
      title: "Dad jokes",
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
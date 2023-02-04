<template>
  <div>
    <h1>
      Welcome <span v-if="name">{{ name }}</span> to the best corny dad jokes
      app on the web.
    </h1>
    <input v-model="name" type="text" />
    <p>{{ typing }}</p>
    <button class="changeName" @click="onChangeName">
      Click to change name
    </button>
    <button @click="onShowModal">ToggleModal</button>
    <div class="modal" v-if="isShowModal">Show when you clicked</div>
  </div>
</template>

<script>
import _, { debounce } from "lodash";
export default {
  data() {
    return {
      name: "",
      typing: "",
      isShowModal: false,
    };
  },
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
  created() {
    console.log(this.$store.getters.color);
    this.$store.dispatch("setColor", "#111111");
    console.log("Color after change");
    console.log(this.$store.getters.color);
  },
  methods: {
    onShowModal() {
      console.log("onShowModal is ran");
      this.isShowModal = !this.isShowModal;
    },
    getTyping: debounce(function () {
      this.typing = "";
    }, 500),
    onChangeName() {
      this.name = "hong";
    },
  },
  computed: {},
  watch: {
    onChangeName: function () {
      this.typing = "User is typing...";
      this.getTyping();
    },
  },
};
</script>

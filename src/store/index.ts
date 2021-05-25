import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {},
  mutations: {},
  actions: {
    async getData() {
      console.log("ge data run");
      const resp = await axios.get("http://localhost:3000");
      console.log("lol", resp);
    },
  },
  modules: {},
});

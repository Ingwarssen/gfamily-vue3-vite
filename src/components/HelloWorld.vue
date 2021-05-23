<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>
    Edit <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  <div>
    <h2>Filter LearnVue Articles</h2>
    <input type="text" placeholder="Filter Search" v-model="query" />
    {{ query }}
    <button @click="reset">Reset</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const query = ref('');

    const reset = (evt) => {
      query.value = ''; // clears the query
    };

    return {
      reset,
      query,
    };
  },
};
</script>

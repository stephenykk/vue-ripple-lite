
<template>
  <main>
    <h1>{{ msg }}</h1>
    <div class="data">{{ data }}</div>
    <TheWelcome />
  </main>
</template>


<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import TheWelcome from '../components/TheWelcome.vue'

const msg = ref('')
const data = reactive({
  name: 'lufy',
  like: 'fight'
})


onMounted(() => {
  console.log('home page mounted...');
  msg.value = 'welcome back home';
})


</script>

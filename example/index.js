import Vue from 'vue';
import rippleLite from '../src/ripple';
Vue.use(rippleLite);

import Example from './example.vue';

new Vue({
    render: h => h(Example)
}).$mount('#app');
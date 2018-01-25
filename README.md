vue-ripple-lite
===
vue指令，实现APP里常见的波纹效果

install
---

    npm i vue-ripple-lite --save
    // 或者用cnpm
    cnpm i vue-ripple-lite --save

usage
---

    // main.js
    import rippleLite from 'vue-ripple-lite';
    Vue.use(rippleLite);

    // page.vue
    <div class="box" v-ripple></div>

    <!-- 设置波纹最终的大小，可控制波纹扩散速度 -->
    <div class="example2" v-ripple data-size="1000"></div>  

demo
---
开启本地web服务，chrome模拟手机设备，点击预览波纹效果

    git clone   xxxx.git
    cnpm i
    npm run dev

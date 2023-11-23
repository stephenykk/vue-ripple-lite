vue-ripple-lite
===
vue指令 `v-ripple`，实现Android App里常见的波纹效果

> 适用于 vue3 项目

install
---

    pnpm i vue-ripple-lite

usage
---

    // main.js
    import rippleLite from 'vue-ripple-lite';
    
    import { createApp } from 'vue'
    import App from './App.vue'

    const app = createApp(App)
    
    app.use(rippleLite);

    // page.vue
    <div class="box" v-ripple></div>

    <!-- 设置波纹最终的大小，可控制波纹扩散速度 -->
    <div class="example2" v-ripple data-size="1000"></div>  

    <!-- 设置波纹颜色 -->
    <div class="example2" v-ripple data-size="1000" data-background="rgba(200, 233, 200, .3)"></div> 

    <!-- 设置波纹范围为content-box, 默认为padding-box -->
    <div class="example2" v-ripple data-size="500" data-background="rgba(200, 233, 200, .3)" data-range="content-box"></div>  

demo
---
开启本地web服务，chrome模拟手机设备，点击预览波纹效果

    git clone   https://github.com/stephenykk/vue-ripple-lite.git
    cd vue-ripple-lite
    pnpm i
    pnpm dev # 访问 http://localhost:3030/example.html , 模拟手机，预览demo

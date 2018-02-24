vue-ripple-lite
===
vue指令，实现APP里常见的波纹效果, 适用于vue2.x(*因为vue1.x 和 vue2.x指令的钩子函数变化较大，vue1.x的需自行修改..*)

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

    <!-- 设置波纹颜色 -->
    <div class="example2" v-ripple data-size="1000" data-background="rgba(200, 233, 200, .3)"></div> 

    <!-- 设置波纹范围为content-box, 默认为padding-box -->
    <div class="example2" v-ripple data-size="500" data-background="rgba(200, 233, 200, .3)" data-range="content-box"></div>  

demo
---
开启本地web服务，chrome模拟手机设备，点击预览波纹效果

    git clone   https://github.com/stephenykk/vue-ripple-lite.git
    cd vue-ripple-lite
    cnpm i
    npm run dev # 访问 http://localhost:8080/example.html , 模拟手机，预览demo

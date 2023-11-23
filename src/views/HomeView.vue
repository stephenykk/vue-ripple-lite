
<template>
  <main>
    <!-- <h1>{{ msg }}</h1>
    <div class="data">{{ data }}</div> -->
    <div class="example">
      <!-- 波纹扩展的速度，size参数控制 -->
      <div class="box" v-ripple data-size="500" data-background="rgba(0, 0, 0, .08)" data-range="content-box">
        <div class="box-inner">
          <h3>支持移动端和PC端</h3>
          最近一直忙着公司项目的事，（ps：同感的也给个赞吧）
          　　现在前端的就是一直
        </div>
      </div>

      <div class="box" v-ripple data-size="500" data-background="rgba(200, 255, 0, .08)" data-range="content-box">
        <div class="box-inner">
          <h3>支持移动端和PC端</h3>
          最近一直忙着公司项目的事，（ps：同感的也给个赞吧）
          　　现在前端的就是一直
        </div>
      </div>

      <div class="box" v-ripple data-size="500" data-background="rgba(255, 0, 0, .08)" data-range="content-box">
        <div class="box-inner">
          <h3>支持移动端和PC端</h3>
          最近一直忙着公司项目的事，（ps：同感的也给个赞吧）
          　　现在前端的就是一直
        </div>
      </div>

      <div class="box" v-ripple data-size="500" data-background="rgba(0, 255, 0, .08)" data-range="content-box">
        <div class="box-inner">
          <h3>支持移动端和PC端</h3>
          最近一直忙着公司项目的事，（ps：同感的也给个赞吧）
          　　现在前端的就是一直
        </div>
      </div>

      <div class="box" v-ripple data-size="500" data-background="rgba(0, 0, 255, .08)" data-range="content-box">
        <div class="box-inner">
          <h3>支持移动端和PC端</h3>
          最近一直忙着公司项目的事，（ps：同感的也给个赞吧）
          　　现在前端的就是一直
        </div>
      </div>
    </div>
  </main>
</template>


<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';

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

<style scoped>
.example {
  background: #fff;
}

.box {
  width: 300px;
  height: 300px;
  overflow: hidden;
  margin: 30px auto;
  padding: 20px;
  border: 1px solid #ddd;
}
</style>

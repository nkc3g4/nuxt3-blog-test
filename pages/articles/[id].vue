<template>
  <div>
    <TheHeader />
    <a-layout class="layout">
      <a-layout-content style="padding: 0 50px; margin-top: 25px">
        <div
          :style="{ background: '#fff', padding: '24px', minHeight: '280px' }"
        >
          <!-- <NuxtLayout name="navbar"> Hello world! </NuxtLayout> -->
          <h1 class="title">{{ title }}</h1>
          <div class="pubtime">{{ pub_time }}</div>
          <div class="content" v-html="content"></div>

          <TheFooter />
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </div>
</template>
<script lang="ts" setup>
const route = useRoute();
const current_page = ref(parseInt(route.params.id as string));
const { data } = await useFetch(
  "http://localhost:7001/api/article/" + current_page.value
);
let data_val: any = data.value;
let title = data_val.title;
let content = data_val.content;
let pub_time = new Date(data_val.createtime).toString();
console.log(data);
</script>
<style>
.pubtime{
  font-style: italic;
  margin-bottom: 10px;
}
</style>

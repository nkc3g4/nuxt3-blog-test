<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <TheHeader />
    <!-- {{ $route.params.page }} -->
    <!-- I'M PARENT -->
    <a-layout class="layout">
      <a-layout-content style="padding: 0 50px; margin-top: 25px">
        <div
          :style="{ background: '#fff', padding: '24px', minHeight: '280px' }"
        >
          <NuxtLayout name="navbar"> Hello world! </NuxtLayout>
          <div v-for="item of items">
            <!-- {{ item.id }} -->
            <NuxtLink :to="`/articles/${item.id}`" class="articleTitle">{{ item.title }}</NuxtLink>

            <br />
            {{ item.content }}
          </div>
          <a-pagination
            v-model:current="current_page"
            :total="item_total"
            :showSizeChanger="false"
            @change="navigate"
          />
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
const current_page = ref(parseInt(route.params.page as string));
const { data } = await useFetch(
  "http://localhost:7001/api/article/list/10/" + current_page.value
);
let data_val: any = data.value;
const items = data_val.data;
const item_total = parseInt(data_val.count);
definePageMeta({
  key: (route) => route.fullPath,
});

console.log(route.params.page);
function navigate(page, _) {
  return navigateTo({
    path: "/home/" + page,
  });
}
</script>
<style>
.articleTitle{
  font-size: large;
}
</style>
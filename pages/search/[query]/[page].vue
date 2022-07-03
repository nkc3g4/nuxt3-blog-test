<template>
  <div>
    <TheHeader />
    <a-layout class="layout">
      <a-layout-content style="padding: 0 50px; margin-top: 25px">
        <div
          :style="{ background: '#fff', padding: '24px', minHeight: '280px' }"
        >
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
let query = route.params.query as string;
let page = route.params.page;

console.log(query, page);
</script>

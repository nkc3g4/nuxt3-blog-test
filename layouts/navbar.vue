<template>
  <div>
    <a-input-search
      v-model:value="value"
      placeholder="input search text"
      style="width: 200px"
      @search="onSearch"
    />

    <slot />
  </div>
</template>
<script lang="ts" setup>
const value = ref<string>("");

const onSearch = (searchValue: string) => {
  // console.log("use value", searchValue);
  // console.log("or use this.value", value.value);
  navigateTo({
    path: "/search/" + searchValue +"/1",
  });
};
</script>

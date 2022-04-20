<template>
    <a-menu v-model:selectedKeys="current" mode="horizontal">
        <a-menu-item key="index">
            Index
        </a-menu-item>
        <a-menu-item key="app" disabled>
            Navigation Two
        </a-menu-item>
        <a-menu-item key="alipay">
            <a href="https://antdv.com" target="_blank" rel="noopener noreferrer">
                Navigation Four - Link
            </a>
        </a-menu-item>
    </a-menu>

</template>
<script lang="ts" setup>
const current = ref<string[]>(['index']);

</script>
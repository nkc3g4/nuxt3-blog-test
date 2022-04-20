<template>

    <div>
        <!-- <NuxtWelcome /> -->
        <TheHeader />
        {{ $route.params.page }}
        I'M PARENT
        <NuxtLayout name="navbar">
            Hello world!
        </NuxtLayout>
        <div v-for="item of items">
            {{ item.id }}
            <NuxtLink :to="`/articles/${item.id}`">{{ item.title }}</NuxtLink>

            <br />
            {{ item.content }}
        </div>
        <a-pagination v-model:current="current_page" :total="item_total" :showSizeChanger='false' @change="navigate" />
        <TheFooter />

    </div>
</template>
<script lang='ts' setup>
const route = useRoute()
const current_page = ref(parseInt(route.params.page as string));
const { data } = await useFetch('http://localhost:9589/testlist' + current_page.value + '.json')
let data_val: any = data.value;
const items = data_val.index;
const item_total = parseInt(data_val.total);
definePageMeta({
    key: route => route.fullPath
})

console.log(route.params.page);
function navigate(page, _) {
    return navigateTo({
        path: '/home/' + page,

    })
}

</script>

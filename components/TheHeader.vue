<template>
    <div>
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
        <ClientOnly>
            <div v-if="logedin">

                User STATUS:
                {{ userid }}
                <a-button @click="logout">LOGOUT</a-button>

                <div>
                    <a-textarea v-model:value="newtitle" placeholder="Autosize height based on content lines"
                        auto-size />
                    <div style="margin: 24px 0" />
                    <a-textarea v-model:value="newcontent"
                        placeholder="Autosize height with minimum and maximum number of lines"
                        :auto-size="{ minRows: 2 }" />
                    <a-button @click="newArticle">post NEW ARTICLE</a-button>
                </div>

            </div>


        </ClientOnly>
    </div>
</template>
<script lang="ts" setup>
import axios from 'axios';

const current = ref<string[]>(['index']);
const userid = ref<number>(-1);
const logedin = ref<boolean>(false);
const newtitle = ref<string>('');
const newcontent = ref<string>('');
const logout = () => {
    console.log('LOGOUT');
    if (process.client) {
        localStorage.removeItem('token');
        //navigateTo('/');
    }
    navigateTo('/');
};
const newArticle = () => {
    if (process.client) {
        let tk = localStorage.getItem('token');
        const api = `http://localhost:7001/api/article/new`;
        axios.post(api, { title: newtitle.value, content: newcontent.value, userid: 0 }, { headers: { "Authorization": `Bearer ${tk}` } })
            .then(res => {
                console.log(res.data);

            });

    }
};
if (process.client) {
    let tk = localStorage.getItem('token');
    const api = `http://localhost:7001/api/user/1`;
    axios.get(api, { headers: { "Authorization": `Bearer ${tk}` } })
        .then(res => {
            console.log('uid', res.data.data.uid);
            userid.value = res.data.data.uid;
            // userid.value = res.data.uid;
            logedin.value = true;
        })
        .catch(reason => {
            console.log(reason);
        });

}
</script>
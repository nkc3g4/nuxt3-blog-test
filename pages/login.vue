<template>
    <div style="width: 500px;">
        <ClientOnly>
            <a-input v-model:value="userid" placeholder="Basic usage" />
            <a-input-password v-model:value="password" placeholder="input password" />
            <a-button type="primary" @click="onSubmit">Primary Button</a-button>
        </ClientOnly>
        <p>Increment the Store:</p>

        <button @click="counter.increment()" data-testid="increment">+1</button>
        <button @click="counter.increment(10)">+10</button>
        <button @click="counter.increment(100)">+100</button>
        <button @click="counter.n++">Direct Increment</button>

    </div>
</template>
<script lang="ts" setup>
import { useCounter } from "~/stores/counter";
import { ref } from 'vue';
import axios from "axios";
const counter = useCounter()

const userid = ref<number>(1);
const password = ref<string>('');
const onSubmit = () => {
    if (process.client) {
        console.log(userid, password);
        axios.post('http://localhost:7001/auth/login/', {
            id: userid.value,
            password: password.value
        })
            .then(function (response) {
                let token = response.data.t;
                if (token) {
                    localStorage.setItem('token', token);
                    console.log(response);
                    navigateTo('/');
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
};
</script>

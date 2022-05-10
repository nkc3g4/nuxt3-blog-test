<template>
    <div style="width: 500px;">
        <ClientOnly>
            <a-input v-model:value="userid" placeholder="Basic usage" />
            <a-input-password v-model:value="password" placeholder="input password" />
            <vue-hcaptcha sitekey="34447ca7-de50-4c60-80f5-1119670e1337" @verify="onVerify" @expired="onExpire"
                @challenge-expired="onChallengeExpire" @error="onError"></vue-hcaptcha>

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
import VueHcaptcha from '@hcaptcha/vue3-hcaptcha';

import { useCounter } from "~/stores/counter";
import { ref } from 'vue';
import axios from "axios";
const counter = useCounter()

const userid = ref<number>(1);
const password = ref<string>('');
const verified = ref(false);
const expired = ref(false);
const htoken = ref("");
const eKey = ref("");
const error = ref("");

function onVerify(tokenStr, ekey) {
    verified.value = true;
    htoken.value = tokenStr;
    eKey.value = ekey;
    console.log(`Callback token: ${tokenStr}, ekey: ${ekey}`);
}
function onExpire() {
    verified.value = false;
    htoken.value = null;
    eKey.value = null;
    expired.value = true;
    console.log('Expired');
}
function onChallengeExpire() {
    verified.value = false;
    htoken.value = null;
    eKey.value = null;
    expired.value = true;
    console.log('Challenge expired');
}
function onError(err) {
    htoken.value = null;
    eKey.value = null;
    error.value = err;
    console.log(`Error: ${err}`);
}

const onSubmit = () => {
    if (process.client) {
        console.log(userid, password);
        axios.post('http://localhost:7001/auth/login/', {
            id: userid.value,
            password: password.value,
            htoken: htoken.value
        })
            .then(function (response) {
                console.log(response);
                let token = response.data.t;
                let rt = response.data.rt;
                if (token) {
                    localStorage.setItem('token', token);
                    localStorage.setItem('rt', rt);
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

<template>
    <div>
        ALREADY LOGGED IN
    </div>
</template>
<script lang="ts" setup>
import axios from 'axios';

let tk = null;
if (process.client) {
    tk = localStorage.getItem('token');
    const api = `http://localhost:7001/api/article/new`;
    axios.post(api, { title: "JWTTEST", content: "WWW", userid: 0 }, { headers: { "Authorization": `Bearer ${tk}` } })
        .then(res => {
            console.log(res.data);
            // this.setState({
            //     items: res.data,  /*set response data in items array*/
            //     isLoaded: true,
            //     redirectToReferrer: false
            // })

        });

}
</script>
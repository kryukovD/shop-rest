<template>
    <div v-if="user">
        <div class="container">
            <h1> {{ user.name }}</h1>
            dsadsa
        </div>
    </div>
</template>

<script >
export default {
    data() {
        return {
            user:JSON.parse(localStorage.getItem('user')) || false
        }
    },
    mounted:function(){
        // localStorage.removeItem('user');
    }

}
</script>
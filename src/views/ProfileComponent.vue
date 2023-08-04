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
            user:JSON.parse(localStorage.getItem('user')) 
        }
    },
    mounted:function(){
        console.log(this.user)
        // localStorage.removeItem('user');
    }

}
</script>
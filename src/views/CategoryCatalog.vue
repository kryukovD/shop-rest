<script>
import  CatalogComponent from "../components/CatalogCategoryComponent.vue"
  export default{
     data(){

     },
     components:{
        "app-catalog":CatalogComponent
     }
  }
</script>

<template>
    <section class="category-catalog">
        <div class="container">
            <app-catalog></app-catalog>
        </div>
    </section>
</template>
<style scoped>
 
</style>

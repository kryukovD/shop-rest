<script >
  import AppCatalog from "../components/CatalogComponent.vue"
  import AppFooter from "../components/FooterComponent.vue"
  export default{
    components:{
      "app-catalog":AppCatalog,
      "app-footer":AppFooter
  }
}
</script>

<template>
  <main>
    <app-catalog></app-catalog>
  </main>
  <app-footer  ></app-footer>

</template>

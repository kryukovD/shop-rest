<template>
    <main class="d-flex flex-column">
    <section class="sectiom-orders">

    </section>
    </main>
    <app-footer></app-footer>
</template>
<script>
import FooterComponent from "../components/FooterComponent.vue";
import BreadCrumbsComponent from "../components/Breadcrumb.vue"
export default {
  data() {
    return {
        
    };
  },
  components: {
    "app-footer": FooterComponent,
    "Breadcrumbs":BreadCrumbsComponent
  }
}
</script>

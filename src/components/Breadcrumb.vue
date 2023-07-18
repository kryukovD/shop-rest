<template>
  <div class="breadcrumb">
    <div class="d-flex">
      <router-link v-for="(item, index) in items" :key="index" :to="item.path">{{
        item.text
      }}</router-link>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "Breadcrumbs",
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style scoped>
 .breadcrumb > div{
  flex-wrap: wrap;
  gap: 5px;
 }
</style>
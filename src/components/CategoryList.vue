<template>
  <div class="category-list" >
    <category-item 
    @update="handleCategoryUpdate"
    v-for="category in categories"
    :category="category"
    :key="category.id"
    ></category-item>
  </div>
</template>
<script>
import CategoryItem from "@/components/CategoryItem.vue";

export default {
  components: { CategoryItem },
  props: {
    categories: {
      type: Array,
      required: true,
    },
    
  },
  methods: {
    handleCategoryUpdate(category) {
      this.$emit('update', category);
    },
  },
};
</script>
<style lang="sass">
.category-list
  display: flex
  flex-wrap: wrap
  gap: 7px
  justify-content: flex-start
</style>
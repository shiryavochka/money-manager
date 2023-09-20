<template>
  <div class="search-wrapper">
    <span>Search:</span>
    <my-input
    type="text"
    v-model="modelValue"
    @input="changeOption"    
    ></my-input>
  </div>
</template>
<script>
export default {
  name: "FilterComponent",
  modelValue: {
      type: String
    },
   methods: {
    changeOption(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  }
};
</script>
<style scoped lang="sass">
span 
  margin: auto 10px
</style>
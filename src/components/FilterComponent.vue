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
<style scoped>
span {
  margin: auto 10px  ;
}
</style>
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
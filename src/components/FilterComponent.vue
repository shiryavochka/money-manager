<template>
  <div>
    <span>Search:</span>
    <input
    type="text"
    v-model="modelValue"
    @input="changeOption"    
    />
  </div>
</template>
<style scoped>
span {
  margin-right:auto ;
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
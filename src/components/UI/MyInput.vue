<template>
    <input :value="modelValue" @input="updateInput" >
</template>
<style lang="scss" scoped>
input {
  padding: 7px 12px;
  border: none;
  border-radius: 11px;
  margin-right: 15px;
}
@media (max-width: 540px) {
  input {
    margin: 5px;
  }  
}
</style>
<script>
export default {
  name: 'my-input'
, props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>
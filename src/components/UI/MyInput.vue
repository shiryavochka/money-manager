<template>
    <input :value="modelValue" @input="updateInput" >
</template>
<style lang="scss" scoped>
.input {
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}
@media (max-width: 540px){
  .input{margin: 5px;} 
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
 
 


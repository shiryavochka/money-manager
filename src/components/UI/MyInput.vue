<template>
  <input :value="modelValue" @input="updateInput" >
</template>
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
<style lang="sass" scoped>
input 
  padding: 7px 12px
  border: none
  border-radius: 11px
  border:1px solid #7e7575
</style>
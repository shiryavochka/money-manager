<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>
  
<script>
export default {
    name: 'my-button'
  }
</script>
  
<style scoped lang="sass">
.btn
  padding: 7px 15px
  background: none
  color: white
  border: none
  background-color: #0378d5
  border-radius: 11px

  &:hover
    background-color: grey

@media (max-width: 540px)
  .btn
    padding: 4px 5px
    margin: 0px 5px
</style>  
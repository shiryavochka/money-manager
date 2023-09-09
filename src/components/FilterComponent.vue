<template>
  <div>
    <input
      type="text" v-model="modelValue"  @change="changeOption"
       
    
    />
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
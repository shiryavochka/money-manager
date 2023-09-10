<template>
    <select v-model="selectedOption" @change="changeOption">
      <option disabled default value="">Select a category</option>
      <option
        v-for="option in options"
        :key="option.name"
        :value="option.name"
      >
        {{ option.name }}
      </option>
    </select>
  </template>
 
<script>
export default {
  name: 'my-select',
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      selectedOption: this.modelValue,
    };
  },  methods: {
        changeOption(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  }
};
</script>

<style scoped>
select {    border-radius: 11px;}
</style>

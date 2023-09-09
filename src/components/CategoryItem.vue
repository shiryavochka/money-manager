<template>
  <label class="category-item">
    <input type="checkbox" @change="changeCat" :value="category.name" v-model="isChecked">
    {{ category.name }} <!-- {{ category.name || '' }}  Добавляем проверку на наличие свойства 'name' -->
  </label>
</template>

<script>
export default {
  props: {
    category: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      // Уберите isChecked из data
    };
  },
  computed: {
    isChecked: {
      get() {
        return false; // Начальное значение false
      },
      set(value) {
        this.$emit('update', { category: this.category, isChecked: value });
      },
    },
  },
};
</script>
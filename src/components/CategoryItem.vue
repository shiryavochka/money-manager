<template>
  <label class="category-item" :class="{ 'active': isActive }">
    <input type="checkbox" 
    @change="changeCat"
    :value="category.name"
    v-model="isChecked"
    >{{ category.name }}<!-- {{ category.name || '' }}  Добавляем проверку на наличие свойства   'name' -->
  </label>
</template>
<style>
input[type=checkbox] {
  display: none;
}
.category-item{
  padding: 5px 15px;
  background-color: #a005ca;
  margin-right: 12px;
  color: white;
  border-radius: 11px;
}
.active {
  background-color: #dd236a;
  order: -1;
}
</style>
<script>
export default {
  data(){
    return{
      isActive:false
    }
  },
  props: {
    category: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isChecked: {
      get() {
        return false; // Начальное значение false
      },
      set(value) {
        this.$emit('update', { category: this.category, isChecked: value });
        this.isActive = value === true;
      },
   },
  } 
};
</script>
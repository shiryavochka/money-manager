<template>
  <div class="expense-list" v-if="expenses.length > 0">
    <expense-item 
    v-for="expense in expenses"
    :expense="expense" :options="options"
    :key="expense.dataAdd"
    @updateExpense="updateExpense"
    @remove="$emit('remove', expense)"
    ></expense-item>
    </div>
    <div v-else>
    <h2>There were no expenses, add the first expense</h2>
    </div>
 </template>
<script>
import ExpenseItem from "@/components/ExpenseItem.vue";
export default {
  components: {
    ExpenseItem
  },
  props: {
    expenses: {
      type: Array,
      required: true
    }, options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    // Отправляем событие обновления расхода вверх
    updateExpense(updatedExpense) {
      this.$emit("updateExpense", updatedExpense);
    },
  }
  }
</script>
<style>
</style>
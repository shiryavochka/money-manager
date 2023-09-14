<template>
  <div >
    <div class="expense-list" v-if="expenses.length > 0">
      <expense-item 
        v-for="expense in expenses"
        :expense="expense"
        :key="expense.dataAdd"
        @remove="$emit('remove', expense)"
      ></expense-item>
    </div>
    <div v-else>
    <h2>Трат не было, добавьте первую</h2>
    </div> 
  </div>
 </template>
 
<style lang="scss">
  
</style>

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
    }
  }
     
  }
</script>

  <!-- methods:{
      addExpense() {
          const newExpense = {
              amounts: this.amounts, dataAdd : Date.now(), category:this.category
  
          }
          this.expenses.push(newExpense);
          this.amounts='',
          this.category=''
      },
      
  
  }  -->
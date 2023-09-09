<template>
    <div class="expense-item" >
      <div class="expense-item--name">{{ expense.name }}</div>
      <p>{{ expense.dataAdd }}</p> <!-- Вывод времени -->
      <!-- <p>{{ expense.category }}</p> -->
      <div class="expense-item--amounts">{{ expense.amounts }}</div>
      <my-button>Edit</my-button>
      <my-button @click="$emit('remove', expense)">Delete</my-button>
      
    </div>
</template>
<style lang="scss">
  .expense-item {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 10px;
    color: white;
    border-radius: 8px;
    background: #190d47;
  }
  .expense-item--name{    
    width: 30%;
    font-weight: 700;
    text-align: left;
  }
</style>
<script> 
  export default {
    props: {
      expense: {
        type: Object,
        required: true,
        }
      },     
}
</script>
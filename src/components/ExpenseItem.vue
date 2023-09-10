<template>
    <div class="expense-item" >
      <div class="expense-info"> 
      <div class="expense-info--name">{{ expense.name }}</div>
      <p class="expense-info--date">{{ expense.dataAdd }}</p> <!-- Вывод времени --></div>
      <!-- <p>{{ expense.category }}</p> -->
      <div class="expense-info--amounts">{{ expense.amounts }}</div>
      <div class="btns-wrapper">
      <my-button>Edit</my-button>
      <my-button @click="$emit('remove', expense)">Delete</my-button>
      </div>
      
    </div>
</template>
<style lang="scss">
.expense-info--date{    font-size: 12px;
    margin: 0;
    color: #b776ed;}
    
  .expense-item {
    display: flex;
    padding: 5px;
    align-items: center;
    justify-content:space-between;
    margin: 10px;
    color: white;
    border-radius: 8px;
    background: #190d47;
  }
  .expense-info--name{    
    font-weight: 700;
    text-align: left;
  }
  .expense-info{    
    margin-left: 15px;
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
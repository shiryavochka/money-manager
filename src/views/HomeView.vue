<template>
  <div class="home">
    <h1>Dashboard</h1>
    <div class="container">
      <chart-tabs :categories="categories"
      :expenses="expenses"
      :filtered-jobs="filteredJobs"
      :totalValue="totalValue"></chart-tabs>
    </div>   
    <div class="container">
      <h2>Add Expense</h2>
      <form-add 
      @create="addExpense"
      :options="categories"
      ></form-add>
    </div>
    <div class="container">
      <category-list 
      :categories="categories"
      @update="changeCat"
      ></category-list>
    </div>
    <div class="container"> 
      <h2>Latest transactions</h2>
      <expenses-list  
      :expenses="sortedJobs"  
      :options="categories" 
      @remove="removePost" 
      @updateExpense="updateExpense"
      ></expenses-list>
    </div>
  </div>
</template>
<style> 
.chart-wrap{
  width: 50%;    
  height: 400px;  
}
.chart-info { 
  flex-wrap: wrap;
  display: flex;
  align-items: center;
}
.legend-list {
  width: 100%;
  max-width: 400px;
}
.category-color {    
  width: 30px;
  height: 20px;
  border-radius: 4px;
  margin-right: 15px;
}
.legend-item {
  list-style-type: none;
  display: flex;
  margin: 10px 0;
}
</style>
<script>
import ExpensesList from '@/components/ExpensesList.vue';
import FormAdd from "@/components/FormAdd";
import { toNumber } from '@vue/shared'; 
import ChartTabs from '@/components/ChartTabs.vue';
import CategoryList from "@/components/CategoryList.vue";

export default {
  name: 'HomeView',
  components: {
    ExpensesList,
    ChartTabs,
    CategoryList,
    FormAdd 
  },
  data () {
    return {
      expenses :[
        {  amounts: '1500', dataAdd : '2023-08-05 10:03', category:'house' , name: 'IKEA',},
        {  amounts: '9000', dataAdd : '2023-08-09 12:10', category:'apartment rent',name: 'AirBnB-Rent', },
        {  amounts: '100', dataAdd : '2023-08-10 19:45', category:'sport',name: 'Sportmaster', },
        {  amounts: '500', dataAdd : '2023-08-15 08:33', category:'sport' ,name: 'XFit', },
        {  amounts: '2700', dataAdd : '2023-08-16 10:40', category:'gifts' ,name: 'Flower shop', },
        {  amounts: '1500', dataAdd : '2023-08-16 17:15', category:'services' ,name: 'Haircut', },
        {  amounts: '602', dataAdd : '2023-08-17 09:06', category:'groceries' ,name: 'Vegetables', },
        {  amounts: '980', dataAdd : '2023-08-17 11:57', category:'restaurants' ,name: 'Lunch', },
        {  amounts: '500', dataAdd : '2023-08-18 08:20', category:'health' ,name: 'Therapist', },
        {  amounts: '2800', dataAdd : '2023-08-18 21:01', category:'clothes' ,name: 'Shirts', },
        {  amounts: '1500', dataAdd : '2023-08-19 18:18', category:'entertainments' ,name: 'Cinema', },
        {  amounts: '2500', dataAdd : '2023-08-19 16:47', category:'services' ,name: 'Manicure', },
        {  amounts: '2900', dataAdd : '2023-08-20 19:40', category:'clothes' ,name: 'Jeans', },
        {  amounts: '5420', dataAdd : '2023-08-20 19:58', category:'gifts' ,name: 'Cosmetics', },
        {  amounts: '1700', dataAdd : '2023-08-21 10:15', category:'health' ,name: 'Vitamins', },
        {  amounts: '600', dataAdd : '2023-08-23 15:16', category:'restaurants' ,name: 'Pizza', },
        {  amounts: '1500', dataAdd : '2023-08-25 07:30', category:'transport' ,name: 'Travel card', },
        {  amounts: '664', dataAdd : '2023-08-25 15:10', category:'house' ,name: 'Electricity', },
      ],  
      checked: [], 
      categories : [
        {name:'entertainments', id :1, color:'GreenYellow'},
        {name:'apartment rent', id:2, color:'HotPink'},
        {name:'sport', id:3, color:'LightSeaGreen'},
        {name:'restaurants', id:4, color:'Gold'},
        {name:'house', id:5, color:'MediumSlateBlue'},
        {name:'clothes', id:6, color:'Salmon'},
        {name:'groceries', id:7, color:'DodgerBlue'},
        {name:'services', id:8, color:'DarkOrange'},
        {name:'health', id:11, color:'Indigo'},
        {name:'transport', id:9, color:'MediumAquamarine'},
        {name:'gifts', id:10, color:'Violet'},
      ],
      search: null,
      selectedS:'' ,
    }
    },
    computed:{
       totalValue() {
        return this.expenses.reduce((sum, login) => sum + toNumber(login.amounts), 0);
      },
      sortedJobs() {
        const filteredExpenses = this.filteredJobs;
        // Сортируем отфильтрованные транзакции по дате в убывающем порядке
        return [...filteredExpenses].sort((a, b) => {
          const dateA = new Date(a.dataAdd);
          const dateB = new Date(b.dataAdd);
          return dateB - dateA; // Сравниваем даты в обратном порядке
        });
      },
      filteredJobs() {
        if (this.checked.length === 0) {
          return  this.expenses; // Если ни одна категория не выбрана, возвращаем все расходы
          } else {
          return this.expenses.filter(expense => this.checked.includes(expense.category));
        }
      },
    },
    methods: {
      changeCat(data) {
        const { category, isChecked } = data;
          if (isChecked) {
            this.checked.push(category.name); // Добавляем категорию в выбранные
          } else {
            const index = this.checked.indexOf(category.name);
            if (index !== -1) {
              this.checked.splice(index, 1); // Удаляем категорию из выбранных
            }
          }            
      },
      addExpense(expense) {
        this.expenses.push(expense);
      }, 
      removePost(expense) {
        this.expenses = this.expenses.filter(p => p.dataAdd!== expense.dataAdd);  
      },
      updateExpense(updatedExpense) {
        const index = this.expenses.findIndex(expense => expense.dataAdd === updatedExpense.dataAdd);
        if (index !== -1) {
          this.expenses[index] = updatedExpense; // Обновляем существующую трата
        }
      },
    },
}
</script>
<style>
.container {
    background-color: #0c032c;
    padding: 20px 25px;
    margin: 10px 15px;
    border-radius: 11px;
}
</style>
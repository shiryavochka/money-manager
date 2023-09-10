<template>
  <div class="home">
    <h1>Money manager</h1>
    <div class="container"><h2>Total spent:</h2> 
      <div>{{ summaall }}</div>
    </div>
    <div class="container">
      <h2>Add Expense</h2>
      <form-add @create="addExpense" :options="categories"></form-add>
    </div>
    <div class="container">
      <category-list :categories="categories" @update="changeCat" ></category-list>
    </div>
    <div class="container"> 
      <h2>Latest transactions</h2>
      <expenses-list  :expenses="filteredJobs"  @remove="removePost" ></expenses-list>
    </div>
  </div>
</template>
<!--   поиск
        <FilterComponent v-model="search" ref="searchFilter" />
      <ul v-for="category in searchResult" :key="category.id">
        <li>{{ category.name }}</li>
      </ul> -->
    <!-- <category-list v-model="checked" @toParent="changeCat"  :categories="categories"></category-list> 
    выбрано  -->
<script>
import ExpensesList from '@/components/ExpensesList.vue';
import FormAdd from "@/components/FormAdd";
import { toNumber } from '@vue/shared';
// import HelloWorld from '@/components/HelloWorld.vue'; 
import CategoryList from "@/components/CategoryList.vue";
// import FilterComponent from "@/components/FilterComponent";

export default {
  name: 'HomeView',
  components: {
    ExpensesList,
    CategoryList,
    FormAdd 
  },

  data () {
      return {
          expenses :[
          {  amounts: '1500', dataAdd : '2023-08-05 10:03', category:'house' , name: 'IKEA',},
          {  amounts: '500', dataAdd : '2023-08-09 12:10', category:'apartment rent',name: 'AirBnB-Rent', },
          {  amounts: '100', dataAdd : '2023-08-10 19:45', category:'sport',name: 'Sportmaster', },
          {  amounts: '500', dataAdd : '2023-08-15 08:33', category:'sport' ,name: 'XFit', },
      ],  
      checked: [], 
      categories : [
        {name:'entertainments', id :1},
        {name:'apartment rent', id:2},
        {name:'sport', id:3},
        {name:'restaurants', id:4},
        {name:'house', id:5},
        {name:'clothes', id:6},
        {name:'groceries', id:7},
        {name:'services', id:8},
        {name:'health', id:11},
        {name:'transport', id:9},
        {name:'gifts', id:10}
      ],
      search: null,
      selectedS:'' ,
      // users: [
      //   { id: 1, name: "john", email: "john@xyz.com" },
      //   { id: 2, name: "lee min", email: "leemin@xyz.com" },
      //   { id: 3, name: "alexa", email: "alexa@xyz.com" },
      //   { id: 4, name: "rosy", email: "rosy@xyz.com" },
      //   { id: 5, name: "joy", email: "joy@xyz.com" },
      //   { id: 6, name: "john", email: "john@vue.com" },
      // ], 
    }

  } ,  
    computed:{
      summaall() {
        return this.expenses.reduce((sum, login) => sum + toNumber(login.amounts), 0);

 
      },
      filteredJobs() {
        if (this.checked.length === 0) {
          return this.expenses; // Если ни одна категория не выбрана, возвращаем все расходы
          } else {
            return this.expenses.filter(expense => this.checked.includes(expense.category));

      // Фильтруем расходы по выбранным категориям
    }
  },
    searchResult() {
      if (this.search) {
        return this.categories.filter((item) => {
          return this.search
            .toLowerCase()
            .split(" ")
            .every((v) => item.name.toLowerCase().includes(v));
        });
      } else {
        return this.categories;
      }
    },
      }
      ,
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
          console.log(this.expenses);
             // Обновляем отфильтрованный список трат
    // this.filteredExpenses = this.filteredJobs;
        },
        removePost(expense) {
          this.expenses = this.expenses.filter(p => p.dataAdd!== expense.dataAdd);
        },
    },
    // watch: {
    //   selectedS (newV) {
    //     console.log(newV);
    //   }
    // }
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
    <!-- <div style="border: 3px solid red ">
      <p>Рабочий пример</p>
 <label    v-for="categor in categories" :key="categor.id"> 
  <input v-model="checked" type="checkbox" :value="categor.name"/> {{ categor.name }}
 </label>
 
  вывод списка <ul >
    <li v-for=" test in filteredJobs" :key="test.dataAdd">
    {{ test.amounts }}</li>
  </ul> 
</div> -->
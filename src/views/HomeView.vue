<template>
  <div class="home">
    <h1>Dashboard</h1>
    

    <div class="container">
      <chart-tabs></chart-tabs>
    </div>
    
    <!-- <my-chart :categories="categories" :percentage-data="percentageData"></my-chart> --> -->
    <div class="container"><h2>Total spent:</h2> 
      <div>{{ summaall }}</div>
    <div class="chart-wrap">
        <canvas ref="myChart"  id="myChart"  ></canvas>
        <div class="legend">
          <ul class="legend-list">
            <li class="legend-item" v-for="(category, index) in categories" :key="category.id">
              
              <span class="category-color" :style="{ backgroundColor: category.color }"></span>
              {{ category.name }} - {{ percentageData[index] }}%
            </li>
          </ul>
        </div>
      </div>

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
      <expenses-list  :expenses="sortedJobs"  @remove="removePost" ></expenses-list>
    </div>
  </div>
</template>
<style> 
.chart-wrap{
  width: 50%;
  display: flex;
   height: 400px;    align-items: center;
}
.legend-list {
  width: 400px;
  
}
.category-color {    width: 30px;
    height: 20px;
    border-radius: 4px;
    margin-right: 15px;}
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
// import MyChart from '@/components/MyChart.vue'; // Импортируйте новый компонент

// import FilterComponent from "@/components/FilterComponent";
import Chart from 'chart.js/auto';
export default {
  name: 'HomeView',
  components: {
    ExpensesList,ChartTabs,
    // ,MyChart,
    // PieChart,MyPieChart,
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
      myChart: null,
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

  } ,  
  mounted() {
    this.updateChart();
},

  // mounted() {
  //   const ctx = document.getElementById('myChart');
  //   const numbers = this.expenses.map((item) => item.amounts);
  //   const colors = this.categories.map((item) => item.color);

  //   const data = {
  //     labels: this.categories.map((category) => category.name),
  //     datasets: [
  //       {
  //         label: 'My First Dataset',
  //         data: numbers,
  //         backgroundColor: colors,
  //         hoverOffset: 4,
  //       },
  //     ],
  //   };

  //  const MyChart = new Chart(ctx,{
  //     type: 'doughnut',
  // data: data,
  //  });
  //  MyChart;
  //  },
    computed:{percentageData() {
      const total = this.summaall;
      return this.categories.map((category) => {
        const categoryTotal = this.filteredJobs
          .filter((expense) => expense.category === category.name)
          .reduce((sum, expense) => sum + parseFloat(expense.amounts), 0);
        return ((categoryTotal / total) * 100).toFixed(2);
      });
    },
    categoryColorMap() {
      const colorMap = {};
      this.categories.forEach((category) => {
        colorMap[category.name] = category.color;
      });
      return colorMap;
    },

      summaall() {
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

      // Фильтруем расходы по выбранным категориям
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
        editExpense() {},
        addExpense(expense) {
          
          this.expenses.push(expense);
          this.updateChart();
         
        },
        updateChart() {
  const categoryExpenses = {};

  this.expenses.forEach((expense) => {
    if (categoryExpenses[expense.category]) {
      categoryExpenses[expense.category] += parseFloat(expense.amounts);
    } else {
      categoryExpenses[expense.category] = parseFloat(expense.amounts);
    }
  });
 
  const ctx = this.$refs.myChart.getContext('2d');
  const labels = Object.keys(categoryExpenses);
  // В этом коде мы создали объект categoryColors, который инициализируется пустым. 
  // Затем мы создали вычисляемое свойство categoryColorMap, которое создает объект с соответствием между именами категорий и цветами, используя массив categories. 
  // Теперь мы используем categoryColorMap для определения цветов при создании диаграммы.
  //  Это позволит сохранить изначальный порядок категорий и соответствующих им цветов.
  // const colors = this.categories.map((item) => item.color);
  const backgroundColors = labels.map((label) => this.categoryColorMap[label]);

  const data = {
    labels: Object.keys(categoryExpenses),
    datasets: [
      {
        label: 'Total expenses',
        data: Object.values(categoryExpenses),
        backgroundColor: backgroundColors,
        hoverOffset: 4,
      },
    ],
  };

  // Уничтожаем предыдущий график, если он существует
  if (this.myChart) {
    this.myChart.destroy();
    this.myChart = null; // Ус
  }

  this.myChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: {
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: false,
        },
      },
      cutout: '40%',
      animation: {
        animateScale: true,
        animateRotate: true,
      },
      responsive: true,
      maintainAspectRatio: false,
      layout: {
        padding: {
          top: 20,
          bottom: 20,
          left: 20,
          right: 20,
        },
      },
    },
  });
},
 
        removePost(expense) {
          this.expenses = this.expenses.filter(p => p.dataAdd!== expense.dataAdd);
          this.updateChart();
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
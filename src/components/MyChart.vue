<template>
  <div class="total-spent" v-show="totalValue > 0">
    <h2>Total spent: </h2> <p class="total-spent__title">{{ totalValue }}</p>
  </div>
  <div class="chart-info" v-show="filteredExpenses.length > 0" > 
    <div class="chart-wrap">
      <canvas ref="myChart"  id="myChart"  ></canvas>
    </div>
    <div class="legend">
      <ul class="legend-list">
        <li class="legend-item" 
          v-for="(category, index) in uniqueCategories"
          :key="category"
        >
          <span class="category-color" :style="{ backgroundColor: categoryColorMap[category] }"></span>
          {{ category }} - {{ percentageData[index] }}%
        </li>
      </ul>
    </div>
  </div>
  <div v-if="filteredExpenses.length === 0" ><h2>There were no expenses, add the first expense</h2>
  </div>
</template>
<script>
import Chart from 'chart.js/auto';

export default {
  props: {
    categories: {
      type: Array,
      required: true,
    },
    expenses: {
      type: Array,
      required: true,
    },
    filteredJobs: {
      type: Array,
      required: true,
    },
    selectedPeriod: {
      type: String,
      required: true,
    }
  },

  watch: {
    // expenses: {
    //   handler() {
    //     // this.updateChart(); // Вызываем обновление графика при изменении данных
    //   },
    //   deep: true,
    // },
    filteredExpenses: {
      handler() {
        this.updateChart(); // Вызываем обновление графика при изменении данных
      },
      deep: true,
    },
  },
  data() {
    return {
      myChart: null,
    };
  },
  mounted() {
    this.updateChart();
  },
  computed: {
    totalValue() {
    return this.filteredExpenses.reduce((sum, expense) => sum + parseFloat(expense.amounts), 0);
  },
    percentageData() {
      const total = this.totalValue;
      return this.uniqueCategories.map((category) => {
        const categoryTotal = this.filteredExpenses
          .filter((expense) => expense.category === category)
          .reduce((sum, expense) => sum + parseFloat(expense.amounts), 0);
        return ((categoryTotal / total) * 100).toFixed(2);
      });
      },
    uniqueCategories() {
      return Array.from(new Set(this.filteredExpenses.map(expense => expense.category)));
    },
    filteredExpenses() {
      
    if (this.selectedPeriod === 'Today') {
      const today = new Date().toISOString().split('T')[0];
      return this.expenses.filter((expense) => expense.dataAdd.includes(today));
    } else if (this.selectedPeriod === 'Week') {
      const currentDate = new Date();
      const currentDay = currentDate.getDay();
      const firstDayOfWeek = new Date(currentDate);
      firstDayOfWeek.setDate(currentDate.getDate() - currentDay);
      const startOfWeek = firstDayOfWeek.toISOString().split('T')[0];
      return this.expenses.filter((expense) => {
        const expenseDate = expense.dataAdd.split(' ')[0];
        return expenseDate >= startOfWeek;
      });
    } else if (this.selectedPeriod === 'Month') {
      
      const currentMonth = new Date().toISOString().split('-').slice(0, 2).join('-');
      return this.expenses.filter((expense) => {
        const expenseMonth = expense.dataAdd.split(' ')[0].split('-').slice(0, 2).join('-');
        return expenseMonth === currentMonth;
      });
    } else {
      return this.expenses;
    }
  },
    categoryColorMap() {
      const colorMap = {};
      this.categories.forEach((category) => {
        colorMap[category.name] = category.color;
        });
      return colorMap;
    },
  },
  methods: {
    updateChart() {      
      const categoryExpenses = {};
      this.filteredExpenses.forEach((expense) => {
        if (categoryExpenses[expense.category]) {
          categoryExpenses[expense.category] += parseFloat(expense.amounts);
        } else {
          categoryExpenses[expense.category] = parseFloat(expense.amounts);
        }
      });

      const ctx = this.$refs.myChart.getContext('2d');
      const labels = Object.keys(categoryExpenses);     
      // создали вычисляемое свойство categoryColorMap, которое создает объект с соответствием между именами категорий и цветами, используя массив categories. 
      // теперь можно использовать categoryColorMap для определения цветов при создании диаграммы. Это позволит сохранить изначальный порядок категорий и соответствующих им цветов.
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
        this.myChart = null;
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
}
};
</script>
<style scoped lang="sass">
.total-spent
  display: flex
  align-items: center

.total-spent__title
  font-size: 22px
  font-weight: 600
  letter-spacing: 2px
  margin-left: 25px

.chart-wrap
  width: 50%
  height: 400px
.chart-info
  flex-wrap: wrap
  display: flex
  align-items: center
.legend-list
  width: 100%
  word-break: break-all
  max-width: 400px
.category-color
  width: 30px
  height: 20px
  border-radius: 4px
  margin-right: 15px

.legend-item
  list-style-type: none
  display: flex
  margin: 10px 0

@media (max-width: 680px)
  .chart-wrap
    width: 100%
    height: 320px
  .legend-list
    padding: 0
@media (max-width: 375px)
  .chart-wrap
    height: 200px
</style>  
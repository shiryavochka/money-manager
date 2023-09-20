<template>
  <div class="chart-info"> 
    <div class="chart-wrap">
      <canvas ref="myChart"  id="myChart"  ></canvas>
    </div>
    <div class="legend">
      <ul class="legend-list">
        <li class="legend-item" 
        v-for="(category, index) in categories" 
        :key="category.id"
        >
        <span class="category-color" :style="{ backgroundColor: category.color }"></span>
          {{ category.name }} - {{ percentageData[index] }}%
        </li>
      </ul>
    </div>
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
    totalValue: {
      type: Array,
      required: true,
    },
  },
  watch: {
    expenses: {
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
    percentageData() {
      const total = this.totalValue;
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
  },
  methods: {
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
<style scoped>

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
  word-break: break-all;
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
@media (max-width: 680px) {
  .chart-wrap
  {
    width: 100%;
    height: 320px;
  }
  .legend-list{
    padding: 0;
  }
  }
  @media (max-width: 375px) {
    .chart-wrap
  {

    height: 200px;
  }
  }
  
</style>  
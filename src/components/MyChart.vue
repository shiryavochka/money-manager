<template>
    <div class="chart-wrap">
      <canvas id="myChart"></canvas>
      <div class="legend">
        <ul class="legend-list">
          <li class="legend-item" v-for="(category, index) in categories" :key="category.id">
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
      categories: Array, // Передавайте категории в компонент через пропс
      percentageData: Array, // Передавайте данные о процентном соотношении также через пропс
    },
    mounted() {
      const ctx = document.getElementById('myChart');
      const colors = this.categories.map((item) => item.color);
  
      const data = {
        labels: this.categories.map((category) => category.name),
        datasets: [
          {
            label: 'Total expenses',
            data: this.percentageData,
            backgroundColor: colors,
            hoverOffset: 4,
          },
        ],
      };
  
      const MyChart = new Chart(ctx, {
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
      MyChart;
    },
  };
  </script>
  
  <style scoped>
  /* Стили для компонента ChartLegend */
  </style>
  
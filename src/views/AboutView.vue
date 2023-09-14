<template>
   <h1>The page is under development</h1>
   <div class="chart-wrap">
  <canvas id="myChart" width="400px" height="400px"></canvas>
</div>
</template>

<style>
.chart-wrap{
   width: 400px;
    height: 400px;
}</style>
<script>  
import Chart from 'chart.js/auto';
export default {
   data () {
    
    return { 
     datesd:[{number:300, color: 'rgb(255, 99, 132)'},
     {number:300, color: 'red'},
     {number:300, color:    'GreenYellow'},]
     
     
      }
    },
  
   mounted ()  {
   const ctx = document.getElementById('myChart');
   const numbers = this.datesd.map((item) => item.number);
     const colors = this.datesd.map((item) => item.color);
 
     const data = {
       labels: ['Red', 'Blue', 'Yellow'],
       datasets: [
         {
           label: 'My First Dataset',
           data: numbers,
           backgroundColor: colors,
           hoverOffset: 4,
         },
       ],
     }; 

   const MyChart = new Chart(ctx,{
      type: 'doughnut',
  data: data,
   });
   MyChart;
   }
}

  
 
</script>

  
<template>
 <div>    
    <ul class="tabs">
      <li class="tab-item"
            :class="{ 'tab-item__active' : selectedTab === tab }" 
            v-for="(tab, index) in tabs" 
            @click="selectedTab = tab" :key="index"
      >{{ tab }}</li>
    </ul>
    <div class="tab-item__wrapper" v-show="selectedTab === 'Today'">
      <p >Here will be a chart of spending for today.</p>
    </div>
    <div  class="tab-item__wrapper" v-show="selectedTab === 'Week'">
      <p>Here will be a chart of spending for week</p>
    </div>
    <div  class="tab-item__wrapper" v-show="selectedTab === 'Month'">
      <div class="total-spent"><h2>Total spent: </h2> <p class="total-spent__title">{{ totalValue }}</p></div>
      <my-chart 
      :categories="categories"
      :expenses="expenses"
      :filtered-jobs="filteredJobs"
      :totalValue="totalValue"
      ></my-chart>  
    </div>
  </div>
</template>
<style>
.tab-item__wrapper {
  background: #190d47;
    border-radius: 8px;
    padding: 10px 20px;
}
.total-spent {
  display: flex;
  align-items: center;
}
.total-spent__title{
  font-size: 22px;
  font-weight: 600;
  letter-spacing: 2px;
  margin-left: 25px;
 }
.tabs {
  display: flex;
  justify-content: flex-start;
  padding: 0;
}
.tab-item {
  list-style: none;
  margin-right: 20px;
  cursor: pointer;
  border-radius: 8px;
  background: #190d47;
  padding: 10px;
  color: white;
  text-decoration: none;
}
.tab-item__active {
  background-color: #ff0084;
}
</style>
<script>
import MyChart from './MyChart.vue';
export default {
    data() {
    return {
      tabs: ['Today', 'Week', 'Month']  ,
      selectedTab: 'Month'  // устанавливается с помощью @click    
    }
  },
  components: {MyChart},
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
    }, totalValue: {
      type: Array,
      required: true,
    },}
}</script>
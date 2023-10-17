<template>
 <div>
    <ul class="tabs">
      <li class="tab-item"
            :class="{ 'tab-item__active' : selectedTab === tab }" 
            v-for="(tab, index) in tabs" 
            @click="selectedTab = selectedPeriod = tab" :key="index"
      >{{ tab }}</li>
    </ul>
    <div class="tab-item__wrapper" v-show="selectedTab === 'Today'">
      <my-chart 
      :categories="categories"
      :expenses="expenses"
      :filtered-jobs="filteredJobs"
      :selectedPeriod="selectedPeriod"
      ></my-chart>  
    </div>
    <div  class="tab-item__wrapper" v-show="selectedTab === 'Week'">
      <my-chart 
      :categories="categories"
      :expenses="expenses"
      :filtered-jobs="filteredJobs"
      :selectedPeriod="selectedPeriod"
      ></my-chart>  
    </div>
    <div  class="tab-item__wrapper" v-show="selectedTab === 'Month'">
      <my-chart 
      :categories="categories"
      :expenses="expenses"
      :filtered-jobs="filteredJobs"
      :selectedPeriod="selectedPeriod"
      ></my-chart>  
    </div>
    <div  class="tab-item__wrapper" v-show="selectedTab === 'All'">
      <my-chart 
      :categories="categories"
      :expenses="expenses"
      :filtered-jobs="filteredJobs"
      :selectedPeriod="selectedPeriod"
      ></my-chart>  
    </div>
  </div>
</template>
<script>
import MyChart from './MyChart.vue';
export default {
    data() {
    return {
      tabs: ['Today', 'Week', 'Month','All']  ,
      selectedTab: 'Month',  // устанавливается с помощью @click  
      selectedPeriod: 'Month' // для изменения периода диаграммы  
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
    }, 
  }
}</script>
<style lang="sass">
.tab-item__wrapper
  background: #190d47
  border-radius: 8px
  padding: 10px 20px


.tabs
  display: flex
  justify-content: flex-start
  padding: 0

.tab-item
  list-style: none
  margin-right: 20px
  cursor: pointer
  border-radius: 8px
  background: #190d47
  padding: 10px
  color: white
  text-decoration: none

.tab-item__active
  background-color: #ff0084
</style>
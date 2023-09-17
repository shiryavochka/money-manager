<template>
 <div>    
    <ul class="tabs">
      <li class="tab-item"
            :class="{ activeTab: selectedTab === tab }" 
            v-for="(tab, index) in tabs" 
            @click="selectedTab = tab" :key="index"
      >{{ tab }}</li>
    </ul> 
    <div v-show="selectedTab === 'Today'">
      <p >Here will be a chart of spending for today.</p>
       
    </div>
    <div v-show="selectedTab === 'Week'">
      <p>Here will be a chart of spending for week</p>
    </div>
    <div v-show="selectedTab === 'Month'">
      <p>Month</p>
    </div>
  </div>
</template>
<style>

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
.activeTab {
  background-color:  #ff0084;
   
}
</style>
<script>
export default {
    data() {
    return {
      tabs: ['Today', 'Week', 'Month']  ,
      selectedTab: 'Month'  // устанавливается с помощью @click    
    }
  }
}</script>
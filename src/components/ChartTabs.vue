<template>
 <div>    
    <ul>
      <span class="tab"
            :class="{ activeTab: selectedTab === tab }" 
            v-for="(tab, index) in tabs" 
            @click="selectedTab = tab" :key="index"
      >{{ tab }}</span>
    </ul> 
    <div v-show="selectedTab === 'Today'">
      <p >There are no reviews yet.</p>
       
    </div>
    <div v-show="selectedTab === 'Week'">
      <p>sddss</p>
    </div>
  </div>
</template>
<style>
.activeTab {
  color: #16C0B0;
  text-decoration: underline;
}
.tab {
  margin-left: 20px;
  cursor: pointer;
}
</style>
<script>
export default {
    data() {
    return {
      tabs: ['Today', 'Week', 'Month']  ,
      selectedTab: 'Today'  // устанавливается с помощью @click    
    }
  }
}</script>
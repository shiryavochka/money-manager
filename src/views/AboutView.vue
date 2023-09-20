<template> 
 <h1>All transactions</h1>
  <div class="container">
    <FilterComponent v-model="search"  ref="searchFilter" />
    <expenses-list  :expenses="searchResult()"></expenses-list>
  </div>
</template>
<script>   
import FilterComponent from '@/components/FilterComponent.vue';
import ExpensesList from '@/components/ExpensesList.vue';
export default {
  components: {FilterComponent,ExpensesList,},
   data () {
    return {
      search: null,
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
        ]
      }
    },
    methods:{
      searchResult() {
      if (this.search) {
        return this.expenses.filter((item) => {
          return this.search
            .toLowerCase()
            .split(" ")
            .every((v) => item.name.toLowerCase().includes(v));
        });
      } else {
        return this.expenses;
      }
    },
  }
}
</script>
<template>   
    <form @submit.prevent>
        <h3>Добавить трату</h3>
        <my-input 
        v-model="expence.amounts"

        placeholder="Сумма"
        type="text"
        ></my-input>
        <my-input
        type="text"
        v-model="expence.name"
        placeholder="Имя"
        ></my-input>
        <my-select v-model="selectedS" :options="options" ></my-select>
        <my-button @click="addExpense">Add Expense</my-button>
    </form>
</template>
<style>

</style>
<script>
export default {
    data() {
        return {    selectedS: '', // Добавьте selectedS в данные компонента

            expence: {
                amounts:'',
                category:'',
                name:'',

            }
        }
    }, 
    
    props: {
    options: {
      type: Array,
      default: () => [],
    },},
    methods: {
        formatTime(date) {
      // Преобразовываем дату в строку с заданным форматом (без часового пояса)
      const formattedDate = date.toISOString().slice(0, 16).replace("T", " ");
      return formattedDate;
    },
        addExpense() {
        const newDate = new Date();
        this.expence.dataAdd = this.formatTime(newDate);
        
        this.expence.category = this.selectedS; // Установите выбранную категорию
        this.$emit('create', this.expence)
        this.expence = {
            amounts:'',
            name:'',
            category:''
        }
        }, 
  },

}
</script>


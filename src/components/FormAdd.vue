<template>  
    <form @submit.prevent>
        <my-input 
        v-model="expence.amounts"
        placeholder="Amount"
        type="text"
        ></my-input>
        <my-input
        type="text"
        v-model="expence.name"
        placeholder="Expense"
        ></my-input>
        <my-select v-model="selectedCategory" :options="options" ></my-select>
        <my-button class="add-button" @click="addExpense">Add Expense</my-button>
    </form>
</template>
<style>
form {
    display: flex;
}
@media (max-width: 540px) {
    form {
        flex-direction: column;
        flex-wrap: wrap;
    }
    input{ 
        margin: 5px;
    } 
    .add-button {
        margin: 5px;
        height: 30px;
    }
}
</style>
<script>
export default {
    data() {
        return {
            selectedCategory: '',
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
        this.expence.category = this.selectedCategory; // Установите выбранную категорию
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
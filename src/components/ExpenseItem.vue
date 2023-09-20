<template>
    <div class="expense-item" >
      <div class="expense-info"> 
      <div class="expense-info--name">{{ expense.name }}</div>
      <p class="expense-info--date">{{ expense.dataAdd }}</p>
      </div>
      <div class="expense-info--amounts">{{ expense.amounts }}</div>
      <div class="expense-buttons-wrapper">
        <my-button class="expense-button" @click="editExpense">Edit</my-button>
        <my-button class="expense-button" @click="$emit('remove', expense)">Delete</my-button>
      </div>
      <my-modal
      :options="options"
      :isOpen="isModalOpen"
      :expense="expense"
      @closeModal="closeEditModal"
      @updateExpense="updateExpense"
    ></my-modal>
    </div>
</template>
<script>
import MyModal from '@/components/MyModal.vue'; 
  export default {
    props: {
      expense: {
        type: Object,
        required: true,
        },
      options: {
        type: Array,
        default: () => [],
      },
    }, 
    components: { MyModal },
    data() {
      return {
        isModalOpen: false, // Флаг, который указывает, открыто ли модальное окно
    };
  },
  methods: {
    editExpense() {
      this.isModalOpen = true; // Открываем модальное окно для редактирования
    },
    updateExpense(updatedExpense) {
      this.$emit("updateExpense", updatedExpense); // Отправляем отредактированный расход вверх
      this.isModalOpen = false; // Закрываем модальное окно для редактирования
    },
    closeEditModal() {
      this.isModalOpen = false;
    },    
}}
</script>
<style lang="sass">
.expense-info--date
  font-size: 12px
  margin: 0
  color: #b776ed

.expense-item
  display: flex
  padding: 5px
  align-items: center
  justify-content: space-between
  margin: 10px 0
  color: white
  border-radius: 8px
  background: #190d47

.expense-info--name
  font-weight: 700
  text-align: left

.expense-info
  margin-left: 15px

.expense-button
  margin: 0px 10px

@media (max-width: 540px)
  .expense-item
    margin: 10px 0

  .expense-button
    margin: 0px 3px !important

  .expense-info
    margin-left: 5px

  .expense-info--date
    font-size: 9px

  .expense-info--name
    font-size: 14px

</style>
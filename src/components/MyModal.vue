<template>
  <div class="expense-modal" v-if="isOpen">
    <div class="modal-content">
      <form>
      <my-input 
      v-model="editedExpense.name"
      type="text"
      placeholder="Name"
      ></my-input>
      <my-input
      v-model="editedExpense.amounts"
      type="text"
      placeholder="Amounts"
      ></my-input>
      <my-select 
      v-model="editedExpense.category"
      :options="options"
      ></my-select>
      <my-button @click="saveAndCloseModal">Save</my-button>
      </form>
      <my-button @click="closeModal">Close</my-button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    isOpen: {
    type: Boolean,
    required: true,
    },
    options: {
      type: Array,
      default: () => [],
    },
    expense: {
      type: Object,
      required: true,
      },
      editMode: {
        type: Boolean,
        default: false,
      },
    }, 
    data() {
      return { 
        editedExpense: { ...this.expense }, // Создаем копию объекта expense для редактирования
      };
    },
  methods: {
    closeModal() {
      this.$emit("closeModal"); 
      this.editedExpense.name=this.expense.name;
      this.editedExpense.category=this.expense.category;
      this.editedExpense.amounts=this.expense.amounts; // Закрыть модальное окно без сохранения изменений
    },
    saveAndCloseModal() {
      this.$emit("updateExpense", this.editedExpense);
      this.$emit("closeModal");   
    },
  },
};
</script>
<style>
.expense-modal {
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 90%;
  width: 300px;
}
@media (max-width: 768px) {
  .expense-modal {
    width: 90%;  
    max-width: 100%; 
  }
}
@media (max-width: 480px) {
  .expense-modal {
    width: 100%;
    max-width: 100%;
  }
}
</style>
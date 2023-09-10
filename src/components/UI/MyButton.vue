<template>
    <button class="btn">
      <slot></slot>
    </button>
  </template>
  
  <script>
  export default {
    name: 'my-button'
  }
  </script>
  
  <style scoped>
  .btn {
    padding: 7px 15px;
    background: none;
    color: white;  margin: 0 10px;
    border: none;
    background-color: #0378d5;
    border-radius: 11px;
  }
  .btn:hover{background-color: grey;}
  </style>
  
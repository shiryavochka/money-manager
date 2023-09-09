<template>
   <label v-for="user in users" :key="user.id"
   >
   <input type="checkbox" :value="user.name" v-model="selectedUsers">
{{ user.name }}
   </label>
  <div class="text-left">

    <input type="checkbox" value="Tom" v-model="selectedUsers">
 <label>Tom</label><br>
  <input type="checkbox" value="Bob" v-model="selectedUsers">
  <label>Bob</label><br>
  <input type="checkbox" value="Sam" v-model="selectedUsers">
  <label>Sam</label><br>
  <input type="checkbox" value="Alice" v-model="selectedUsers">
  <label>Alice</label><br>
  <span>Выбрано: {{selectedUsers}}</span>
  </div>

</template>


<script> 
export default {
data() {
return { 
    selectedUsers:[],
    
    users: [
        { id: 1, name: "john", email: "john@xyz.com" },
        { id: 2, name: "lee min", email: "leemin@xyz.com" },
        { id: 3, name: "alexa", email: "alexa@xyz.com" },
        { id: 4, name: "rosy", email: "rosy@xyz.com" },
        { id: 5, name: "joy", email: "joy@xyz.com" },
        { id: 6, name: "john", email: "john@vue.com" },
      ],
}
}
}
</script> 

<template>   
 <img alt="Vue logo" src="@/assets/money-management.png"  width="80px"/> 
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    
  </nav>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 15px;
  border-bottom: 2px solid;
  color: white;

  a {
    font-weight: bold;
    color: #feffff;

    &.router-link-exact-active {
      color: #7f00ff;
    }
  }
}
</style>

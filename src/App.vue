<template>   
 
  <nav>
    <img alt="Vue logo" src="@/assets/money-management.png"  width="80px"/> 
    <router-link to="/">Home</router-link> 
    <router-link to="/about">About</router-link>
    
  </nav>
  <router-view/>
</template>

<style lang="scss">
h2,h3,h4 { color:#ff0084;text-align: left;}
body {margin: 0;
    padding: 0;
    margin-left: 150px;
    background: #03011b;
  }

h1,div,p,span, li {color: white;}
#app {
  color:white;
  margin-right: 20px;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  height: 100%;
  display: flex;
  flex-direction: column;
    width: 150px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #0c032c;
    overflow-x: hidden;
    padding-top: 20px;
   
   
  color: white;

  a {
    font-weight: bold;
    color: #feffff;

    &.router-link-exact-active {
      color: #7f00ff;
    }
  }
img {    
  width: 100px;
  margin: 0 auto;}
}
</style>

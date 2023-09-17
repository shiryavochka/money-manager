<template>   
 
  <nav>
    <div class="nav-logo">
      <span>Money manager</span>
    <img alt="Vue logo" src="@/assets/money-management.png"  width="80px"/> 
    </div>
    <router-link to="/">Dashboard</router-link> 
    <router-link to="/about">Transactions</router-link>
    <router-link to="/newpage">Analytics</router-link>
    <router-link to="/newpage">Help</router-link>
    
  </nav>
  <router-view/>
</template>

<style >
h1{text-align: left; margin-left: 15px;}
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
  margin: 0;
    padding: 0;
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
   
   
  color: white;}
  nav a {
    margin: 15px 0;
    text-decoration: none;
    font-weight: bold;
    color: #feffff;}

    nav a .router-link-exact-active {
      color: #7f00ff;
    }
  
img {    
  width: 100px;
  margin: 0 auto;}

.nav-logo {
  display: flex;
  flex-direction: column;
}
@media (max-width: 768px) {
  nav{    height: 60px;
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    padding-top: 0px;
    
    position: absolute;

  }
   nav img{
      width: 50px;
      margin: auto;
    }
  .nav-logo span{
    display: none;
  }
  body{
    margin: 20px;
  }
  
}
@media (max-width: 540px) {
  h2,h3,h4 {font-size: 20px;}
  .nav-logo {
    display: none;
  }
  body{
    margin: 5px;
  }
  .container {
    padding: 15px 10px;
    margin: 5px;
  }
  nav a{
    font-size: 14px;
  }
}
</style>

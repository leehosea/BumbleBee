<template>
  <div class="container">
    <div id="content">
        <router-link to="/button" tag="span">Button</router-link>
        <router-link to="/radio">Radio</router-link>
        <router-link to="/checkBox">CheckBox</router-link>
        <router-link to="/input">Input</router-link>
        <router-link to="/tableBody">Columns</router-link>
        <router-link to="/eleTable">EleTable</router-link>
        <router-link to="/editTable">EditTable</router-link>
        <router-link to="./handleTable">HandleTable</router-link>
        <router-link to="./treeCom">TreeCom</router-link>
             <router-link to="./dynamicForm">DynamicForm</router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
 export default {
        name:'app',
        data: function() {
            return {

            }
        },
        mounted: function() {
               // 检测浏览器路由改变页面不刷新问题,hash模式的工作原理是 hashchange事件
            window.addEventListener('hashchange', () => {
                let currentPath = window.location.hash.slice(1)
                if (this.$route.path !== currentPath) {
                    this.$router.push(currentPath)
                }
            }, false)
        },
        beforeDestroy: function() {

        },
        methods: {

        }
    }
</script>
<style lang="css" scoped>
 #content{
   height: 100%;
   width:50%;
   padding: 2% 1%;
   background-color: aqua;
   margin-bottom:5px;
   
 }
</style>
<template>
  <div class="container">
    <div>
      <router-link to="/button">Button</router-link>
      <router-link to="/radio">Radio</router-link>
      <router-link to="/table">ColumnsHeader</router-link>
      <router-link to="/tableBody">Columns</router-link>
      <router-link to="/input">Input</router-link>
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
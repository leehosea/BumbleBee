<template>
  <div class="container">
    <div>
      <router-link to="/button">Button</router-link>
      <router-link to="/radio">Radio</router-link>
      <router-link to="/table">Table</router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
    module.exports = {
        data: function() {
            return {

            }
        },
        mounted: function() {

        },
        beforeDestroy: function() {

        },
        methods: {

        }
    }
</script>
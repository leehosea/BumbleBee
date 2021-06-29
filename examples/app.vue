<template>
  <div class="container">
    <div>
      <router-link to="/button">Button</router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export function data() {
	return {};
}
export function mounted() {
}
export function beforeDestroy() {
}
export const methods={};
</script>
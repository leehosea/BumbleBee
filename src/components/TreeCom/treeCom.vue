<template>
    <div>
       <el-tree :data="treeData"></el-tree>
    </div>
</template>
<script>
export default {
    name:'TreeCom',
    props:{
      treeData:{
         type:Array,
         default:()=>[]
      }
    },
   data() {
      return {
        
      }
   },
   created(){
   },
   computed:{
   },
   methods:{
   },
}
</script>
<style lang="scss" scoped>

</style>

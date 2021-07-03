<template>
    <div class="input-outer">
        <h1>{{input}}</h1>
       <span class="input-link">标签链接</span>
       <Input placeholder="请输入内容" class="input-inner" v-model="input"></Input>
       <span class="input-icon">图标icon</span>
       <h2>禁用属性</h2>
        <Input placeholder="请输入内容" class="input-inner" disabled></Input>
    </div>
</template>
<script>
export default {
    data(){
        return{
            input:""
        }
   },
   created(){
   },
   watch: {
       input: function(newVal, oldVal){
           console.log(newVal)
       }
   },
   methods:{
      
   }
}
</script>  
<style lang="css" scoped>
     .input-inner{
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 50%;
     }


</style>
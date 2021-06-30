<template>
    <component :is="tagName" @click="handlerClick" :disabled="disabled" :class="[`bee-button--${type}`]">
        <slot></slot>
    </component>
</template>

<script>
export default {
    name:"Button",
    props:{
      type:{
          type:String,
          default:'default'
      },
       disabled:{
          type:Boolean,
          default:false
      }
    },
    created(){
       console.log(this)
    },
    methods:{
        handlerClick(){
            this.$emit('click')
        }
    },
    computed: {
        tagName() {
            return 'button'
        }
    }
}
</script>

<style lang="css">
  button{
      cursor:pointer;
      display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
  }

.bee-button--warning{
color: #fff;
background-color: #409eff;
border-color: #409eff;
}
.bee-button--infomation{
background-color: blue;
}
.bee-button--successfull{
color: #fff;
background-color: #67c23a;
border-color: #67c23a;
}
.bee-button--dangerous{
color: #fff;
background-color: #f56c6c;
border-color: #f56c6c;
}

    
</style>
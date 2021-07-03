<template>
     <div>
       <Columns :data="data"></Columns>
     </div>
     
</template>
<script>
export default {
    data:function(){
       return {
        data:{
        columnHead:[
        {id:'01',label:"序号"},
        {id:'02',label:"姓名"},
        {id:'03',label:"年龄"},
        {id:'04',label:"地址"},
        {id:'05',label:"部门"},
        ],
        columsBody:[
        {id:'01',name:'小明',age:'12',address:"内蒙古",depart:"ITM"},
        {id:'02',name:'小马',age:'12',address:"内蒙古",depart:"ITM"},
        {id:'03',name:'小红',age:'12',address:"北京",depart:"ITM"},
        {id:'04',name:'小胖',age:'12',address:"河北",depart:"ITM"},
        {id:'05',name:'小李',age:'12',address:"河南",depart:"ITM"},
        ]
        }
       }
    },
    created(){

    },
    methods:{
        
    }
}
</script>
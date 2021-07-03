<template>
     <div>
       <Table :tableHead="columsHead"></Table>
        <Table :tableHead="columsHead1"></Table>
         <Table :tableHead="columsHead2"></Table>
     </div>
     
</template>
<script>
export default {
    data:function(){
       return {
           columsHead:[
                 {id:'01',label:'姓名'},
                 {id:'02',label:'年龄'},
                 {id:'03',label:'性别'},
                  {id:'04',label:'地址'},
                  {id:'05',label:'民族'},
           ],
             columsHead1:[
                 {id:'01',label:'name'},
                 {id:'02',label:'age'},
                 {id:'03',label:'xingbie'},
                  {id:'04',label:'地址2ss'},
                  {id:'05',label:'ss'},
           ],
             columsHead2:[
                 {id:'01',label:'tt'},
                 {id:'02',label:'cdd'},
                 {id:'03',label:'性别'},
                  {id:'04',label:'地址'},
                  {id:'05',label:'民族'},
           ],
       }
    },
    created(){

    },
    methods:{
        
    }
}
</script>
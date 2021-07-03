<template>
       <table border="1" cellspacing="0" cellpadding="0" :data="data">

        <thead>
           <tr >
             <th v-for="item in (data.columnHead)" :key="item.id" >{{item.label}} </th>
           </tr>
       </thead>

         <tbody>
            <tr v-for="item in (data.columsBody)" :key="item.id">
             <td >{{item.id}} </td>
             <td >{{item.name}} </td>
             <td >{{item.age}} </td>
             <td >{{item.address}} </td>
               <td >{{item.depart}} </td>
           </tr>
       </tbody>
       </table>
</template>

<script>
export default {
    name:"Columns",
    props:{
        data:{
            type:Object,
            required:true
            
        },
          
    },
    data:function(){
      return {
    
      }
    },
    created(){
       console.log(this.data)
    },
    methods:{
       
    },
    // computed: {
    //     tagName() {
    //         return 'table'
    //     }
    // }
}
</script>

<style lang="css" scoped>
  table{
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    flex: 1;
    width: 100%;
    max-width: 100%;
    background-color: #fff;
    font-size: 14px;
    color: #606266;
    text-align: center;
  }
</style>


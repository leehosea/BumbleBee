<template>
       <table border="1">
         <tbody :columns="columns">
            <tr v-for="item in columns" :key="item.id">
             <td >{{item.id}} </td>
             <td >{{item.name}} </td>
             <td >{{item.age}} </td>
             <td >{{item.depart}} </td>
             <td >{{item.address}} </td>
           </tr>
       </tbody>
       </table>
</template>

<script>
export default {
    name:"Columns",
    props:{
        columns:{
            type:Array
        }
    },
    data:function(){
      return {
    
      }
    },
    created(){
       
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


<template>
    <div>
       <check-box  :options="options"></check-box>
    </div>
</template>
<script>
export default {
   data() {
      return {
          all_checked:false,
          options:[
              {
                label: '选项1',
                value: '01',
                checked: true,
                disabled:true
            },
             {
                label: '选项2',
                value: '02',
                checked: false,
             
            },
             {
                label: '选项3',
                value: '03',
                checked: true,
              
            },
             {
                label: '选项4',
                value: '04',
                checked: true,
             
            },
             {
                label: '选项5',
                value: '05',
                checked: false,
                disabled:true
            },
          ]
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
<style lang="css" scoped>

</style>

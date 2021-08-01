<template>
    <div>
         <dynamic-form :inputArray='inputArray'></dynamic-form>
    </div>
</template>
<script>

export default {
   data() {
      return {
             inputArray:[]
      }
   },
   created(){
       this.findParam()
   },
   computed:{
   },
   methods:{

       findParam(){
    　　　　　this.$axios.get("http://localhost:9000/api/result").then(res=> {
              if(!res.errno){
                //   console.log(res.data.data.formItemList)/
                this.inputArray = res.data.data.formItemList
                
              }
            })
              .catch(function(error){
                console.log(error);
              });
          },
   },
}
</script>
<style lang="css" scoped>

</style>

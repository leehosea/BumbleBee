<template>
    <div id="check_root">
          <dl class="checkBox">
        <dt><input type="checkbox" id="checkAll"  @click="checkbox($event)">
            <label>全选</label>
        </dt>
        <dt><input type="checkbox"   @click="checkboxs($event)">
            <label>全不选</label>
        </dt>
        <dd  v-for="(item,index) in options" :key="index">
            <p><input
             type="checkbox" 
             name="item"
            :checked="item.checked == true ? true :false"
            :disabled="item.disabled == true ? true :false"
             >
             <label>{{item.label}}</label></p>
        </dd>
    </dl>
    </div>
</template>
<script>
export default {
    name:'CheckBox',
   data() {
      return {
          value_:''
      }
   },
    props: {
    title: String,
    options: Array,
  },
   created(){
   },
   computed:{
   },
   methods:{
       checkbox(e){
           var is_checked = e.target.checked
            for(var i = 0;i<this.options.length;i++){
               this.options[i].checked = is_checked
            }
       },
         checkboxs(e){
           var is_checked = e.target.checked = false
            for(var i = 0;i<this.options.length;i++){
               this.options[i].checked = false
            }
       }
     
   },
}
</script>
<style lang="css" scoped>

</style>

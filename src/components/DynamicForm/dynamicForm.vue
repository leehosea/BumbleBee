<template>
   <div class="move-style" v-tk>
 <!--突然有点想念JSX-->
<el-form
  
     ref="form"
    :inline="true"
    v-for="(item,index) in inputArray"
    :key="index"
>
    <template v-if="item.type === 'input'">
    <el-form-item :label="item.label+':'" :prop="item.prop" >
        <el-input  v-model="item.value" :palceholder="item.palceholder"></el-input>

      <el-form v-for="(a,index) in item.childrens" :key="index" > 
           <el-col v-if="a.type === 'radio'" >
              <el-radio-group v-model="a.value" v-for="(b,index) in a.options" :key="index">
                   <el-radio v-model="b.value" :label="b.label"></el-radio>
              </el-radio-group>
           </el-col> 
           <el-col v-if="a.type === 'checkbox'">
               <el-col v-for="(b,index) in a.options" :key="index">
               <el-checkbox-group v-model="b.value">
                 <el-checkbox :label="b.label"></el-checkbox>
                </el-checkbox-group>
                  </el-col> 
           </el-col>
           <el-col v-if="a.type === 'textarea'">
               <el-input :type="a.type" v-model="a.value" :palceholder="a.palceholder"></el-input>
           </el-col>
    </el-form>
    </el-form-item>
    </template>

   <template v-if="item.type === 'checkbox'" >
      <el-form-item :label="item.label+':'" :prop="item.prop"> 
           <span v-for="(b,index) in item.options" :key="index">
               <el-checkbox-group v-model="b.value" @change="groupChange">
                 <el-checkbox :label="b.label" v-model="b.label"></el-checkbox>
                </el-checkbox-group>
           </span> 
           <template v-for="(a,index) in item.childrens">
             <span v-if="a.type === 'radio'">
              <el-radio-group v-for="(b,index) in a.options" :key="index" v-model="a.value">
                   <el-radio v-model="b.value" :label="b.label"></el-radio>
              </el-radio-group>
           </span> 
           <span v-if="a.type === 'input'">
               <span v-for="(b,index) in a.options" :key="index">
             <el-input :type="b.type" v-model="b.value" :palceholder="b.palceholder"></el-input>
           </span> 
           </span>
           <span v-if="a.type === 'textarea'" >
               <el-input :type="a.type" v-model="a.value" :palceholder="a.palceholder"></el-input>
           </span>

           </template>
      </el-form-item>
 
    </template>

</el-form>



     
    </div>
</template>
<script>
export default {
   data() {
      return {
          name:'DynamicForm',
          data:function(){
              return{
                  itemArry:[],
                  userList: [],
              }
          }
      }
   },
   directives:{
       tk:{
             bind:function(el,binding,vNode){
                    el.onmousedown = function(ev){
                       document.onmousemove = function(ev){
                        var ev = ev || window.event
                          console.log(ev.clientX)
                        el.style.left = ev.clientX+ 'px'
                         el.style.top = ev.clientY+ 'px'
                     },
                      document.onmouseup = function(){
                         document.onmousemove = null
                         document.onmouseup = null
                      }
                    }
             }     
       }
   },
    mounted(){
        // console.log(this.itemArry)
   },
   props:{
    inputArray:{
        type:Array,
        default:()=>[]
    }
   },
   computed:{
   },
   methods:{
       groupChange:function(){
             console.log("变化", this.userList);
            // if (this.userList.length > 1) {
            //     this.userList.shift();
            // }
       }
   },
   watch:{
       inputArray:{
           handler(val){
               console.log(val)
               this.itemArry = val
               for(var i=0;i<val.length;i++){
                   this.userList = val
               }
           },
           deep:true
       }
   }
}
</script>
<style lang="css" scoped>
.input-content{
    display:flex !important;
}
.move-style{
    position:absolute;
    background: yellow;
}
</style>

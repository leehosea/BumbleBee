<template>
    <div>
       <el-table
        stripe
        border
        :data="dataSource" 
        highlight-current-row
        ref="refTable"
       >
      <el-table-column
       v-for="(column, index) in columns"
        header-align="center" 
        v-if="column.isShow" 
        :sortable="column.hasSort"
        :key="column.prop"
        :prop="column.prop" 
        :label="column.label" 
        :align="column.align"
        >
      </el-table-column>
    </el-table>
    </div>
</template>
<script>
export default {
    name:'EleTable',
   data() {
      return {
      }
   },
   props:{
         dataSource: {// 表格数据源 默认为空数组
                type: Array,
                default: ()=> []
            },
            columns: {// 表格的字段展示 默认为空数组
                type: Array,
                default: ()=>[]
            }
   },
   mounted(){
       console.log(this.$attrs)
   },
   methods:{
   },
}
</script>



<template>
    <div v-if='reloadFlag'>
       <el-table
        :data="tableData" 
         ref= 'tableRoot'
         v-bind="$attrs"
          v-loading="loading"
          :element-loading-text = 'elementLoadingText'
       >
      <el-table-column
       v-for="(column, index) in columns"
        header-align="center" 
        v-if="column.isShow" 
        :sortable="column.hasSort"
        :key="index"
        :prop="column.prop" 
        :label="column.label" 
        :align="column.align"
        >
      </el-table-column>
    </el-table>
    <div class="page" v-show="this.$attrs.isShowPagination">
     <el-pagination
      :current-page="currentPage"
      prev-text="上一页"
      next-text="下一页"
      @next-click="nextPage"
      @prev-click="prevPage"
      @size-change="handleSizeChange"
      @current-change= "handleCurrentChange"
      :page-sizes="pageSizes"
      :page-size="pageParam.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalNum">
          <template><span class="btn-next" @click="jumpFirst">首页</span></template>
          <template><span class="btn-next" @click="jumpLast">末页</span></template>
    </el-pagination>
    </div>
    </div>
</template>
<script>
export default {
    name:'EleTable',
   data() {
      return {
        tableData:[],
        pageParam:{},
        propObj:{},
        currentPage:1,
        pageNum:1,
        pageSize:10,
        pageSizes:[10, 20, 30, 40],
        totalNum:10,
        reloadFlag:true,
        loading:this.$attrs.loading,
        elementLoadingText:this.$attrs.elementLoadingText

      }
   },
   props:{
         dataSource: {// 表格数据源 默认为空数组
                type: Array,
                default: ()=> []
            },
            pageParams:{
                  type: Object,
                  default: ()=> ({
                            pageNum: 1,
                            pageSize: 10,
                            total: 10,
                  })
            },
            columns: {// 表格的字段展示 默认为空数组
                type: Array,
                default: ()=>[]
            }
   },
   mounted(){
       this.fokeData(this.currentPage,this.pageSize)
   },
   methods:{
     reloadData:function(){
           this.reloadFlag = false;//先销毁组件
           this.loading = true
           this.$nextTick(()=>{
               this.reloadFlag = true;
           })  
     },
    fokeData:function(n1,n2){
           this.tableData = this.dataSource.slice((n1-1)*n2,n1*n2)
     },
     handleCurrentChange:function(val){
           this.currentPage = val
            this.fokeData(val,this.pageSize)
     },
     handleSizeChange:function(size){
       this.pageSize = size
       this.fokeData(this.currentPage,size)
     },
     prevPage:function(){
       if(this.currentPage === 0) return
       this.tableData = this.totalNum[--this.currentPage]
     },
     nextPage:function(){},
     jumpFirst:function(){},
     jumpLast:function(){}
   },
   watch:{
     dataSource:{
       handler(val){
         this.tableData = val
         this.totalNum = val.length
         this.fokeData(this.currentPage,this.pageParam.pageSize)
         this.loading = false
       },
         deep:true
     },
      pageParams:{
       handler(val){
       this.pageParam = val
          this.pageSize = this.pageParam.pageSize
         this.fokeData(this.currentPage,this.pageParam.pageSize)
       },
         deep:true
     },
     loading(val){
        this.loading = val
     }

   }
}
</script>
<style lang="css">
/* .page{
  width:100%;
  border-top:1px solid #2E95FF;
  border-bottom:1PX solid #2E95FF;
  text-align: left;
  font-size:12px;
}
.page span:hover{
  color:#439DFF!important;
}
.firstPage{
  float:left;
  cursor:pointer;
  font-weight: normal;
}
.lastPage{
   cursor:pointer;
  font-weight: normal;
} */
  
</style>



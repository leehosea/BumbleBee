<template>
    <div v-if='reloadFlag'>
       <el-table
        row-key="id"
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
        :key="`tableHeader.${index}`"
        :prop="columns[index].prop"
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
import Sortable from 'sortablejs'
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
        elementLoadingText:this.$attrs.elementLoadingText,
        tableHeader: this.columns.slice()
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
       // 阻止默认行为
     document.body.ondrop = function (event) {
       event.preventDefault()
       event.stopPropagation()
     };
    this.rowDrop()
    this.columnDrop()
       this.fokeData(this.currentPage,this.pageSize)
   },
   methods:{
   
 //行拖拽
    rowDrop() {
      const tbody = document.querySelector('.el-table__body-wrapper tbody')
      const _this = this
      Sortable.create(tbody, {
        onEnd({ newIndex, oldIndex }) {
          const currRow = _this.tableData.splice(oldIndex, 1)[0]
          _this.tableData.splice(newIndex, 0, currRow)
        }
      })
    },

columnDrop() {
      const wrapperTr = document.querySelector('.el-table__header-wrapper tr')
      this.sortable = Sortable.create(wrapperTr, {
        animation: 180,
        delay: 0,
        onEnd: evt => {
          const oldItem = this.tableHeader[evt.oldIndex]
          this.tableHeader.splice(evt.oldIndex, 1)
          this.tableHeader.splice(evt.newIndex, 0, oldItem)
        }
      })
    },


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
     jumpLast:function(){},

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
     },
     columns (val, oldVal) {
       console.log(val)
      this.tableData = val
    }

   }
}
</script>
<style lang="css">

/* 　 .w-table .el-table .darg_start {
   background-color: #767666; 
  }
 .w-table .el-table th {
    padding: 0;
  }
   .w-table  .el-table th .virtual{
      position: fixed;
      display: block;
      width: 0;
      height: 0;
      margin-left: -10px;
      background: none;
      border: none;
    }
    
     .w-table .el-table .darg_active_left .virtual {
        border-left: 2px dotted red;
        z-index: 99;
      }
    
    
      .w-table .el-table .darg_active_left .virtual .darg_active_right .virtual {
        border-right: 2px dotted rgb(5, 5, 5);
        z-index: 99;
      
    }
  
   .w-table .el-table .thead-cell {
    padding: 0;
    display: inline-flex;
    flex-direction: column;
    align-items: left;
    cursor: pointer;
    overflow: initial;
   }
    .w-table .el-table .thead-cell :before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    }
  
   .w-table_moving  .el-table th .thead-cell{
      cursor: move !important;
    }
   .w-table_moving .el-table__fixed {
      cursor: not-allowed;
    } */
  

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



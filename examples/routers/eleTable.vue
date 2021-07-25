<template>
    <div>
        <ele-table 
        :dataSource="dataSource" 
        :columns="columns" 
        :pageParams="pageParams" 
        :border="border" 
        :stripe="stripe"
        :highlightCurrentRow='highlightCurrentRow'
        :emptyText='emptyText'
        :isShowPagination= 'isShowPagination'
        :loading='loading'
        :elementLoadingText='elementLoadingText'
        >
        </ele-table>
    </div>
</template>
<script>
export default {
   data() {
      return {
               dataSource:[ ],
               pageParams:{},
               border:true,
               stripe:true,
               highlightCurrentRow:true,
               isShowPagination:true,
               emptyText:'暂无数据啦',
               loading:true,
               elementLoadingText:'拼命加载中',
                columns:[{
                        hasSort: false, //<Boolean> 是否排序
                        isShow: true, //<Boolean> 是否展示
                        prop: 'createTime', //<String>  对应属性名
                        label: '日期', //<String>   表头标签
                        align: 'center',//表头内容是否居中
                        width: 200, // 列宽
                    },{
                        hasSort: false, //<Boolean> 是否排序
                        isShow: true, //<Boolean> 是否展示
                        prop: 'times', //<String>  对应属性名
                        label: '时间', //<String>   表头标签
                        align: 'center'//表头内容是否居中
                    },{
                        hasSort: true, //<Boolean> 是否排序
                        isShow: true, //<Boolean> 是否展示
                        prop: 'username', //<String>  对应属性名
                        label: '名字', //<String>   表头标签
                        align: 'center'//表头内容是否居中
                    },{
                        hasSort: true, //<Boolean> 是否排序
                        isShow: true, //<Boolean> 是否展示
                        prop: 'deptName', //<String>  对应属性名
                        label: '部门名称', //<String>   表头标签
                        align: 'center'//表头内容是否居中
                    },
                    {
                        hasSort: true, //<Boolean> 是否排序
                        isShow: true, //<Boolean> 是否展示
                        prop: 'status', //<String>  对应属性名
                        label: '状态', //<String>   表头标签
                        align: 'center'//表头内容是否居中
                    },
                      {
                        hasSort: true, //<Boolean> 是否排序
                        isShow: true, //<Boolean> 是否展示
                        prop: 'action', //<String>  对应属性名
                        label: '操作', //<String>   表头标签
                        align: 'center'//表头内容是否居中
                    }
                ]
      }
   },
   mounted(){
      this.findParam()
   },
   computed:{
   },
   methods:{
          findParam(){
    　　　　　this.$axios.get("http://localhost:9000/api/result").then(res=> {
              if(!res.errno){
                setTimeout(()=>{
                      this.dataSource=res.data.data.result.List
                },5000)
                 let obj = {}
                res.data.data.result.pageParams.forEach(item=> {
                      obj['pageNum'] = item.pageNum
                       obj['pageSize'] = item.pageSize
                        obj['total'] = item.total
                }) 
                this.pageParams = obj
              }
            })
              .catch(function(error){
                console.log(error);
              });
          },
   },
}
</script>


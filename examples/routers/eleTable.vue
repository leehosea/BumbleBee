<template>
    <div>
        <ele-table :dataSource="dataSource" :columns="columns" ></ele-table>
    </div>
</template>
<script>
export default {
   data() {
      return {
             dataSource:[{
                    'createTime':123,
                    'times':123,
                    'username':'jj',
                    'deptName':'ii',
                    'status':'0',
                },{
                    'createTime':123,
                    'times':123,
                    'username':'jj',
                    'deptName':'ii',
                    'status':'0',
                },{
                    'createTime':123,
                    'times':123,
                    'username':'jj',
                    'deptName':'ii',
                    'status':'0',
                }],
                columns:[{
                        border:true,
                        hasSort: false, //<Boolean> 是否排序
                        isShow: true, //<Boolean> 是否展示
                        prop: 'createTime', //<String>  对应属性名
                        label: '日期', //<String>   表头标签
                        align: 'center',//表头内容是否居中
                        width: 200, // 列宽
                    },{
                         border:true,
                        hasSort: false, //<Boolean> 是否排序
                        isShow: true, //<Boolean> 是否展示
                        prop: 'times', //<String>  对应属性名
                        label: '时间', //<String>   表头标签
                        align: 'center'//表头内容是否居中
                    },{
                         border:true,
                        hasSort: true, //<Boolean> 是否排序
                        isShow: true, //<Boolean> 是否展示
                        prop: 'username', //<String>  对应属性名
                        label: '名字', //<String>   表头标签
                        align: 'center'//表头内容是否居中
                    },{
                         border:true,
                        hasSort: true, //<Boolean> 是否排序
                        isShow: true, //<Boolean> 是否展示
                        prop: 'deptName', //<String>  对应属性名
                        label: '部门名称', //<String>   表头标签
                        align: 'center'//表头内容是否居中
                    },
                    {
                         border:true,
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

        //  console.log('this.$attrs:'+JSON.parse(this.$attrs))
   },
   computed:{
   },
   methods:{
   },
}
</script>


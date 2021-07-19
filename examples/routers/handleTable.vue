<template>
    <div>
       <handle-table :tableData = "tableData" :columData="columData"></handle-table>
    </div>
</template>
<script>
export default {
   data() {
      return {
          tableData:[{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zipCode: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zipCode: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zipCode: 200333
        }, {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zipCode: 200333
        }],
        columData:[
           {
                        prop: 'date', //<String>  对应属性名
                        label: '日期', //<String>   表头标签
                        align: 'center',//表头内容是否居中
                        width: 200,
           },
            {
                        prop: 'name', //<String>  对应属性名
                        label: '姓名', //<String>   表头标签
                        align: 'center',//表头内容是否居中
                        width: 200,
           },
            {
                        prop: 'province', //<String>  对应属性名
                        label: '省份', //<String>   表头标签
                        align: 'center',//表头内容是否居中
                        width: 200,
           },
            {
                        prop: 'city', //<String>  对应属性名
                        label: '市区', //<String>   表头标签
                        align: 'center',//表头内容是否居中
                        width: 200,
           },
            {
                        prop: 'address', //<String>  对应属性名
                        label: '地址', //<String>   表头标签
                        align: 'center',//表头内容是否居中
                        width: 200,
           },
            {
                        prop: 'zipCode', //<String>  对应属性名
                        label: '邮编',//<String>   表头标签
                        align: 'center',//表头内容是否居中
                        width: 200,
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

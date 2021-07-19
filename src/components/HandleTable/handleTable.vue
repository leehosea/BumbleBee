        <template>
        <div>
        <el-button type="primary" @click="add()">新增</el-button>
        <el-table :data="tableData" style="width: 100%">
        <el-table-column 
        v-for="(item,index) in columData"
        fixed 
        :key="item.index"
        :prop="item.prop"
        :label="item.label"
        :min-width="item.width"
        >
        <template slot-scope="scope">
        <el-input v-if="scope.row.isEdit" v-model="scope.row.date" placeholder="请输入内容"></el-input>
        <span v-else>{{scope.row.date}}</span>
        </template>
        </el-table-column> 
         <el-table-column fixed="right" label="操作" min-width="100">
        <template slot-scope="scope">
        <el-button type="text" size="small" v-if="!scope.row.isEdit" @click="edit(scope.row)">编辑</el-button>
        <el-button type="text" size="small" v-if="scope.row.isEdit">保存</el-button>
        <el-button type="text" size="small" v-if="scope.row.isEdit" @click="cancel(scope.row, scope.$index)">取消
        </el-button>
        </template>
        </el-table-column> 
        </el-table>
        </div>
        </template>
        <script>
        export default {
        name:'HandleTable',
        props:{
            columData:{
                type:Array,
                default:()=>[]
            },
            tableData:{
                type:Array,
                default:()=>[]
            }

        },
        data() {
        return {
           
        }
        },
        created(){
        },
        mounted(){ 
          if(this.tableData){
              (this.tableData).forEach(row =>{
                  row['isEdit'] = false
                  row['isAdd'] = false

              })
          }
          },
        methods:{

            add() {
                this.tableData.push(
                    {
                        date: '',
                        name: '',
                        province: '',
                        city: '',
                        address: '',
                        zip: '',
                        isEdit: true,
                        isAdd: true
                    }
                )
         },

         edit(row){
                           row['oldRow'] = JSON.parse(JSON.stringify(row))
                           row.isEdit = true  
         },
         cancle(row,index){
            if(row.isAdd){
                this.tableData.splice(index,1)
            }else{
                for(const  i in row.oldRow){
                    row[i] = oldRow[i]
                }
            }
         }
  
        }
        }
        </script>



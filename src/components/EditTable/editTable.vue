<template>
  <div class="table-bg">
    <el-table
      ref="multipleTable"
      :data="formatData"
      border
      style="width: 100%;"
      height="calc(100% - 35px)"
      @sort-change='sort_change'
      @selection-change="changeFun">
      <template v-for="(column,index) in columns">
        <el-table-column v-if="column.type" :type="column.type" :key="column.desc" align="center"
                         :label="column.name" :width="column.width==undefined?'auto':column.width"
                         :sortable="column.sortable?'custom':false" :fixed="column.fixed">
        </el-table-column>
        <el-table-column :prop="column.desc" v-if="!column.type"  :key="column.desc" :label="column.name" :width="column.width==undefined?'auto':column.width" :sortable="column.sortable?'custom':false"  :fixed="column.fixed"  :show-overflow-tooltip="column.tooltip?true:false">
          <template slot-scope="scope">
            <div v-if="column.templet!=undefined && typeof column.templet == 'function' && column.templet(scope.row)" :style="'text-align:right;text-decoration: underline;color:#ccc;'+column.style">
              {{ column.format?fmtMoney(scope.row[column.desc]):scope.row[column.desc] }}
            </div><!--传入模板方法，方法返回true时显示灰色-->
            <div v-else-if="column.templet!=undefined && typeof column.templet == 'function' && !column.templet(scope.row)" :style="'color:#409EFF;text-align:right;text-decoration: underline;'+column.style" @click="btnClickfunc(column,scope.row,column.desc)">
              {{ column.format?fmtMoney(scope.row[column.desc]):scope.row[column.desc] }}
            </div><!--传入模板方法，方法返回false时，可点击-->
            <div v-else-if="column.click" :style="'color:#409EFF;text-align:right;text-decoration: underline;'+column.style" @click="btnClickfunc(column,scope.row,column.desc)"> {{ column.format?fmtMoney(scope.row[column.desc]):scope.row[column.desc] }}</div><!--click为true可点击-->
            <div v-else-if="column.edit" :style="column.style"><!--edit为true可编辑，format金额格式化-->
              <el-input v-if="column.editType=='input'"
                        size="mini"
                        placeholder="请输入内容"
                        @change="editInput(scope.row)"
                        v-model="scope.row[column.desc]">
              </el-input>
              <el-select v-else-if="ko0.editType=='select'"
                         size="mini"
                         @change="editInput(scope.row)"
                         v-model="scope.row[column.desc]"
                         placeholder="请选择">
                <el-option
                  v-for="item in column.editSelOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div v-else-if="column.btns"  :style="'text-align:center;'+column.style"><!--表格内按钮，可点击，传入方法类型，用clickType区分按钮点击事件。-->
              <el-button v-for="(btn ,index) in column.btns" size="mini" :class="btn.btnClass" :key="index" :type="btn.btnType" @click="handleBtnClick(btn.clickType, scope.row)">{{btn.name}}</el-button>
            </div>
            <div v-else :style="column.style" :class="column.tooltip?'btable-tooltip':''"> {{ column.format?fmtMoney(scope.row[column.desc]):scope.row[column.desc] }}</div>
          </template>
        </el-table-column>
      </template>

    </el-table>
    <div class="table-page">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10,20, 30, 40, 50]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
/**
   * table组件：
   * 传入data，columns
   * columns可传入模板函数，
   * 可定义单元格点击事件，
   * 可编辑，
   * 可选择，
   * 前台分页，
   * 前台排序，
   * 配置需要格式化的金额
   */
import { sortby,fmoney } from '../../common/util';
export default {
	name: 'EditTable',
	data () {
		return {
			currentPage:1,//当前页
			pageSize:30,//每页显示的条数
			multipleSelection:[],//已选中的行
			isUpdateSelection:true,//是否更新已选中
		};
	},
	props:{
		data: {
			type: [Array, Object],
			required: true
		},
		columns: {
			type: Array,
			default: () => []
		},
	},
	computed:{
		formatData(){//分页后data
			var startNum=(this.currentPage - 1)*this.pageSize;
			var endNum=startNum+this.pageSize;

			return this.data.slice(startNum,endNum);
		},
		total(){//总条数
			return this.data.length;
		}
	},
	methods:{
		fmtMoney(val){//格式化金额
			return fmoney(val);
		},
		sort_change(col){//排序
			this.formatData.sort(sortby(col.prop,'',col.order));
		},
		handleCurrentChange(cur){//当前页改变时触发
			this.isUpdateSelection=false;//不更新选中行
			this.currentPage=cur;
			this.updateSeletion();
		},
		handleSizeChange(pagesize){//每页条数改变时触发
			this.isUpdateSelection=false;//不更新选中行
			this.pageSize=pagesize;
			this.updateSeletion();
		},
		btnClickfunc(column,row,clickType){//按钮点击
			this.$emit('btnClickFunc',{column:column,row:row,type:clickType});
		},
		handleBtnClick(clickType, row){//操作按钮点击
			this.$emit('handleBtnClick',{clickType:clickType,row:row});
			//this.$parent.printData();//直接调用父组件的方法
		},
		changeFun(val) {//获取已选中的行
			//console.log(val);
			//console.log(this.isUpdateSelection);
			if(this.isUpdateSelection){
				this.multipleSelection = val;
			}else{
				this.isUpdateSelection=true;
			}
		},
		editInput(row){//表格内输入框编辑触发
			this.$refs.multipleTable.toggleRowSelection(row,true);//选中所在行
		},
		updateSeletion(){//更新选中行
			var  that=this;
			this.$nextTick(()=>{
				that.data.forEach((item)=>{
					if(this.multipleSelection.indexOf(item)>=0){
						that.isUpdateSelection=false;//不更新选中行
						that.$refs.multipleTable.toggleRowSelection(item,true);//选中所在行
					}
				});
				that.isUpdateSelection=true;//更新选中行
			});
		}
	}
};
</script>


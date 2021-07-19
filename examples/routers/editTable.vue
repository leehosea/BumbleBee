<template>
  <div class="xmtz">
    <div class="search-kg">
      <el-form :inline="true" :model="searchForm" class="demo-form-inline" size="mini">
        <el-form-item label="唯一代码:">
          <el-input v-model="searchForm.nsrsbh" placeholder="唯一代码"></el-input>
        </el-form-item>
        <el-form-item label="计算方式:">
          <el-select v-model="searchForm.zsfs" placeholder="计算方式">
            <el-option label="--请选择--" value="--请选择--"></el-option>
            <el-option label="计算方式1" value="计算方式1"></el-option>
            <el-option label="计算方式2" value="计算方式2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"  icon="el-icon-search" @click="getList">查询</el-button>
          <el-button type="primary"  icon="el-icon-printer" @click="printData">打印</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="bxz-table-bg">
      <edit-table ref="editTable" :data="list" :columns="columns" @btnClickFunc="openWindow" @handleBtnClick="phandleBtnClick"></edit-table>
    </div>
    <el-dialog :title="dialogTitle"  custom-class="dialogYs"  :visible.sync="dialogVisible" @close="backUrl">
      <router-view></router-view><!--销毁再激活router-view-->
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        searchForm:{
          nsrsbh: '',
          zsfs: '--请选择--',
        },
        list:[],
        columns:[
          {name:'',desc:'sel',width:'50',type:'selection'},
          {name:'编号',desc:'',width:'60',type:'index'},
          {name:'名称',desc:'xmmc',tooltip:true},
          {name:'计算金额',desc:'yskze',width:'150',click:true,url:'/xmtz/xmtzYskje',templet:function(d){return d.yskze=='0.00'?true:false}},
          {name:'计算价款',desc:'srze',width:'150',click:true,sortable:true,url:'/xmtz/xmtzFwjsjk'},
          {name:'计算税金',desc:'kcze',width:'150',style:'text-align:right;'},
          {name:'唯一标识',desc:'xmid',format:true,width:'150',edit:true,editType:'input',},
          {name:'计算方式',desc:'zsfs_mc',width:'150',edit:true,editType:'select',editSelOptions:[{label:'计算方式1',value:'计算方式1'},{label:'计算方式2',value:'计算方式2'}],style:'text-align:right;'},
          {name:'计算属性',desc:'xmxs',width:'150',style:'color:#409EFF;text-align:center;text-decoration: underline;'},
          {name:'操作',desc:'jhqsnd',width:'200',btns:[{name:'查看详情',btnType:'primary',clickType:'showXq'},{name:'编辑',btnType:'danger',clickType:'editXq'}]},
        ],
        dialogTitle:'',//弹窗标题
        dialogVisible:false,//弹窗显示
        dialogWidth:'70%',//弹窗的宽度
        routerAlive:true,//刷新路由
      }
    },
    mounted(){//初始生命周期
      this.getList();
    },
  
    methods:{
      getList(){//查询列表数据
        // var _that=this;
        // var loadingInstance = Loading.service({})
        // this.$axios.get('../../public/server/list.json',{}).then((res)=>{
        //   var data=res.data.result;
        //   _that.list=data;
        //   _that.total=data.length;
        //   loadingInstance.close();
        // }).catch((error)=>{
        //   console.log(error);
        // })


         var data = [
                  {
            "bh": 1,
            "xmid": "5463562",
            "xmmc": "测试名称",
            "Nsrsbh": "325423523542352345",
            "dwmc": "测试单位名称",
            "yskze": "89787.66",
            "srze": "345345.35",
            "kcze": "56566.56",
            "zze": "345345",
            "zsfs_mc": "计算方式1",
            "xmxs": "在建项目"
          },
          {
            "bh": 1,
            "xmid": "5463562",
            "xmmc": "测试名称",
            "Nsrsbh": "325423523542352345",
            "dwmc": "测试单位名称",
            "yskze": "0.00",
            "srze": "345345.35",
            "kcze": "56566.56",
            "zze": "345345",
            "zsfs_mc": "计算方式1",
            "xmxs": "在建项目"
          },
         ]
         this.list = data
      },
      openWindow(data){//打开弹窗{column:column,row:row,type:clickType}
        console.log(data);
        var column=data.column;
        var row=data.row;
        this.dialogTitle=row.xmmc;
        this.dialogVisible=true;

      },
      backUrl(){

      },
      phandleBtnClick(data){//表格内按钮点击事件
        console.log(data);
      },
      printData(){//打印数据
        console.log(this.list);
        console.log(this.$refs.editTable.multipleSelection);//获取已选中的数据
      }
    }
  }
</script>



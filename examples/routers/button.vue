<template>
     <div>
    <Button type="warning" @click='fn'>警告</Button>
    <Button type="infomation" @click='fn'>提示</Button>
    <Button type="successfull" @click='fn'>成功</Button>
    <Button type="primary" @click='fn'>默认</Button>
    <Button type="dangerous" @click='fn'>危险</Button>
    <h5 class='textfont'>禁用</h5>
    <Button type="warning" @click='fn' disabled>警告</Button>
    <Button type="infomation" @click='fn' disabled>提示</Button>
    <Button type="successfull" @click='fn' disabled>成功</Button>
    <Button type="primary" @click='fn' disabled>默认</Button>
    <Button type="dangerous" @click='fn' disabled>危险</Button>
     </div>
     
</template>
<script>
export default {
    created(){

    },
    methods:{
         fn:function(){
             console.log('123')
         }
    }
}
</script>

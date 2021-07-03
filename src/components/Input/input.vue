<template>
    <component 
    :is="tagName" 
    :placeholder="placeholder" 
    :value="value_"
    :disabled="disabled"
    @input="handleInput"
    >
        <slot></slot>
    </component>
</template>

<script>
export default {
    name:"Input",
    props:{
        placeholder:{
            type:String,
            default:'default'
        },
        disabled:{
           type:Boolean,
           default:false
        },
        value:{
           
        }
    },
    data:function(){
        return {
            value_: ''
        }
    },
    created(){
        console.log(this.placeholder)
       
    },
    methods:{
       handleInput: function(e){
           console.log(arguments)
           this.value_ = e.target.value
           this.$emit('input', this.value_)
       }
    },
    computed: {
        tagName() {
            return 'input'
        }
    }
}
</script>


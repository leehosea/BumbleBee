<template>
    <component :is="tagName">
        <slot></slot>
    </component>
</template>

<script>
export default {
    name:"Radio",
    created(){
       
    },
    methods:{
       
    },
    computed: {
        tagName() {
            return 'radio'
        }
    }
}
</script>


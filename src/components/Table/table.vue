<template>
    <component :is="tagName">
        <slot></slot>
    </component>
</template>

<script>
export default {
    name:"Table",
    created(){
       
    },
    methods:{
       
    },
    computed: {
        tagName() {
            return 'Table'
        }
    }
}
</script>


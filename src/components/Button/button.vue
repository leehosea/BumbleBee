<template>
    <component :is="tagName">Hello! I am a BUTTON</component>
</template>

<script>
export default {
    name:"Button",
    computed: {
        tagName() {
            return 'button'
        }
    }
}
</script>
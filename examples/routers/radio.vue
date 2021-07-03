<template>
  <div class="about">
    <Radio title="普通单选框列表"
           v-model="value1"
           :options="options1" />
    <p>您选中的是：{{value1}}</p>
    <Radio title="有默认选中的单选框列表"
           v-model="value2"
           :options="options1" />
    <p>您选中的是：{{value2}}</p>
    <Radio title="有禁用选项的单选框列表"
           v-model="value"
           :options="options" />
    <p>您选中的是：{{value}}</p>
  </div>

</template>
<script>
export default {
  data () {
    return {
      value: '',
      value1: '',
      value2: 'optionA',
      options1: ['optionA', 'optionB', 'optionC'],
      options: [
        {
          label: 'disabled option',
          value: 'valueF',
          disabled: true
        },
        {
          label: 'optionA',
          value: 'valueA'
        },
        {
          label: 'optionB',
          value: 'valueB'
        },
          {
          label: 'disabled option',
          value: 'valueWW',
          disabled: true
        },
      ],
    }
  },
  methods: {
    clickLeftIcon () {
      this.$router.back(-1)
    },
  }
}
</script>




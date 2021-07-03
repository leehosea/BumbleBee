<template>
  <div class="radio">
    <label class="title">{{title}}</label>
    <a href="#"
       v-for="(item, index) in options"
       :key="index"
       class="radioLink">
      <div class="radioList">
        <div class="radioArea">
          <label>
            <span>
              <input type="radio"
                     :value="typeof item == 'string' ? item : item.value"
                     class="radioInput"
                     v-model="selectedValue"
                     :disabled="typeof item == 'string' ? false : item.disabled == true ? true :false">
              <span class="radioSelect"
                    :class="typeof item == 'string' ? '' : item.disabled == true ? 'radioSelectDisabled' : '' "></span>
            </span>
            <span class="selectListItem">{{typeof item == 'string' ? item : item.label}}</span>
          </label>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'radio',
  data () {
    return {
      selectedValue: ''
    }
  },
  props: {
    title: String,
    options: [String, Array]
  },
  created () {
    // console.log(typeof (this.options));
    if (typeof (this.options) == 'string') {
      this.options = eval("(" + this.options + ")");
    }
  },
  methods: {
  },
  computed: {
  },
  watch: {
    selectedValue () {
      this.$emit('input', this.selectedValue)
    }
  }
}
</script>


<style lang="css" scoped>

.radioLink {
  box-sizing: border-box;
  color: inherit;
  min-height: 40px;
  display: block;
  overflow: hidden;
  position: relative;
  text-decoration: none;
}

radioSelectDisabled {
  background-color: #e3e3e3;
  border-color: #e3e3e3;
}

</style>
<script>
export default {
  name: 'Text',
  props: {
    label: {
      type: String,
      required: true
    },
    size: {
      type: String,
      validator: function (value) {
        return ['largex3', 'largex2', 'large', 'normal', 'small', 'smallx'].indexOf(value) !== -1
      }
    },
    bold: {
      type: Boolean,
      default: false
    },
    light: {
      type: Boolean,
      default: false
    },
    color: {
      type: String
    }
  },
  computed: {
    classes () {
      return {
        text: true,
        [`-${this.size || 'normal'}`]: true,
        '-bold': this.bold,
        '-light': this.light
      }
    },
    style () {
      return { color: this.color }
    }
  }
}
</script>

<template>
  <span :class="classes" :style="style">{{ label }}</span>
</template>

<style lang="postcss" scoped>
.text {
  &.-bold {
    @apply font-bold;
  }
  &.-light {
    @apply font-light;
  }
  &.-largex3 {
    @apply text-5xl;
  }
  &.-largex2 {
    @apply text-3xl;
  }
  &.-large {
    @apply text-xl;
  }
  &.-normal {
    @apply text-base;
  }
  &.-small {
    @apply text-sm;
  }
  &.-smallx {
    @apply text-xs;
  }
}
</style>

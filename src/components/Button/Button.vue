<script>
import Text from '../Text'
export default {
  name: 'Button',
  components: { Text },
  props: {
    label: {
      type: String,
      required: true
    },
    variant: {
      type: String,
      validator: function (value) {
        return ['primary', 'secondary'].indexOf(value) !== -1
      }
    },
    size: {
      type: String,
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1
      }
    },
    outline: {
      type: Boolean,
      default: false
    },
    backgroundColor: {
      type: String
    }
  },
  computed: {
    classes () {
      return {
        button: true,
        [`-${this.variant || 'primary'}`]: true,
        [`-${this.size || 'medium'}`]: true,
        '-outline': this.outline
      }
    },
    style () {
      return { backgroundColor: this.backgroundColor }
    }
  }
}
</script>

<template>
  <button type="button" v-bind="$attrs" :class="classes" :style="style">
    <Text :label="label" :size="size" bold />
  </button>
</template>

<style lang="postcss" scoped>
.button {
  border: 1px solid transparent;
  @apply rounded focus:outline-none focus:ring-2 focus:ring-offset-2;
  &.-primary {
    @apply bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500;
    &.-outline {
      @apply bg-white text-blue-500 border-blue-500 hover:bg-blue-600 hover:text-white hover:border-transparent;
    }
  }
  &.-secondary {
    @apply bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-500;
    &.-outline {
      @apply bg-white text-gray-500 border-gray-500 hover:bg-gray-600 hover:text-white hover:border-transparent;
    }
  }
  &.-small {
    @apply text-xs py-0 px-4;
  }
  &.-medium {
    @apply text-base py-1 px-6;
  }
  &.-large {
    @apply text-lg py-1 px-8;
  }
  .text{
    user-select: none;
  }
}
</style>

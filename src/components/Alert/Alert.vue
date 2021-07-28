<script>
export default {
  name: 'Alert',
  props: {
    variant: {
      type: String,
      validator: function (value) {
        return ['info', 'success', 'warning', 'danger'].indexOf(value) !== -1
      }
    }
  },
  computed: {
    classes () {
      return {
        alert: true,
        [`-${this.variant || 'info'}`]: true
      }
    }
  }
}
</script>

<template>
    <div :class="classes">
        <slot/>
    </div>
</template>

<style lang="postcss" scoped>
.alert {
  @apply py-2 px-3 rounded;
  &.-info {
    @apply text-blue-500 bg-blue-100;
  }
  &.-success {
    @apply text-green-500 bg-green-100;
  }
  &.-warning {
    @apply text-yellow-500 bg-yellow-100;
  }
  &.-danger {
    @apply text-red-500 bg-red-100;
  }
}
</style>

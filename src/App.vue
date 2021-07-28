<template>
  <div>
    <Button label="Button" size="small"/>
    <Button label="Button"/>
    <Button label="Button" size="large"/>
  </div>
  <div>
    <Button label="Button" variant="secondary" size="small"/>
    <Button label="Button" variant="secondary"/>
    <Button label="Button" variant="secondary" size="large"/>
  </div>
</template>

<script>
import Button from './components/Button'

export default {
  name: 'App',
  components: {
    Button
  }
}
</script>

<style lang="postcss">
#app {
  @apply flex flex-col gap-4 p-4
}
#app > div{
  @apply flex justify-start items-center gap-2
}
</style>

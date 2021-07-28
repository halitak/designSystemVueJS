import Button from './Button'
import Text from '../Text'

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
    onClick: {}
  }
}

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Button, Text },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup () {
    return { args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<div class="flex gap-2">
    <Button v-bind="args" />
    <Button v-bind="args" outline/>
  </div>`
})

export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
  label: 'Button'
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
  label: 'Button'
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  label: 'Button'
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  label: 'Button'
}

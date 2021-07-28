import Alert from './Alert'
import Text from '../Text'

export default {
  title: 'Example/Alert',
  component: Alert,
  argTypes: {
    variant: { control: { type: 'select', options: ['info', 'success', 'warning', 'danger'] } }
  }
}

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Alert, Text },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup () {
    return { args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<div class="flex flex-col gap-2">
    <Alert v-bind="args"><div><Text label="Alert" size="small"/></div></Alert>
    <Alert v-bind="args"><div><Text label="Alert" size="small"/></div><div><Text label="Alert" size="small" /></div></Alert>
  </div>`
})

export const Info = Template.bind({})
Info.args = {
  variant: 'info'
}

export const Success = Template.bind({})
Success.args = {
  variant: 'success'
}

export const Warning = Template.bind({})
Warning.args = {
  variant: 'warning'
}

export const Danger = Template.bind({})
Danger.args = {
  variant: 'danger'
}

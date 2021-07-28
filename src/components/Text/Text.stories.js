import Text from './Text'

export default {
  title: 'Example/Text',
  component: Text,
  argTypes: {
    color: { control: 'color' },
    size: { type: 'select', options: ['largex3', 'largex2', 'large', 'normal', 'small', 'smallx'] }
  }
}

const Template = args => ({
  components: { Text },
  setup () {
    return { args }
  },
  template: `
    <div class="flex flex-col gap-4">
      <Text v-bind="args" light/>
      <Text v-bind="args" />
      <Text v-bind="args" bold/>
    </div>
    `
})

export const LargeX3 = Template.bind({})
LargeX3.args = {
  label: 'LargeX3',
  size: 'largex3'
}

export const LargeX2 = Template.bind({})
LargeX2.args = {
  label: 'LargeX2',
  size: 'largex2'
}

export const Large = Template.bind({})
Large.args = {
  label: 'Large',
  size: 'large'
}

export const Normal = Template.bind({})
Normal.args = {
  label: 'Normal',
  size: 'normal'
}

export const Small = Template.bind({})
Small.args = {
  label: 'Small',
  size: 'small'
}

export const SmallX = Template.bind({})
SmallX.args = {
  label: 'SmallX',
  size: 'smallx'
}

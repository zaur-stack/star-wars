import UiButton from "./UiButton";

export default {
  title:'Ui-Kit/UiButton',
  component: UiButton
}

const Template = (args) => <UiButton {...args} />

export const Primary = Template.bind({})

Primary.args = {
  text: 'Hello',
  theme: 'light'
}
import Button from '../Button'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Button',
    size: 'medium',
    disabled: false,
    onClick: action('click handler'),
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'success', 'danger'],
      control: { type: 'select' },
      defaultValue: 'primary',
      description: 'Type of button',
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
      defaultValue: 'medium',
      description: 'Size of the button',
    },
    disabled: {
      options: [true, false],
      control: { type: 'boolean' },
      defaultValue: 'false',
      description: 'Should the button be disabled?',
    },
  },
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
}

export const Success = Template.bind({})
Success.args = {
  variant: 'success',
}

export const Danger = Template.bind({})
Danger.args = {
  variant: 'danger',
}

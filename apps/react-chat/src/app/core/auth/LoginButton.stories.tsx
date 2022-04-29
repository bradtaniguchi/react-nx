import { Story, Meta } from '@storybook/react';
import { LoginButton } from './LoginButton';

export default {
  component: LoginButton,
  title: 'react-chat/core/auth/LoginButton',
} as Meta;

const Template: Story = (args) => <LoginButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

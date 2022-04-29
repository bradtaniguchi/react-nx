import { Story, Meta } from '@storybook/react';
import { LogoutButton } from './LogoutButton';

export default {
  component: LogoutButton,
  title: 'react-chat/core/auth/logoutButton',
} as Meta;

const Template: Story = (args) => <LogoutButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

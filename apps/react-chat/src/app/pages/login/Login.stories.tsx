import { Story, Meta } from '@storybook/react';
import { Login } from './Login';

export default {
  component: Login,
  title: 'react-chat/pages/Login',
} as Meta;

const Template: Story = (args) => <Login {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

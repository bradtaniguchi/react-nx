import { Story, Meta } from '@storybook/react';
import { User } from './User';

export default {
  component: User,
  title: 'react-chat/pages/User',
} as Meta;

const Template: Story = (args) => <User {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

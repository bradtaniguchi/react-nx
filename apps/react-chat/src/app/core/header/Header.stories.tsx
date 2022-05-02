import { CssBaseline } from '@mui/material';
import { Title, Stories } from '@storybook/addon-docs';
import { Meta, Story } from '@storybook/react';
import { Header } from './Header';
import { HeaderContext } from './header-context';

export default {
  component: Header,
  title: 'react-chat/core/Header',
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <CssBaseline>
            <Stories />
          </CssBaseline>
        </>
      ),
    },
  },
} as Meta;

const Template: Story = (args) => (
  <CssBaseline>
    <Header {...args} />
  </CssBaseline>
);

// Stories:
// 1. Empty
// 2. With "hello world provider"
export const Empty = Template.bind({});

export const HelloWorld = Template.bind({});
HelloWorld.decorators = [
  (Story) => (
    <HeaderContext.Provider value={<h1>Hello World!</h1>}>
      <Story />
    </HeaderContext.Provider>
  ),
];

export const RoomsHeader = Template.bind({});
RoomsHeader.decorators = [
  (Story) => (
    <HeaderContext.Provider value={<h1>Actions go here for rooms</h1>}>
      <Story />
    </HeaderContext.Provider>
  ),
];

export const RoomHeader = Template.bind({});
RoomHeader.decorators = [
  (Story) => (
    <HeaderContext.Provider value={<h1>Actions go here for Room</h1>}>
      <Story />
    </HeaderContext.Provider>
  ),
];

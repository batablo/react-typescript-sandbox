import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Board, BoardPropsInterface } from '.';

export default {
  title: 'Components/Molecules/Board',
  component: Board,
  argTypes: {},
} as Meta;

const Template: Story<BoardPropsInterface> = (args) => <Board {...args} />;

export const Default = Template.bind({});
Default.args = {
  squares: ['O', 'X', '', 'O', 'X', '', 'O', 'X', ''],
};

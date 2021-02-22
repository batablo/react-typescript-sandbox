import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Moves, MovesPropsInterface } from '.';

export default {
  title: 'Components/Molecules/Moves',
  component: Moves,
  argTypes: {},
} as Meta;

const Template: Story<MovesPropsInterface> = (args) => <Moves {...args} />;

export const Default = Template.bind({});
Default.args = {
  history: [
    { squares: ['', '', '', '', '', '', '', '', ''] },
    { squares: ['O', '', '', '', '', '', '', '', ''] },
  ],
};

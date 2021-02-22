import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Square, SquarePropsInterface } from '.';

export default {
  title: 'Components/Atoms/Square',
  component: Square,
  argTypes: {
    value: {
      control: {
        type: 'select',
        options: ['X', 'O', ''],
      },
    },
  },
} as Meta;

const Template: Story<SquarePropsInterface> = (args) => <Square {...args} />;

export const Default = Template.bind({});

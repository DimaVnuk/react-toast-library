import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  Button  from '../components/Button';


export default {
  title: 'ReactComponentToast/Button',
  component: Button,
} as ComponentMeta<typeof Button>;


const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const TestButton = Template.bind({});

TestButton.args = {
  children: 'Test Button',
};

export const ClickButton = Template.bind({});
ClickButton.args = {
  children: 'Button',
};

import React, { useState } from 'react';
import Select from './Select';
import { ThemeProvider } from '../ThemeProvider'; // Wrap stories in the theme provider

export default {
  title: 'Components/Select',
  component: Select,
  decorators: [(Story) => <ThemeProvider><Story /></ThemeProvider>],  // Ensure the theme is applied
};

const Template = (args) => {
  const [value, setValue] = useState(args.value || '');

  return (
    <Select
      {...args}
      value={value}
      onChange={(val) => setValue(val)}
    />
  );
};

// Default story for Select component
export const Default = Template.bind({});
Default.args = {
  label: 'Choose an option:',
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ],
  value: 'option1',
};

// Story with no initial value
export const NoInitialValue = Template.bind({});
NoInitialValue.args = {
  label: 'Select without initial value:',
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ],
  value: '',
};
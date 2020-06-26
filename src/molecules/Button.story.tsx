import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components/native';

const Text = styled.Text``;

storiesOf('molecules', module).add('Button', () => (
  <Button onClick={action('clicked')} variant={Button.Variants.Tertiary} ><Text>Hello</Text></Button>
));

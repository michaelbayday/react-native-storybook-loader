import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';
import { action } from '@storybook/addon-actions';

storiesOf('molecules', module).add('Button', () => (
  <Button onClick={action('clicked')} variant={Button.Variants.Tertiary}>Hello</Button>
));

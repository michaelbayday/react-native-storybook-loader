import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import IconText from './IconText';
import { StorybookContainer } from '../templates/StoryContainer';
import styled from 'styled-components/native';

const StyledView = styled.View`
  background-color: papayawhip;
  color: red;
`;

storiesOf('molecules', module)
  .addDecorator(StorybookContainer)
  .add('IconText', () => (
    <StyledView>
    <IconText icon={text('icon', 'check')}>
      {text('children', 'Take it easy')}
    </IconText>
    </StyledView>
  ));

import * as React from 'react';
import styled from 'styled-components';
import { View, Text, TextStyle } from 'react-native';

interface Props {
  style?: TextStyle;
  children: React.ReactChild;
}

const StyledView = styled(View)`
  color: red;
`;

 export const MonoText = ({ style, ...rest }: Props) => {
  return <StyledView><Text {...rest} style={[style]} /></StyledView>;
};

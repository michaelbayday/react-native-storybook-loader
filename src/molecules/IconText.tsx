import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
// @ts-ignore
import Icon from '@expo/vector-icons/MaterialIcons';

const StyledText = styled.Text`
color: palevioletred;
`;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

interface Props {
  icon: string;
  children: string;
  iconColor?: string;
  textColor?: string;
}

const IconText: React.FC<Props> = ({
  icon,
  children,
  iconColor = 'dodgerBlue',
}: Props): JSX.Element => (
  <View style={styles.container}>
    <View style={styles.iconContainer}>
      <Icon name={icon} color={iconColor} />
    </View>
    <StyledText>{children}</StyledText>
  </View>
);

export default IconText;

import React from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';

interface BoxProps {
  rounded: boolean;
  size: string;
  color: string;
}

const Box = ({rounded, size, color}: BoxProps) => {
  return (
    <View
      style={[rounded && styles.rounded, sizes[size], {backgroundColor: color}]}
    />
  );
};

const styles = StyleSheet.create({
  rounded: {
    borderRadius: 16,
  },
  small: {
    width: 32,
    height: 32,
  } as ViewStyle,
  medium: {
    width: 64,
    height: 64,
  } as ViewStyle,
  large: {
    width: 128,
    height: 128,
  } as ViewStyle,
});

const sizes: Record<string, ViewStyle> = {
  small: styles.small,
  medium: styles.medium,
  large: styles.large,
};

Box.defaultProps = {
  size: 'medium',
  color: 'black',
};

export default Box;

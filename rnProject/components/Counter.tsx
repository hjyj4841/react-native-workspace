import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

interface CountProps {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const Counter = ({count, onIncrease, onDecrease}: CountProps) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.numberArea}>
        <Text style={styles.number}>{count}</Text>
      </View>
      <Button title="+1" onPress={onIncrease} />
      <Button title="-1" onPress={onDecrease} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  numberArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    fontSize: 72,
    fontWeight: 'bold',
  },
});

export default Counter;

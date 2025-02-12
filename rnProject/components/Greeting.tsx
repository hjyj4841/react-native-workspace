import React from 'react';
import {View, Text} from 'react-native';

interface GreetingProps {
  name: string;
}

const Greeting = (props: GreetingProps) => {
  return (
    <>
      <View>
        <Text>안녕하세요 {props.name}!</Text>
      </View>
      <Text>Extra Text!</Text>
    </>
  );
};

Greeting.defaultProps = {
  name: '리액트 네이티브',
};

export default Greeting;

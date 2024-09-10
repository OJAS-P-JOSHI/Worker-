import React, { useState, useEffect, useRef } from 'react';
import { View, TextInput, Animated, StyleSheet, Easing } from 'react-native';

const AnimatedTextInput = ({ placeholder, value, onChangeText, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  const animatedIsFocused = useRef(new Animated.Value(value ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(animatedIsFocused, {
      toValue: isFocused || value ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
      easing: Easing.inOut(Easing.ease),
    }).start();
  }, [isFocused, value]);

  const labelStyle = {
    position: 'absolute',
    left: 10, 
    top: animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [25, -4], 
      }),
    fontSize: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12],
    }),
    color: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: ['#aaa', '#000'],
    }),
  };

  return (
    <View style={styles.container}>
      <Animated.Text style={labelStyle}>
        {placeholder}
      </Animated.Text>
      <TextInput
        {...props}
        style={styles.textInput}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChangeText={text => onChangeText(text)}
        value={value}
        placeholderTextColor="transparent" 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 18,
    marginBottom: 5,
  },
  textInput: {
    height: 40,
    fontSize: 16,
    color: '#000',
    borderWidth: 1,
    borderRadius: 13,
    borderColor: 'black',
    paddingLeft: 10, 
    paddingTop: 10, 
    paddingBottom: 10, 
  },
});

export default AnimatedTextInput;

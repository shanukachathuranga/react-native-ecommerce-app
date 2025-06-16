import React from 'react';
import { View, Text } from 'react-native';
import {Stack} from "expo-router";

const _layout = () => {
  return (
      <Stack initialRouteName="login">
          <Stack.Screen
            name="login"
            options={{headerShown:false}}
          />
      </Stack>
  );
};

export default _layout;

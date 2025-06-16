import React from 'react';
import { View, Text } from 'react-native';
import {Stack} from "expo-router";

const _layout = () => {
  return (
      <Stack screenOptions={{headerShown:false}}>
          <Stack.Screen name="onboarding"  />
          <Stack.Screen name="index"  />
      </Stack>
  );
};

export default _layout;

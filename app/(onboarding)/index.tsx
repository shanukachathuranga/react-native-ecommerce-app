import React from 'react';
import { View, Text } from 'react-native';
import {Redirect} from "expo-router";

const index = () => {
  return (
    <Redirect href="/onboarding" />
  );
};

export default index;

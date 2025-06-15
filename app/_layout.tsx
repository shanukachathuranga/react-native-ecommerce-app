import { Stack } from "expo-router";
import './global.css';

export default function RootLayout() {
  return <Stack initialRouteName="(onboarding)">
    <Stack.Screen
        name="rootLayout"
        options={{headerShown:false}}
    />
    <Stack.Screen
      name="(tabs)"
      options={{headerShown:false}}
    />
    <Stack.Screen
        name="(onboarding)"
        options={{headerShown:false}}
    />

  </Stack>;
}

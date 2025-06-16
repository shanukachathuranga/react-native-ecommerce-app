import { Stack } from "expo-router";
import './global.css';

export default function RootLayout() {
  return <Stack initialRouteName="(onboarding)">
    <Stack.Screen
        name="(onboarding)"
        options={{headerShown:false}}
    />
    <Stack.Screen
        name="init"
        options={{headerShown:false}}
    />
    <Stack.Screen
      name="(tabs)"
      options={{headerShown:false}}
    />
    <Stack.Screen
      name="(auth)"
      options={{headerShown:false}}
      />
  </Stack>;
}

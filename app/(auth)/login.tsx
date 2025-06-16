import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

const login = () => {
  return (
      <SafeAreaView>
          <View className={`flex flex-col px-5 w-full h-full bg-blue-500`}>
            <View className={`w-full h-auto pb-5 pt-10 bg-splash-grey flex flex-col`}>
                <Text className={`font-montserrat font-bold text-5xl`}>Welcome</Text>
                <Text className={`font-montserrat font-bold text-5xl`}>Back!</Text>
            </View>
            <View className={`w-full h-auto pb-5 bg-splash-grey`}></View>
            <View className={`w-full h-auto pb-5 bg-splash-grey`}></View>
            <View className={`w-full h-auto pb-5 bg-splash-grey`}></View>
            <View className={`w-full h-auto pb-5 bg-splash-grey`}></View>
          </View>
      </SafeAreaView>

  );
};

export default login;

import React from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
import Input from "@/components/ui/Input";
import {passwordIcon, userIcon} from "@/assets/icons";

const login = () => {
  return (
      <SafeAreaView className={`bg-white`}>
          <View className={`flex flex-col px-5 w-full h-full bg-white`}>
            <View className={`w-full h-auto pb-10 pt-5 flex flex-col`}>
                <Text className={`font-montserrat font-bold text-5xl`}>Welcome</Text>
                <Text className={`font-montserrat font-bold text-5xl`}>Back!</Text>
            </View>
            <View className={`w-full h-auto pb-5 flex justify-center items-center`}>
                <View className={`flex justify-center items-center mb-5 h-20 w-11/12`}>
                    <Input icon={userIcon}
                           placeholder={"Username or Email"}
                           className="border-2 border-splash-grey rounded-xl w-full h-[65px] bg-textbg-grey"/>
                </View>
                <View className={`flex justify-center items-center h-20 w-11/12`}>
                    <Input icon={passwordIcon}
                           placeholder={"Password"}
                           className="border-2 border-splash-grey rounded-xl w-full h-[65px] bg-textbg-grey"/>
                </View>
            </View>
            <View className={`w-full h-auto pb-5 bg-splash-grey`}>

            </View>
            <View className={`w-full h-auto pb-5 bg-splash-grey`}></View>
            <View className={`w-full h-auto pb-5 bg-splash-grey`}></View>
          </View>
      </SafeAreaView>

  );
};

export default login;

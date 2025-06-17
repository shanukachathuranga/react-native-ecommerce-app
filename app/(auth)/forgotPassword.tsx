import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Input from "@/components/ui/Input";
import CustomButton from "@/components/ui/CustomButton";
import {mailIcon} from "@/assets/icons";

const forgotPassword = () => {
    return (
        <SafeAreaView className={`bg-white`}>
            <View className={`flex flex-col px-5 w-full h-full bg-white`}>
                <View className={`w-full h-auto pl-5 pb-10 pt-8 flex flex-col`}>
                    <Text className={`font-montserrat font-bold text-5xl`}>Forgot</Text>
                    <Text className={`font-montserrat font-bold text-5xl`}>Password!</Text>
                </View>

                {/*Text fields*/}
                <View className={`w-full h-auto pb-2 flex justify-center items-center`}>
                    <View className={`flex justify-center items-center mb-5 h-20 w-11/12`}>
                        <Input icon={mailIcon}
                               placeholder={"Username or Email"}
                               className="border-2 border-splash-grey rounded-xl w-full h-[65px] bg-textbg-grey"/>
                    </View>

                </View>

                {/*Forgot password button*/}
                <View className={`w-full h-auto px-5 flex`}>
                    <Text className={`font-montserrat font-normal text-splash-grey text--[25px]`}>
                        <Text
                            className={`text-button-red font-montserrat font-normal text-[20px]`}>* </Text>
                        We will send you a message to set or reset your new password
                    </Text>
                </View>

                {/*Submit Button*/}
                <View className={`w-full h-auto py-10 flex justify-center items-center`}>
                    <CustomButton text="Submit"/>
                </View>


            </View>
        </SafeAreaView>

    );
};

export default forgotPassword;

import React from 'react';
import {Pressable, SafeAreaView, Text, View} from 'react-native';
import Input from "@/components/ui/Input";
import {passwordIcon, userIcon} from "@/assets/icons";
import CustomButton from "@/components/ui/CustomButton";
import RoundButton from "@/components/ui/RoundButton";
import {router} from "expo-router";

const login = () => {

    const sendToSignup = () => {
        router.replace('/signUp');
    }

    const sendToForgotPw = () => {
        router.push('/forgotPassword');
    }

    return (
        <SafeAreaView className={`bg-white`}>
            <View className={`flex flex-col px-5 w-full h-full bg-white`}>
                <View className={`w-full h-auto pl-5 pb-10 pt-8 flex flex-col`}>
                    <Text className={`font-montserrat font-bold text-5xl`}>Welcome</Text>
                    <Text className={`font-montserrat font-bold text-5xl`}>Back!</Text>
                </View>

                {/*Text fields*/}
                <View className={`w-full h-auto pb-2 flex justify-center items-center`}>
                    <View className={`flex justify-center items-center mb-5 h-20 w-11/12`}>
                        <Input icon={userIcon}
                               placeholder={"Username or Email"}
                               className="border-2 border-splash-grey rounded-xl w-full h-[65px] bg-textbg-grey"/>
                    </View>
                    <View className={`flex justify-center items-center h-20 w-11/12`}>
                        <Input icon={passwordIcon}
                               placeholder={"Password"}
                               password
                               className="border-2 border-splash-grey rounded-xl w-full h-[65px] bg-textbg-grey"/>
                    </View>
                </View>

                {/*Forgot password button*/}
                <View className={`w-full h-auto px-5 pb-5 flex flex-row-reverse`}>
                    <Pressable
                        onPress={sendToForgotPw}
                    >
                        <Text className={`font-montserrat font-normal text-button-red`}>Forgot Password?</Text>
                    </Pressable>
                </View>

                {/*Login Button*/}
                <View className={`w-full h-auto py-5 flex justify-center items-center`}>
                    <CustomButton text="Login"/>
                </View>

                <View className={`w-full h-auto mt-10 flex flex-row justify-center items-center `}>
                    <View className={`flex flex-col justify-center items-center `}>
                        <Text className={`font-montserrat font-medium text-sm text-splash-grey mb-6`}>
                            - OR Continue with -
                        </Text>
                        <View className={`flex flex-row gap-5 h-auto w-auto mb-5`}>
                            <RoundButton buttonSize={"size-[60px]"} icon="google" iconSize={25}
                                         color={'#3D4DA6'} bgColor={'bg-light-red'}
                                         borderColor={'border-button-red'}
                            />
                            <RoundButton buttonSize={"size-[60px]"} icon="apple" iconSize={25}
                                         color={'#000000'} bgColor={'bg-light-red'}
                                         borderColor={'border-button-red'}
                            />
                            <RoundButton buttonSize={"size-[60px]"} icon="facebook-f" iconSize={25}
                                         color={'#3D4DA6'} bgColor={'bg-light-red'}
                                         borderColor={'border-button-red'}
                            />
                        </View>
                        <Pressable className={`flex items-center justify-center flex-row m-5`}
                                   onPress={sendToSignup}
                        >
                            <Text className={`font-montserrat font-normal text-[14px] text-splash-grey`}>Create An
                                Account</Text>
                            <Text
                                className={`font-montserrat font-semibold text-[14px] text-button-red underline`}> Sign
                                Up</Text>
                        </Pressable>
                    </View>

                </View>
            </View>
        </SafeAreaView>

    );
};

export default login;

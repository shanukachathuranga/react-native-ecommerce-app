import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';

interface Props{
    id?:string,
    imgURL:any,
    title:string,
    description:string
    handleOnboardingExit:() => void
}

const OnboardingSlide = ({id, imgURL, title, description, handleOnboardingExit}:Props) => {
  return (
    <View className="w-screen h-full flex justify-center items-center py-4 relative">
        <View className="w-full h-12 absolute top-5 px-5 flex flex-row">
            <Text className={`font-montserrat font-semibold text-2xl text-black`}>{id}</Text>
            <Text  className={`font-montserrat font-semibold text-2xl text-splash-grey`}>/3</Text>
            <Pressable className={`ml-auto`} onPress={handleOnboardingExit}>
                <Text className={`font-montserrat font-semibold text-2xl text-black`}>Skip</Text>
            </Pressable>
        </View>
        <Image source={imgURL} className="size-[300px] object-cover "/>
        <Text className="text-3xl font-montserrat font-extrabold mt-4">{title}</Text>
        <Text className="font-montserrat font-semibold text-lg text-splash-grey
        p-8 leading-7 text-center">{description}</Text>
    </View>
  );
};

export default OnboardingSlide;

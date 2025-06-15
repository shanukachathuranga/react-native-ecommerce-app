import React from 'react';
import {View, Text, Image} from 'react-native';

interface Props{
    id?:string,
    imgURL:any,
    title:string,
    description:string
}

const OnboardingSlide = ({id, imgURL, title, description}:Props) => {
  return (
    <View className="w-screen h-full flex justify-center items-center py-4">
        <Image source={imgURL} className="size-[300px] object-cover "/>
        <Text className="text-3xl font-montserrat font-extrabold mt-4">{title}</Text>
        <Text className="font-montserrat font-semibold text-lg text-splash-grey
        p-8 leading-7 text-center">{description}</Text>
    </View>
  );
};

export default OnboardingSlide;

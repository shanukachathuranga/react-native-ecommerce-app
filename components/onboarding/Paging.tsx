import React from 'react';
import {View, Text, Pressable} from 'react-native';

interface Props{
    scrollPrev:() => void,
    currentIndex:number,
    handleOnboardingExit:() => void,
    scrollNext:() => void,
}

const Paging = ({scrollPrev, currentIndex, handleOnboardingExit, scrollNext}:Props) => {
  return (
    <View  className=" w-screen h-12 mb-6 flex px-5 justify-between items-center flex-row">
        <Pressable onPress={scrollPrev} className={`${currentIndex === 0 ? 'opacity-0' : 'opacity-100'} 
            flex justify-center items-start w-[130px] h-full`} disabled={currentIndex===0}>
            <Text className="font-montserrat text-2xl font-semibold text-splash-grey">
                Prev
            </Text>
        </Pressable>
        <View className={`w-[200px] h-full flex-1 flex gap-5  items-center justify-center flex-row
         ${currentIndex === 2 ? 'justify-end pr-10': 'justify-center'}`}>
            <View className={`h-[13px] rounded-full ${currentIndex === 0 ? 'w-[50px] bg-black':'w-[15px] bg-splash-grey'} `}></View>
            <View className={`h-[13px] rounded-full ${currentIndex === 1 ? 'w-[50px] bg-black':'w-[15px] bg-splash-grey'} `}></View>
            <View className={`h-[13px] rounded-full ${currentIndex === 2 ? 'w-[50px] bg-black':'w-[15px] bg-splash-grey'} l`}></View>
        </View>
        <Pressable onPress={currentIndex === 2 ? handleOnboardingExit : scrollNext} className="flex justify-center
         items-end w-[130px] h-full">
            <Text className="font-montserrat text-2xl font-semibold text-red-500">
                {(currentIndex === 2) ? 'Get Started' : 'Next'}
            </Text>
        </Pressable>
    </View>
  );
};

export default Paging;

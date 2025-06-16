import React, {useRef, useState} from 'react';
import {View, Text, SafeAreaView, FlatList, Animated, Button, TouchableOpacity, Pressable} from 'react-native';
import { onboardingSlides } from '@/lib/onboardingData'
import OnboardingSlide from "../../components/onboarding/OnboardingSlide";
import {router} from "expo-router";
import {opacity} from "react-native-reanimated/lib/typescript/Colors";

const index = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const slidesRef = useRef(null);
    const scrollX = useRef(new Animated.Value(0)).current;

    const viewableItemsChanged = useRef(({viewableItems}:any) => {
        setCurrentIndex(viewableItems[0].index)
    }).current;

    const scrollNext = () => {
        if(currentIndex < onboardingSlides.length - 1){
            // @ts-ignore
            slidesRef.current.scrollToIndex({index: currentIndex + 1});
        }
    }

    const scrollPrev = () => {
        if(currentIndex > 0){
            // @ts-ignore
            slidesRef.current.scrollToIndex({index: currentIndex - 1});
        }
    }

    const handleOnboardingExit = () => {
        // TODO: add onboarding exit logic
        router.replace('..//(auth)/login')

    }

  return (
    <SafeAreaView className="flex justify-center items-center bg-white size-full">
        <FlatList
            ref={slidesRef}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={onboardingSlides}
            renderItem={({item}) => <OnboardingSlide {...item}/>}
            pagingEnabled
            bounces={false}
            keyExtractor={(item) => item.id}
            onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                useNativeDriver: false,
            })}
            scrollEventThrottle={32}
            onViewableItemsChanged={viewableItemsChanged}
            viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}

        />
        <View className=" w-screen h-12 mb-6 flex px-5 justify-between items-center flex-row">
            <Pressable onPress={scrollPrev} className={`${currentIndex === 0 ? 'opacity-0' : 'opacity-100'} 
            flex justify-center items-start w-auto h-full`} disabled={currentIndex===0}>
                <Text className="font-montserrat text-2xl font-semibold text-splash-grey">
                    Prev
                </Text>
            </Pressable>
            <View className={`w-[200px] h-full flex-1 flex gap-5  items-center flex-row ${currentIndex === 2 ? 'justify-end pr-10': 'justify-center'}`}>
                <View className={`h-[13px] rounded-full ${currentIndex === 0 ? 'w-[50px] bg-black':'w-[15px] bg-splash-grey'} `}></View>
                <View className={`h-[13px] rounded-full ${currentIndex === 1 ? 'w-[50px] bg-black':'w-[15px] bg-splash-grey'} `}></View>
                <View className={`h-[13px] rounded-full ${currentIndex === 2 ? 'w-[50px] bg-black':'w-[15px] bg-splash-grey'} l`}></View>
            </View>
            <Pressable onPress={currentIndex === 2 ? handleOnboardingExit : scrollNext} className="flex justify-center items-end w-auto h-full">
                <Text className="font-montserrat text-2xl font-semibold text-red-500">
                    {(currentIndex === 2) ? 'Get Started' : 'Next'}
                </Text>
            </Pressable>

        </View>


    </SafeAreaView>
  );
};

export default index;

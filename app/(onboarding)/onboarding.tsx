import React, {useRef, useState} from 'react';
import {View, Text, SafeAreaView, FlatList, Animated, Button, TouchableOpacity, Pressable} from 'react-native';
import { onboardingSlides } from '@/lib/onboardingData'
import OnboardingSlide from "../../components/onboarding/OnboardingSlide";
import {router} from "expo-router";
import {opacity} from "react-native-reanimated/lib/typescript/Colors";
import Paging from "@/components/onboarding/Paging";

const onboarding = () => {
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
    <SafeAreaView className="flex justify-center items-center size-full">
        <FlatList
            ref={slidesRef}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={onboardingSlides}
            renderItem={({item}) => <OnboardingSlide {...item} handleOnboardingExit={handleOnboardingExit}/>}
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

            <Paging currentIndex={currentIndex}
                    handleOnboardingExit={handleOnboardingExit}
                    scrollNext={scrollNext}
                    scrollPrev={scrollPrev}
            />



    </SafeAreaView>
  );
};

export default onboarding;

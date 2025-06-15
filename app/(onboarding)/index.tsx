import React, {useRef, useState} from 'react';
import {View, Text, SafeAreaView, FlatList, Animated} from 'react-native';
import { onboardingSlides } from '@/lib/onboardingData'
import OnboardingSlide from "../../components/onboarding/OnboardingSlide";

const index = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const slidesRef = useRef(null);
    const scrollX = useRef(new Animated.Value(0)).current;

    const viewableItemsChanged = useRef(({viewableItems}:any) => {
        setCurrentIndex(viewableItems[0].index)
    }).current;

  return (
    <SafeAreaView className="flex justify-center items-center bg-white size-full">
        <FlatList
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
            ref={slidesRef}
        />



    </SafeAreaView>
  );
};

export default index;

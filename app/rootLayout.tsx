import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useFonts} from "expo-font";
import {Link} from "expo-router";

const rootLayout = () => {

    const [fontLoaded, fontError]= useFonts({
        'montserrat': require("../assets/fonts/Montserrat-VariableFont_wght.ttf"),
        'roboto': require("../assets/fonts/Roboto-VariableFont_wdth,wght.ttf"),
    });

  return (
    <View className="flex-1 justify-center items-center">
      <Text className="font-normal text-5xl font-montserrat">Index</Text>
        <Link href="./(onboarding)" asChild>
            <TouchableOpacity>
                <Text>Onbording</Text>
            </TouchableOpacity>
        </Link>
    </View>
  );
};

export default rootLayout;

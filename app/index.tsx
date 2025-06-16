import React from 'react';
import {useFonts} from "expo-font";
import {Redirect} from "expo-router";

const index = () => {

    const [fontLoaded, fontError]= useFonts({
        'montserrat': require("../assets/fonts/Montserrat-VariableFont_wght.ttf"),
        'roboto': require("../assets/fonts/Roboto-VariableFont_wdth,wght.ttf"),
    });

  return (
    <Redirect href="/(auth)"/>
  );
};

export default index;

import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

interface Props {
    text: string,
}

const CustomButton = ({text}: Props) => {
    return (

        <TouchableOpacity
            className={`bg-button-red flex items-center justify-center
                w-11/12 h-[65px] rounded-lg`}
            activeOpacity={0.6}
        >
            <Text className={`text-white font-montserrat font-semibold text-3xl`}>{text}</Text>
        </TouchableOpacity>

    );
};

export default CustomButton;

import React from 'react';
import {TouchableOpacity} from 'react-native';
import {FontAwesome5} from "@expo/vector-icons";

interface Props {
    icon: string,
    buttonSize: string,
    iconSize: number,
    color?: string,
    bgColor?: string,
    borderColor: string,
}

const RoundButton = ({icon, color, buttonSize, iconSize, bgColor, borderColor}: Props) => {
    return (
        <TouchableOpacity
            className={`flex items-center justify-center border-2 p-3
                ${buttonSize ? `${buttonSize}` : 'size-[50px]'} 
                ${bgColor ? `${bgColor}` : 'bg-white'}
                ${borderColor ? `${borderColor}` : 'border-black'}
                rounded-full`}

            activeOpacity={0.6}
        >
            <FontAwesome5 name={icon} size={iconSize} color={color}/>
        </TouchableOpacity>
    );
};

export default RoundButton;

import React from 'react';
import {View, Text, Image, TextInput, StyleSheet} from 'react-native';

interface Props{
    icon?:any,
    className?:string
    onChangeText?:any
    placeholder?:string
    value?:any
}

const Input = ({icon, className, onChangeText, placeholder, value}:Props) => {
  return (
    <View className={`flex flex-row items-center ${className ? className : 'flex w-full h-full flex-row' }`}>
      <View className={`h-full aspect-[5/6] p-4 flex items-center justify-center`}>
          <Image source={icon} className={`object-cover`}/>
      </View>
        <View className={`flex-1`}>
        <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={value}
            placeholder={placeholder}
            keyboardType="numeric"
        />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    input: {
        height: '90%',
        width:'100%',
        fontFamily:'montserrat',
        fontSize:17,
        borderWidth: 0,
        color:'#676767',
        padding: 0,
    },
});

export default Input;

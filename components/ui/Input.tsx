import React, {useState} from 'react';
import {Image, Pressable, StyleSheet, TextInput, View} from 'react-native';
import {Feather} from "@expo/vector-icons";

interface Props {
    icon?: any,
    className?: string
    placeholder?: string
    password?: boolean
}

const Input = ({icon, className, placeholder, password}: Props) => {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [text, setText] = useState('')
    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    }

    return (
        <View className={`flex flex-row items-center ${className ? className : 'flex w-full h-full flex-row'}`}>
            {icon &&
                (<View className={`h-full aspect-[5/6] p-4 flex items-center justify-center`}>
                    <Image source={icon} className={`object-cover`}/>
                </View>)
            }
            <View className={`flex-1 ${!icon && 'px-2 '}`}>
                <TextInput
                    style={styles.input}
                    onChangeText={setText}
                    value={text}
                    placeholder={placeholder}
                    secureTextEntry={password ? !isPasswordVisible : false}
                    placeholderTextColor={'#676767'}
                />

            </View>
            {password &&
                (<View className={`h-full flex justify-center items-center`}>
                    <Pressable onPress={togglePasswordVisibility} className="pr-5 pl-2">

                        <Feather
                            name={isPasswordVisible ? 'eye-off' : 'eye'}
                            size={24}
                            color="gray"
                        />
                    </Pressable>
                </View>)
            }
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: '90%',
        width: '98%',
        fontFamily: 'montserrat',
        fontSize: 17,
        borderWidth: 0,
        color: '#676767',
        paddingRight: 10,
    },
});

export default Input;

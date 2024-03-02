import { TextInput, View,Text } from "react-native";
import React from "react";
import styles from './Input_Style'
import colors from "../../styles/colors";

const Input = ({placeholder,value,onChange,error,keyboardType,touched,onBlur,secureTextEntry}) => {
    return(
        <View>
            <TextInput
                style={styles.container}
                placeholder={placeholder}
                placeholderTextColor={colors.white}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
            ></TextInput>
            {
                error &&  touched &&<Text style={styles.error_text}>{error}</Text>
            }
        </View>
    )
}

Input.defaultprops={
    keyboardType : "default",
    secureTextEntry : "false"
}

export default Input
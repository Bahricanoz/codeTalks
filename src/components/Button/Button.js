import { TouchableOpacity,Text } from "react-native";
import React from "react";
import styles from './Button_Style'

const Button = ({text,theme,onPress}) =>{
    return(
        <TouchableOpacity style={styles[theme].container} activeOpacity={1} onPress={onPress}>
            <Text style={styles[theme].text}>{text}</Text>
        </TouchableOpacity>
    )
}

Button.defaultProps = {
    theme : "primary"
}
export default Button;
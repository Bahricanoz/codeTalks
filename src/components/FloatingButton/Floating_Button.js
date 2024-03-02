import { TouchableOpacity } from "react-native";
import React from "react";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import stlyes from './Floating_Button_Style'
import colors from "../../styles/colors";

const FloatingButton = ({onPress,icon}) => {
    return(
        <TouchableOpacity onPress={onPress} style={stlyes.container} activeOpacity={1}>
            <Icon  name={icon} size={30} color={colors.white}/>
        </TouchableOpacity>
    )
}

export default FloatingButton
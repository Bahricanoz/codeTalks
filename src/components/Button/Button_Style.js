import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const baseStyle = StyleSheet.create({
    container : {
        height : 50,
        marginBottom : 10,
        borderRadius : 10,
        justifyContent : "center",
        borderColor : colors.orange,
        borderWidth : 2,
    },
    text : {
        textAlign : "center",
        fontSize : 20,
        fontWeight : "bold"
    }
})

export default {
    ...baseStyle,
    primary : StyleSheet.create({
        container : {
            ...baseStyle.container,
            backgroundColor : colors.orange,
        },
        text : {
            ...baseStyle.text ,
            color : colors.white
        }
    }),
    secondary : StyleSheet.create({
        container : {
            ...baseStyle.container,
            backgroundColor : colors.white,
        },
        text : {
            ...baseStyle.text ,
            color : colors.orange
        }
    })

}
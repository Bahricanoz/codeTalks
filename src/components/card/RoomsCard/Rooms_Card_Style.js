import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";

export default StyleSheet.create({
    container : {
        height : 200,
        width : 200,
        backgroundColor : colors.white,
        margin : 3,
        borderRadius : 10,
        justifyContent : "center",
        borderWidth : 1,
        borderColor : "#dbd8e3"
    },
    text : {
        fontSize : 30,
        color : colors.orange,
        textAlign : "center"
    }
})
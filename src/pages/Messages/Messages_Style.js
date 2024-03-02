import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export default StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : colors.openOrange,
        padding : 15,
    },
    text_container : {
        borderColor : colors.white,
        borderWidth : 2,
        borderStyle : "dotted",
        padding : 10,
        borderRadius : 10,
        marginBottom : 10,
    },
    text : {
        color: colors.white,
        fontSize : 25,
        textAlign: "center"
    }
})
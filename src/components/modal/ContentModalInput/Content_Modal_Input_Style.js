import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";

export default StyleSheet.create({
    modal : {
        justifyContent : "flex-end",
        margin: 0,
    },
    container : {
        justifyContent : "space-between",
        height : 300,
        backgroundColor : colors.white,
        borderTopLeftRadius : 10,
        borderTopRightRadius : 10,
        padding : 10, 
    },
    input : {
        borderBottomWidth : 1,
        fontSize : 20,
        borderBottomColor : colors.darkGray
    }
})
import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export default StyleSheet.create({
    container : {
        position : "absolute",
        right : 10,
        bottom : 10,
        backgroundColor : colors.darkOrange, 
        padding : 10,
        width: 60,
        height : 60,
        borderRadius : 50,
        alignItems : "center",
        justifyContent : "center"
    },  
})
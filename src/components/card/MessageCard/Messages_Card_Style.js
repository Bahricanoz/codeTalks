import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";

export default StyleSheet.create({
    container : {
        backgroundColor : colors.white,
        padding : 10,
        marginBottom : 10,
        borderRadius : 10,
        minHeight : 80,
        justifyContent : "space-between"
    },
    header_text_container : {
        flexDirection : "row",
        justifyContent : "space-between",
    },
    name : {
        fontSize : 18
    },
    date : {
        fontStyle : "italic",

    },
    content : {
        color : colors.black,
        fontWeight : "bold",
        fontSize : 20,
    }
})
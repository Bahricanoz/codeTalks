import React from "react";
import { View,Text,TouchableOpacity } from "react-native";
import styles from './Rooms_Card_Style'

const RoomsCard = ({room,handleMessages}) => {
    return(
        <TouchableOpacity onPress={handleMessages}>
            <View style={styles.container}>
                <Text style={styles.text}>{room}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default RoomsCard

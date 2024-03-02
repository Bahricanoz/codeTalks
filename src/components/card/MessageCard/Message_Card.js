import { Text, View } from "react-native";
import React from "react";
import styles from './Messages_Card_Style'
import { formatDistance, parseISO} from "date-fns";
import { tr } from "date-fns/locale/tr";

const MessageCard = ({message}) =>{
    const formedDate = formatDistance(parseISO(message.date), new Date(), 
    { addSuffix: true ,
        locale : tr
    });
    return(
        <View style={styles.container}>
            <View style={styles.header_text_container}>
                <Text style={styles.name}>{message.user}</Text>
                <Text style={styles.date}>{formedDate}</Text>
            </View>
            <Text style={styles.content}>
                {message.text}
            </Text>
        </View>
    )
}

export default MessageCard
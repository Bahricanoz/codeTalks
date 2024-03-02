import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import Modal from "react-native-modal"
import styles from './Content_Modal_Input_Style'
import Button from "../../Button";
import { showMessage } from "react-native-flash-message";

const ContentModalInput = ({isVisible,onClose,placeHolder,onSend}) => {
    const [text, setText] = useState("")

    function handSend(){
        if(!text){
            return showMessage({
                message : "Lütfen boş bırakmayınız...",
                type : "danger",
                titleStyle : {
                    fontSize : 20,
                }
            })
        }
        onSend(text)
        setText("")
    }
    return(
        <Modal 
            style={styles.modal}
            isVisible={isVisible}
            onSwipeComplete={onClose}
            onBackdropPress={onClose}
        >
            <View style={styles.container}>
                <TextInput
                    placeholder={placeHolder}
                    multiline
                    style={styles.input}
                    value={text}
                    onChangeText={setText}
                />
                <Button text="Gönder" onPress={handSend}/>
            </View>
        </Modal>
    )
}

export default ContentModalInput;
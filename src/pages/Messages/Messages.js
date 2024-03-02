import React, { useEffect, useState } from "react";
import { View,Text, FlatList } from "react-native";
import styles from './Messages_Style'
import FloatingButton from "../../components/FloatingButton";
import MessageCard from "../../components/card/MessageCard";
import RoomModalInput from "../../components/modal/ContentModalInput";
import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database'
import parseContentData from "../../utils/parseContentData";
import Loading from "../../components/Loading";
import Empty from "../../components/Empty";
import ContentModalInput from "../../components/modal/ContentModalInput";
import { showMessage } from "react-native-flash-message";


const Messages = ({route}) => {
    const [messageList, setMessageList]= useState(null)
    const [ visible, setIsVisible] = useState(false)
    const [ loading, setLoading] = useState(true)
    const data = route.params

    useEffect(() => {
        const reference = database().ref(`/rooms/${data.id}/${data.text}`)
        reference.on("value",snapshot =>{
            const contentData = snapshot.val()
            
            if(!contentData){
                setLoading(false)
                return false
            }
            const contentParse = parseContentData(contentData)
            setMessageList(contentParse)
            setLoading(false)

        })
    },[])

    const handleInputModal= () => setIsVisible(!visible)

    function handleSentContent(content){
        handleInputModal();
        sendMessage(content)
    }

    async function sendMessage(content){
        const userName = auth().currentUser.email;
        try{
                const contentObject = {
                    user : userName.split('@')[0],
                    text : content,
                    date : new Date().toISOString(),
                }
                await database().ref(`/rooms/${data.id}/${data.text}/`).push(contentObject)
        }catch(error){
            showMessage({
                message : error,
                type : "danger",
                titleStyle : {
                    fontSize : 20,
                }
            })
        }
    }

    const renderItem = ({item}) => <MessageCard message={item}/>
    if(loading){
        return <Loading/>
    }
    return(
        <View style={styles.container}>
            <View style={styles.text_container}>
                <Text style={styles.text}>{data.text} odası kuruldu!</Text>
            </View>
            {
                !messageList ?  <Empty/>: 
                <FlatList
                    data={messageList}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
            />
            }
            <ContentModalInput onClose={handleInputModal} isVisible={visible} placeHolder="Haydi yeni bir mesaj gönder..." onSend={handleSentContent}/>
            <FloatingButton icon="plus" onPress={handleInputModal}/>
        </View>
    )
}

export default Messages
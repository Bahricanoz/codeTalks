import { View,Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import styles from './Rooms_Style'
import FloatingButton from "../../components/FloatingButton";
import RoomsCard from "../../components/card/RoomsCard";
import database from '@react-native-firebase/database'
import auth from '@react-native-firebase/auth'
import parseContentData from "../../utils/parseContentData";
import Loading from "../../components/Loading";
import Empty from "../../components/Empty";
import ContentModalInput from "../../components/modal/ContentModalInput";
import { showMessage } from "react-native-flash-message";

const Rooms = ({navigation}) =>{
    const [contentList, setContentList] = useState([])
    const [visible, setIsVisible] = useState(false)
    const [loading,setLoading]= useState(true)

    useEffect(() => {
        const reference  = database().ref('/rooms/')
        reference.on("value", snapshot =>{
            const contentData = snapshot.val()
            if(!contentData){
                setLoading(false)
                return 
            }
            const parsedData = parseContentData(contentData)
            setContentList(parsedData)
            setLoading(false)
        })
    },[])

    const handleInputModal = () => setIsVisible(!visible)

    function handleSentContent(content){
        handleInputModal();
        sendContent(content)
    }

    async function sendContent(content){
        const user = auth().currentUser.email;
        const roomCheck = contentList.findIndex((room) => room.text.toLowerCase() == content.toLowerCase())
        if(roomCheck > 0){
            showMessage({
                type : "danger",
                message : "Bu oda zaten var...",
                titleStyle : {
                    fontSize : 20,
                }
            })
            return
        }
        try{
            const contentObject = {
                userName : user.split("@")[0],
                text : content,
                date : new Date().toString(),
            }
            await database().ref('/rooms/').push(contentObject)
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

    const renderItem = ({item}) => <RoomsCard room={item.text} handleMessages={() => navigation.navigate("Messages", item)}/>
    if(loading){
        return <Loading/>
    }
    return(
        <View style={styles.container}>
           {
             !contentList ? <Empty/> : 
             <FlatList
             data={contentList}
             numColumns={2}
             showsVerticalScrollIndicator={false}
             keyExtractor={(item) => item.id}
             renderItem={renderItem} 
         />
           }
            <ContentModalInput isVisible={visible} onClose={handleInputModal} placeHolder="Haydi yeni bir oda kur..." onSend={handleSentContent}/>
            <FloatingButton onPress={handleInputModal} icon="plus"/>
        </View>
    )
}

export default Rooms
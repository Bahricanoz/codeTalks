import React, { useEffect, useState } from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './pages/auth/Login';
import Sign from './pages/auth/Sign';
import Rooms from './pages/Rooms';
import Messages from './pages/Messages';
import FlashMessage from "react-native-flash-message";
import colors from './styles/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import auth from '@react-native-firebase/auth'

const Stack = createNativeStackNavigator()

const Auth = () =>{
    return (
        <Stack.Navigator screenOptions={{ headerShown : false}}>
            <Stack.Screen name='Login' component={Login}></Stack.Screen>
            <Stack.Screen name='Sign' component={Sign}></Stack.Screen>
        </Stack.Navigator>
    )
}

const Router = () => {
    const [ userSession , setUserSession] = useState(false)

    useEffect(() => {
        auth().onAuthStateChanged((user) => {
            setUserSession(!!user)
        })
    },[])

    const handleSignOut = () => auth().signOut()
    return(
        <NavigationContainer>
            <Stack.Navigator>
                {
                    !userSession ? <Stack.Screen name='Auth' component={Auth} options={{ headerShown : false}}></Stack.Screen> :
                    <>
                        <Stack.Screen 
                        name='Rooms'
                        component={Rooms} 
                        options={
                        {headerTitleAlign : "center", 
                        headerTintColor : colors.orange,
                        headerRight : () => (
                            <Icon name="logout" size={30} color={colors.orange} onPress={handleSignOut}/>
                        )
                        }}
                        ></Stack.Screen>
                        <Stack.Screen 
                            name='Messages' 
                            component={Messages} 
                            options={
                                ({route}) =>({
                                headerTitleAlign : "center",
                                title : route.params.text,
                                headerTintColor : colors.orange,
                                headerRight: () => (
                                    <Icon name="logout" size={30} color={colors.orange} onPress={handleSignOut}/>
                                )
                                })
                            }></Stack.Screen>
                    </>
                }
            </Stack.Navigator>
            <FlashMessage position="top" /> 
        </NavigationContainer>
    )
}

export default Router
import { View,Text, ScrollView } from "react-native";
import React from "react";
import stlyes from './Login_style'
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { Formik } from "formik";
import { loginValidation } from "../../../utils/validation";
import auth from '@react-native-firebase/auth'
import { showMessage } from "react-native-flash-message";
import authErrorMessagesParse from "../../../utils/authErrorMessagesParse";

const Login = ({navigation}) =>{
    const handleSign = () => navigation.navigate("Sign")

    async function handleLogin(formValues){
        try{
            await auth().signInWithEmailAndPassword(formValues.mail, formValues.password)
            navigation.navigate("Rooms")
            formValues.mail = "";
            formValues.password = "";
        }catch(error){
            showMessage({
                message :  authErrorMessagesParse(error.code),
                type : "default",
                titleStyle : {
                    fontSize : 20,
                },
            })
            formValues.mail = "";
            formValues.password = "";
            console.log(error)
        }
    }
    
    return(
        <ScrollView style={stlyes.container}>
            <Text style={stlyes.text}>codeTalks</Text>
            <Formik
                initialValues={{
                    mail : "",
                    password: "",
                }}
                validationSchema={loginValidation}
                onSubmit={handleLogin}
            >
                {
                    ({values,handleChange,handleSubmit,errors,touched,handleBlur}) => {
                        return(
                            <View>
                                <Input placeholder="e-postanızı giriniz.." keyboardType="email-address" value={values.mail} onChange={handleChange("mail")} error={errors.mail}  onBlur={handleBlur("mail")} touched={touched.mail}/>
                                <Input placeholder="şifrenizi giriniz.." value={values.password} onChange={handleChange("password")} error={errors.password}  onBlur={handleBlur("password")} touched={touched.password} secureTextEntry={true}/>
                                <Button text="Giriş Yap" onPress={handleSubmit}/>
                            </View>
                        )
                    }
                }
            </Formik>
            <Button text="Kayıt Ol" theme="secondary" onPress={handleSign}/>
        </ScrollView>
    )
}

export default Login
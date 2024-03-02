import { View,Text, ScrollView } from "react-native";
import React from "react";
import styles from './Sign_Style'
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { Formik } from "formik";
import { signValidation } from "../../../utils/validation";
import auth from '@react-native-firebase/auth'
import { showMessage } from "react-native-flash-message";
import authErrorMessagesParse from "../../../utils/authErrorMessagesParse";
const Sign = ({navigation}) => {
    
    const handleLogin = () => navigation.goBack()

    async function handleSubmit(formValues){
        try{
            await auth().createUserWithEmailAndPassword(formValues.mail , formValues.password)
            showMessage({
                message : "Kayıt başarılı..",
                type : "success",
                titleStyle: {
                    fontSize : 20,
                }
            })
            navigation.navigate("Login")
            formValues.mail = "";
            formValues.password= "";
            formValues.passwordConfirm = "";
        }catch(error){
            showMessage({
                message : authErrorMessagesParse(error.code),
                type : "default",
                titleStyle : {
                    fontSize : 20
                }
            })
            formValues.mail = "";
            formValues.password= "";
            formValues.passwordConfirm = "";
        }
    }

    return(
        <ScrollView style={styles.container}>
            <Text style={styles.text}>codeTalks</Text>
            <Formik
                initialValues={{
                    mail : "",
                    password : "",
                    passwordConfirm : ""
                }}
                onSubmit={handleSubmit}
                validationSchema={signValidation}
            >
                {
                    ({values,handleChange,handleSubmit,errors,touched,handleBlur}) => {
                        return(
                            <View>
                                <Input placeholder="e-posta adresinizi giriniz.." value={values.mail} keyboardType="email-address" onChange={handleChange("mail")} error={errors.mail} touched={touched.mail} onBlur={handleBlur("mail")}/>
                                <Input placeholder="şifrenizi giriniz.." value={values.password} secureTextEntry={true} onChange={handleChange("password")} error={errors.password} touched={touched.password} onBlur={handleBlur("password")}/>
                                <Input placeholder="şifrenizi tekrar giriniz.." value={values.passwordConfirm} secureTextEntry={true} onChange={handleChange("passwordConfirm")} error={errors.passwordConfirm} touched={touched.passwordConfirm} onBlur={handleBlur("passwordConfirm")}/>
                                <Button text="Kayıt Ol" onPress={handleSubmit}/>
                            </View>
                        )
                    }
                }
            </Formik>
            <Button text="Geri Dön" theme="secondary" onPress={handleLogin}/>
        </ScrollView>
    )
}

export default Sign
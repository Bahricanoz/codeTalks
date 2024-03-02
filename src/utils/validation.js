import { object,string,ref } from "yup";

const messages = {
    mail : "Geçersiz mail adresi..",
    require : "Lütfen bu alanı doldurunuz..",
    passwordConfirm : "Şifreler uyuşmuyor.."
}

export const loginValidation = object({
    mail : string().email(messages.mail).required(messages.require),
    password : string().required(messages.require)
})

export const signValidation = object({
    mail : string().email(messages.mail).required(messages.require),
    password : string().required(messages.require),
    passwordConfirm : string().oneOf([ref("password")],messages.passwordConfirm).required(messages.require)
})

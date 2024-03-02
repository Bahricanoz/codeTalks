export default function(errorcode){
    switch (errorcode) {
        case "auth/invalid-credential" :
            return "Hatalı giriş..."
        case "auth/email-already-in-use" : 
            return "Kullancı zaten kayıtlı..."
        case "auth/weak-password":
            return "Daha güçlü bir şifre giriniz..."
        case "auth/too-many-requests" : 
            return "Çok fazla deneme yaptınız..."
        default:
            return errorcode
    }
}
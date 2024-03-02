import LottieView from "lottie-react-native";
import { View } from "react-native";

const Empty = () => {
    return(
        <LottieView
            source={require("../../assets/empty.json")}
            style={{width : "100%",height : "80%"}}
            autoPlay
        ></LottieView>
    )
}

export default Empty;
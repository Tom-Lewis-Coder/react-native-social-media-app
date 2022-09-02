import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.light.tint,
        borderRadius: 50,
        position: 'absolute',
        bottom: 23,
        right: 30,
        width: 59,
        height: 59,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default styles
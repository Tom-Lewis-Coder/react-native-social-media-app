import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    tweetHeaderContainer: {
        flexDirection: 'row',
    },
    name: {
        marginHorizontal: 5,
        fontWeight: "bold",
    },
    username: {
        marginHorizontal: 5,
        color: 'grey',
    },
    createdAt: {
        marginHorizontal: 5,
    },
})

export default styles
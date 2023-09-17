import {
    useWindowDimensions,
    View,
    Text,
    ActivityIndicator,
    StyleSheet,
} from "react-native";

const Loader = ({visible = false}) => {
    const {width, height} = useWindowDimensions();
    return (
        visible && (
            <View style={[styles.container, {height, width}]}>
                <View style={styles.loader}>
                    <ActivityIndicator size="large" color="seagreen"/>
                    <Text style={styles.text}>Loading...</Text>
                </View>
            </View>
        )
    );
};

export default Loader;

const styles = StyleSheet.create({
    loader: {
        height: 70,
        backgroundColor: "white",
        marginHorizontal: 50,
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    container: {
        position: "absolute",
        zIndex: 10,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
    },
    text: {
        marginLeft: 10,
        fontSize: 16,
    },
});
import { LinearGradient } from "expo-linear-gradient";
import { Pressable, View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";
import { Platform } from "react-native";

function CountryGridTile(props) {
    return (
        <View style={styles.gridItem}>
            <Pressable
                style = {({ pressed }) => [
                    styles.button,
                    pressed ? styles.buttonPressed : null,
                ]}
                android_ripple={{ color: Colors.primary300 }}
                onPress = {props.onPress}
            >
                <LinearGradient
                    colors = {[props.color, props.color]}
                    style = {styles.innerContainer}
                >
                    <Text
                        style = {styles.name}
                    >
                        {props.name}
                    </Text>
                </LinearGradient>
            </Pressable>
        </View>
    );
}

export default CountryGridTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: "white",
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === "android" ? "hidden" : "visible", // hides android ripple overflow (android only)
    },

    button : {
        flex: 1,
    },

    innerContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
    },

    name: {
        textAlign: "center",
        fontSize: 23,
        fontFamily: "lemon",
    },

});
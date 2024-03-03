import { Pressable, View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

//ive cross refrenced with a few other sources and i havent been able to get the styling for my navbutton to work
//if you could leave the reason in the feedback and tell me where i messed up that would be blessed

function NavButton(props){
    return(
        <Pressable 
        android_ripple={{color: "gray"}}
        onPress={props.onPress}>
            <View style={styles.buttonContainer}> 
                <Text style={styles.text}>{props.children}</Text>
            </View>
        </Pressable>
    )
}

export default NavButton;

const styles = StyleSheet.create({
    buttonContainer: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 300,
        borderColor: Colors.primary500,
        backgroundColor: Colors.accent500,
        width: 300,
        margin: 10
    },
    text: {
        padding: 8,
        fontSize: 25,
        textAlign: "center",
        color: Colors.primary500,
        fontFamily: "tango"
    }
});
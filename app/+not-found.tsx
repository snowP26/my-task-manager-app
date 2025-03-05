import { Text, View, StyleSheet, Dimensions } from "react-native";
import { Link, Stack } from "expo-router";

const { width } = Dimensions.get("window");

const responsiveFontSize = () => (20 * width) / 375;

export default function NotFoundScreen() {
return (
    <>
        <Stack.Screen options={{ headerTitle: "Oops page not found!", headerLeft: () => <></>}}/>
        <View style={styles.container}>
            <Text style={[styles.text, { fontSize: responsiveFontSize() }]}>Page not found!</Text>
            <Link href="/" style={styles.button}>Go back to home</Link>
        </View>
    </>
);
}

const styles = StyleSheet.create({
container: {
    backgroundColor: '#171614',
    flex: 1,
    alignItems: "center",
},

text: {
    color: '#DEC1FF',
    fontWeight: 'bold', 
}, 

button: {
    fontSize: 20,
    textDecorationLine: "underline",
    backgroundColor: "#25292e",
    color: "white",
}
});

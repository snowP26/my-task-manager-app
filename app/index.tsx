import { Text, View, StyleSheet, Dimensions } from "react-native";
import { Link } from "expo-router";

const { width } = Dimensions.get("window");

const responsiveFontSize = () => (20 * width) / 375;

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { fontSize: responsiveFontSize() }]}>Welcome to My Task Manager App</Text>
      <Link href="/tasks" style={styles.button}>Go to Tasks</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1D1D1D',
    flex: 1,
    alignItems: "center",
  },

  text: {
    color: 'white',
    fontWeight: 'bold', 
  }, 

  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    backgroundColor: "#25292e",
    color: "white",
  }
});

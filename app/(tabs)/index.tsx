import { Text, View, StyleSheet, Dimensions } from "react-native";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Buttons";

const { width } = Dimensions.get("window");
const PlaceholderImage = require("../../assets/images/image1.jpg")

const responsiveFontSize = () => (20 * width) / 375;

export default function Index() {
  return (
    <View style={styles.container}>
      {/* <Text style={[styles.text, { fontSize: responsiveFontSize() }]}>Welcome to My Task Manager App</Text> */}
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage}/>
      </View>

      <View>
        <Button label="Choose a Photo" theme="primary"/>
        <Button label="test" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#171614',
    flex: 1,
    alignItems: "center",
  },

  // text: {
  //   color: '#DEC1FF',
  //   fontWeight: 'bold', 
  // }, 

  imageContainer: {
    flex: 1,
  },

  // button: {
  //   fontSize: 20,
  //   textDecorationLine: "underline",
  //   backgroundColor: "#25292e",
  //   color: "white",
  // }
});

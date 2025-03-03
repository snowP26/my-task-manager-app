import React from 'react';
import { Text, View, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const responsiveFontSize = () => (20 * width) / 375;

export default function TasksScreen() {
return (
    <View style={styles.container}>
    <Text style={[styles.text, { fontSize: responsiveFontSize() }]}>Your To Do List</Text>
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
    color: 'yellow',
    fontWeight: 'bold', 
    fontFamily: 'SpaceMono-Regular',
}, 
});

import React from "react";
import {View, Text,Button ,StyleSheet, TouchableOpacity, Image} from "react-native";
import { Video, ResizeMode } from "expo-av";

const HomeScreen = () => {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

    return (
       
      <View style={styles.container}>
      <Image
       style={{ width: 200, height: 200, marginTop: 20 }}
        source={require('../assets/herramientas.jpeg')}
      />

      </View>
      
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    video: {
        flex: 1,
        alignSelf: "stretch"
    },
    buttons: {
        margin: 16
    }
})

export default HomeScreen;
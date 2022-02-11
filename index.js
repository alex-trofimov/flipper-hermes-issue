import "expo-dev-client";
import { StatusBar } from "expo-status-bar";
import React, {useEffect} from "react";
import { StyleSheet, Text, View } from "react-native";
import { connectToDevTools } from "react-devtools-core";
import { registerRootComponent } from "expo";

if (__DEV__) {
  connectToDevTools({
    host: "localhost",
    port: 8097,
  });
}

export default function App() {
  useEffect(() => {
    console.log('Hermes is working fine')
  }, []);

  return (
    <View style={styles.container}>
      <Text>Hello There</Text>
      <StatusBar style="auto" />
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
});

registerRootComponent(App)

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";

const GetStartedScreen = () => {
  return (
    <SafeAreaView>
      <View style={{ backgroundColor: "white",height:"100%" }}>
        <View style={styles.stackContainer}>
          <View style={styles.greenCircle} />
          
          <LottieView
            source={require("@/assets/animations/flaganimation.json")}
            autoPlay
            loop={true}
            style={styles.lottieAnimation}
          />
        </View>
        <View style={{ marginHorizontal: 40 }}>
          <Text style={styles.headingText}>
          🌍 Explore the World with Ease
Welcome to Country Details App, your go-to guide for discovering countries around the globe!
</Text>

  
          <TouchableOpacity style={styles.button} onPress={() => router.push("/Loginscreen")}>
            <Text style={styles.buttonText}>GET STARTED</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default GetStartedScreen;

const styles = StyleSheet.create({
  stackContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 60,
  },
  greenCircle: {
    width: 250,
    height: 250,
    borderRadius: 200,
    backgroundColor: "#00008B",
    opacity: 0.8,
    position: "absolute",
    top: 30,
  },
  lottieAnimation: {
    width: 350,
    height: 300,
  },
  headingText: {
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    lineHeight: 22,
    marginVertical: 15,
  },
  button: {
    height: 50,
    marginVertical: 20,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#00008B",
  },
  buttonText: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
  },
});
import React from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

import Onboarding from "react-native-onboarding-swiper";

const OnboardingScreen = ({ navigation }) => {
  const skip = ({ ...props }) => (
    <TouchableOpacity {...props} style={{ marginHorizontal: 8 }}>
      <Text>Skip</Text>
    </TouchableOpacity>
  );

  const next = ({ ...props }) => {
    return (
      <TouchableOpacity {...props} style={{ marginHorizontal: 8 }}>
        <Text>Next</Text>
      </TouchableOpacity>
    );
  };

  const done = ({ ...props }) => (
    <TouchableOpacity {...props} style={{ marginHorizontal: 8 }}>
      <Text style={{ fontSize: 16 }}>Done</Text>
    </TouchableOpacity>
  );

  const dots = ({ selected }) => {
    console.log(selected);
    let backgroundColor;
    backgroundColor = selected ? "rgba(0,0,0, 0.8)" : "rgba(0,0,0, 0.3)";

    return (
      <View
        style={{ width: 5, height: 5, marginHorizontal: 3, backgroundColor }}
      />
    );
  };
  return (
    <Onboarding
      onSkip={() => navigation.replace("Login")}
      onDone={() => navigation.replace("Login")}
      SkipButtonComponent={skip}
      NextButtonComponent={next}
      DoneButtonComponent={done}
      DotComponent={dots}
      pages={[
        {
          backgroundColor: "#a6e4d0",
          image: <Image source={require("../assets/onboarding-img1.png")} />,
          title: "Connect to the World",
          subtitle: "Done with React Native Onboarding Swiper",
        },
        {
          backgroundColor: "#fdeb93",
          image: <Image source={require("../assets/onboarding-img2.png")} />,
          title: "Share Your Favorites",
          subtitle: "Done with React Native Onboarding Swiper",
        },
        {
          backgroundColor: "#e9bcbe",
          image: <Image source={require("../assets/onboarding-img3.png")} />,
          title: "Become The Star",
          subtitle: "Done with React Native Onboarding Swiper",
        },
      ]}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

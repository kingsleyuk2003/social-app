import React from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

import AppIntroSlider from "react-native-app-intro-slider";

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
  const prev = ({ ...props }) => {
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

  // const dots = ({ selected }) => {
  //   console.log(selected);
  //   let backgroundColor;
  //   backgroundColor = selected ? "rgba(0,0,0, 0.8)" : "rgba(0,0,0, 0.3)";

  //   return (
  //     <View
  //       style={{ width: 5, height: 5, marginHorizontal: 3, backgroundColor }}
  //     />
  //   );
  // };

  const _renderItem = ({ item, index, dimensions }) => {
    // console.warn(dimensions)

    return (
      <View style={[styles.slide, { backgroundColor: item.backgroundColor }]}>
        <Text style={styles.title}>{item.title}</Text>
        <Image style={styles.image} source={item.image} />
        <Text style={styles.text}>{item.subtitle}</Text>
      </View>
    );
  };

  return (
    <AppIntroSlider
      data={[
        {
          key: "one",
          backgroundColor: "#a6e4d0",
          image: require("../assets/onboarding-img1.png"),
          title: "Connect to the World",
          subtitle: "Done with React Native Onboarding Swiper",
        },
        {
          key: "two",
          backgroundColor: "#fdeb93",
          image: require("../assets/onboarding-img2.png"),
          title: "Share Your Favorites",
          subtitle: "Done with React Native Onboarding Swiper",
        },
        {
          key: "three",
          backgroundColor: "#e9bcbe",
          image: require("../assets/onboarding-img3.png"),
          title: "Become The Star",
          subtitle: "Done with React Native Onboarding Swiper",
        },
      ]}
      renderItem={_renderItem}
      activeDotStyle={{ backgroundColor: "blue" }}
      renderNextButton={next}
      renderPrevButton={prev}
      showSkipButton={true}
      renderSkipButton={skip}
      renderDoneButton={done}
      onDone={() => navigation.navigate("Login")}
      onSkip={() => navigation.navigate("Login")}
     
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
  slide: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  title: {},
  image: {},
  text: {},
});

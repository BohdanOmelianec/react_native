import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Colors from "../../constants/colors";

export default function Layout({ children }) {
  const insets = useSafeAreaInsets();
  const [fontsLoaded] = useFonts({
    "open-sans-bold": require("../../assets/fonts/OpenSans-Bold.ttf"),
    "open-sans": require("../../assets/fonts/OpenSans-Regular.ttf"),
  });

  return (
    <LinearGradient
      colors={[Colors.accentPurple, Colors.accentYellow]}
      style={styles.rootContainer}
    >
      <ImageBackground
        source={require("../../assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootContainer}
        imageStyle={styles.image}
      >
        <View style={{ ...styles.container, paddingTop: insets.top}}>
          {fontsLoaded && children}
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 24,
  },
  image: {
    opacity: 0.15,
  },
});

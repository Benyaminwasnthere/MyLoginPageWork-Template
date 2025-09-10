import React, { useRef, useEffect } from "react";
import { Animated, StyleSheet, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";

export default function RainbowGlow({ children, style }: any) {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 8000,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const rotation = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={[styles.container, style]}>
      {/* Glow */}
      <Animated.View
        style={[
          styles.glow,
          {
            transform: [{ rotate: rotation }],
          },
        ]}
      >
        <LinearGradient
          colors={["#ff0000", "#ff7f00", "#ffff00", "#00ff00", "#0000ff", "#4b0082", "#8f00ff"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradient}
        />
      </Animated.View>

      {/* Your content on top */}
      <View style={styles.content}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { position: "relative", alignItems: "center", justifyContent: "center" },
  glow: {
    position: "absolute",
    top: -20,
    left: -20,
    right: -20,
    bottom: -20,
    borderRadius: 30,
    opacity: 0.6,
  },
  gradient: {
    flex: 1,
    borderRadius: 30,
    shadowColor: "#fff",
    shadowOpacity: 0.8,
    shadowRadius: 20,
  },
  content: { zIndex: 1, width: "100%" },
});

import React from "react";
import { Text, StyleSheet } from "react-native";

interface AuthFooterProps {
  text: string;
  linkText: string;
  onPress: () => void;
}

export default function AuthFooter({
  text,
  linkText,
  onPress,
}: AuthFooterProps) {
  return (
    <Text style={styles.footer}>
      {text} <Text style={styles.link} onPress={onPress}>{linkText}</Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  footer: {
    marginTop: 15,
    color: "#555",
  },
  link: {
    color: "#007bff",
    fontWeight: "600",
  },
});

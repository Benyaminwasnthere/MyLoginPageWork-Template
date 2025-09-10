import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface PasswordInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

export default function PasswordInput({
  placeholder,
  value,
  onChangeText,
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={!showPassword}
        value={value}
        onChangeText={onChangeText}
      />
      <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
        <Ionicons
          name={showPassword ? "eye" : "eye-off"}
          size={22}
          color="gray"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
  },
  input: {
    flex: 1,
    paddingVertical: 12,
  },
});

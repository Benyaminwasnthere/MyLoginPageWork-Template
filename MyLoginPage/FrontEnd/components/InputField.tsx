import React from "react";
import { TextInput, StyleSheet, TextInputProps, View } from "react-native";

interface InputFieldProps extends TextInputProps {
  placeholder: string;
}

export default function InputField({ placeholder, ...props }: InputFieldProps) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#aaa"
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 15,
  },
  input: {
    padding: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
  },
});

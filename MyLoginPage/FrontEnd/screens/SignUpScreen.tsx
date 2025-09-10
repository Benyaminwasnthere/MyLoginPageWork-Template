import React, { useState } from "react";
import { SafeAreaView, ScrollView, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

import InputField from "../components/InputField";
import PasswordInput from "../components/PasswordInput";
import PasswordStrengthMeter from "../components/PasswordStrengthMeter";
import AuthFooter from "../components/AuthFooter";

export default function SignUpScreen({ navigation }: any) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Logo image */}
        <Image
          source={require("../assets/splitchecklogo.png")}
          style={styles.logo}
        />

        <Text style={styles.title}>Join Split Check</Text>
        <Text style={styles.subtitle}>
          Create your account to start splitting bills effortlessly
        </Text>

        <InputField
          placeholder="Enter your full name"
          value={fullName}
          onChangeText={setFullName}
        />
        <InputField
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <PasswordInput
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
        />
        <PasswordStrengthMeter password={password} />
        <PasswordInput
          placeholder="Confirm your password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Create account</Text>
        </TouchableOpacity>

        <AuthFooter
          text="Already have an account?"
          linkText="Sign in"
          onPress={() => navigation.navigate("SignIn")}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  scroll: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    width: 120,         // shrinks your 1024x1024 image
    height: 120,
    marginBottom: 20,
    resizeMode: "contain", // keeps proportions
  },
  title: { fontSize: 20, fontWeight: "600", marginBottom: 5 },
  subtitle: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#333",
    padding: 15,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: { color: "#fff", fontWeight: "600" },
});

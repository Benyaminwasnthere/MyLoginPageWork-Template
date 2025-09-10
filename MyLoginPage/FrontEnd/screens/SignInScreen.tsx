import React, { useState } from "react";
import { SafeAreaView, ScrollView, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

import InputField from "../components/InputField";
import PasswordInput from "../components/PasswordInput";
import AuthFooter from "../components/AuthFooter";

export default function SignInScreen({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Logo image instead of text */}
        <Image
          source={require("../assets/splitchecklogo.png")}
          style={styles.logo}
        />

        <Text style={styles.title}>Sign In</Text>
        <Text style={styles.subtitle}>
          Welcome back! Log in to continue splitting bills
        </Text>

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

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>

        <AuthFooter
          text="Don't have an account?"
          linkText="Sign up"
          onPress={() => navigation.navigate("SignUp")}
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
    width: 120,         // shrinks your 1024x1024 logo
    height: 120,
    marginBottom: 20,
    resizeMode: "contain",
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

import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // for social icons

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
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView contentContainerStyle={styles.scroll}>
          <View style={styles.card}>
            {/* Logo */}
            <Image
              source={require("../assets/splitchecklogo.png")}
              style={styles.logo}
              resizeMode="contain"
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

            {/* OAuth Buttons */}
            <Text style={styles.orText}>Or continue with</Text>
            <View style={styles.socialContainer}>
              <TouchableOpacity
                style={[styles.socialButton, { backgroundColor: "#4285F4" }]}
              >
                <Icon
                  name="google"
                  size={20}
                  color="#fff"
                  style={{ marginRight: 8 }}
                />
                <Text style={styles.socialButtonText}>Google</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.socialButton, { backgroundColor: "#000" }]}
              >
                <Icon
                  name="apple"
                  size={20}
                  color="#fff"
                  style={{ marginRight: 8 }}
                />
                <Text style={styles.socialButtonText}>Apple</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Create account</Text>
            </TouchableOpacity>

            <AuthFooter
              text="Already have an account?"
              linkText="Sign in"
              onPress={() => navigation.navigate("SignIn")}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5" },
  scroll: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 24,
    width: "100%",
    maxWidth: 380,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  logo: { width: 100, height: 100, marginBottom: 15 },
  title: { fontSize: 22, fontWeight: "700", marginBottom: 8 },
  subtitle: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#333",
    paddingVertical: 14,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    marginTop: 12,
  },
  buttonText: { color: "#fff", fontWeight: "600", fontSize: 16 },

  orText: {
    fontSize: 14,
    color: "#555",
    marginVertical: 10,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 12,
  },
  socialButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  socialButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

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
  Switch,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import InputField from "../components/InputField";
import PasswordInput from "../components/PasswordInput";
import AuthFooter from "../components/AuthFooter";

export default function SignInScreen({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

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

            {/* Remember Me */}
            <View style={styles.rememberContainer}>
              <Switch
                value={rememberMe}
                onValueChange={setRememberMe}
                trackColor={{ false: "#ccc", true: "#333" }}
                thumbColor="#fff"
              />
              <Text style={styles.rememberText}>Keep me signed in</Text>
            </View>

            {/* Sign In Button */}
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Sign in</Text>
            </TouchableOpacity>

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

            {/* Auth Footer */}
            <AuthFooter
              text="Don’t have an account?"
              linkText="Sign up"
              onPress={() => navigation.navigate("SignUp")}
            />

            {/* Forgot Password link underneath footer */}
            <TouchableOpacity
              style={styles.forgotContainer}
              onPress={() => {
                console.log("Forgot Password pressed");
              }}
            >
              <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>
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
  rememberContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 12,
  },
  rememberText: {
    marginLeft: 8,
    fontSize: 14,
    color: "#555",
  },
  button: {
    backgroundColor: "#333",
    paddingVertical: 14,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    marginBottom: 12,
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
  forgotContainer: {
    marginTop: 8,
  },
  forgotText: {
    color: "#1e90ff",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
  },
});

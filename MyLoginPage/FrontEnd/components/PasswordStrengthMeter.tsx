import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface PasswordStrengthBarProps {
  password: string;
}

export default function PasswordStrengthBar({ password }: PasswordStrengthBarProps) {
  const requirements = [
    { regex: /.{8,}/, label: "At least 8 characters" },
    { regex: /[A-Z]/, label: "Uppercase letter" },
    { regex: /[a-z]/, label: "Lowercase letter" },
    { regex: /\d/, label: "Number" },
    { regex: /[^A-Za-z0-9]/, label: "Special character" },
  ];

  const metRequirements = requirements.filter((req) => req.regex.test(password));
  const strengthPercentage = (metRequirements.length / requirements.length) * 100;

  const getStrengthLevel = (percentage: number) => {
    if (percentage === 0) return { level: "Empty", color: "#666" };
    if (percentage <= 20) return { level: "Very Weak", color: "#ef4444" };
    if (percentage <= 40) return { level: "Weak", color: "#f97316" };
    if (percentage <= 60) return { level: "Fair", color: "#facc15" };
    if (percentage <= 80) return { level: "Good", color: "#3b82f6" };
    return { level: "Excellent", color: "#22c55e" };
  };

  const strength = getStrengthLevel(strengthPercentage);

  if (!password) return null;

  return (
    <View style={styles.wrapper}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.label}>Password Strength</Text>
        <Text style={[styles.level, { color: strength.color }]}>{strength.level}</Text>
      </View>

      {/* Strength Bar */}
      <View style={styles.barContainer}>
        {Array.from({ length: 5 }, (_, i) => (
          <View
            key={i}
            style={[
              styles.segment,
              {
                backgroundColor:
                  i < metRequirements.length ? strength.color : "#333",
              },
            ]}
          />
        ))}
      </View>

      {/* Requirements Checklist */}
      <View style={styles.requirements}>
        {requirements.map((req, i) => {
          const isMet = req.regex.test(password);
          return (
            <View key={i} style={styles.requirementItem}>
              <View
                style={[
                  styles.dot,
                  { backgroundColor: isMet ? "#22c55e" : "#555" },
                ]}
              />
              <Text style={{ color: isMet ? "#22c55e" : "#999" }}>
                {req.label}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    marginBottom: 15,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  label: {
    fontSize: 12,
    color: "#777",
    fontWeight: "500",
  },
  level: {
    fontSize: 12,
    fontWeight: "600",
  },
  barContainer: {
    flexDirection: "row",
    height: 6,
    borderRadius: 3,
    overflow: "hidden",
    marginBottom: 10,
  },
  segment: {
    flex: 1,
    marginHorizontal: 1,
    borderRadius: 2,
  },
  requirements: {
    marginTop: 5,
  },
  requirementItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 8,
  },
});

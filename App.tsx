import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { PhoneFrame } from "./src/components/PhoneFrame";
import { HomeScreen } from "./src/screens/HomeScreen";
import { JobsScreen } from "./src/screens/JobsScreen";
import { ProfileScreen } from "./src/screens/ProfileScreen";
import { colors } from "./src/theme";

type Tab = "home" | "jobs" | "profile";

const tabs: Array<{ key: Tab; label: string }> = [
  { key: "home", label: "Home" },
  { key: "jobs", label: "Jobs" },
  { key: "profile", label: "Profile" },
];

export default function App() {
  const [tab, setTab] = useState<Tab>("home");

  return (
    <PhoneFrame>
      <View style={styles.app}>
        <View style={styles.screen}>
          {tab === "home" && <HomeScreen />}
          {tab === "jobs" && <JobsScreen />}
          {tab === "profile" && <ProfileScreen />}
        </View>
        <View style={styles.tabBar}>
          {tabs.map((t) => {
            const active = tab === t.key;
            return (
              <Pressable key={t.key} style={styles.tab} onPress={() => setTab(t.key)}>
                <View style={[styles.tabDot, active && styles.tabDotActive]} />
                <Text style={[styles.tabLabel, active && styles.tabLabelActive]}>{t.label}</Text>
              </Pressable>
            );
          })}
        </View>
        <StatusBar style="dark" />
      </View>
    </PhoneFrame>
  );
}

const styles = StyleSheet.create({
  app: { flex: 1, backgroundColor: colors.bg },
  screen: { flex: 1 },
  tabBar: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: colors.line,
    backgroundColor: colors.card,
    paddingBottom: 6,
    paddingTop: 8,
  },
  tab: { flex: 1, alignItems: "center", gap: 3 },
  tabDot: {
    width: 22,
    height: 4,
    borderRadius: 2,
    backgroundColor: "transparent",
  },
  tabDotActive: { backgroundColor: colors.accent },
  tabLabel: { fontSize: 12, fontWeight: "600", color: colors.inkSoft },
  tabLabelActive: { color: colors.ink },
});

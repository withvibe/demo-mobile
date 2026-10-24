import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

/**
 * On web, renders children inside an iPhone-style device frame so the
 * browser preview reads as a simulator. On native (Expo Go / dev build)
 * it renders children directly — the real device is the frame.
 */
export function PhoneFrame({ children }: { children: React.ReactNode }) {
  if (Platform.OS !== "web") {
    return <>{children}</>;
  }

  return (
    <View style={styles.stage}>
      <View style={styles.device}>
        <View style={styles.screen}>
          <View style={styles.statusBar}>
            <Text style={styles.statusTime}>9:41</Text>
            <View style={styles.island} />
            <Text style={styles.statusBattery}>100%</Text>
          </View>
          <View style={styles.content}>{children}</View>
          <View style={styles.homeIndicator} />
        </View>
      </View>
      <Text style={styles.caption}>iPhone preview — served live from this environment</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  stage: {
    flex: 1,
    minHeight: "100%" as unknown as number,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#101317",
    paddingVertical: 28,
  },
  device: {
    width: 394,
    height: 832,
    borderRadius: 56,
    backgroundColor: "#000",
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.55,
    shadowRadius: 48,
    shadowOffset: { width: 0, height: 24 },
  },
  screen: {
    flex: 1,
    borderRadius: 46,
    overflow: "hidden",
    backgroundColor: "#F6F7F9",
  },
  statusBar: {
    height: 44,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    backgroundColor: "transparent",
  },
  island: {
    width: 118,
    height: 32,
    borderRadius: 20,
    backgroundColor: "#000",
    position: "absolute",
    top: 8,
    alignSelf: "center",
    left: "50%" as unknown as number,
    marginLeft: -59,
  },
  statusTime: { fontWeight: "600", fontSize: 14, color: "#111827" },
  statusBattery: { fontWeight: "500", fontSize: 12, color: "#111827" },
  content: { flex: 1 },
  homeIndicator: {
    alignSelf: "center",
    width: 130,
    height: 5,
    borderRadius: 3,
    backgroundColor: "#111",
    marginBottom: 7,
  },
  caption: {
    marginTop: 18,
    color: "#9CA3AF",
    fontSize: 13,
  },
});

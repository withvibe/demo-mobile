import React, { useState } from "react";
import { ScrollView, StyleSheet, Switch, Text, View } from "react-native";
import { colors, radii } from "../theme";

function Row({
  label,
  value,
  toggle,
  onToggle,
}: {
  label: string;
  value?: string;
  toggle?: boolean;
  onToggle?: (v: boolean) => void;
}) {
  return (
    <View style={styles.row}>
      <Text style={styles.rowLabel}>{label}</Text>
      {value !== undefined && <Text style={styles.rowValue}>{value}</Text>}
      {toggle !== undefined && (
        <Switch
          value={toggle}
          onValueChange={onToggle}
          trackColor={{ true: colors.accent, false: colors.line }}
          thumbColor="#FFF"
        />
      )}
    </View>
  );
}

export function ProfileScreen() {
  const [notifications, setNotifications] = useState(true);
  const [shareLocation, setShareLocation] = useState(true);

  return (
    <ScrollView style={styles.root} contentContainerStyle={styles.body}>
      <View style={styles.headerCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>DK</Text>
        </View>
        <View>
          <Text style={styles.name}>Dana Kedem</Text>
          <Text style={styles.role}>Senior technician · North team</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>This week</Text>
      <View style={styles.weekRow}>
        <View style={styles.weekStat}>
          <Text style={styles.weekNum}>23</Text>
          <Text style={styles.weekLabel}>Jobs closed</Text>
        </View>
        <View style={styles.weekStat}>
          <Text style={styles.weekNum}>4.9</Text>
          <Text style={styles.weekLabel}>Avg rating</Text>
        </View>
        <View style={styles.weekStat}>
          <Text style={styles.weekNum}>31h</Text>
          <Text style={styles.weekLabel}>On site</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Preferences</Text>
      <View style={styles.group}>
        <Row label="Notifications" toggle={notifications} onToggle={setNotifications} />
        <View style={styles.divider} />
        <Row label="Share live location" toggle={shareLocation} onToggle={setShareLocation} />
        <View style={styles.divider} />
        <Row label="Region" value="Tel Aviv district" />
        <View style={styles.divider} />
        <Row label="App version" value="2.4.1" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.bg },
  body: { padding: 20 },
  headerCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    backgroundColor: colors.card,
    borderRadius: radii.card,
    borderWidth: 1,
    borderColor: colors.line,
    padding: 16,
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: colors.accentSoft,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: { color: colors.accent, fontWeight: "700", fontSize: 17 },
  name: { fontSize: 17, fontWeight: "700", color: colors.ink },
  role: { fontSize: 13, color: colors.inkSoft, marginTop: 2 },
  sectionTitle: {
    marginTop: 24,
    marginBottom: 10,
    fontSize: 13,
    fontWeight: "700",
    letterSpacing: 0.6,
    color: colors.inkSoft,
    textTransform: "uppercase",
  },
  weekRow: { flexDirection: "row", gap: 10 },
  weekStat: {
    flex: 1,
    backgroundColor: colors.card,
    borderRadius: radii.card,
    borderWidth: 1,
    borderColor: colors.line,
    paddingVertical: 14,
    alignItems: "center",
  },
  weekNum: { fontSize: 20, fontWeight: "700", color: colors.ink },
  weekLabel: { marginTop: 2, fontSize: 12, color: colors.inkSoft },
  group: {
    backgroundColor: colors.card,
    borderRadius: radii.card,
    borderWidth: 1,
    borderColor: colors.line,
    paddingHorizontal: 16,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 14,
  },
  rowLabel: { fontSize: 15, color: colors.ink },
  rowValue: { fontSize: 14, color: colors.inkSoft },
  divider: { height: 1, backgroundColor: colors.line },
});

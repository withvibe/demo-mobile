import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { colors, radii } from "../theme";
import { jobs, statusLabel } from "../data";

export function HomeScreen() {
  const remaining = jobs.filter((j) => j.status !== "done").length;
  const next = jobs.find((j) => j.status === "scheduled");

  return (
    <ScrollView style={styles.root} contentContainerStyle={styles.body}>
      <Text style={styles.hello}>Good morning, Dana</Text>
      <Text style={styles.sub}>
        Tuesday · {jobs.length} jobs today, {remaining} to go
      </Text>

      <View style={styles.statsRow}>
        <View style={styles.stat}>
          <Text style={styles.statNum}>{jobs.filter((j) => j.status === "done").length}</Text>
          <Text style={styles.statLabel}>Completed</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNum}>{remaining}</Text>
          <Text style={styles.statLabel}>Remaining</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNum}>98%</Text>
          <Text style={styles.statLabel}>On time</Text>
        </View>
      </View>

      {next && (
        <View style={styles.nextCard}>
          <Text style={styles.nextKicker}>UP NEXT · {next.time}</Text>
          <Text style={styles.nextTitle}>{next.customer}</Text>
          <Text style={styles.nextTask}>{next.task}</Text>
          <Text style={styles.nextMeta}>
            {next.address} · {statusLabel[next.status]}
          </Text>
        </View>
      )}

      <Text style={styles.sectionTitle}>Today</Text>
      {jobs.map((job) => (
        <View key={job.id} style={styles.row}>
          <View style={styles.rowTime}>
            <Text style={styles.rowTimeText}>{job.time}</Text>
          </View>
          <View style={styles.rowBody}>
            <Text style={styles.rowTitle}>{job.customer}</Text>
            <Text style={styles.rowSub}>{job.task}</Text>
          </View>
          <View
            style={[
              styles.dot,
              job.status === "done" && { backgroundColor: colors.green },
              job.status === "on_site" && { backgroundColor: colors.amber },
              job.status === "en_route" && { backgroundColor: colors.accent },
              job.status === "scheduled" && { backgroundColor: colors.line },
            ]}
          />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.bg },
  body: { padding: 20, paddingBottom: 32 },
  hello: { fontSize: 24, fontWeight: "700", color: colors.ink },
  sub: { marginTop: 4, fontSize: 14, color: colors.inkSoft },
  statsRow: { flexDirection: "row", gap: 10, marginTop: 18 },
  stat: {
    flex: 1,
    backgroundColor: colors.card,
    borderRadius: radii.card,
    paddingVertical: 14,
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.line,
  },
  statNum: { fontSize: 20, fontWeight: "700", color: colors.ink },
  statLabel: { marginTop: 2, fontSize: 12, color: colors.inkSoft },
  nextCard: {
    marginTop: 18,
    backgroundColor: colors.accent,
    borderRadius: radii.card,
    padding: 18,
  },
  nextKicker: { color: "#C7D2FE", fontSize: 11, fontWeight: "700", letterSpacing: 1 },
  nextTitle: { color: "#FFF", fontSize: 19, fontWeight: "700", marginTop: 6 },
  nextTask: { color: "#E0E7FF", fontSize: 14, marginTop: 2 },
  nextMeta: { color: "#C7D2FE", fontSize: 13, marginTop: 10 },
  sectionTitle: {
    marginTop: 24,
    marginBottom: 10,
    fontSize: 13,
    fontWeight: "700",
    letterSpacing: 0.6,
    color: colors.inkSoft,
    textTransform: "uppercase",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.card,
    borderRadius: radii.card,
    borderWidth: 1,
    borderColor: colors.line,
    padding: 14,
    marginBottom: 8,
  },
  rowTime: {
    width: 52,
    alignItems: "flex-start",
  },
  rowTimeText: { fontSize: 13, fontWeight: "600", color: colors.inkSoft },
  rowBody: { flex: 1 },
  rowTitle: { fontSize: 15, fontWeight: "600", color: colors.ink },
  rowSub: { fontSize: 13, color: colors.inkSoft, marginTop: 1 },
  dot: { width: 10, height: 10, borderRadius: 5, marginLeft: 8 },
});

import React, { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { colors, radii } from "../theme";
import { Job, JobStatus, jobs, statusLabel } from "../data";

const filters: Array<{ key: "all" | JobStatus; label: string }> = [
  { key: "all", label: "All" },
  { key: "scheduled", label: "Scheduled" },
  { key: "en_route", label: "En route" },
  { key: "on_site", label: "On site" },
  { key: "done", label: "Done" },
];

function chipColors(status: JobStatus): { fg: string; bg: string } {
  switch (status) {
    case "done":
      return { fg: colors.green, bg: colors.greenSoft };
    case "on_site":
      return { fg: colors.amber, bg: colors.amberSoft };
    case "en_route":
      return { fg: colors.accent, bg: colors.accentSoft };
    default:
      return { fg: colors.inkSoft, bg: colors.bg };
  }
}

function JobCard({ job }: { job: Job }) {
  const chip = chipColors(job.status);
  return (
    <View style={styles.card}>
      <View style={styles.cardTop}>
        <Text style={styles.cardId}>{job.id}</Text>
        <View style={[styles.chip, { backgroundColor: chip.bg }]}>
          <Text style={[styles.chipText, { color: chip.fg }]}>{statusLabel[job.status]}</Text>
        </View>
      </View>
      <Text style={styles.cardCustomer}>{job.customer}</Text>
      <Text style={styles.cardTask}>{job.task}</Text>
      <View style={styles.cardMetaRow}>
        <Text style={styles.cardMeta}>{job.time}</Text>
        <Text style={styles.cardMetaDiv}>·</Text>
        <Text style={styles.cardMeta}>{job.address}</Text>
        <Text style={styles.cardMetaDiv}>·</Text>
        <Text style={styles.cardMeta}>{job.tech}</Text>
      </View>
    </View>
  );
}

export function JobsScreen() {
  const [filter, setFilter] = useState<"all" | JobStatus>("all");
  const visible = filter === "all" ? jobs : jobs.filter((j) => j.status === filter);

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Text style={styles.title}>Jobs</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filters}>
          {filters.map((f) => {
            const active = filter === f.key;
            return (
              <Pressable
                key={f.key}
                onPress={() => setFilter(f.key)}
                style={[styles.filter, active && styles.filterActive]}
              >
                <Text style={[styles.filterText, active && styles.filterTextActive]}>{f.label}</Text>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>
      <ScrollView style={styles.list} contentContainerStyle={styles.listBody}>
        {visible.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
        {visible.length === 0 && <Text style={styles.empty}>No jobs in this state.</Text>}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.bg },
  header: { paddingTop: 16, paddingBottom: 10 },
  title: { fontSize: 24, fontWeight: "700", color: colors.ink, paddingHorizontal: 20 },
  filters: { gap: 8, paddingHorizontal: 20, paddingTop: 12 },
  filter: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: radii.chip,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.line,
  },
  filterActive: { backgroundColor: colors.ink, borderColor: colors.ink },
  filterText: { fontSize: 13, fontWeight: "600", color: colors.inkSoft },
  filterTextActive: { color: "#FFF" },
  list: { flex: 1 },
  listBody: { padding: 20, paddingTop: 8 },
  card: {
    backgroundColor: colors.card,
    borderRadius: radii.card,
    borderWidth: 1,
    borderColor: colors.line,
    padding: 16,
    marginBottom: 10,
  },
  cardTop: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  cardId: { fontSize: 12, fontWeight: "600", color: colors.inkSoft },
  chip: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: radii.chip },
  chipText: { fontSize: 12, fontWeight: "700" },
  cardCustomer: { fontSize: 16, fontWeight: "700", color: colors.ink, marginTop: 8 },
  cardTask: { fontSize: 14, color: colors.inkSoft, marginTop: 2 },
  cardMetaRow: { flexDirection: "row", alignItems: "center", marginTop: 10, flexWrap: "wrap" },
  cardMeta: { fontSize: 13, color: colors.inkSoft },
  cardMetaDiv: { fontSize: 13, color: colors.line, marginHorizontal: 6 },
  empty: { textAlign: "center", color: colors.inkSoft, marginTop: 40 },
});

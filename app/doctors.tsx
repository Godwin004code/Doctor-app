import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from "expo-router";
import originalDoctors from "@/components/data/Doctor";

export default function DoctorsScreen() {
  const router = useRouter();
  const [sortBy, setSortBy] = useState("A-Z");

  const sortDoctors = () => {
    let sorted = [...originalDoctors];
    if (sortBy === "A-Z") {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "rating") {
      sorted.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "favorite") {
      sorted.sort((a, b) => Number(b.favorite) - Number(a.favorite));
    } else if (sortBy === "female") {
      sorted = sorted.filter((doc) => doc.gender === "female");
    } else if (sortBy === "male") {
      sorted = sorted.filter((doc) => doc.gender === "male");
    }
    return sorted;
  };

  const doctors = sortDoctors();

  const iconColor = (type: string) => (sortBy === type ? "#fff" : "#2260FF");

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerRow}>
     <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#2260FF" />
          </TouchableOpacity>
        <Text style={styles.header}>Doctors</Text>
        <View style={{ flexDirection: "row", gap: 12 }}>
          <Ionicons name="search" size={16} color="#2260FF" style={{backgroundColor: "#CAD6FF", padding: 5, borderRadius: 100}} />
          <Feather name="sliders" size={16} color="#2260FF" style={{backgroundColor: "#CAD6FF", padding: 5, borderRadius: 100}} />
        </View>
      </View>

      <View style={[styles.filterRow, {flexDirection: "row"}]}>
        <Text style={[styles.sortText, {marginVertical: "auto", marginRight: 10}]}>Sort By</Text>
        <View style={styles.filters}>
          <TouchableOpacity
            style={[styles.filterBtn, sortBy === "A-Z" && styles.activeBtn]}
            onPress={() => setSortBy("A-Z")}
          >
            <Text style={[styles.filterText, sortBy === "A-Z" && styles.activeText]}>A-Z</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.filterBtn, sortBy === "rating" && styles.activeBtn]}
            onPress={() => setSortBy("rating")}
          >
            <MaterialIcons name="star-border" size={24} color={iconColor("rating")} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.filterBtn, sortBy === "favorite" && styles.activeBtn]}
            onPress={() => setSortBy("favorite")}
          >
            <AntDesign name="hearto" size={24} color={iconColor("favorite")} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.filterBtn, sortBy === "female" && styles.activeBtn]}
            onPress={() => setSortBy("female")}
          >
            <Ionicons name="female-outline" size={24} color={iconColor("female")} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.filterBtn, sortBy === "male" && styles.activeBtn]}
            onPress={() => setSortBy("male")}
          >
            <Ionicons name="male" size={24} color={iconColor("male")} />
          </TouchableOpacity>
        </View>
      </View>

      {doctors.map((doc) => (
        <View key={doc.id} style={styles.card}>
          <Image source={doc.image} style={styles.avatar} />
          <View style={styles.docDetails}>
            <Text style={styles.name}>{doc.name}</Text>
            <Text style={styles.specialty}>{doc.specialty}</Text>
            <View style={styles.actions}>
              <TouchableOpacity style={styles.infoBtn} onPress={() => router.push({ pathname: "/doctor-info", params: { id: doc.id } })}>
                <Text style={styles.infoText}>Info</Text>
              </TouchableOpacity>
              <Ionicons name="calendar-outline" size={20} color="#2260FF" style={styles.icon} />
              <Ionicons name="information-circle-outline" size={20} color="#2260FF" style={styles.icon} />
              <Ionicons name="help-circle-outline" size={20} color="#2260FF" style={styles.icon} />
              <Ionicons name="heart-outline" size={20} color="#2260FF" style={styles.icon} />
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: "#fff", paddingTop: 25 },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  header: { fontSize: 20, fontWeight: "bold", color: "#2260FF" },
  filterRow: { marginBottom: 16, marginTop: 16 },
  sortText: { color: "#666", marginBottom: 6 },
  filters: { flexDirection: "row", gap: 10 },
  filterBtn: {
    backgroundColor: "#E5EDFF",
    borderRadius: 12,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  activeBtn: {
    backgroundColor: "#2260FF",
  },
  filterText: { color: "#2260FF", fontWeight: "600" },
  activeText: { color: "#fff" },
  card: {
    backgroundColor: "#E5EDFF",
    borderRadius: 16,
    flexDirection: "row",
    padding: 12,
    marginBottom: 14,
    alignItems: "center",
  },
  avatar: { width: 100, height: 100, borderRadius: 100 },
  docDetails: { flex: 1, marginLeft: 12 },
  name: { fontSize: 15, fontWeight: "bold", color: "#2260FF" },
  specialty: { fontSize: 13, color: "#333", marginBottom: 8 },
  actions: { flexDirection: "row", alignItems: "center", gap: 8 },
  infoBtn: {
    backgroundColor: "#2260FF",
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 10,
  },
  infoText: { color: "#fff", fontWeight: "600" },
  icon: { backgroundColor: "#fff", padding: 4, borderRadius: 20 },
});

import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from "expo-router";
import originalDoctors from "../components/data/Doctor"

export default function FavoritesScreen() {
  const router = useRouter();
  const [sortBy, setSortBy] = useState("A-Z");
  const [tab, setTab] = useState("Doctors");
  const [expanded, setExpanded] = useState<string | null>(null);

  const sortDoctors = () => {
    let sorted = [...originalDoctors];
    if (sortBy === "A-Z") {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "rating") {
      sorted.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "favorite") {
      sorted = sorted.filter((doc) => doc.favorite);
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
    <ScrollView style={{ padding: 16, backgroundColor: '#fff',  paddingTop: 25  }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
       <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={24} color="#2260FF" />
            </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#2260FF' }}>{sortBy}</Text>
        <View style={{ flexDirection: 'row', gap: 12 }}>
      
          <Ionicons name="search" size={16} color="#2260FF" style={{backgroundColor: "#CAD6FF", padding: 5, borderRadius: 100}} />
          <Feather name="sliders" size={16} style={{backgroundColor: "#CAD6FF", padding: 5, borderRadius: 100}} color="#2260FF" />
        </View>
      </View>

      <View style={{ marginBottom: 16, flexDirection: "row", marginTop: 16 }}>
        <Text style={{ color: "#666", marginBottom: 6, marginVertical: "auto", marginRight: 10 }}>Sort By</Text>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <TouchableOpacity style={[styles.filterBtn, sortBy === "A-Z" && styles.activeBtn]} onPress={() => setSortBy("A-Z")}><Text style={[styles.filterText, sortBy === "A-Z" && styles.activeText]}>A-Z</Text></TouchableOpacity>
          <TouchableOpacity style={[styles.filterBtn, sortBy === "rating" && styles.activeBtn]} onPress={() => setSortBy("rating")}><MaterialIcons name="star-border" size={24} color={iconColor("rating")} /></TouchableOpacity>
          <TouchableOpacity style={[styles.filterBtn, sortBy === "favorite" && styles.activeBtn]} onPress={() => setSortBy("favorite")}><AntDesign name="hearto" size={24} color={iconColor("favorite")} /></TouchableOpacity>
          <TouchableOpacity style={[styles.filterBtn, sortBy === "female" && styles.activeBtn]} onPress={() => setSortBy("female")}><Ionicons name="female-outline" size={24} color={iconColor("female")} /></TouchableOpacity>
          <TouchableOpacity style={[styles.filterBtn, sortBy === "male" && styles.activeBtn]} onPress={() => setSortBy("male")}><Ionicons name="male" size={24} color={iconColor("male")} /></TouchableOpacity>
        </View>
      </View>

      {sortBy === "favorite" && (
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 16 }}>
          <TouchableOpacity onPress={() => setTab("Doctors")} style={{ flex: 1, backgroundColor: tab === "Doctors" ? '#2260FF' : '#E5EDFF', borderRadius: 20, padding: 10, marginHorizontal: 5, alignItems: 'center' }}>
            <Text style={{ color: tab === "Doctors" ? '#fff' : '#2260FF', fontWeight: 'bold' }}>Doctors</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setTab("Services")} style={{ flex: 1, backgroundColor: tab === "Services" ? '#2260FF' : '#E5EDFF', borderRadius: 20, padding: 10, marginHorizontal: 5, alignItems: 'center' }}>
            <Text style={{ color: tab === "Services" ? '#fff' : '#2260FF', fontWeight: 'bold' }}>Services</Text>
          </TouchableOpacity>
        </View>
      )}

      {tab === "Doctors" && doctors.map((doc) => (
        <View key={doc.id} style={styles.card}>
          <Image source={doc.image} style={styles.avatar} />
          <View style={styles.docDetails}>
            <Text style={styles.name}>{doc.name}</Text>
            <Text style={styles.specialty}>{doc.specialty}</Text>
            <View style={styles.actions}>
              <TouchableOpacity style={styles.infoBtn} onPress={() => router.push({ pathname: "/doctor-info", params: { id: doc.id } })}><Text style={styles.infoText}>Info</Text></TouchableOpacity>
              <Ionicons name="calendar-outline" size={20} color="#2260FF" style={styles.icon} />
              <Ionicons name="information-circle-outline" size={20} color="#2260FF" style={styles.icon} />
              <Ionicons name="help-circle-outline" size={20} color="#2260FF" style={styles.icon} />
              <Ionicons name="heart-outline" size={20} color="#2260FF" style={styles.icon} />
            </View>
          </View>
        </View>
      ))}

      {tab === "Services" && doctors.map((service, index) => (
        <View key={index} style={{ marginBottom: 10 }}>
          <TouchableOpacity style={styles.accordionHeader} onPress={() => setExpanded(expanded === service.specialty ? null : service.specialty)}>
            <Ionicons name="heart" size={16} color="#fff" style={{ marginRight: 8 }} />
            <Text style={{ color: '#fff', fontWeight: '600', flex: 1 }}>{service.specialty}</Text>
            <Ionicons name={expanded === service.specialty ? "chevron-up" : "chevron-down"} size={20} color="#fff" />
          </TouchableOpacity>
          {expanded === service.specialty && (
            <View style={styles.accordionBody}>
              <Text style={{ fontSize: 13, color: '#333' }}>{service.highlight}</Text>
            </View>
          )}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  filterBtn: { backgroundColor: "#E5EDFF", borderRadius: 12, paddingVertical: 6, paddingHorizontal: 12 },
  activeBtn: { backgroundColor: "#2260FF" },
  filterText: { color: "#2260FF", fontWeight: "600" },
  activeText: { color: "#fff" },
  card: { backgroundColor: "#E5EDFF", borderRadius: 16, flexDirection: "row", padding: 12, marginBottom: 14, alignItems: "center" },
  avatar: { width: 100, height: 100, borderRadius: 100 },
  docDetails: { flex: 1, marginLeft: 12 },
  name: { fontSize: 15, fontWeight: "bold", color: "#2260FF" },
  specialty: { fontSize: 13, color: "#333", marginBottom: 8 },
  actions: { flexDirection: "row", alignItems: "center", gap: 8 },
  infoBtn: { backgroundColor: "#2260FF", paddingVertical: 6, paddingHorizontal: 14, borderRadius: 10 },
  infoText: { color: "#fff", fontWeight: "600" },
  icon: { backgroundColor: "#fff", padding: 4, borderRadius: 20 },
  accordionHeader: { flexDirection: "row", alignItems: "center", backgroundColor: "#2260FF", padding: 14, borderRadius: 16 },
  accordionBody: { backgroundColor: "#F0F4FF", padding: 12, borderRadius: 12, marginTop: 8 }
});

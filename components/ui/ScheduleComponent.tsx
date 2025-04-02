import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AntDesign from '@expo/vector-icons/AntDesign';

const days = [
  { day: "9", label: "MON" },
  { day: "10", label: "TUE" },
  { day: "11", label: "WED" },
  { day: "12", label: "THU" },
  { day: "13", label: "FRI" },
  { day: "14", label: "SAT" },
];

export default function ScheduleCalendar() {
  const [selected, setSelected] = useState("11");

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.dayRow}>
        {days.map((d) => (
          <TouchableOpacity
            key={d.day}
            style={[styles.dayBox, selected === d.day && styles.activeDayBox]}
            onPress={() => setSelected(d.day)}
          >
            <Text style={[styles.dayText, selected === d.day && styles.activeDayText]}>{d.day}</Text>
            <Text style={[styles.dayLabel, selected === d.day && styles.activeDayText]}>{d.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={{backgroundColor: "white", borderRadius: 20, padding: 20}}>

      <View style={styles.scheduleHeader}>
        <Text style={styles.scheduleTitle}>11 Wednesday - Today</Text>
      </View>

      <View style={styles.scheduleBlock}>
       <View style={{flexDirection: "row"}}>
       <Text style={styles.timeText}>9 AM</Text>
       <View style={styles.dottedLine} />
       </View>
       <View style={{flexDirection: "row"}}>
        <View style={{justifyContent:"space-between"}}>
        <Text style={styles.timeText}>10 AM</Text>
        <Text style={styles.timeText}>11 AM</Text>
        </View>
        <View style={styles.appointmentCard}>
            <View style={{flexDirection: "row",  justifyContent: "space-between"}}>
            <Text style={styles.doctorName}>Dr. Olivia Turner, M.D.</Text>
            <View style={styles.actions}>
            <AntDesign style={{backgroundColor: "#fff", borderRadius: 100, width: 20, height: 20, padding: 5}} name="check" size={12} color="#2260FF" />
            <AntDesign style={{backgroundColor: "#fff", borderRadius: 100, width: 20, height: 20, padding: 5}} name="close" size={12} color="#2260FF" />
          </View>
            </View>
         
          <Text style={styles.description}>Treatment and prevention of skin and photodermatitis.</Text>
          
        </View>
       </View>
        
        
       
       
        <View style={{flexDirection: "row"}}>
        <Text style={styles.timeText}>12 AM</Text>
        <View style={styles.dottedLine} /></View>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 20, backgroundColor: "#E3E9FF", borderRadius: 0, paddingVertical: 40 },
  dayRow: { flexDirection: "row", marginBottom: 16 },
  dayBox: {
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginRight: 10,
    alignItems: "center",
  },
  activeDayBox: { backgroundColor: "#2260FF" },
  dayText: { fontSize: 16, color: "#000", fontWeight: "bold" },
  dayLabel: { fontSize: 12, color: "#000" },
  activeDayText: { color: "#fff" },
  scheduleHeader: { marginBottom: 12 },
  scheduleTitle: { fontWeight: "bold", color: "#2260FF", textAlign: "right" },
  scheduleBlock: {},
  timeText: { color: "#2260FF", fontWeight: "600", marginBottom: 4 },
  dottedLine: {
    borderStyle: "dotted",
    borderBottomWidth: 1,
    borderColor: "#2260FF",
    marginBottom: 12,
    flex: 1,
    marginLeft: 15
  },
  appointmentCard: {
    backgroundColor: "#C4D3FF",
    padding: 12,
    borderRadius: 16,
    marginBottom: 8,
    marginLeft: 20,
    marginRight: 30
  },
  doctorName: { fontWeight: "bold", color: "#2260FF" },
  description: { fontSize: 13, marginTop: 4, marginBottom: 8 },
  actions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 5,
  },
});

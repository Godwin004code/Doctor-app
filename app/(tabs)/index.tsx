import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, TextInput } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';
import ScheduleCalendar from "@/components/ui/ScheduleComponent";
import DoctorIcon from "@/components/icons/DoctorIcon";
import SliderIcon from "@/components/icons/SliderIcon";
import GlassIcon from "@/components/icons/GlassIcon";
import originalDoctors from "@/components/data/Doctor";



export default function HomeScreen() {
  const router = useRouter()
  return (
    <ScrollView style={styles.container}>
           <View style={{marginTop: 30 }} />
    <View style={styles.header}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image source={require("../../assets/images/9585011ef9f01ffe611c12e3d0e6ddb0.png")} style={styles.avatar} />
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.welcomeText}>Hi, WelcomeBack</Text>
          <Text style={styles.userName}>John Doe</Text>
        </View>
      </View>
      <View style={styles.iconRow}>
        <View style={{backgroundColor: "#CAD6FF", height: 40, width: 40, justifyContent: "center", alignItems: "center", display: "flex", borderRadius: 100}}>
        <Ionicons name="notifications-outline" size={20} color="#444" style={styles.icon} />
        </View>
        <View style={{backgroundColor: "#CAD6FF", height: 40, width: 40, justifyContent: "center", alignItems: "center", display: "flex", borderRadius: 100}}>
        <Feather name="settings" size={20} color="#444" />
        </View>
     
       
      </View>
    </View>


    <View style={styles.tabRow}>
     <TouchableOpacity style={{justifyContent: "center", alignItems: "center"}} onPress={() => router.push("/doctors")}>
     <DoctorIcon />
     <Text style={styles.tab}>Doctors</Text>
     </TouchableOpacity>
     <TouchableOpacity style={{justifyContent: "center", alignItems: "center"}} onPress={() => router.push("/favorites")}>
     <AntDesign name="hearto"  size={16} style={{marginBottom: 5}} color="#2260FF" />
     <Text style={styles.tab}>Favorite</Text>
     </TouchableOpacity>
     
      <View style={styles.searchBox}>
        <View style={{width: 30, height: 30, backgroundColor: "#FFFFFF", justifyContent: "center", alignItems: "center", borderRadius: 100}}>
      <SliderIcon />
        </View>
        <TextInput style={{backgroundColor: "transparent", flex: 1, height: 32}} keyboardType="name-phone-pad" />

      <GlassIcon style={{marginVertical: "auto"}} />
      </View>
    </View>

    <ScheduleCalendar />

   
<View style={{marginTop: 40}} />
    {originalDoctors.map((doctor) => (
      <View key={doctor.id} style={styles.doctorCard}>
        <Image source={doctor.image} style={styles.docImage} />
        <View style={styles.docContent}>
          <View style={{backgroundColor: "#fff", borderRadius: 13, paddingVertical: 12, paddingLeft: 20, marginBottom: 10}}>
          <Text style={styles.docName}>{doctor.name}</Text>
          <Text style={styles.docSpecialty}>{doctor.specialty}</Text>
          </View>
          <View style={styles.docStats}>
            <View style={{flexDirection: "row", gap: 10}}>
            <View style={styles.stat}><Ionicons name="star" size={14} color="#2260FF" /><Text style={{color:"#2260FF"}}> {doctor.rating}</Text></View>
            <View style={styles.stat}><Ionicons name="chatbubble-ellipses-outline" size={14} color="#2260FF" /><Text style={{color:"#2260FF"}}> {doctor.reviews}</Text></View>
            </View>

            <View style={{flexDirection: "row", gap: 10}}>
            <View style={{width: 25, height: 25, backgroundColor: "#FFFFFF", justifyContent: "center", alignItems: "center", borderRadius: 100}}>
          <Ionicons name="help-outline" size={18} color="#2260FF" style={styles.iconBtn} />
            </View>
            <View style={{width: 25, height: 25, backgroundColor: "#FFFFFF", justifyContent: "center", alignItems: "center", borderRadius: 100}}>
            <Ionicons name="heart" size={18} color="#2260FF" style={styles.iconBtn} />
            </View>
            </View>
          </View>
        </View>
      </View>
    ))}
    <View style={{marginBottom: 90}} />
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F6F8FF", paddingVertical: 16 },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 16, marginHorizontal: 20 },
  avatar: { width: 50, height: 50, borderRadius: 25 },
  welcomeText: { color: "#2260FF" },
  userName: { fontWeight: "bold", fontSize: 16 },
  iconRow: { flexDirection: "row", gap: 16 },
  icon: { marginRight: 0 },
  tabRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 12, marginHorizontal: 20, gap: 10 },
  tab: { fontWeight: "light", color: "#2260FF", fontSize: 14 },
  searchBox: { flex: 1,  backgroundColor: "#CAD6FF", borderRadius: 20, marginHorizontal: 8, justifyContent: "space-between", flexDirection: "row", paddingHorizontal: 7, paddingVertical: 5 },
  datesRow: { flexDirection: "row", marginBottom: 16 },
  dateBox: { paddingVertical: 8, paddingHorizontal: 14, backgroundColor: "#DCE3F9", borderRadius: 12, marginRight: 8 },
  activeDate: { backgroundColor: "#2260FF" },
  dateText: { color: "#444" },
  activeDateText: { color: "#fff", fontWeight: "bold" },
  appointmentBox: { marginBottom: 16 },
  scheduleText: { fontWeight: "600", color: "#444", marginBottom: 6 },
  appointmentCard: { backgroundColor: "#C4D3FF", borderRadius: 12, padding: 12 },
  doctorName: { fontWeight: "bold", color: "#003B95", marginBottom: 4 },
  description: { color: "#000", fontSize: 13 },
  doctorCard: { flexDirection: "row", backgroundColor: "#CAD6FF", padding: 12, borderRadius: 16, marginBottom: 20, marginHorizontal: 20 },
  docImage: { width: 60, height: 60, borderRadius: 30, marginRight: 12 },
  docContent: { flex: 1 },
  docName: { fontWeight: "bold", fontSize: 14 },
  docSpecialty: { color: "#555", fontSize: 13, marginBottom: 0 },
  docStats: { flexDirection: "row", alignItems: "center", flexWrap: "wrap", justifyContent: "space-between" },
  stat: { flexDirection: "row", alignItems: "center", backgroundColor: "#fff", paddingVertical: 3, paddingHorizontal: 15, borderRadius: 13, justifyContent: "flex-end" },
  iconBtn: { marginLeft: 0 },

  ic:{
    
  }
});




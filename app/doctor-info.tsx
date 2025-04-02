import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons, MaterialIcons, AntDesign, Feather } from '@expo/vector-icons';
import StarIcon from '@/components/icons/StarIcon';
import originalDoctors from '@/components/data/Doctor';

const {width} = Dimensions.get("window")



export default function DoctorInfoScreen() {
  const { id } = useLocalSearchParams();
  const doctor = originalDoctors.find((d) => d.id === id);

  const router = useRouter()

  if (!doctor) return <Text style={styles.notFound}>Doctor not found</Text>;

  return (
    <ScrollView style={styles.container}>
     <View style={styles.headerRow}>
      <TouchableOpacity onPress={() => router.back()}>
      <Ionicons name="chevron-back" size={24} color="#2260FF" />
      </TouchableOpacity>
        
        <Text style={styles.header}>Doctor Info</Text>
        <View />
      </View>

      

      <View style={styles.card}>
        <View style={{flexDirection: "row", flex: 1}}>
        <Image source={doctor.image} style={styles.avatar} />
        <View style={{flex: 1, marginVertical: "auto"}}>
        <View style={styles.experienceBox}>
        <StarIcon />
          <Text style={styles.experienceText}>{doctor.experience} years experience</Text>
        </View>
        <View style={styles.focusBox}>
          <Text style={styles.focusText}><Text style={{ fontWeight: 'bold' }}>Focus:</Text> {doctor.focus}</Text>
        </View>
        </View>
        </View>
        <View style={{backgroundColor: "#fff", borderRadius: 23, paddingVertical: 7, marginBottom: 10, width: "100%", marginTop: 20}}>
        <Text style={styles.name}>{doctor.name}</Text>
        <Text style={styles.specialty}>{doctor.specialty}</Text>
        </View>
       
        <View style={styles.detailsRow}>
        <View style={{ backgroundColor: "#FFFFFF", justifyContent: "center", alignItems: "center", borderRadius: 100, flexDirection: "row", paddingHorizontal: 10, paddingVertical: 5}}>
        <Ionicons name="star" size={16} color="#2260FF" /><Text> {doctor.rating}</Text>
        </View>
         
        <View style={{ backgroundColor: "#FFFFFF", justifyContent: "center", alignItems: "center", borderRadius: 100, flexDirection: "row", paddingHorizontal: 10, paddingVertical: 5}}>
        <Ionicons name="chatbubble-ellipses-outline" size={16} color="#2260FF" /><Text> {doctor.reviews}</Text>
            </View>
            <View style={{ backgroundColor: "#FFFFFF", justifyContent: "center", alignItems: "center", borderRadius: 100, flexDirection: "row", paddingHorizontal: 10, paddingVertical: 5}}>
            <Ionicons name="calendar-outline" size={16} color="#2260FF" /><Text> {doctor.schedule}</Text>
                </View>
         
        </View>
        <View style={{flexDirection: "row", justifyContent: 'space-between', width: "100%"}}>
        <TouchableOpacity style={styles.scheduleBtn}><Text style={styles.scheduleText}>Schedule</Text></TouchableOpacity>
        <View style={styles.bottomIcons}>
             <View style={{width: 25, height: 25, backgroundColor: "#FFFFFF", justifyContent: "center", alignItems: "center", borderRadius: 100}}>
             <Ionicons name="information-circle-outline" size={16} color="#2260FF" />

             </View>
             <View style={{width: 25, height: 25, backgroundColor: "#FFFFFF", justifyContent: "center", alignItems: "center", borderRadius: 100}}>
             <Ionicons name="help-circle-outline" size={16} color="#2260FF" />
                
             </View>
             <View style={{width: 25, height: 25, backgroundColor: "#FFFFFF", justifyContent: "center", alignItems: "center", borderRadius: 100}}>

             <Ionicons name="star-outline" size={16} color="#2260FF" />
             </View>
             <View style={{width: 25, height: 25, backgroundColor: "#FFFFFF", justifyContent: "center", alignItems: "center", borderRadius: 100}}>

             <Ionicons name="heart-outline" size={16} color="#2260FF" />
             </View>
         
         
         
          
        </View>
        </View>
        
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Profile</Text>
        <Text style={styles.sectionText}>{doctor.profile}</Text>
        <Text style={styles.sectionTitle}>Career Path</Text>
        <Text style={styles.sectionText}>{doctor.careerPath}</Text>
        <Text style={styles.sectionTitle}>Highlights</Text>
        <Text style={styles.sectionText}>{doctor.highlight}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: '#fff' },
  notFound: { textAlign: 'center', marginTop: 40 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#2260FF', marginBottom: 16 },
  sortBar: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 },
  sortLabel: { fontSize: 14, color: '#555' },
  sortIcons: { flexDirection: 'row', gap: 10 },
  sortActive: { backgroundColor: '#2260FF', color: '#fff', paddingHorizontal: 8, borderRadius: 10 },
  card: { backgroundColor: '#E5EDFF', borderRadius: 20, padding: 16, alignItems: 'center' },
  avatar: { width: width - width/1.6, height: "auto", borderRadius: 100, marginBottom: 8, marginRight:20, minHeight: 150 },
  experienceBox: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#2260FF', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12, marginBottom: 8,  },
  experienceText: { color: '#fff', marginLeft: 6 },
  focusBox: { backgroundColor: '#2260FF', padding: 10, borderRadius: 12, marginBottom: 8 },
  focusText: { fontSize: 13, color: '#fff' },
  name: { fontSize: 18, fontWeight: 'bold', color: '#2260FF', marginTop: 4, textAlign: "center" },
  specialty: { fontSize: 14, color: '#444', marginBottom: 8, textAlign: "center" },
  detailsRow: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 10 },
  scheduleBtn: { backgroundColor: '#2260FF', paddingVertical: 8, paddingHorizontal: 20, borderRadius: 10 },
  scheduleText: { color: '#fff', fontWeight: '600' },
  bottomIcons: { flexDirection: 'row', gap: 16, marginTop: 10 },
  section: { marginTop: 20 },
  sectionTitle: { color: '#2260FF', fontSize: 16, fontWeight: 'bold', marginBottom: 4 },
  sectionText: { fontSize: 14, color: '#444', marginBottom: 12 },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  header: { fontSize: 20, fontWeight: "bold", color: "#2260FF" },
});
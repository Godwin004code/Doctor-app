import { Tabs } from 'expo-router';
import React from 'react';
import { Dimensions, Platform } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';


//const {width} = Dimensions

export default function TabLayout() {
  return (
    <Tabs
    
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#00278C',
    
    tabBarInactiveTintColor: '#fff',
      tabBarStyle: {
        position: 'absolute',
        bottom: 5,
        marginHorizontal: 30, 
        backgroundColor: 'blue',
        borderRadius: 30,
        height: 60,
        elevation: 4,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 8,
        borderTopWidth: 0,
       paddingTop: 10
      }
    }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <Ionicons name="chatbubbles-outline" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <AntDesign name="user" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <SimpleLineIcons name="calendar" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}

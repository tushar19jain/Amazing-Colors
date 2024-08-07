import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from "expo-router";
import { Colors } from "@/constants/Colors";
export default function Tablayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          headerShown:false,
          tabBarActiveTintColor:Colors.activeTint,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home-filled" size={30} color={color} />
          ),
        tabBarLabel:"Home",
        tabBarStyle:{paddingHorizontal:20,paddingVertical:5}
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="search"
        options={{
          headerShown:false,
          tabBarActiveTintColor:Colors.activeTint,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="search" size={30} color={color} />
          ),
          tabBarLabel:"Search",
          tabBarStyle:{paddingHorizontal:20,paddingVertical:5}
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="saved"
        options={{
          headerShown:false,
          tabBarActiveTintColor:Colors.activeTint,
          tabBarIcon: ({ color  }) => (
            <FontAwesome name="heart" size={24} color={color} />
          ),
          tabBarLabel:"Likes",
          tabBarStyle:{paddingHorizontal:20,paddingVertical:5}
        }}
      ></Tabs.Screen>
    </Tabs>
  );
}

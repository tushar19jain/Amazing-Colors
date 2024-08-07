import { View, Text, FlatList, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ColorSlate from "@/components/ColorSlate";
import { TouchableOpacity } from "react-native";
export default function home() {
  const url = "https://www.csscolorsapi.com/api/colors";
  interface colorsData {
    name: string;
    theme: string;
    group: string;
    hex: string;
    rgb: string;
  }
  const [colors, setColors] = useState<colorsData[] | null>(null);
  useEffect(() => {
    async function fetchColor() {
      const data = await fetch(url);
      const json = await data.json();
      setColors(json.colors);
    }
    fetchColor();
  }, []);
  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <Text
        style={{
          fontSize: 30,
          fontFamily: "bold",
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}
      >
        Amazing colors
      </Text>
      <Text
        style={{
          fontSize: 15,
          fontFamily: "medium",
          paddingHorizontal: 20,
          paddingBottom: 30,
          color: "gray",
        }}
      >
        Choose from over 150+ colors
      </Text>
      <FlatList
        data={colors}
        renderItem={({ item }) => {
          if (colors == null) {
            return (
              <View style={{ flex: 1, justifyContent: "center" }}>
                <ActivityIndicator size={"large"} color={"blue"} />
              </View>
            );
          } else {
            return (
              <ColorSlate
                name={item.name}
                hex={item.hex}
                rgb={item.rgb}
                group={item.group}
                theme={item.theme}
              />
            );
          }
        }}
      />
    </SafeAreaView>
  );
}

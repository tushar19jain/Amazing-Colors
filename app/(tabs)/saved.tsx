import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import ColorSlate from "@/components/ColorSlate";
import SavedColorSlate from "@/components/SavedColorSlate";

export default function saved() {
  const savedPallete: [] = useSelector((state: any) => state.colorReducers);
  const [saved, setSaved] = useState([...savedPallete]);
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <Text
        style={{
          fontSize: 30,
          fontFamily: "bold",
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}
      >
        Your ❤️ colors
      </Text>
        <FlatList
          data={savedPallete}
          renderItem={({ item }: any) => {
            return (
              <SavedColorSlate
                name={item.name}
                group={item.group}
                hex={item.hex}
                rgb={item.rgb}
                theme={item.theme}
              />
            );
          }}
        />
    </SafeAreaView>
  );
}

import { View, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native";
import QuickSearchBtn from "@/components/QuickSearchBtn";
import { useDispatch } from "react-redux";
import { SearchAction } from "@/redux/Actions/SearchAction";
import { useRouter } from "expo-router";
export default function search() {
  type valueType = string;
  const router = useRouter();
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState<valueType | null>(null);
  const handleSearchValue = (item: string | null) => {
    dispatch(SearchAction(item));
    router.push("/SearchResult");
  };
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <View>
      <Text
        style={{
          fontSize: 30,
          fontFamily: "bold",
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}
      >
        Search
      </Text>
        <TextInput
          placeholder="Search for color groups"
          autoFocus={true}
          onChangeText={(value) => setSearchValue(value)}
          inputMode="text"
          onSubmitEditing={() => {
            handleSearchValue(searchValue);
          }}
          style={{
            borderWidth: 2,
            padding: 15,
            borderRadius: 20,
            borderColor: "grey",
            marginHorizontal:30
          }}
          keyboardType="ascii-capable"
        ></TextInput>
      </View>
      <Text
        style={{
          marginVertical: 15,
          fontSize: 14,
          marginHorizontal: 30,
          fontFamily: "medium",
        }}
      >
        Some popular color groups
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 10,
          padding: 30,
        }}
      >
        <QuickSearchBtn name={"Red"} />
        <QuickSearchBtn name={"Gray"} />
        <QuickSearchBtn name={"Brown"} />
        <QuickSearchBtn name={"Green"} />
        <QuickSearchBtn name={"Aqua"} />
        <QuickSearchBtn name={"Blue"} />
      </View>
    </SafeAreaView>
  );
}

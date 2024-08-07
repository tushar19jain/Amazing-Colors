import { View, Text, TouchableOpacity, ToastAndroid } from "react-native";
import React, { useEffect, useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import * as Clipbord from "expo-clipboard";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import {
  ColorRemoveAction,
  ColorSaveAction,
} from "@/redux/Actions/ColorAction";
interface colorSlateData {
  name: string;
  theme: string;
  group: string;
  hex: string;
  rgb: string;
}
export default function ColorSlate(props: colorSlateData) {
  type isDark = boolean;
  type isSaved = boolean;
  type isAnimated = boolean;
  type isLiked = boolean;
  const dispatch = useDispatch();
  const copyToClipboardHex = async () => {
    ToastAndroid.show("Copied to clipboard", ToastAndroid.SHORT);
    await Clipbord.setStringAsync(props.hex);
  };
  const copyToClipboardRgb = async () => {
    ToastAndroid.show("Copied to clipboard", ToastAndroid.SHORT);
    await Clipbord.setStringAsync(props.rgb);
  };
  const [mode, setMode] = useState<isDark>(false);
  const [saved, setSaved] = useState<isSaved>(false);
  const [animated, setAnimated] = useState<isAnimated>(true);
  const [liked, setLiked] = useState<isLiked>(false);
  const singleTap = Gesture.Tap()
    .numberOfTaps(1)
    .onStart(() => {
      setAnimated(!animated);
      animated
        ? (scaleValue.value = scaleValue.value + 0.1)
        : (scaleValue.value = 1);
    })
    .runOnJS(true);
  let scaleValue: any = useSharedValue(1);
  const scaleAnimation = useAnimatedStyle(() => ({
    transform: [{ scale: withSpring(scaleValue.value) }],
  }));

  useEffect(() => {
    if (props.theme != "dark") {
      setMode(false);
    } else {
      setMode(true);
    }
  }, []);
  return (
    <View
      style={{
        justifyContent: "center",
        backgroundColor: "#fff",
        padding: 10,
        alignItems: "center",
      }}
    >
      <GestureHandlerRootView>
        <GestureDetector gesture={singleTap}>
          <Animated.View
            style={[
              {
                backgroundColor: "#" + props.hex,
                height: 250,
                width: 250,
                elevation: 2,
                borderRadius: 50,
              },
              scaleAnimation,
            ]}
          >
            {saved ? (
              <View
                style={{
                  display: "flex",
                  paddingVertical: 40,
                  alignItems: "flex-end",
                  flexDirection: "column",
                  paddingHorizontal: 30,
                }}
              >
                <Text
                  style={{ color: "gray", fontSize: 15, textAlign: "center" }}
                >
                  Saved
                </Text>
              </View>
            ) : null}
          </Animated.View>
        </GestureDetector>
      </GestureHandlerRootView>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          padding: 20,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 25 }}>{props.name}</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            padding: 20,
            alignItems: "center",
            gap: 20,
            flexWrap: "wrap",
          }}
        >
          <Text
            style={{
              borderWidth: 1,
              paddingVertical: 2,
              paddingHorizontal: 12,
              borderRadius: 99,
              backgroundColor: mode ? "black" : "white",
              color: mode ? "white" : "black",
            }}
          >
            {props.theme}
          </Text>
          <Text style={{ fontSize: 16 }}>Group : {props.group}</Text>
          {liked ? (
            <TouchableOpacity
              onPress={() => {
                saved ? setSaved(false) : setSaved(true);
                setLiked(!liked);
                dispatch(ColorRemoveAction(props.name));
              }}
            >
              {liked ? (
                <AntDesign name="heart" size={24} color="red" />
              ) : (
                <AntDesign name="hearto" size={24} color="red" />
              )}
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                ToastAndroid.show("Color saved", ToastAndroid.TOP);
                saved ? setSaved(false) : setSaved(true);
                dispatch(ColorSaveAction(props));
                setLiked(!liked);
              }}
            >
              {liked ? (
                <AntDesign name="heart" size={24} color="red" />
              ) : (
                <AntDesign name="hearto" size={24} color="red" />
              )}
            </TouchableOpacity>
          )}
          <TouchableOpacity
            onPress={copyToClipboardHex}
            style={{
              backgroundColor: "#00a2ed",
              padding: 10,
              borderRadius: 10,
              elevation: 1,
            }}
          >
            <Text style={{ color: "#f8f8f8" }}>Copy hex code</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#00a2ed",
              padding: 10,
              borderRadius: 10,
              elevation: 1,
            }}
          >
            <Text onPress={copyToClipboardRgb} style={{ color: "#f8f8f8" }}>
              Copy rgb code
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

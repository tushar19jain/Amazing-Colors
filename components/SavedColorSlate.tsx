import { View, Text, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useState, useEffect
 } from 'react'
 import * as Clipbord from 'expo-clipboard'
type isDark = boolean;
interface colorSlateData {
    name: string;
    theme: string;
    group: string;
    hex: string;
    rgb: string;
  }
  
export default function SavedColorSlate(props : colorSlateData) {
  const [mode, setMode] = useState<isDark>(false);
  
  useEffect(() => {
    if (props.theme != "dark") {
      setMode(false);
    } else {
      setMode(true);
    }
  }, []);
  const copyToClipboardHex = async () => {
    ToastAndroid.show('Copied to clipboard',ToastAndroid.SHORT)
    await Clipbord.setStringAsync(props.hex)
  }
  const copyToClipboardRgb = async () =>{
    await Clipbord.setStringAsync(props.rgb)
    ToastAndroid.show('Copied to clipboard',ToastAndroid.SHORT)
  }
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <View style={{height:300 , width: 300, backgroundColor: "#" + props.hex, borderRadius:40 }}></View>
        <View style={{display:"flex",flexDirection:"column",gap:8}}>
            <Text style={{fontSize:25,fontFamily:"medium",textAlign:"center"}} >{props.name}</Text>
            <Text style={{
              textAlign:"center",
              borderWidth: 1,
              paddingVertical: 2,
              paddingHorizontal: 12,
              borderRadius: 99,
              backgroundColor: mode ? "black" : "white",
              color: mode ? "white" : "black",
            }} >{props.theme}</Text>
            <Text style={{
              textAlign:"center",
            }} > Group : {props.group}</Text>
        </View>
        <View style={{display:"flex",flexDirection:"row",gap:10,marginVertical:20}}>
            <TouchableOpacity
            onPress={copyToClipboardHex}
            style={{
              backgroundColor: "#00a2ed",
              padding: 10,
              borderRadius: 10,
              elevation: 1,
            }}><Text style={{ color: "#f8f8f8" }}>Copy HEX code</Text></TouchableOpacity>
            <TouchableOpacity
            onPress={copyToClipboardRgb}
            style={{
              backgroundColor: "#00a2ed",
              padding: 10,
              borderRadius: 10,
              elevation: 1,
            }}><Text style={{ color: "#f8f8f8" }}>Copy RGB code</Text></TouchableOpacity>
        </View>
    </View>
  )
}
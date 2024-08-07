import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import ColorSlate from '@/components/ColorSlate';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
export default function SearchResult() {
  const searchValue = useSelector((state : any)=>state.SearchReducers)
  interface colorsData {
    name: string;
    theme: string;
    group: string;
    hex: string;
    rgb: string;
  }
  const [searchResult,setSearchResult] = useState<colorsData[] | null>(null)
  const link = `https://www.csscolorsapi.com/api/colors/group/${searchValue}`
  useEffect(()=>{
    async function fecthData() {
      const data = await fetch(link)
      const jsonData = await data.json()
      setSearchResult(await jsonData.colors)
    }
    fecthData()
  },[])
  return (
    <SafeAreaView style={{backgroundColor:"white",flex:1}}>
      <Text style={{fontSize:18, paddingHorizontal:30,paddingVertical:10}}>Search result for {searchValue}</Text>
      <FlatList
        data={searchResult}
        renderItem={({ item }) => {
          if (searchResult == null) {
            return (
              <View style={{ flex: 1, justifyContent: "center" }}>
                <Text>Loading the results....</Text>
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
  )
}
import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { useDispatch } from 'react-redux'
import { SearchAction } from '@/redux/Actions/SearchAction'
type nameType = any
export default function QuickSearchBtn(props : nameType) {
  const dispatch = useDispatch();
  const handleSearchData=  (item : string)=>{
        dispatch(SearchAction(item))
  }
  return (
    <TouchableOpacity
    >
          <Link 
          onPress={()=> 
            handleSearchData(props.name) }
          style={{
            backgroundColor: "grey",
            padding: 10,
            textAlign: "center",
            borderRadius:10,
            elevation:1,
            color:"#f8f8f8"
          }}
          href={'/SearchResult'}>
          <Text>
            {props.name}
          </Text>
          </Link>
        </TouchableOpacity>
  )
}
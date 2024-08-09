import React from "react";
import {Link, Stack} from "expo-router";
import { Slot } from "expo-router";
import { View,Text,Pressable } from "react-native";

import { CircleInfoIcon } from "../components/Icons";
import Logo from "../components/Logo";

export default function Layout() {
    return (
        <View className="flex-1 ">
           <Stack screenOptions={{
            headerStyle: {backgroundColor:'black'},
            headerTintColor:'white',
            headerTitle: '',
            headerLeft : ()=> <Logo></Logo>,
            headerRight: ()=> (
            
           <Link asChild href="/about">
              <Pressable className={`active:opacity-20`}>
                <CircleInfoIcon/>
              </Pressable>       
          </Link>
            )
           }}>
            
           </Stack>
        </View>
        

    )
}
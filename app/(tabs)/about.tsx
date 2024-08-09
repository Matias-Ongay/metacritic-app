import React from "react"
import { Pressable, ScrollView, Text } from "react-native"
import { Link } from "expo-router"
import { HomeIcon} from "../../components/Icons"
import { Screen } from "../../components/Screen"
export default function About(){
    return(
        
    <Screen>
        <ScrollView className="pt-24 bg-black">
        <Link asChild href="/">
            <Pressable>
               <HomeIcon></HomeIcon>
            </Pressable>       
        </Link>
        <Text className="text-white font-bold mb-8 text-2xl">Sobre el projecto</Text>
        <Text className="text-white text-white/90 mb-4">This is a simple app that uses the Metacritic API to display information about movies, TV shows, and games. It was created as a project for the Codecademy Full-Stack Engineer course.</Text>
        <Text className="text-white text-white/90 mb-4">This is a simple app that uses the Metacritic API to display information about movies, TV shows, and games. It was created as a project for the Codecademy Full-Stack Engineer course.</Text>
        <Text className="text-white text-white/90 mb-4">This is a simple app that uses the Metacritic API to display information about movies, TV shows, and games. It was created as a project for the Codecademy Full-Stack Engineer course.</Text>
    </ScrollView>
    </Screen>
    )
}
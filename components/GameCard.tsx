import React, { useEffect, useRef } from "react";
import { StyleSheet, Text, View, Image, Animated } from "react-native";
import { Game } from "../lib/metacritic";
import { Score } from "./Score";
export function GameCard({ game }: { game: Game }) {
  return (
    <View
    className="bg-slate-500/20 p-4 rounded-xl gap-4 mb-10"
    key={game.slug} >
            <Image source={{ uri: game.image }} style={styles.image} />
            <View>
              <Text className="mb-1" style={styles.title}>{game.title}</Text>
              <Score score={game.score} maxScore={100} />
              <Text className="mt-2 flex-shrink" style={styles.description}>{game.description.slice(0,100)}...</Text>
              
            </View>
            
    </View>
  );
}
export function AnimatedGameCard({game, index}:{game:Game, index:number}){
   const opacity = useRef(new Animated.Value(0)).current;
   useEffect(()=>{
    Animated.timing(opacity, {
      toValue:1,
      duration:500,
      delay:index*100,
      useNativeDriver: true,
    }).start();
   },[opacity,index]);
   return(
    <Animated.View style={{opacity}}>
        <GameCard game={game}/>
    </Animated.View>
   )
}
const styles = StyleSheet.create({
    image: {
      width: 107,
      height: 147,
      borderRadius: 10,
    },
    card: {
      marginBottom: 20,
    },
    title: {
      color: "#fff",
      fontSize: 20,
      fontWeight: "bold",
      marginTop: 10,
    },
    description: {
      color: "#fff",
      fontSize: 16,
      marginTop: 5,
    },
    score: {
      color: "#fff",
      fontSize: 16,
      marginTop: 5,
    },
  });
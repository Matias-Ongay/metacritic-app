import React, { useState, useEffect } from "react";
import { Link } from "expo-router";
import { View, FlatList, ActivityIndicator, Pressable } from "react-native";
import { getLatestGames, Game } from "../lib/metacritic";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedGameCard } from "./GameCard";
import { styled } from "nativewind";
import { Screen } from "./Screen";

const StyledPressable = styled(Pressable);
const Main: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const insets = useSafeAreaInsets();
  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);

  return (
    <Screen >
          {games.length === 0 ? (
              <ActivityIndicator/>
          ) : (
            <FlatList
            data={games} 
            keyExtractor={game=> game.slug}
            renderItem={({item,index})=> <AnimatedGameCard game={item} index={index} />}
          />
          )}
      
      
      
    </Screen>
  );
};

export default Main;



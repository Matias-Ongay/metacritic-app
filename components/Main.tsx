import React, { useState, useEffect } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import { getLatestGames, Game } from "../lib/metacritic";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedGameCard, } from "./GameCard";
import Logo from "./Logo";

const Main: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const insets = useSafeAreaInsets();
  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);

  return (
    <View style={{paddingTop:insets.top, paddingBottom: insets.bottom}}>
      <View style={{marginBottom:20,marginTop:20}}>
      <Logo width={176} height={40} />
      </View>
      
      
      
        {games.length === 0 ? (
            <ActivityIndicator/>
        ) : (
          <FlatList
          data={games} 
          keyExtractor={game=> game.slug}
          renderItem={({item,index})=> <AnimatedGameCard game={item} index={index} />}
        />
        )}
      
    </View>
  );
};

export default Main;



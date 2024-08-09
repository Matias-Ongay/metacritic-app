import React, { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, Text, View, Image } from "react-native";
import { Link } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import { Screen } from "../components/Screen";
import { Stack } from "expo-router";
import { getGameDetails } from "../lib/metacritic";
import { Score } from "../components/Score";

type Params = {
  id: string;
};

export default function Detail() {
  const { id } = useLocalSearchParams<Params>();
  const [gameInfo, setGameInfo] = useState<any>(null);

  useEffect(() => {
    if (id) {
      getGameDetails(id).then((game)=>{
        console.log(game);
        setGameInfo(game);
      });
    }
  }, [id]);

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#ffee00" },
          headerTintColor: "black",
          headerLeft: () => null,
          headerTitle: `${gameInfo?.title}`,
          headerRight: () => null,
        }}
      />
      <View>
            {gameInfo === null ? (
                <ActivityIndicator color={"#fff"} size={"large"} />) : (
                    <ScrollView>
                      <View className="flex justify-center items-center mb-4 text-center">
                        
                      <Image
                      className="mb-4 rounded"
                      source={{uri: gameInfo.image}}
                      style={{width: 214, height: 294}}
                      ></Image>
                        <Text className="text-white font-bold  text-2xl text-center">
                            {gameInfo.title}
                    </Text>
                    <Text className="text-white/70 mt-4 text-left mb-8 text-base">
                            {gameInfo.description}
                    </Text>
                    <Score score={gameInfo.score} maxScore={100} />
                    </View>
                    </ScrollView>
                    

                )}
        
      </View>
    </Screen>
  );
}

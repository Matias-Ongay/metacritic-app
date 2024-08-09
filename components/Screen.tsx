import React from 'react';
import { View, Text } from 'react-native';


export function Screen({children}: {children: React.ReactNode}) {
  return (
    <View className="flex-1 bg-black pt-4 px-2">
      {children}
    </View>
  );
}
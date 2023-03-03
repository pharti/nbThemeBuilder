import { ThemeContext } from './ThemeContext';
import React from 'react';
import { themes } from './theme';
import { NativeBaseProvider, Box, Center, Text, Button, View } from "native-base";
import ThemedButton from './ThemedButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Pressable, Touchable, TouchableOpacity } from 'react-native';

export default function App() {
  const [theme, setTheme] = React.useState(themes.team1);

  const handleUserSelect = (teamId) => {
    setTheme(themes[teamId]);
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: 8 }}>
      <NativeBaseProvider>
        <ThemeContext.Provider value={{ theme }}>
          <View style={{ flex: 0.2 }}>
            <Text>Select a Theme:</Text>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              {Object.keys(themes).map((teamId) => {
                return <TouchableOpacity key={teamId} onPress={() => handleUserSelect(teamId)} style={{ width: 24, height: 24, backgroundColor: themes[teamId].primaryColor, marginRight: 16, borderRadius: 4 }}></TouchableOpacity>
              })}
            </View>
          </View>
          <View style={{ flex: 0.8 }}>
            <ThemedButton />
          </View>

        </ThemeContext.Provider>
      </NativeBaseProvider>
    </SafeAreaView>
  );
}
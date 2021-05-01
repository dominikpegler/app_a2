import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';

export default function App() {
  return (
    <View style={styles.container}>
      <Text h4> App mit 3 Komponenten</Text>
      <Text>1. Startseite mit Suchfeld für Artist und Anzeige Favourites</Text>
      <Text>2. API-Abfrage der Alben des Artist</Text>
      <Text>3. Seite mit den Metadaten des Albums (Titel, Bild, Year, Genre und Description)</Text>
      <Text>4. Möglichkeit Artist zu Favourits hinzuzufügen</Text>
      <StatusBar style="auto" />

      <View style={{position: 'absolute', left: "1em", right: 0, bottom: "1em"}}><Text>Dominik PEGLER a01468373</Text></View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c9c9c9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

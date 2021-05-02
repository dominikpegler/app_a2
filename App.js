import React from 'react';
import 'react-native-gesture-handler';
import HomeScreen from './screens/HomeScreen';
import AlbumScreen from './screens/AlbumScreen';
import ArtistScreen from './screens/ArtistScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { favs:[] };
  };

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            initialParams={{favs:this.favs}}
          />
          <Stack.Screen
            name="Artist"
            component={ArtistScreen}
            />
          <Stack.Screen
            name="Album"
            component={AlbumScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
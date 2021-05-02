import React from 'react';
import 'react-native-gesture-handler';
import HomeScreen from './screens/HomeScreen';
import AlbumScreen from './screens/AlbumScreen';
import ArtistScreen from './screens/ArtistScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = { favs:[[112125,'Slipknot'],[113440,'Mudvayne'],[112458,'Sepultura'],[117408,'Amen']] };
  };
  render() {

    const handleArtistAdded = (idArtist,strArtist,favs) => {
      this.setState({favs:favs.push([idArtist,strArtist]) });
    }

    return (
      <NavigationContainer >
        <Stack.Navigator initialRouteName="Home" headerMode="screen">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            initialParams={{ favs: this.state.favs }}
          />
          <Stack.Screen
            name="Artist"
            component={ArtistScreen}
            initialParams={{ favs: this.state.favs, onArtistAdded:handleArtistAdded.bind(this) }}
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
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
    this.state = { favs_id:[122891,112400,113019,115141], favs_name:['Silver Jews','Soulwax','Mr. Bungle','Puscifer']};
  }; // some favourite artists to start with

  render() {

    const handleArtistAdded = (idArtist,strArtist,favs_id,favs_name) => {

      let newFavsIdArray = favs_id
      newFavsIdArray.push(idArtist)
      this.setState({ favs_id: newFavsIdArray });

      let newFavsNameArray = favs_name
      newFavsNameArray.push([idArtist,strArtist])
      this.setState({ favs_name:newFavsNameArray });

    }

    return (
      <NavigationContainer >
        <Stack.Navigator initialRouteName="Home" headerMode="screen">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            initialParams={{ favs_id: this.state.favs_id, favs_name: this.state.favs_name }}
          />
          <Stack.Screen
            name="Artist"
            component={ArtistScreen}
            initialParams={{ favs_id: this.state.favs_id, favs_name: this.state.favs_name, onArtistAdded:handleArtistAdded.bind(this) }}
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
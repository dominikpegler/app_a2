import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styles from '../stylesheet';
import { View, Image, ScrollView } from 'react-native';
import { Text } from 'react-native-elements';
import Author from '../components/Author.jsx';

class AlbumScreen extends React.Component{

    state = {
        loading: false,
        data: [],
        page: 2,
        error: null,
        query: '',
        fullData: []
    };

    render() {

        return(
            
            <View style={styles.container}>
                <StatusBar style="auto" />
                <Text style={{ fontSize: 20, marginBottom: 10, fontWeight: 'bold', alignSelf:'center' }}>{this.props.route.params.strAlbum}</Text>
                <Text style={{ fontSize: 16, margin: 2 }}>Artist: {this.props.route.params.strArtist}</Text>
                <Text style={{ fontSize: 16, margin: 2 }}>Year: {this.props.route.params.intYearReleased} </Text>
                <Text style={{ fontSize: 16, margin: 2 }}>Genre: {this.props.route.params.strGenre} </Text>
                <ScrollView key={this.props.route.params.idAlbum}>
                <Image style={{ width: 250, height: 250 , margin: 10, alignSelf:'center', borderRadius: 8}} source={{uri: this.props.route.params.strAlbumThumb !=="" ? this.props.route.params.strAlbumThumb : undefined }} />
                <Text style = {{backgroundColor:'#dddddd', padding: 8}}>{this.props.route.params.strDescriptionEN} </Text>
                </ScrollView>


                <Author/>
            </View>
        );
    }
}

export default AlbumScreen;
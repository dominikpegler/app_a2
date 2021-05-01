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
                <Text h4>{this.props.route.params.strAlbum} ({this.props.route.params.intYearReleased})</Text>
                <Text style={{ fontSize: 22 }}>{this.props.route.params.strArtist}</Text>
                <Text>Genre: {this.props.route.params.strGenre} </Text>
                <Image style={{ width: 300, height: 300 }} source={{uri: this.props.route.params.strAlbumThumb !=="" ? this.props.route.params.strAlbumThumb : undefined }} />
                <ScrollView key={this.props.route.params.idAlbum}>
                    <Text>{this.props.route.params.strDescriptionEN} </Text>
                </ScrollView>


                <Author/>
            </View>
        );
    }
}

export default AlbumScreen;
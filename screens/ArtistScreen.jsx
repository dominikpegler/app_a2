import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styles from '../stylesheet';
import { FlatList, View, TouchableOpacity, Image } from 'react-native';
import { Text } from 'react-native-elements';
import Author from '../components/Author.jsx';
import FavButton from '../components/FavButton.jsx';

class ArtistScreen extends React.Component{

    state = {
        loading: false,
        data: [],
        page: 1,
        error: null,
        query: '',
        fullData: [],
    };

    componentDidMount() {
        this.makeRemoteRequest()
        }
        
    makeRemoteRequest = () => {
        // const { page } = this.state
        const url = `https://theaudiodb.com/api/v1/json/1/album.php?i=${this.props.route.params.idArtist}`
            this.setState({ loading: true })
   
        fetch(url)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    //data: page === 1 ? res.artists : [...this.state.data, ...res.artists],
                    error: res.error || null,
                    loading: false,
                    fullData: res.album
                })
            })
            .catch(error => {
                this.setState({ error, loading: false })
            })
        }

    render() {
            
        return (        

            <View style={styles.container}>
                <FavButton onFavsUpdate={this.props.route.params.onFavsUpdate} onArtistRemoved={this.props.route.params.onArtistRemoved} onArtistAdded={this.props.route.params.onArtistAdded} favs_name={this.props.route.params.favs_name}  favs_id={this.props.route.params.favs_id} idArtist={this.props.route.params.idArtist} strArtist={this.props.route.params.strArtist}/>
                <Text h3 style={{textAlign:'center', margin:6}}>{this.props.route.params.strArtist}</Text>
                <StatusBar style="auto" />
                <FlatList
                    data={this.state.fullData}
                    renderItem={({ item }) => (
                          
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Album', {idAlbum:item.idAlbum,strAlbum:item.strAlbum,strArtist:item.strArtist,strDescriptionEN:item.strDescriptionEN,strGenre:item.strGenre,strAlbumThumb:item.strAlbumThumb,intYearReleased:item.intYearReleased})}>

                            <View
                                style={{
                                flexDirection: 'column',
                                padding: 12,
                                alignItems: 'center'
                                }}
                            >                                
                            <Text
                                category='s1'
                                style={{
                                    color: '#000',
                                    fontSize: 18,
                                    margin:6,
                                }}
                            >
                                {`${item.strAlbum} (${item.intYearReleased})`}
                            </Text>
                                <Image
                                    style={{ width: 150, height: 150, borderRadius:8 }}
                                    source={{ uri: item.strAlbumThumb !=="" ? item.strAlbumThumb : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fac%2FNo_image_available.svg%2F1024px-No_image_available.svg.png&f=1&nofb=1" }}
                                />
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item.idAlbum}
                    ItemSeparatorComponent={this.renderSeparator}
                    ListHeaderComponent={this.renderHeader}
                    ListFooterComponent={this.renderFooter}
                />
                <Author/>
                </View>
        );
    }
}

export default ArtistScreen;
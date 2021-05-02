import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styles from '../stylesheet';
import { FlatList, View, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import { Text, Input } from 'react-native-elements';
import Author from '../components/Author.jsx';
//import filter from 'lodash.filter';

class HomeScreen extends React.Component {    

    state = {
        loading: false,
        data: [],
        error: null,
        query: '',
        fullData: []
    };

    makeRemoteRequest = text => {

        if (text == "") {

            this.setState({fullData:[]})

        } else {
        
            const formattedQuery = text.toLowerCase()
            const url = `https://theaudiodb.com/api/v1/json/1/search.php?s=%${formattedQuery}%`
            this.setState({ loading: true })
   
            fetch(url)
                .then(res => res.json())
                .then(res => {
                    this.setState({
                        error: res.error || null,
                        loading: false,
                        fullData: res.artists})})
                    
                .catch(error => {
                    this.setState({ error, loading: false })})
        }
    }

    contains = ({ strArtist, idArtist }, query) => {
        if (
            strArtist.includes(query) ||
            idArtist.includes(query)
        ) {
            return true
        }
        return false
    }

    // this function might be needed to reduce the amount of API calls. currently an API call is fired on each change in the input field
    // handleSearch = text => {
    //     const formattedQuery = text.toLowerCase() // TODO: data should be put to lower case to compare
    //     const data = filter(this.state.fullData, artist => {
    //       return this.contains(artist, formattedQuery)
    //     })
    //     this.setState({ data, query: text })
    // }

    renderHeader = () => (
        <View
            style={{
            backgroundColor: '#fff',
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center'
            }}>
            <Input
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={this.makeRemoteRequest}
                // onChangeText={this.handleSearch}
                status='info'
                placeholder='Search Artist'
                style={{
                    borderRadius: 25,
                    borderColor: '#333',
                    backgroundColor: '#fff'
                }}
                textStyle={{ color: '#000' }}
                clearButtonMode='always'
            />
        </View>
    )

    renderSeparator = () => {
        return (
            <View
            style={{
                height: 1,
                width: '86%',
                backgroundColor: '#CED0CE',
                marginLeft: '5%'
            }}
            />
        )
    }
    
    renderFooter = () => {
        if (!this.state.loading) return null
        return (
          <View
            style={{
              paddingVertical: 20,
              borderTopWidth: 1,
              borderColor: '#CED0CE'
            }}>
            <ActivityIndicator animating size='large' />
          </View>
        )
    }

    render(){
        return(
            <View style={styles.container}>
                <StatusBar style="auto" />
                <FlatList
                    data={this.state.fullData}
                    renderItem={({ item }) => (
                          
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Artist', {idArtist:item.idArtist, strArtist:item.strArtist})}>

                            <View
                                style={{
                                flexDirection: 'row',
                                padding: 12,
                                alignItems: 'center'
                                }}
                            >
                                <Image
                                    style={{ width: 50, height: 50 }}
                                    source={{ uri: item.strArtistThumb !=="" ? item.strArtistThumb : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fac%2FNo_image_available.svg%2F1024px-No_image_available.svg.png&f=1&nofb=1" }}

                                />
                                <Text
                                category='s1'
                                style={{
                                    color: '#000',
                                    marginLeft: 16,
                                    fontSize: 22,
                                }}>{`${item.strArtist}`}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item.idArtist}
                    ItemSeparatorComponent={this.renderSeparator}
                    ListHeaderComponent={this.renderHeader}
                    ListFooterComponent={this.renderFooter}
                />
                <Author/>
            </View>
        )
    }
}

export default HomeScreen;

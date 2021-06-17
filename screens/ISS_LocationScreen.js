import axios from 'axios';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ImageBackground, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default class ISSLocation extends React.Component {
    constructor() {
        super();
        this.state = {
            location: {}
        }
    }
    componentDidMount() {
        this.getIssLocation()
    }
    getIssLocation = () => {
        axios.get('https://api.wheretheiss.at/v1/satellites/25544').then((response) => {
            this.setState({
                location: response.data
            })
        }).catch((error) => {
            alert(error.message)
        })
    }

    render() {
        if (Object.keys(this.state.location).length == 0) {
            return (
                <Text>LOADING...</Text>
            )
        } else {
            return (
                <SafeAreaView style={styles.container}>
                    <View style={styles.container}>
                        <ImageBackground style={styles.ImageBackground} source={require('../assets/iss_bg.jpg')}>
                            <Text style={styles.text}>ISS LOCATION SCREEN</Text>
                            <MapView style={styles.MapView}
                                region={{
                                    latitude: this.state.location.latitude,
                                    longitude: this.state.location.longitude,
                                    latitudeDelta: 100,
                                    longitudeDelta: 100,
                                }}><Marker coordinate={{
                                    latitude: this.state.location.latitude,
                                    longitude: this.state.location.longitude
                                }}>
                                    <Image style={styles.imageStyle} source={require('../assets/iss_icon.png')} />
                                </Marker>
                            </MapView>
                        </ImageBackground>
                        <View>
                            <Text>LATITUDE : {this.state.location.latitude}</Text>
                            <Text>LONGITUDE : {this.state.location.longitude}</Text>
                            <Text>ALTITUDE : {this.state.location.altitude}</Text>
                            <Text>VELOCITY : {this.state.location.velocity}</Text>
                        </View>
                    </View>
                </SafeAreaView>
            );
        }

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    imageStyle: {
        width: 50,
        height: 50,
        position: 'absolute',
        top: -50,
        right: -100,
    },
    ImageBackground: {
        flex: 1,
        resizeMode: 'cover',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 30,
        color: 'white',
        marginTop: 20,
        alignSelf: 'center',
    },
    MapView: {
        width: '100%',
        height: '100%',
    },
});

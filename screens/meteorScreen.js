import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default class MeteorScreen extends React.Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    <Text>METEOR SCREEN</Text>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

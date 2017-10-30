/**
 * Created by xushaoping on 17/10/27.
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';


export default class SettingScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: false,
        };
    }
    
    componentDidMount() {
    
    }
    
    render() {
        return (
            <View style={styles.container}>
                <View style={{backgroundColor: 'blue', height: 50}}></View>
                <View style={{ flex: 2, backgroundColor: 'red', height: 50}}></View>
                <View style={{backgroundColor: 'yellow', height: 50}}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    item: {
        flex: 1,
        marginBottom: 20,
    },
    image: {
        height: 200,
        resizeMode:Image.resizeMode.contain
    },
    title: {
        fontWeight: 'bold',
        color: '#ee69e0',
        textAlign: 'center',
        fontSize: 32,
        marginBottom: 20
    },
    
});

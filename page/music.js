/**
 * Created by xushaoping on 17/10/27.
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
var Sound = require('react-native-sound');
Sound.setCategory('Playback');

var yu = new Sound('yu.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
        console.log('failed to load the sound', error);
        return;
    }
    // loaded successfully
    console.log('duration in seconds: ' + yu.getDuration() + 'number of channels: ' + yu.getNumberOfChannels());
});


export default class MusicScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '兔裹煎蛋卷 - 鱼玄机',
            play: false
        };
    }
    
    componentDidMount() {
    
    }
    
    play = ()=> {
        if (this.state.play) {
            yu.pause();
            this.setState({
                play: !this.state.play
            })
        } else {
            yu.play();
            this.setState({
                play: !this.state.play
            })
        }
    };
    
    render() {
        return (
            <View style={styles.container}>
                <Text>{this.state.title}</Text>
                
                {
                    this.state.play ?
                        <Button color="#EE8094" title="暂停" onPress={this.play} />
                        :
                        <Button color="#95EE79" title="播放" onPress={this.play} />
                }
             
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    title: {
        fontWeight: 'bold',
        color: '#ee69e0',
        textAlign: 'center',
        fontSize: 32
    },
    
});

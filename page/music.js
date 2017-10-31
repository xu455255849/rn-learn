/**
 * Created by xushaoping on 17/10/27.
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions, Animated, Easing } from 'react-native';

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
            play: false,
            height: new Animated.Value(240),
            width: new Animated.Value(Dimensions.get('window').width),
            radius: new Animated.Value(0),
            rotate : new Animated.Value(0),
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
            }, () => {
                this.startAnimation()
            })
        }
    };
    
     startAnimation () {
        Animated.parallel([
            Animated.timing(this.state.width, {
                toValue: 200,
                duration: 1000,
                easing: Easing.linear,// 线性的渐变函数
            }),
            Animated.timing(this.state.height, {
                toValue: 200,
                duration: 1000,
                easing: Easing.linear,// 线性的渐变函数
            }),
            Animated.timing(this.state.radius, {
                toValue: 100,
                duration: 1000,
                easing: Easing.linear,// 线性的渐变函数
            })
        ]).start(() => this.rotate());
    }
    
    rotate () {
        if (this.state.play) {
            this.state.rotate.setValue(0);
            
            Animated.timing(this.state.rotate, {
                toValue: 1,
                duration: 10000,
                easing: Easing.linear,// 线性的渐变函数
            }).start(() => this.rotate())
        }
    }
    
    render() {
        return (
            <View style={styles.container}>
                <View style={{flex: 4}}>
                    <Text style={styles.title}>{this.state.title}</Text>
                    <Text style={styles.intro}>
                        鱼玄机，女，晚唐诗人，长安（今陕西西安）人。初名鱼幼微，字蕙兰。咸通（唐懿宗年号，860—874）中为补阙李亿妾，以李妻不能容，进长安咸宜观出家为女道士。与文学家温庭筠为忘年交，唱和甚多。后被京兆尹温璋以打死婢女之罪名处死。鱼玄机性聪慧，有才思，好读书，尤工诗。与李冶、薛涛、刘采春并称唐代四大女诗人。其诗作现存五十首，收于《全唐诗》。有《鱼玄机集》一卷。其事迹见《唐才子传》等书。
                    </Text>
                </View>
                <View style={{flex: 5}}>
                    <Animated.Image
                        style={{
                            height: this.state.height,
                            width: this.state.width,
                            borderRadius: this.state.radius,
                            transform: [
                                {rotateZ: this.state.rotate.interpolate({
                                    inputRange: [0,1],
                                    outputRange: ['0deg', '360deg']
                                })}
                            ]
                        }}
                        source={require('../assets/bg-music.jpg')}
                    />
                </View>
                <View style={{flex: 1, width: Dimensions.get('window').width - 40}}>
                    {
                        this.state.play ?
                            <Button color="#EE8094" title="暂停" onPress={this.play} />
                            :
                            <Button color="#95EE79" title="播放" onPress={this.play} />
                    }
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        color: '#ee69e0',
        textAlign: 'center',
        fontSize: 24
    },
    intro: {
        padding: 20
    }
});

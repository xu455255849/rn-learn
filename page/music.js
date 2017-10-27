/**
 * Created by xushaoping on 17/10/27.
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
var Sound = require('react-native-sound');
Sound.setCategory('Playback');

var nide = new Sound('nide.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
        console.log('failed to load the sound', error);
        return;
    }
    // loaded successfully
    console.log('duration in seconds: ' + nide.getDuration() + 'number of channels: ' + nide.getNumberOfChannels());
});
var qinai = new Sound('qinai.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
        console.log('failed to load the sound', error);
        return;
    }
    // loaded successfully
    console.log('duration in seconds: ' + qinai.getDuration() + 'number of channels: ' + qinai.getNumberOfChannels());
});
var shi = new Sound('nide.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
        console.log('failed to load the sound', error);
        return;
    }
    // loaded successfully
    console.log('duration in seconds: ' + shi.getDuration() + 'number of channels: ' + shi.getNumberOfChannels());
});
var tian = new Sound('tian.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
        console.log('failed to load the sound', error);
        return;
    }
    // loaded successfully
    console.log('duration in seconds: ' + tian.getDuration() + 'number of channels: ' + tian.getNumberOfChannels());
});
var xiao = new Sound('nide.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
        console.log('failed to load the sound', error);
        return;
    }
    // loaded successfully
    console.log('duration in seconds: ' + xiao.getDuration() + 'number of channels: ' + xiao.getNumberOfChannels());
});
var yong = new Sound('nide.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
        console.log('failed to load the sound', error);
        return;
    }
    // loaded successfully
    console.log('duration in seconds: ' + yong.getDuration() + 'number of channels: ' + yong.getNumberOfChannels());
});
var yu = new Sound('nide.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
        console.log('failed to load the sound', error);
        return;
    }
    // loaded successfully
    console.log('duration in seconds: ' + yu.getDuration() + 'number of channels: ' + yu.getNumberOfChannels());
});


export default class MusicScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerRight: <Button title="操作" onPress={ ()=> { Toast.info('操作操作操作操作操作', 1); }} />,
        title: `Some Info`,
    });
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    play: false,
                    title: 'HuaoH,HuaoH - 你的名字-黄昏之时（Escaperz Bootleg ）',
                    sound: nide,
                    key: '1'
                },
                {
                    play: false,
                    title: 'Minto薄荷糖,顾时笙 - 亲爱的你（Cover：葛雨晴 ／ 可歆）',
                    sound: qinai,
                    key: '2'
                },
                {
                    play: false,
                    title: '双笙,囧菌 - 世末歌者（Cover 乐正绫）',
                    sound: shi,
                    key: '3'
                },
                {
                    play: false,
                    title: '夏初安,君洛 - 甜点和诗（原曲：何洁《小永远》）',
                    sound: tian,
                    key: '4'
                },
                {
                    play: false,
                    title: '毛儿,朵芊 - 小城谣（Cover 胡碧乔）',
                    sound: xiao,
                    key: '5'
                },
                {
                    play: false,
                    title: 'Mi2 - 勇敢爱',
                    sound: nide,
                    key: '6'
                },
                {
                    play: false,
                    title: '兔裹煎蛋卷 - 鱼玄机',
                    sound: yu,
                    key: '7'
                },
            ]
           
        };
    }
    
    componentDidMount() {
    
    }
    
    play = (item, index)=> {
        alert(item, index)
        this.state.list[index].play = true
        // item.sound.play();
        this.setState({})
    };
    stop = (item, index)=> {
        alert(JSON.stringify(item))
        this.state.list[index].play = true
        this.setState({})
    }
    
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.list}
                    keyExtractor={this._keyExtractor}
                    renderItem={({item, index}) => (
                        <View style={{ flexDirection: 'row', padding: 20, marginBottom: 10 }}>
                            <View style={{ flex: 4, height: 80,  alignItems: 'center', justifyContent: 'center'}} >
                                <Text>{item.title}</Text>
                            </View>
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', height: 80,}} >
                                {
                                    item.play ?
                                        <Button color="#EE8094" title="暂停" onPress={this.stop(item, index)} />
                                        :
                                        <Button color="#95EE79" title="播放" onPress={this.play(item, index)} />
                                }
                            </View>
                        </View>
                    )}
                />
                
             
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

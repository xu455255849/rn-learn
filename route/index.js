/**
 * Created by xushaoping on 17/10/25.
 */

import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import HomeScreen from '../page/home'
import MusicScreen from '../page/music'
import PhotoScreen from '../page/photo'
import SettingScreen from '../page/setting'
import ArticleScreen from '../page/article'

const RootTabs = TabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: '文章',
            tabBarIcon: ({ tintColor, focused }) => (
                <Image
                    source={require('../assets/arthome.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        },
    },
    Music: {
        screen: MusicScreen,
        navigationOptions: {
            tabBarLabel: '音乐厅',
            tabBarIcon: ({ tintColor, focused }) => (
                <Image
                    source={require('../assets/music.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        },
    },
    Photo: {
        screen: PhotoScreen,
        navigationOptions: {
            tabBarLabel: '图库',
            tabBarIcon: ({ tintColor, focused }) => (
                <Image
                    source={require('../assets/photo.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        },
    },
    Setting: {
        screen: SettingScreen,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({ tintColor, focused }) => (
                <Image
                    source={require('../assets/setting.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        },
    },
}, {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
        activeTintColor: '#e92830',
        showIcon: true,
        indicatorStyle: {
            height: 0
        },
        style: {
            backgroundColor: '#70e4e9'
        }
    },
});

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
});


const RootNavigator = StackNavigator({
    Home: {
        screen: RootTabs,
        navigationOptions: {
            header: null
        },
    },
    Article: {
        screen: ArticleScreen
    }
    
});

export default RootNavigator;
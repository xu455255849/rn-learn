/**
 * Created by xushaoping on 17/10/25.
 */

import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import HomeScreen from '../page/home'

const DetailsScreen = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
    </View>
);

const ProfileScreen = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen</Text>
    </View>
);

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
    Profile: {
        screen: ProfileScreen,
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
}, {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
        activeTintColor: '#e92830',
        showIcon: true
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
            title: 'My Chats',
        },
    },
    Details: {
        screen: DetailsScreen,
        navigationOptions: {
            title: ' Chats',
        },
    },
});

export default RootNavigator;
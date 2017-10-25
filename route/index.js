/**
 * Created by xushaoping on 17/10/25.
 */

import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from '../page/home'

const DetailsScreen = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
    </View>
);

const RootNavigator = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            headerTitle: 'Home',
        },
    },
    Details: {
        screen: DetailsScreen,
        navigationOptions: {
            headerTitle: 'Details',
        },
    },
});

export default RootNavigator;
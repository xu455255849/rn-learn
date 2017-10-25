import React from 'react';
import { View, Text, Button } from 'react-native';
import { DrawerNavigator } from 'react-navigation'; // 1.0.0-beta.14
import Ionicons from 'react-native-vector-icons/Ionicons'; // 4.4.2

const HomeScreen = ({ navigation }) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
            onPress={() => navigation.navigate('DrawerToggle')}
            title="Open Drawer"
        />
    </View>
);

const ProfileScreen = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen</Text>
    </View>
);


const RootDrawer = DrawerNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            drawerLabel: 'Home',
            drawerIcon: ({ tintColor, focused }) => (
                <Ionicons
                    name={focused ? 'ios-home' : 'ios-home-outline'}
                    size={20}
                    style={{ color: tintColor }}
                />
            ),
        },
    },
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            drawerLabel: 'Profile',
            drawerIcon: ({ tintColor, focused }) => (
                <Ionicons
                    name={focused ? 'ios-person' : 'ios-person-outline'}
                    size={20}
                    style={{ color: tintColor }}
                />
            ),
        },
    },
});

export default RootDrawer;

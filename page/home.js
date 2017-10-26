import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image, FlatList } from 'react-native';
import { DatePicker, List } from 'antd-mobile';
//import Tab from '../route/tabIndex'
import request from 'superagent'


export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            date: new Date(),
            isToggleOn: true,
            isLoggedIn: false
        };
        
        
    }
    
    componentDidMount() {
        console.log(this.props)
        
        request
        .get('http://106.14.205.222/article/list')
        .query({ page: 1, limit: 10, isActive: 1})
        .end((err, res) => {
            if (err) throw err
            res.body.list.forEach( (it, i)=> {
                var path = 'http://106.14.205.222' + it.imgPath.slice(6)
                res.body.list[i].imgPath = path
            })
            console.log(res.body.list)
            this.setState({
                list: res.body.list
            })
        });
        
    }
    
    componentWillUnmount() {
    
    }
    
    
    
    render() {
        const { navigation } = this.props
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.list}
                    renderItem={({item}) => (
                        <View style={{ flexDirection: 'row',  alignItems: 'center', justifyContent: 'center', height: 80, marginBottom: 20 }}>
                            <View style={{ flex: 2, height: 80}} >
                               <Image
                                    source={{ uri: item.imgPath }}
                                    style={{ height: 80, marginRight: 10, resizeMode:Image.resizeMode.contain }}
                               />
                            </View>
                            <View style={{ flex: 4, height: 80, }} >
                                <Text numberOfLines={1} style={styles.title}>{item.title}</Text>
                                <Text numberOfLines={3} >{item.intro}</Text>
                            </View>
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', height: 80,}} >
                                <Button
                                    color="#5CA4EE"
                                    onPress={() => navigation.navigate('Profile')}
                                    title="阅读"
                                />
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
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20
    
    },
    logo: {
    
        },
    title: {
        overflow: 'hidden',
        fontWeight: 'bold',
        color: '#4e58ee',
        paddingBottom: 5
    },
   
});

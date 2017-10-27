/**
 * Created by xushaoping on 17/10/27.
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import request from 'superagent'

export default class PhotoScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }
    
    componentDidMount() {
        request
        .get('http://106.14.205.222/article/list')
        .query({ page: 1, limit: 999, isActive: 1})
        .end((err, res) => {
            if (err) throw err
            res.body.list.forEach( (it, i)=> {
                var path = 'http://106.14.205.222' + it.imgPath.slice(6)
                res.body.list[i].imgPath = path
            });
            this.setState({
                list: res.body.list
            })
        });
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>图片功能测试页面</Text>
                <FlatList
                    data={this.state.list}
                    renderItem={({item}) => (
                        <View style={styles.item}>
                            <Image
                                source={{ uri: item.imgPath }}
                                style={styles.image}
                            />
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

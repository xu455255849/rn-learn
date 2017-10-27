import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image, FlatList } from 'react-native';
import { Toast, SearchBar } from 'antd-mobile';

import request from 'superagent'

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            page: 1,
            searchPara: ''
        };
    }
    
    componentDidMount() {
  
    }
    
    reached = ()=> {
        request
        .get('http://106.14.205.222/article/list')
        .query({ page: this.state.page, limit: 10, isActive: 1})
        .end((err, res) => {
            if (err) throw err
            this.state.page++
            if (res.body.list.length == 0) {
                Toast.info('没有更多数据了哦', 1);
            } else {
                res.body.list.forEach( (it, i)=> {
                    var path = 'http://106.14.205.222' + it.imgPath.slice(6)
                    res.body.list[i].imgPath = path
                })
                var result = this.state.list.concat(res.body.list)
    
                Toast.loading('加载中...', 1, () => {
                    this.setState({
                        list: result
                    })
                });
            }
        });
    };
    
    search = ()=> {
        Toast.info('搜索功能暂未开发', 1);
    };
    
    render() {
        const { navigation } = this.props
        return (
            <View style={styles.container}>
                <View>
                    <SearchBar
                        placeholder="搜索、需要新建一个screen搜索，解决底部顶起问题"
                        onSubmit={this.search}
                    />
                </View>
                <FlatList
                    data={this.state.list}
                    onEndReachedThreshold={0.2}
                    onEndReached={this.reached}
                    renderItem={({item}) => (
                        <View style={{ flexDirection: 'row', padding: 20, marginBottom: 10 }}>
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
                                    color="#70e4e9"
                                    onPress={() => navigation.navigate('Article', {id: item._id})}
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
    },
    title: {
        overflow: 'hidden',
        fontWeight: 'bold',
        color: '#ee69e0',
        paddingBottom: 5
    },
   
});

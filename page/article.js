/**
 * Created by xushaoping on 17/10/27.
 */

import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, Button } from 'react-native';
import Markdown from 'react-native-simple-markdown'
import request from 'superagent'
import { Toast } from 'antd-mobile';
export default class HomeScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerRight: <Button title="操作" onPress={ ()=> { Toast.info('操作操作操作操作操作', 1); }} />,
        title: `Some Info`,
    });
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: ''
        };
    }
    
    componentDidMount() {
        const { state } = this.props.navigation;
        request
         .get('http://106.14.205.222/article/info')
         .query({  id: state.params.id })
         .end((err, res) => {
         if (err) throw err
             Toast.loading('加载中...', 1, () => {
                 this.setState({
                     content: res.body[0].content,
                     title: res.body[0].title
                 })
             });
         });
    }
    
    render() {
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.title}>{this.state.title}</Text>
                <Markdown
                    styles={markdownStyles}
                >
                    {this.state.content}
                </Markdown>
                <Text style={{color: 'red'}}>测试文章，开源的markdown插件还比较青涩，这里不再过多花时间再样式上</Text>
                <Text style={{color: 'red'}}>测试文章，开源的markdown插件还比较青涩，这里不再过多花时间再样式上</Text>
                <Text>   </Text>
                <Text>   </Text>
                <Text>   </Text>
            </ScrollView>
        );
    }
}

const markdownStyles = {
    heading1: {
        fontSize: 24,
        color: 'pink',
    },
    heading2: {
        fontSize: 16,
        color: 'pink',
    },
    link: {
        color: 'pink',
    },
    mailTo: {
        color: 'orange',
    },
    text: {
        color: '#555555',
    },
}


const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    title: {
        fontWeight: 'bold',
        color: '#ee69e0',
        textAlign: 'center',
        fontSize: 32
    },
    
});

/* eslint-disable prettier/prettier */

import React, { Component } from 'react';
import {
    Text,
    TextInput,
    TouchableOpacity,
    View,
    StyleSheet,
    SafeAreaView,
    FlatList,
    Image,
    Alert,
    StatusBar,
    Button,
} from 'react-native';
import axios from 'axios';

export class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataBiodata: [],
            dataGet:"",
        };
    }

    // componentDidCatch(){
    //     this.getData();
    // }
    componentDidMount() {
        // this.getData();
        this.findData();
    }

    componentDidUpdate() {
        // this.getData();
        this.findData();
    }


    findData = () => {
        axios.get(`http://526249c8fbe3.ngrok.io/biodata/${this.state.dataGet}`)
            .then((res) => {
                //   console.log(res.data);
                this.setState({ dataBiodata: res.data });
            });
    };

    renderItem = ({ item }) => (
        <SafeAreaView style={styles.item}>
            <Text >Name     :   {item.nama}</Text>
            <Text >Email    :   {item.email}</Text>
            <Text >Phone    :   {item.phone}</Text>
            <Text >Address  :   {item.address}</Text>
        </SafeAreaView>
    );

    render() {
        return (
            <SafeAreaView>
                <TextInput placeholder="Cari" style={styles.loginButtonSection1} onChangeText={(data) => { this.setState({ dataGet: data })}} />
                <FlatList
                    data={this.state.dataBiodata}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id}
                />
                <TouchableOpacity style={styles.loginButtonSection} onPress={() => { this.props.navigation.replace('Register') }}><Text>REGISTER</Text></TouchableOpacity>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    loginButtonSection1: {
        width: '100%',
        // height: '30%',
        backgroundColor: "grey",
        justifyContent: 'center',
        alignItems: 'center',
        color:'black'
    },
    loginButtonSection: {
        width: '100%',
        height: '30%',
        backgroundColor: "yellow",
        justifyContent: 'center',
        alignItems: 'center',
        color:'black'
    },
    loginTextSection: {
        width: '100%',
        height: '30%',
    },
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    item1: {
        backgroundColor: '#FF0000',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    title: {
        fontSize: 32,
    },
    button: {
        alignItems: "center",
        backgroundColor: "red",
        padding: 10,
        //   height:'100'
    },
    bluebutton: {
        alignItems: "center",
        backgroundColor: "blue",
        padding: 10,
        color: 'white'
    },
})


export default List;

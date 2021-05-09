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
import {Picker} from '@react-native-picker/picker';
import axios from 'axios';

export class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataBiodata: [],
            dataGet: "",
            picker: []
        };
    }

    // componentDidCatch(){
    //     this.getData();
    // }
    componentDidMount() {
        // this.getData();
        this.findData();
        console.log(this.state.picker);
    }

    componentDidUpdate() {
        // this.getData();
        this.findData();
        console.log(this.state.picker);
    }


    findData = () => {
        axios.get(`http://5245fb3907aa.ngrok.io/biodata/${this.state.dataGet}`)
            .then((res) => {
                //   console.log(res.data);
                this.setState({ dataBiodata: res.data });
            });
    };

    deleteData = (id) => {
        // axios.get(' http://5189d5f9efe2.ngrok.io/buku/get')
        axios.delete(`http://5245fb3907aa.ngrok.io/biodata/delete/${id}`)
            .then((res) => {
                // console.log(res)
                alert(res.data)
                // console.log(res.data.userId)
                // console.log(res.data.id)
                // console.log(res.data.title)
                // console.log(res.data.completed)
                // this.setState({dataqu : res.data})
            }).then(() => {
                // console.log(JSON.stringify(this.state.data[0].title))
            }).catch((error) => {
                alert(error.message);
            })
    }

    renderItem = ({ item }) => (
        <SafeAreaView style={styles.item}>
            <Text >Name     :   {item.nama}</Text>
            <Text >Email    :   {item.email}</Text>
            <Text >Phone    :   {item.phone}</Text>
            <Text >Address  :   {item.address}</Text>
            <TouchableOpacity onPress={() => { this.props.navigation.replace('Update', item) }} style={styles.bluebutton}><Text>Update Data</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => {
                Alert.alert(
                    "Delete",
                    "Hapus Data",
                    [
                        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                        { text: 'OK', onPress: () => this.deleteData(item.id) }
                    ]
                )
            }} style={styles.bluebutton}><Text>Delete Data</Text></TouchableOpacity>
        </SafeAreaView>
    );

    render() {
        return (
            <SafeAreaView>
                <Picker
                    selectedValue={this.state.picker}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue, itemIndex) => this.setState({picker : itemValue})}
                >
                    <Picker.Item label="Name" value="Name" />
                    <Picker.Item label="Email" value="Email" />
                    <Picker.Item label="Phone" value="Phone" />
                    <Picker.Item label="Address" value="Address" />
                </Picker>
                <TextInput placeholder="Cari" style={styles.loginButtonSection1} onChangeText={(data) => { this.setState({ dataGet: data }) }} />
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
        color: 'black'
    },
    loginButtonSection: {
        width: '100%',
        height: '30%',
        backgroundColor: "yellow",
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black'
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

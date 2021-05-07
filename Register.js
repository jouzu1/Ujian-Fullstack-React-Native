/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { Text, View, Alert, TextInput, Button, StyleSheet, StatusBar, TouchableOpacity} from 'react-native'
import axios from 'axios'

export class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nama: "",
            email: "",
            phone: "",
            address:""
        }
    }

    handleAdd() {
        // console.log(this.state)
        axios.post(`http://526249c8fbe3.ngrok.io/biodata/add`, this.state)
            .then((res) => {
                // console.log(res)
                // alert("Data Berhasil Dimasukkan")
                alert(res.data)
                // this.props.navigation.navigate('App')
                // this.props.navigation.replace('App')
                // Alert.alert(
                //     "Berhasil Ditambah",
                //     " "
                //     [
                //         {text: 'TIDAK', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                //         {text: 'OK', onPress: () => console.log('Cancel Pressed'), style: 'cancel'}
                //     ],
                //     { cancelable: false }
                // )
            }).catch((error) => {
                alert(error.message);
            })
    }

    render() {
        return (
            <View>
                <Text> Username </Text>
                <TextInput style={{ borderWidth: 1, color:'black'}} placeholder="Nama" onChangeText={(data) => { this.setState({ nama: data })}} />
                <Text> Email </Text>
                <TextInput style={{ borderWidth: 1, color:'black'}} placeholder="Email"  onChangeText={(data) => { this.setState({ email: data }) }} />
                <Text> Phone </Text>
                <TextInput style={{ borderWidth: 1, color:'black'}} placeholder="Phone" keyboardType='numeric' onChangeText={(data) => { this.setState({ phone: data }) }} />
                <Text> Address </Text>
                <TextInput style={{ borderWidth: 1, color:'black'}} placeholder="Address" onChangeText={(data) => { this.setState({ address: data }) }} />
                <View style={styles.loginButtonSection}>
                    <Button title="Submit" onPress={this.handleAdd.bind(this)}/>
                </View>
                <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.replace('List')}}><Text>LIST</Text></TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        //  height: '30%',
        alignItems: "center",
        backgroundColor: "red",
        padding: 10
      },
    loginButtonSection: {
        width: '100%',
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center',
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
});

export default Register

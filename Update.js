/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { Text, View, TextInput, Button, TouchableOpacity, StyleSheet, StatusBar} from 'react-native'
import axios from'axios'

export class Update extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id:this.props.route.params.id,
            nama: this.props.route.params.nama,
            email: this.props.route.params.email,
            phone: this.props.route.params.phone,
            address:this.props.route.params.address
        }
    }

    componentDidMount(){
        // this.handleUpdate();
        console.log(this.props)
    }

    handleUpdate() {
        console.log(this.state)
        axios.put(`http://526249c8fbe3.ngrok.io/biodata/update/${this.state.id}`, this.state)
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
            <View style={{ borderWidth: 5 }}>
                <Text> Update Nama </Text>
                <TextInput value={this.state.nama} onChangeText={(data) => { this.setState({ nama: data }) }} />
                <Text> Update Email </Text>
                <TextInput value={this.state.email}  onChangeText={(data) => { this.setState({ email: data }) }} />
                <Text> Update Nomor HP </Text>
                <TextInput value={String(this.state.phone)} keyboardType='numeric' onChangeText={(data) => { this.setState({ phone: parseInt(data) }) }} />
                <Text> Update Alamat </Text>
                <TextInput value={this.state.address} onChangeText={(data) => { this.setState({ address: data }) }} />
                <View style={styles.loginButtonSection}>
                    <Button title="Submit" onPress={this.handleUpdate.bind(this)}/>
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

export default Update

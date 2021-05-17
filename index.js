/* eslint-disable prettier/prettier */


import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';


AppRegistry.registerComponent(appName, () => App);

// import React, { Component } from 'react'
// import { View, Text } from 'react-native'
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'

// export class index extends Component {
//     static propTypes = {
//         prop: PropTypes
//     }

//     render() {
//         return (
//             <View>
//                 <Text> prop </Text>
//             </View>
//         )
//     }
// }

// const mapStateToProps = (state) => ({
    
// })

// const mapDispatchToProps = {
    
// }

// export default connect(mapStateToProps, mapDispatchToProps)(index)

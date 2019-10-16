import React, { Component } from 'react';
import { TextInput, View, StyleSheet, TouchableOpacity, Text,StatusBar } from 'react-native';

export default class InputForm extends Component {


    render() {
        return (
            <View style={styles.container}>

                <StatusBar barStyle="light-content"></StatusBar>
                <TextInput keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false} 
                onSubmitEditing={()=>this.passwordInput.focus()} returnKeyLabel="next" placeholder="Username or email" placeholderTextColor="rgba(255,255,255,0.7)" style={styles.inputstyle} />
                <TextInput  ref={(input)=>this.passwordInput=input}returnKeyLabel="go" secureTextEntry placeholder="Password" placeholderTextColor="rgba(255,255,255,0.7)" style={styles.inputstyle} />
                <TouchableOpacity style={styles.loginContainer}>

                    <Text style={styles.loginText}>
                        Login
    </Text>
                </TouchableOpacity>
            </View>

        );

    }


}


const styles = StyleSheet.create({


    container: {
        padding: 20,
        alignContent:'center',
        justifyContent:'center',
    },
    inputstyle: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.5)',
        paddingHorizontal: 10,
        marginBottom: 10
    },
    loginContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 15
    },
    loginText: {
        textAlign: 'center',
        color: '#ffffff',
        fontWeight: '400'
    }

});

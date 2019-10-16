import React, { Component } from 'react';
import { Image, Alert, Text, TextInput, View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

import InputForm from '../views/InputForm'
export default class LoginScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        };

        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'splash' })],
          });
          this.props.navigation.dispatch(resetAction);
    }

    onLogin() {
        const { username, password } = this.state;
        Alert.alert('Credentials', `${username} + ${password}`);
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.subContainer} behavior="padding">
                <View style={styles.container}>
                    <Image source={require("../images/logo.png")} style={styles.logoStyle} />

                    <Text style={styles.textStyle}>Scholl App for login based on React native</Text>
                </View>
                <InputForm />
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    subContainer: {
        backgroundColor: '#345485',
        flex: 1
    },
    container: {
        alignItems: 'center',
        flexGrow: 1,
        marginBottom: 50,
        justifyContent: 'center'
    },
    logoStyle: {
        width: 200,
        height: 150,
    },
    textStyle: {
        color: '#FFFF',
        marginTop: 10,
        width: 150,
        textAlign: 'center',
        opacity: 0.5
    }
});

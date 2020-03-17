import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class AuthLoading extends Component {
    render() {
        return (
            <View style={styles.mystyle}>
                <Text> Giriş Yapılıyor ... </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        mystyle: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'            
        },
    }
)

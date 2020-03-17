import React from 'react';
import { StyleSheet, Button, ActivityIndicator, StatusBar, Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AsyncStorage from '@react-native-community/async-storage';
import RouterOpp from '../RouterOpp'

const userInfo = {username:'erhan',password:'1234'};

class LoginPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {username:'',password:''}
    }

    static navigationOptions ={
        headerShown: false
    };
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}> Login </Text>
                <TextInput
                style={styles.input}
                placeholder="Username"
                onChangeText={(username)=>this.setState({username})}
                value={this.state.username}
                />                    
                <TextInput
                style={styles.input}
                placeholder="Password"
                onChangeText={(password)=>this.setState({password})}
                value={this.state.password}
                secureTextEntry={true}
                />
                <TouchableOpacity
                    style={styles.btnEnter}
                    onPress={this._signin}
                >
                    <Text style={styles.btnEnterText}>ENTER</Text>
                </TouchableOpacity>
            </View>
        );
    }

    _signin = async () => {
        if(userInfo.username===this.state.username && userInfo.password===this.state.password){            
            await AsyncStorage.setItem('logged','l');
            this.props.navigation.navigate('App');
        }else{
            alert('Yanlis');
        }
    }
}

class HomeScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome Logged Page
                </Text>
                <Button onPress={this._logout} title="Logout"/>
            </View>
        );
    }

    _logout = async () => {
        await AsyncStorage.clear;
        this.props.navigation.navigate('Auth');
    }
}

class AuthLoadingScreen extends React.Component{
    constructor(props){
        super(props);
        this._loadData();
    }
    render(){
        return(
            <View style={styles.container}>
                <ActivityIndicator/>
                <StatusBar barStyle='default'/>           
            </View>
        );
    }

    _loadData = async () => {
        const logged = await AsyncStorage.getItem('logged');
        this.props.navigation.navigate(logged !== 'l' ? 'Auth' :'App')
    }
}

const AppStack = createStackNavigator({NavigationApp: RouterOpp});
//const AppStack = createStackNavigator({Home: HomeScreen});
const AuthStack = createStackNavigator({Login: LoginPage});

export default createAppContainer(
    createSwitchNavigator(
        {
            AuthLoading: AuthLoadingScreen,
            App: AppStack,
            Auth: AuthStack
        },{
            initialRouteName:'Auth'
        }
    )    
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',        
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin : 10
    },
    input: {
        margin: 15,
        height: 40,
        padding: 5,
        fontSize: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#428AF8'
    },
    btnEnter: {
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#428AF8',
        alignItems: 'center',
        marginLeft: 15,
        marginRight: 15,
        padding: 10
    },
    btnEnterText: {
        color: '#ffffff',
        fontWeight: '700'
    }
})
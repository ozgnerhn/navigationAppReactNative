import {Component} from "react";
import {StyleSheet, Text, View, Button, Image, TouchableOpacity} from "react-native";
import React from "react";

class TitleLogo extends Component{
    render(){
        return(
            <Image source={require('../assets/icon.png')}/>
        )
    }
}

export default class HomeScreen extends Component {
    static navigationOptions = ({ navigation }) => {
		return {
			headerTitle:<TitleLogo/>,
			headerRight: (
				<TouchableOpacity
					style={{ marginRight: 15 }}
					onPress={() => navigation.navigate('AboutModal')}>
					<Text style={{ color: "#333" }}>About</Text>
				</TouchableOpacity>
			)
		}
	};

	render() {
        const { navigate } = this.props.navigation;
		return (
			<View style={styles.container}>
				<Text>Home</Text>
                <Button
                title="go to detail page"
                onPress={() => navigate('Detail')}
                />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	}
});
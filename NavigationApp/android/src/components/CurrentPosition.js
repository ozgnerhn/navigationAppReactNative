import React, { Component } from 'react';
import { StyleSheet, View, Text, Alert, PermissionsAndroid } from 'react-native';
import MapView from "react-native-maps";

//import Permissions from 'react-native-permissions';
import {check, PERMISSIONS, RESULTS} from 'react-native-permissions';


/* export async function request_location_runtime_permission() {

    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          'title': 'ReactNativeCode Location Permission',
          'message': 'ReactNativeCode App needs access to your location '
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Alert.alert("Location Permission Granted.");
      }
      else {
        Alert.alert("Location Permission Not Granted");
      }
		} 
		catch (err) {
      console.warn(err)
    }
} */

export default class CurrentPosition extends Component {
	state = {
		region: {
			latitude: 44.02182229, //42
			longitude: 29.04420227,
			latitudeDelta: 0.0922,
			longitudeDelta: 0.0421,
		},
	};
	
	async componentDidMount() {
		const { coords } = await this.getCurrentPosition();
		this.setState({
			region: {
				...this.state.region,
				latitude: coords.latitude,
				longitude: coords.longitude
			},
		});			
	}

	getCurrentPosition() {
		return new Promise((resolve, reject) => {
			navigator.geolocation.getCurrentPosition(position => {
				resolve(position)
			}),
			reject,
			{
				enableHighAccuracy: false,
				timeout: 5000,
				maximumAge: 1000
			}
		},)
		}

	render() {
		return (
			<View style={styles.container}>
				<MapView
					loadingEnabled={true}
					showsUserLocation={true}
					style={styles.map}
					region={this.state.region}
				>
				</MapView>                
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F5FCFF',
	},
	map: {
		flex: 1
	},
});
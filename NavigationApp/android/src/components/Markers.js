import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, {Marker} from "react-native-maps";

export default class Markers extends Component {
	state = {
		region: {
			latitude: 37.7734439,
			longitude: 29.08736904,
			latitudeDelta: 0.0922,
			longitudeDelta: 0.0421,
		},
		markers: [
			{
				latlng: {
					latitude: 37.7734439,
					longitude: 29.08736904,
				},
				title: 'Ev',
				description: 'Lorem ipsum'
			},
			{
				latlng: {
					latitude: 37.7534439,
					longitude: 29.08736904,
				},
				title: 'İş',
				description: 'Lorem ipsum 2'
			},
			{
				latlng: {
					latitude: 37.7334439,
					longitude: 29.08736904,
				},
				title: 'Lokanta',
				description: 'Lorem ipsum 3'
			}
		]
	};

	componentDidMount() {

	}

	render() {
		return (
			<View style={styles.container}>
				<MapView
                    loadingEnabled={true}
					style={styles.map}
					region={this.state.region}
				>
					{
						this.state.markers.map((marker, key) => (
							<Marker
								key={key}
								coordinate={marker.latlng}
								title={marker.title}
								description={marker.description}
							/>
						))
					}
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
	}
});
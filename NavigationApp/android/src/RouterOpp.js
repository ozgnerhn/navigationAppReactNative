import React from 'react';
import { Text, View} from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/Ionicons'
// screens
import Home from './screen/Home';
import Contacts from './screen/Contacts';
import Settings from './screen/Settings';

import SettingsModal from './components/SettingsModal';

const TabNavigator = createBottomTabNavigator({
	Home: {
		screen: Home,
		navigationOptions: {
            tabBarLabel: 'Anasayfa',
			tabBarIcon: ({ tintColor }) => (<Icon name="ios-home" size={22} color={tintColor} />)
		}
	},
	Contacts: {
		screen: Contacts,
		navigationOptions: {
            tabBarLabel: 'Bildirimler',
			tabBarIcon: ({ tintColor }) => (<Icon name="ios-notifications-outline" size={22} color={tintColor} />)
		}
	},
	Settings: {
		screen: Settings,
		navigationOptions: {
            tabBarLabel: 'Ayarlar',
			tabBarIcon: ({ tintColor }) => (<Icon name="ios-settings" size={22} color={tintColor} />)
		}
	}
}, {
	tabBarOptions: {
        activeTintColor: '#f8f8f8',
        inactiveTintColor: '#586589',
        style: {
            backgroundColor: '#171f33'
        }
	}
});
const ModalStack = createStackNavigator({
	Tabs: {
		screen: TabNavigator
	},
	SettingsModal: {
		screen: SettingsModal
	}
},{
	mode: 'modal',
	headerMode: 'none'
});

export default createAppContainer(ModalStack);
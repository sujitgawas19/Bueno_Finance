import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, AppState, TouchableNativeFeedback, ActivityIndicator } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import SplashScreen from 'react-native-splash-screen'
import helpers from './src/utils/helpers';

declare var global: { HermesInternal: null | {} };

class App extends Component {
	state = {
		permissionCheckedAtAppOpen: false,
		permissionsGiven: false,
		permissionsObject: {},
		showLoader: true
	}
	componentDidMount() {
		SplashScreen.hide();
		// this.checkPermissions();
		AppState.addEventListener('change', this.handleAppStateChange);
	}

	render() {
		let { permissionsGiven, permissionsObject, showLoader } = this.state;
		return (
			<>
				<StatusBar barStyle="dark-content" />
				<SafeAreaView style={styles.safeArea}>
					<ScrollView
						contentInsetAdjustmentBehavior="automatic"
						style={styles.scrollView}>

						{
							showLoader && <ActivityIndicator style={styles.loader} size={25} />
						}
						{
							!showLoader &&
							<>
								{
									permissionsGiven &&
									<View style={styles.header}>
										<Text style={styles.headerText}>Welcome to Bueno Finance</Text>
									</View>
								}

								{
									!permissionsGiven &&
									<View style={styles.permissionStyle}>
										<Text style={styles.headerText}>Following Permissions are required to use the app: </Text>

										{
											Object.keys(permissionsObject).map((item, index) => {
												return (
													permissionsObject[item] != 'granted' &&
													<Text key={index} style={styles.item}>{item}</Text>
												)
											})
										}

										<TouchableNativeFeedback onPress={() => { this.requestPermissions() }}>
											<Text style={styles.button}>Give Permissions</Text>
										</TouchableNativeFeedback>
									</View>
								}
							</>
						}
					</ScrollView>
				</SafeAreaView>
			</>
		);
	}

	componentWillUnmount() {
		AppState.removeEventListener('change', this.handleAppStateChange);
	}

	handleAppStateChange = (nextAppState) => {
		console.log('App state changed ==>', nextAppState);
		if (nextAppState == 'active' && !this.state.permissionCheckedAtAppOpen) {
			this.setState({ permissionCheckedAtAppOpen: true }, () => this.requestPermissions());
		}
	};

	requestPermissions = async () => {
		let result = await helpers.requestPermissions();
		let permissions_given = true;
		for (let key in result) {
			if (result[key] != 'granted') {
				permissions_given = false
			}
		}
		console.log("result ==>", result);
		this.setState({ permissionsGiven: permissions_given, permissionsObject: result, showLoader: false });
	}
}

const styles = StyleSheet.create({
	scrollView: {
		// backgroundColor: 'yellow',
		padding : 10,
	},
	header: {
		height: '100%',
		display: 'flex',
		alignContent: 'center',
		justifyContent: 'center',
		marginTop: 100,
	},
	headerText: {
		fontSize: 22,
		fontWeight: '600',
		textAlign: 'center'
	},
	item: {
		padding: 10
	},
	loader : {
		marginTop: 100,
		// height: '100%',
		// display: 'flex',
		// alignContent: 'center',
		// justifyContent: 'center',
	},
	button: {
		fontSize: 22,
        fontFamily: 'Ex-Bold',
		fontWeight: '700',
		marginBottom: 30,
		marginTop: 30,
	},
	safeArea: {
		height : '100%',
		display: 'flex',
		alignContent: 'center',
		justifyContent: 'center',
	},
	permissionStyle : {
		marginTop : 10
	}
});

export default App;

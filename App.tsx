import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, AppState, TouchableNativeFeedback, ActivityIndicator } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import SplashScreen from 'react-native-splash-screen'
import helpers from './src/utils/helpers';
import Routes from './src/routes/routes';
import { Root } from 'native-base';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from './src/redux/store';

declare var global: { HermesInternal: null | {} };

class App extends Component {
	state = {
		permissionCheckedAtAppOpen: false,
		permissionsGiven: false,
		permissionsObject: {},
		showLoader: true,
		gateLifted: false,
	}
	componentDidMount() {
		SplashScreen.hide();
		// this.checkPermissions();
		AppState.addEventListener('change', this.handleAppStateChange);
	}

	render() {
		let { permissionsGiven, permissionsObject, showLoader } = this.state;
		return (
			<Root>
				<Provider store={store}>
					<PersistGate persistor={persistor} onBeforeLift={this.onBeforeLift}>
						<StatusBar backgroundColor="#255546" barStyle="light-content"/>
						<>
							<SafeAreaView style={styles.safeArea}>
								<ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
									<View style={[{ flex: 1 }]}>
										{this.state.gateLifted && <Routes />}
									</View>
								</ScrollView>
							</SafeAreaView>
						</>
					</PersistGate>
				</Provider>
			</Root>
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
		// let result = await helpers.requestPermissions();
		// let permissions_given = true;
		// for (let key in result) {
		// 	if (result[key] != 'granted') {
		// 		permissions_given = false
		// 	}
		// }
		// console.log("result ==>", result);
		// this.setState({ permissionsGiven: permissions_given, permissionsObject: result, showLoader: false });
	}

	onBeforeLift = () => {
		this.setState({ gateLifted: true });
	};
}

const styles = StyleSheet.create({
	scrollView: {
		// backgroundColor: 'yellow',
		padding: 10,
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
	loader: {
		marginTop: 100
	},
	button: {
		fontSize: 22,
		fontFamily: 'Ex-Bold',
		fontWeight: '700',
		marginBottom: 30,
		marginTop: 30,
	},
	safeArea: {
		height: '100%',
		display: 'flex',
		alignContent: 'center',
		justifyContent: 'center',
	},
	permissionStyle: {
		marginTop: 10
	}
});

export default App;

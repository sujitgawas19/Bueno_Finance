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
import Popup from './src/components/popup/popup';

declare var global: { HermesInternal: null | {} };

class App extends Component {
	state = {
		permissionCheckedAtAppOpen: false,
		permissionsGiven: false,
		permissionsObject: {},
		showLoader: true,
		gateLifted: false,
		showModal : false,
		showSettingOption : false
	}
	componentDidMount() {
		SplashScreen.hide();
		AppState.addEventListener('change', this.handleAppStateChange);
	}

	render() {
		let { permissionsGiven, permissionsObject, showLoader, showModal, showSettingOption } = this.state;
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
									<Popup showModal={showModal} requestPermissions={this.requestPermissions} showSettingOption={showSettingOption} checkPermissions={this.checkPermissions} hideModal={this.hideModal}/>
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
		// console.log('App state changed ==>', nextAppState);
		// if (nextAppState == 'active' && !this.state.permissionCheckedAtAppOpen) {
		// 	this.setState({ permissionCheckedAtAppOpen: true }, () => this.requestPermissions());
		// }
	};

	requestPermissions = async () => {
		this.setState({ showModal: false });
		let result = await helpers.requestPermissions();
		let obj = helpers.getPermissionsStatus(result);
		
		if (!obj.permissions_given && obj.never_ask_again) {
			this.setState({ showModal: true, showSettingOption: true })
		}
		else if(!obj.permissions_given){
			this.setState({ showModal: true, showSettingOption: false })
		}
	}

	checkPermissions = async () => {
		console.log("inside checkpermissions")
		let permissions_allowed = await helpers.checkPermissions();
		if(!permissions_allowed) {
			this.setState({showModal : true})
		}
	}

	onBeforeLift = () => {
		this.setState({ gateLifted: true });
	};

	hideModal = () => {
		this.setState({showModal : false})
	}
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

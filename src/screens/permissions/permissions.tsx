import React, { Fragment, Component } from 'react'
import { View, Text, ScrollView, TouchableOpacity, StatusBar, Dimensions, SafeAreaView, StyleSheet, Image, TouchableNativeFeedback, Permission, BackHandler } from 'react-native';
import { Buttons, Helpers, Backgrounds, Formsty } from '../../styles/styles';
import { cssFormFloatingLabel } from '../../styles/form-floating-lable';
import helpers from '../../utils/helpers';
import Popup from '../../components/popup/popup'
import { newApp } from '../../Redux/App/app.actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export class Permissions extends Component<any, any> {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			showSettingOption: false
		}
	}

	componentDidMount = async () => {

	}

	render() {
		let { showModal, showSettingOption } = this.state;
		return (
			<>
				<View style={styles.Center}>
					<Text style={styles.Header}>Bueno Finance</Text>
				</View>
				<View style={styles.Center}>
					<Text style={styles.Request}>Requesting access to your phone data</Text>
				</View>

				<View>
					<Text>Bueno Finance needs access to</Text>
				</View>

				<View>
					<Text>Installed Apps</Text>
					<Text>Call History</Text>
					<Text>Third Party Accounts</Text>
					<Text>SMS</Text>
					<Text>Storage</Text>
					<Text>Personal Information</Text>
					<Text>Calendar</Text>
					<Text>Camera</Text>
					<Text>Contacts</Text>
					<Text>Socal Media</Text>
					<Text>Location</Text>
					<Text>Phone</Text>
				</View>

				<View style={styles.TermsSection}>
					<TouchableOpacity onPress={this.navigateToTermsPage}>
						<Text style={styles.TermsText}>By continuing you agree to our Privacy Policy, Terms of Services & Borrower Terms</Text>
					</TouchableOpacity>
				</View>

				<View style={styles.ButtonSection}>
					<TouchableOpacity onPress={this.closeApp}>
						<Text style={[Buttons.PrimaryText, cssFormFloatingLabel.buttonText]}>DECLINE</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={this.requestPermissions}>
						<Text style={[Buttons.PrimaryText, cssFormFloatingLabel.buttonText]}>ACCEPT</Text>
					</TouchableOpacity>
				</View>

				<Popup showModal={showModal} requestPermissions={this.requestPermissions} showSettingOption={showSettingOption} />
			</>
		)
	}

	closeApp = () => {
		BackHandler.exitApp();
	}

	navigateToTermsPage = () => {
		this.props.navigation.navigate('Terms')
	};

	requestPermissions = async () => {
		this.setState({ showModal: false });
		let result = await helpers.requestPermissions();
		let permissions_given = true, never_ask_again = false;
		for (let key in result) {
			if (result[key] != 'granted') {
				permissions_given = false;
				if (result[key] == 'never_ask_again') {
					never_ask_again = true;
				}
			}
		}
		if (permissions_given) {
			this.navigateToAuth()
		}
		else if (never_ask_again) {
			this.setState({ showModal: true, showSettingOption: true })
		}
		else {
			this.setState({ showModal: true, showSettingOption: false })
		}
	}

	navigateToAuth = () => {
		this.props.newApp();
		this.props.navigation.navigate('Auth');
	}

}

const styles = StyleSheet.create({
	Header: {
		color: '#000',
		fontSize: 42,
		fontFamily: 'Poppins-Bold',
		marginVertical: 15,
		letterSpacing: 0.555556,
	},
	Request: {
		marginVertical: 5,
		fontSize: 15,
		fontWeight: 'bold'
	},
	Center: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	TermsSection: {
		marginVertical: 15
	},
	TermsText: {
		textDecorationLine: 'underline',
		color: '#004D93'
	},
	ButtonSection: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around'
	}
})

const mapStateToProps = (state) => {
	const { app } = state;
	return { app }
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ newApp }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Permissions);


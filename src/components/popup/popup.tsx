import React, { Fragment, Component } from 'react'
import { View, Text, ScrollView, TouchableOpacity, StatusBar, Dimensions, SafeAreaView, StyleSheet, Image, TouchableNativeFeedback, Permission, Modal, TouchableHighlight, BackHandler } from 'react-native';
import { Buttons, Helpers, Backgrounds, Formsty } from '../../styles/styles';
import { cssFormFloatingLabel } from '../../styles/form-floating-lable';

export class Popup extends Component<any, any> {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	componentDidMount = async () => {
		// this.setModalVisible(this.props.showModal)
	}

	setModalVisible(visible) {
		// this.setState({ modalVisible: visible });
	}

	render() {
		let { showModal, requestPermissions, showSettingOption } = this.props;
		return (
			<View style={{ marginTop: 22, backgroundColor: 'red' }}>
				<Modal animationType="slide" transparent={false} visible={showModal}>
					{
						!showSettingOption &&
						<>
							<View style={{ marginTop: 22 }}>
								<View>
									<Text>This app needs permissions to work without problems.</Text>
								</View>
							</View>
							<View style={styles.ButtonSection}>
								<TouchableOpacity onPress={this.closeApp}>
									<Text style={[Buttons.PrimaryText, cssFormFloatingLabel.buttonText]}>Exit APP</Text>
								</TouchableOpacity>
								<TouchableOpacity onPress={requestPermissions}>
									<Text style={[Buttons.PrimaryText, cssFormFloatingLabel.buttonText]}>Yes, Grant Permissions</Text>
								</TouchableOpacity>
							</View>
						</>
					}

					{
						showSettingOption &&
						<>
							<View style={{ marginTop: 22 }}>
								<View>
									<Text>You have denied permissions for the app. Go to settings and change the permissions</Text>
								</View>
							</View>
							<View style={styles.ButtonSection}>
								<TouchableOpacity onPress={this.closeApp}>
									<Text style={[Buttons.PrimaryText, cssFormFloatingLabel.buttonText]}>Exit APP</Text>
								</TouchableOpacity>
								<TouchableOpacity onPress={requestPermissions}>
									<Text style={[Buttons.PrimaryText, cssFormFloatingLabel.buttonText]}>Go to settings</Text>
								</TouchableOpacity>
							</View>
						</>
					}
				</Modal>
			</View>
		);
	}

	closeApp = () => {
		BackHandler.exitApp();
	}
}


const styles = StyleSheet.create({
	Container: {
		flex: 1,
		backgroundColor: '#ffffff',
		paddingLeft: 30,
		paddingRight: 30,
		paddingBottom: 20,
	},
	Header: {
		color: '#000',
		fontSize: 42,
		fontFamily: 'Poppins-Bold',
		marginVertical: 15,
		letterSpacing: 0.555556,
	},
	ButtonSection: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around'
	}
})



export default Popup;

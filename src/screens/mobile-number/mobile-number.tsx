import React, { Fragment, Component } from 'react'
import { View, Text, ScrollView, TouchableOpacity, StatusBar, Dimensions, SafeAreaView, StyleSheet, Image, TouchableNativeFeedback, Permission } from 'react-native';
import { Buttons, Helpers, Backgrounds, Formsty } from '../../styles/styles';

export class MobileNumber extends Component<any, any> {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	componentDidMount = async () => {
		// console.log("component did mount mobile number screen");
	}

	render() {
		return (
			<View style={styles.Container}>
				<Text>Mobile Number Input Screen</Text>
			</View>
		);
	}

	navigateToTermsPage = async () => {
		this.props.navigation.navigate('Terms')
	};

}

const styles = StyleSheet.create({
	Container: {
		flex: 1,
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
	}
})



export default MobileNumber;

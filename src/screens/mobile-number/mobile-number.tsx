import React, { Fragment, Component } from 'react'
import {
	TouchableOpacity,
	View,
	Text,
	TextInput,
	ScrollView,
	Image,
	KeyboardAvoidingView,
	ActivityIndicator,
	Keyboard,
	TouchableNativeFeedback,
	StyleSheet,
	StatusBar
} from 'react-native';

import {
	Item,
	DatePicker,
	Toast,
	Root,
	Container,
	Content,
	Input,
	Header,
	Label,
	Form,
	Radio,
	ListItem
} from 'native-base';
import { Buttons, Helpers, Backgrounds, Formsty } from '../../styles/styles';
import { NavigationActions, NavigationEvents } from 'react-navigation';

export class MobileNumber extends Component<any, any> {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	componentDidMount = async () => {
		// console.log("component did mount mobile number screen");
	}

	renderPhoneNumberInput() {

		const { phoneNumber, btnDisabled } = this.state;

		return (
			<View style={[Helpers.pl_3, Helpers.pr_3, Helpers.pb_2, Helpers.pt_5, { flex: 1 }]}>
				<View>
					{/* <TouchableNativeFeedback onPress={() => this.props.navigation.goBack()}>
                        <Text style={[Helpers.mb_3]}>
                            <Iconionic name={'ios-arrow-back'} color={'#000000'} size={25} />
                        </Text>
                    </TouchableNativeFeedback> */}
					<Text style={[styles.Heading]}>Please enter your mobile number</Text>
					<View style={{ position: 'relative' }}>
						<TextInput
							numeric
							onChangeText={this.validateMobile}
							value={phoneNumber}
							keyboardType={'numeric'}
							placeholder='Phone number'
							placeholderTextColor='rgba(171, 180, 189, 0.35)'
							maxLength={10}
							selectionColor='#000'
							style={[styles.phoneInput, !btnDisabled ? Formsty.inputSuccess : '']}
						/>

						{/* <Text style={{ position: "absolute", right: 0, top: 20 }}>
                            {
                                !btnDisabled ?
                                    <Iconionic name={'ios-checkmark-circle'} color={'#0BB4D7'} size={25} /> : ''
                                // <Iconionic name={'ios-close-circle'} color={'#E41318'} size={25} />
                            }
                        </Text> */}
					</View>

					{/* <Text style={[Formsty.errorMessage]}>Please enter a valid phone number</Text> */}

					<Text style={[Formsty.label, { marginTop: 37 }]}>A 4 digit OTP will be sent via SMS to verify your mobile number</Text>


					<TouchableNativeFeedback >
						<View style={[]}>
							<View style={[Buttons.Primary]}>
								<Text style={[Buttons.btnText, Buttons.PrimaryText]}>Continue</Text>
							</View>
						</View>
					</TouchableNativeFeedback>

				</View>
			</View>
		)
	}

	render() {
		return (
			<Root>
				<StatusBar translucent={true} backgroundColor="transparent" barStyle="dark-content" />
				<NavigationEvents onDidFocus={() => this.componentDidMount()} onDidBlur={() => this.componentWillUnmount()} />
				<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null} style={{ flex: 1 }}>
					<ScrollView keyboardShouldPersistTaps='handled' contentContainerStyle={[Helpers.containerFluid]}>
						{this.renderPhoneNumberInput()}
					</ScrollView>
				</KeyboardAvoidingView>
			</Root>
		);
	}

	validateMobile = (value) => {
        let key = value.split('');
        let keyList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
        for (var i = key.length - 1; i >= 0; i--) {
            if (keyList.indexOf(key[i]) == -1) {
                return false;
            }
        }
        let btnDisabled, btnClass, btnTextClass;
        if (key.length < 10) {
            btnDisabled = true;
            btnClass = [Buttons.Primary, Helpers.mt_3, Buttons.BtnDisabled];
            btnTextClass = [Buttons.PrimaryText, Buttons.BtnDisabledText];
        } else {
            btnDisabled = false;
            btnClass = [Buttons.Primary, Helpers.mt_3];
            btnTextClass = [Buttons.PrimaryText]
        }
        this.setState({ phoneNumber: value, btnDisabled: btnDisabled, btnClass: btnClass, btnTextClass: btnTextClass })
    }


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
	},
	Heading: {
		fontFamily: 'Exo-SemiBold',
		fontStyle: 'normal',
		fontWeight: '600',
		fontSize: 27,
		lineHeight: 36,
		display: 'flex',
		alignItems: 'center',
		marginBottom: 38,
	},

	phoneInput: {
		backgroundColor: 'transparent',
		borderWidth: 1,
		borderTopColor: 'transparent',
		borderRightColor: 'transparent',
		borderLeftColor: 'transparent',
		// borderBottomColor: 'rgba(0, 0, 0, 0.1)',
		fontSize: 20,
		fontWeight: '400',
		color: '#000'
	},

	phoneInputError: {
		// borderBottomColor: '#E41318',
	},

	linearGradient: {
		flex: 1,
		paddingLeft: 15,
		paddingRight: 15,
		borderRadius: 5
	},

	buttonText: {
		fontSize: 22,
		textAlign: 'center',
		margin: 10,
		color: '#000',
		backgroundColor: 'transparent',
		fontWeight: '700'
	}
})



export default MobileNumber;

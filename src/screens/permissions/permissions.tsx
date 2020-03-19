import React, { Fragment, Component } from 'react'
import { StyleSheet, View, Text, StatusBar, Platform, Image, AsyncStorage, TouchableNativeFeedback, PixelRatio, KeyboardAvoidingView, ScrollView, TouchableOpacity } from 'react-native';
import { Buttons, Helpers, Backgrounds, Formsty } from '../../styles/styles';
import { cssFormFloatingLabel } from '../../styles/form-floating-lable';
import helpers from '../../utils/helpers';
import Popup from '../../components/popup/popup'
import { newApp } from '../../redux/app/app.actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NavigationActions, NavigationEvents } from 'react-navigation';
import AppIntroSlider from 'react-native-app-intro-slider';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { Root } from 'native-base';

let WIDTH = 300;
let HEIGHT = 300;

if (PixelRatio.get() >= 3) {
	WIDTH = 300 / 1.5;
	HEIGHT = 300 / 1.5;
}
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
			<Root>
				<StatusBar />
				<NavigationEvents onDidFocus={() => this.componentDidMount()} onDidBlur={() => this.componentWillUnmount()} />
				<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null} style={{ flex: 1 }}>
					<ScrollView keyboardShouldPersistTaps='handled' contentContainerStyle={[Helpers.containerFluid]}>
						<Popup showModal={showModal} requestPermissions={this.requestPermissions} showSettingOption={showSettingOption} hideModal={this.hideModal}/>
						<AppIntroSlider
							bottomButton
							renderItem={this.renderItem}
							slides={slides}
							onDone={this.requestPermissions}
							showSkipButton={false}
							onSkip={this.requestPermissions}
							showDoneButton={false}
							showNextButton={false}
							skipLabel="Get Started"
							doneLabel="Get Started"
							buttonTextStyle={styles.buttonsText}
							buttonStyle={styles.buttons}
							dotStyle={styles.dot}
							activeDotStyle={styles.dotActive}
						/>

						<TouchableNativeFeedback onPress={this.requestPermissions}>
							<View style={[Helpers.pl_3, Helpers.pr_3]}>
								<View style={[Buttons.Primary]}>
									<Text style={[Buttons.btnText, Buttons.PrimaryText]}>Get Started</Text>
								</View>
							</View>
						</TouchableNativeFeedback>
						<View style={{ marginTop: 25, marginBottom: 25, marginLeft: 10, marginRight: 10 }}>
							<View>
								<Text style={{ color: '#ABB4BD', textAlign: 'center', fontSize: 14 }}>By proceeding, you agree to Bueno Finance's</Text>
							</View>
							<View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
								<TouchableOpacity onPress={this.navigateToTermsPage} activeOpacity={0.7}>
									<View>
										<Text style={{ color: '#004D93', fontSize: 14, }}>Terms & Conditions</Text>
									</View>
								</TouchableOpacity>
								<Text style={{ color: '#ABB4BD', textAlign: 'center', fontSize: 14 }}> and </Text>
								<TouchableOpacity onPress={this.navigateToTermsPage} activeOpacity={0.7}>
									<Text style={{ color: '#004D93', fontSize: 14, }}>Privacy Policy</Text>
								</TouchableOpacity>
							</View>
						</View>
					</ScrollView>
				</KeyboardAvoidingView>
			</Root>
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
		let obj = helpers.getPermissionsStatus(result);
		// let permissions_given = true, never_ask_again = false;
		// for (let key in result) {
		// 	if (result[key] != 'granted') {
		// 		permissions_given = false;
		// 		if (result[key] == 'never_ask_again') {
		// 			never_ask_again = true;
		// 		}
		// 	}
		// }
		if (obj.permissions_given) {
			this.navigateToAuth()
		}
		else if (obj.never_ask_again) {
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

	hideModal = () => {
		this.setState({ showModal: false })
	}

	renderItem = ({ item, dimensions }) => (
		<View style={[styles.mainContent]}>
			<View>
				<Image style={{ height: WIDTH, height: HEIGHT, resizeMode: 'contain' }} source={item.image} />
			</View>
			<Text style={[styles.title]}>{item.title}</Text>
			<Text style={styles.text}>{item.text}</Text>
		</View>
	);
	

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
	},
	mainContent: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#ffffff',
		paddingLeft: 30,
		paddingRight: 30,
	},
	bgImg: {
		flex: 1, position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0
	},
	image: {
		width: '100%',
		height: '100%',
	},
	text: {
		backgroundColor: 'transparent',
		textAlign: 'center',
		fontSize: 14,
		color: '#ABB4BD',
		fontFamily: 'Poppins-Regular',
		marginBottom: 0,
		zIndex: 10
	},
	title: {
		fontSize: 24,
		backgroundColor: 'transparent',
		textAlign: 'center',
		marginBottom: 5,
		marginTop: 48,
		color: '#ABB4BD',
		fontFamily: 'Poppins-Regular',
		zIndex: 10
	},
	buttonhidden: {
		height: 45,
		marginTop: 30,
	},
	buttons: {
		backgroundColor: '#FF722F',
		borderRadius: 4,
		marginTop: 30,
		height: 50
	},
	buttonsText: {
		color: '#fff',
		fontFamily: 'Poppins-Medium',
		lineHeight: 45,
	},
	dot: {
		backgroundColor: 'rgba(0, 0, 0, 0.3);'
	},
	dotActive: {
		backgroundColor: '#000'
	}
})

const slides = [
	{
		key: 'slide_1',
		// title: 'Welcome to Gritzo',
		// text: 'Lorem Ipsum',
		image: require('../../../assets/img/intro/slide_1.png'),
		titleStyle: styles.title,
		textStyle: styles.text,
		imageStyle: styles.image,
		backgroundColor: '#ffffff'
	},
	{
		key: 'slide_2',
		// title: 'Step 2',
		// text: 'Lorem Ipsum',
		image: require('../../../assets/img/intro/slide_1.png'),
		titleStyle: styles.title,
		textStyle: styles.text,
		imageStyle: styles.image,
		backgroundColor: '#ffffff'
	},
	{
		key: 'slide_3',
		// title: 'Step 3',
		// text: 'Lorem Ipsum',
		image: require('../../../assets/img/intro/slide_1.png'),
		titleStyle: styles.title,
		textStyle: styles.text,
		imageStyle: styles.image,
		backgroundColor: '#ffffff'
	},
	// {
	// 	key: 'slide_4',
	// 	// title: 'Step 4',
	// 	// text: 'Lorem Ipsum',
	// 	image: require('../../../assets/img/intro/slide_1.png'),
	// 	titleStyle: styles.title,
	// 	textStyle: styles.text,
	// 	imageStyle: styles.image,
	// 	backgroundColor: '#ffffff'
	// },
	// {
	// 	key: 'slide_5',
	// 	// title: 'Final Step',
	// 	// text: 'Lorem Ipsum',
	// 	image: require('../../../assets/img/intro/slide_1.png'),
	// 	titleStyle: styles.title,
	// 	textStyle: styles.text,
	// 	imageStyle: styles.image,
	// 	backgroundColor: '#ffffff'
	// },
];

const mapStateToProps = (state) => {
	const { app } = state;
	return { app }
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ newApp }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Permissions);


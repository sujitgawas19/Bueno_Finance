import React, { Fragment, Component } from 'react'
import { View, Text, ScrollView, TouchableOpacity, StatusBar, Dimensions, SafeAreaView, StyleSheet, Image, TouchableNativeFeedback, Permission, BackHandler } from 'react-native';
import { Buttons, Helpers, Backgrounds, Formsty } from '../../styles/styles';

export class Terms extends Component<any, any> {
	scrollView : any
	backHandler: any;
	constructor(props) {
		super(props);
		this.state = {
		}
	}
	
	componentDidMount = async () => {
		this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
	}

	componentWillUnmount() {
        this.backHandler.remove();
    }

	render() {
		return (
			<>
				<View style={styles.containerFluid}>
                    <View style={[styles.contentWrapper]}>
                        <Text style={styles.title}>Terms & conditions</Text>
                    </View>
                    {/* <ScrollView ref={ref => this.scrollView = ref}> */}
                        <View style={styles.contentWrapper}>
                            <Text style={styles.list}>This Terms of Use Agreement was last updated:  1st February 2020. This Terms of Use Agreement is effective as a 1st February 2020.</Text>
                            <Text style={[styles.list, { marginBottom: 0 }]}>PLEASE READ THE TERMS OF USE THOROUGHLY AND CAREFULLY.</Text>
                            <Text style={styles.list}>The terms and conditions set forth below ( “Terms of Use close) and the Privacy Policy (as defined below) constitute a legally - binding agreement between Bueno Finance operating from its Chembur Corporate Office and you. These Terms of Use contain provisions that define your limits, legal rights and obligations with respect to your use of and participation in ((i) the Bueno Finance website and mobile application, including the classified advertisements, forums, various email functions, and Internet links, and all content and Bueno Finance services available through the domain and sub-domains of Bueno Finance located at www.Bueno Finance.co (collectively referred to herein as the “website”), and (ii). the online transactions between these users of the Website who are offering services (each, a “Service Expert”) and those users of the Website who are obtaining services (each, a “Service User”) through the Website ( such services, collectively, the “Services”). The Terms of Use described below incorporate the Privacy Policy and apply to all users of the Website, including users who are also contributors of video content, information, private and public messages, advertisements, and other materials or services on the Website. The Website is owned and operated by show the Shodas Sutras Private Limited. You acknowledge that the Website serves as a venue for the online distribution and publication of user-submitted information between Service Experts and Service Users, and, by using, visiting, registering for and/or otherwise participating in this Website, including the Services presented, promoted, and displayed on the Website, and by clicking on “I have read and agree to the Terms of Use" you hereby certify that: (1) you are either a Service Expert for a prospective Service User, (2) do you have the authority to enter into the Terms of Use, (3) you authorize the transfer of payment for Services requested through the use of the Website, and (4) you agree to be bound by all terms and conditions of these Terms of Use and any other documents incorporated by reference herein. If you do not so agree to the foregoing, you should not click to affirm your acceptance there off, in which case you are prohibited from accessing or using the Website. If you do not agree to any of the provisions set forth in the Terms of Use, kindly discontinue viewing or participating in this Website immediately.</Text>
                            <Text style={styles.list}>YOU SPECIFICALLY AGREE THAT BY USING THE WEBSITE, YOU ARE AT LEAST 18 YEARS OF AGE AND YOU ARE COMPETENT UNDER LAW TO ENTER INTO A LEGALLY BINDING AND ENFORCEABLE CONTRACT. All references to “you” or “your”, as applicable, mean the person that accesses, uses and/or participates in the Website in any manner. If you use a Website or open an Account (as defined below) on behalf of a business, you represent and warrant that you have the authority to bind that business and your acceptance of the Terms of Use will be deemed an acceptance by that business and “you” and “your” herein shall refer to that business. </Text>
                            <Text style={[styles.list]}><Text style={styles.numberedBullets}>1.</Text> Bueno Finance reserves the right, in its sole discretion, to change, modify, or otherwise amend the Terms of Use, and any other documents incorporated by reference herein for complying with legal and regulatory framework and for other legitimate business purposes, at any time, and Bueno Finance will post the amended Terms of Use at the domain of www.Bueno Finance.co/terms. It is your responsibility to review the Terms of Use for any changes and you are encouraged to check the Terms of Use frequently. Your use of the Website following any amendment of the Terms of User will signify your assent to and acceptance of any revised Terms of Use. If you do not agree to abide by these or any future Terms of Use, please do not use or access the Website </Text>
                            <Text style={[styles.list]}><Text style={styles.numberedBullets}>2.</Text> Bueno Finance has established a Privacy Policy that explains to users how their information is collected and used. The Privacy Policy is referenced above and hereby incorporated in the Terms of Use set forth herein. Your use of this Website is governed by the Privacy Policy. The Privacy Policy is located at Privacy Policy (/ privacy-policy)</Text>
                            <Text style={[styles.list]}><Text style={styles.numberedBullets}>3.</Text> Bueno Finance hereby grants you a non-exclusive, revocable license to use the website as set forth in the Terms of Use; provided, however, that (i) you will not copy, distribute, or make derivative works of the Website in any medium without PawPurrfect’s prior written consent; (ii)ou will not alter or modifying part of the Website other than as may be reasonably necessary to use the website for its intended purposes; and (iii). you will otherwise act in accordance with the terms and conditions of the Terms of Use and in accordance with all applicable laws.</Text>

                            <Text style={styles.list}>The use of the website is available only to individuals who are at least 18 years old and can form legally binding contracts under applicable law. You represent, acknowledge and agree that you are at least 18 years of age, and that : (a) all registration information that you submit is truthful and accurate. (b) you will maintain the accuracy of such information, and see your use of the Website and Services offered through this Website do not violate any applicable law regulation. Your Account (defined below) may be terminated without warning if we at our discretion, believe that you are under the age of 18 or that you are not complying up any applicable laws, rules or regulations. You need not register with Bueno Finance to simply visit and view the Website, but to access and participate in certain features of the Website, you will need to create a password-protected account ( “Account“). To create an account, you must submit your name and email address through the account registration page on the Website and create a password. You will also have the ability to provide additional optional information, which is not required to register for an account but may be helpful to Bueno Finance in providing you with a more customized experience when using the Website. You may also register for an Account using the existing Facebook account and – log-in credentials (your “Third-Party Site Password”). You are solely responsible for safeguarding your Bueno Finance password and, if applicable, your Third-Party Site Password (collectively, “Passwords”) at all times and shall keep your Passwords secure it all times. You shall be solely responsible for all activity that occurs on your Account and you shall notify Bueno Finance immediately of any breach of security or any unauthorized use of your Account. Similarly, you shall never use another’s Account without PawPurrfect’s permission. You agree that you will not misrepresent yourself or represent yourself as another user of the Website and/or the Services offered through the Website. You hereby expressly acknowledge and agree that you yourself and not Bueno Finance will be liable for your losses, damages etc. (whether direct or indirect) caused by any unauthorized use of your Account. Notwithstanding the foregoing, you may be liable for the losses of Bueno Finance or others due to such unauthorized use. An Account holder is sometimes referred to herein as a ( “Registered User”. You acknowledge and agree that you shall comply with the following policies (the “Account Policies”); you will not copy or distribute any part of the Website in any medium without PawPurrfect’s written prior written authorization. You will not alter or modify any part of the Website other than as may be reasonably necessary to use a Website for its intended purpose. You will provide true, accurate, current and complete information when creating your Account and you shall maintain and update such information during the term of this Agreement so that it will remain accurate, true, current and complete. You shall not use any automated system, including but not limited to, “robots”, “spiders”, “offline readers”, “scraper” etc, to access the Website for any purpose without PawPurrfect’s prior written approval. You shall not in any manual or automated manner collect Service Experts or Services Users information, including but not limited to, names, addresses, phone numbers, or email addresses, copying copyrighted text, or otherwise misuse or misappropriate Website information or content, including but not limited to, use on a “mirrored”, competitive or third party site. You shall not in any way that transmits more request messages to Bueno Finance servers, any server of a Bueno Finance subsidiary or affiliate, in a given period of time than a human can reasonably produce in the same period by using a conventional on-line web browser; provided, however, that the operators of public search engines may use spiders or robots to copy materials from the site for the sole purpose of creating publicly available searchable indices of the materials, but not caches or archives of such material. Bueno Finance reserves the right to revoke these exceptions either generally or in specific cases.</Text>

                        </View>
                    {/* </ScrollView> */}
                </View>
			</>
		)
	}

	handleBackPress = () => {
        this.props.navigation.navigate("Permissions");
        return true;
    }

}

const styles = StyleSheet.create({
    containerFluid: {
        flex: 1,
        // backgroundColor: '#ffffff',
    },
    container: {
        flex: 1,
        // backgroundColor: '#ffffff',
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 50
    },
    title: {
        // color: '#ABB4BD',
        fontSize: 30,
        fontFamily: 'Poppins-SemiBold',
    },
    list: {
        // color: '#ABB4BD',
        fontSize: 14,
        marginBottom: 15,
        paddingLeft: 0,
        fontFamily: 'Poppins-Regular',
    },
    numberedBullets: {
        // color: '#ABB4BD',
        position: 'absolute',
        fontSize: 14,
        left: 20,
        fontFamily: 'Poppins-Regular',
    },
    termsText: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        // color: '#ABB4BD',
        paddingLeft: 10,
    },
    listItem: {
        borderBottomWidth: 0,
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 0,
        paddingBottom: 0,
        paddingTop: 15,
        width: '100%',
        textAlign: 'left',
    },
    contentWrapper: {
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 20,
    }
});



export default Terms;

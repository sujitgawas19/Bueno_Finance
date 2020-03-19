import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MobileNumber from '../screens/mobile-number/mobile-number';
import Permissions from '../screens/permissions/permissions';
import Terms from '../screens/terms/terms';
import VerifyOtp from '../screens/verify-otp/verify-otp';
import ChecksScreen from '../middleware/check-screen/check-screen';
import IntroScreen from '../screens/intro-screen/intro-screen';

const AuthStack = createStackNavigator(
    {
        MobileNumber: {
            screen: MobileNumber,
            navigationOptions: {
                headerTitle: 'Test',
                headerShown: false
            },
        },
        VerifyOtp: {
            screen: VerifyOtp,
            navigationOptions: {
                headerTitle: '',
                headerShown: false
            },
        },
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#ffffff',
            },
            headerTitleStyle: {
                color: '#000',
                fontSize: 18,
                fontWeight: 'bold',
                textAlign: "center",
                flex: 1,
                paddingRight: 30
            },
            headerTintColor: '#000'
        }
    }
);

const Routes = createAppContainer(createSwitchNavigator(
    {
        Auth: MobileNumber,
        Checks: ChecksScreen,
        Terms: Terms,
        Permissions: Permissions,
        IntroScreen: IntroScreen
    },
    {
        initialRouteName: 'Checks'
    }
));

export default Routes;
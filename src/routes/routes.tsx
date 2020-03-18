import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MobileNumber from '../screens/mobile-number/mobile-number';
import Permissions from '../screens/permissions/permissions';
import Terms from '../screens/terms/terms';
import VerifyOtp from '../screens/verify-otp/verify-otp';
import ChecksScreen from '../middleware/check-screen/check-screen';

const AuthStack = createStackNavigator(
    {
        MobileNumber: {
            screen: MobileNumber,
            navigationOptions: {
                headerTitle: '',
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
        Auth: AuthStack,
        Checks: ChecksScreen,
        Terms: Terms,
        Permissions: Permissions
    },
    {
        initialRouteName: 'Checks'
    }
));

export default Routes;
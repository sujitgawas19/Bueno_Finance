import { PermissionsAndroid } from 'react-native';
import configs from './config.js'

const helpers = {

	requestPermissions: async (permssions_array) => {
		try {
			const result = await PermissionsAndroid.requestMultiple(permssions_array);
			return result;

		} catch (err) {
			console.warn(err);
			return err;
		}
	},

	checkPermissions: async (permssions_array) => {
		let result = true, permissions_allowed = true;
		for (let item of permssions_array) {
			result = await PermissionsAndroid.check(item)
			if (!result) {
				permissions_allowed = false
			}
		}
		return permissions_allowed;
	},

	getPermissionsStatus: (result) => {
		let permissions_given = true, never_ask_again = false;
		for (let key in result) {
			if (result[key] != 'granted') {
				permissions_given = false;
				if (result[key] == 'never_ask_again') {
					never_ask_again = true;
				}
			}
		}

		return { permissions_given, never_ask_again }
	}

}

export default helpers;
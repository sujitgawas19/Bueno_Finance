import { PermissionsAndroid } from 'react-native';
let config = require('../../config.json')
const helpers = {

	requestPermissions: async () => {
		try {
			let permissions_array = [
				PermissionsAndroid.PERMISSIONS.CAMERA,
				PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
				PermissionsAndroid.PERMISSIONS.READ_CALL_LOG,
				PermissionsAndroid.PERMISSIONS.READ_SMS,
				PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
			]
			// let permissions_array = JSON.parse(config.permissions);
			// let permissions_array = [];
			// config.permissions.forEach((permission) => {
			// 	// permissions_array.push(permission)
			// })
			const result = await PermissionsAndroid.requestMultiple(
				permissions_array
			);
			// console.log("check permssions ==>", result);
			return result;

		} catch (err) {
			console.warn(err);
			return err;
		}
	},

}

export default helpers;
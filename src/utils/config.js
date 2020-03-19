import { PermissionsAndroid } from 'react-native';


const configs = {
	permissions_array: [
		PermissionsAndroid.PERMISSIONS.READ_CALL_LOG,
		PermissionsAndroid.PERMISSIONS.GET_ACCOUNTS,
		PermissionsAndroid.PERMISSIONS.READ_SMS,
		PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
		PermissionsAndroid.PERMISSIONS.READ_CALENDAR,
		PermissionsAndroid.PERMISSIONS.CAMERA,
		PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
		PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
	],

	permissions_on_start: [
		PermissionsAndroid.PERMISSIONS.READ_CALL_LOG,
		PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
		PermissionsAndroid.PERMISSIONS.READ_SMS,
		PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
	],

	permissions_on_document_upload : [
		PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
		PermissionsAndroid.PERMISSIONS.CAMERA
	]
}


export default configs;
//All common actions

import * as types from './actions';
// import APIUtil from './../config/APIUtil';
// import UrlConstants from './../config/UrlConstants';

/**
 *
 * @desc Login action
 * @param data - login request body data
 */
const email = 'sahuchittaranjan015@gmail.com';
const password = '123456';
export function actionLogin(data) {
	// console.log('datadaadadadadadd', data);
	// let url = UrlConstants.LoginUrl;
	return function (dispatch) {
		if ((data.email == email && data.password == password)) {
			dispatch({
				type: types.LOGIN,
				isAuthenticated: true,
			});
		}else{
			dispatch({
				type: types.LOGIN,
				isAuthenticated: false,
			});
		}
	};
}

import axios from 'axios';
import {AUTH_HEADER, API_URL} from '../constants/ConfigConstants';

import {userConstants} from '../constants/UserConstants';
// import validator from 'validator';

export const userActions = {
	login,
	logout,
	register,
}

// Use case:
// Status : 
async function login(email, password){
	const data = {
		email,
		password
	}
	
	// try{
	// 	const res = await axios.post(API_URL + '/api/auth', data );
	// 	console.log(res.data);
	// }catch(err){
	// 	failure(err)
	// }
	const res = await axios.post(API_URL + '/api/auth', data )
		.catch(err => {
			console.log(err);
			return failure(err);
		});
	
	const user = res.data;
	if (user && user.token){
		localStorage.setItem('user', JSON.stringify(user));
		return success(user);
	}
	// success(user)
	
	// if(res)console.log('200');
	// else console.log('401');
	// const user = res.data.token;
	// if(user){
	// 	console.log('Success :)')
	// 	// localStorage.setItem('user', res.data.token);
	// }else{
	// 	console.log('Failed')
	// }
	// return dispactch => {}
	
	// return {type:LOGIN, state:}
	// const user = 

	function request(user){return {type:userConstants.LOGIN_REQUEST,user}}
	function success(user){return {type:userConstants.LOGIN_SUCCESS,user}}
	function failure(error){return {type:userConstants.LOGIN_FAILURE,error}}
}

// Use case:
// Status: 
async function logout(){
	localStorage.removeItem('user');
	return {type: userConstants.LOGOUT};
	// return {type:}
}

// Use case:
// Status: 
async function register(first_name, last_name, address, phoneNumber,
	email, accountNumber, userType, password, confirmedPassword){
		if(!email){
			// return
		}
	// if(!validator.isEmail(email)) return false;

	
	const data = {
		// first_name,
		// password
	}

	const headers = {

	}
	const res = await axios.post(API_URL + '/register', { data,headers });
	console.log(res);

	// function success(user){}
}

// Use case:
// Status: 
async function deleteAccount(){

}

// Use case:
// Status: 
async function editProfile(){
	
}

// Use case:
// Status: 
async function guestSearch(keyword){
	const headers = {
		// : ''
	}
	const res = await axios.get(API_URL + '/api/services/' + keyword,{ headers });
	// const service =  res.data.services; // Edit pls
	return {
		type:'USER_SEARCH',
		// service
	}
}
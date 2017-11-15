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
	// function reque
	// return await axios.post('/...');
	console.log(API_URL);
	console.log(email + " "+ password);

	const data = {
		email,
		password
	}

	return dispatch =>{
		
	}
	
	const res = await axios.post(API_URL + '/api/auth', data );
	console.log(res.data.token);
	// localStorage.setItem('user', res.data.token);
	
	// return {type:LOGIN, state:}
	// const user = 

	// function success(user){return {type:userConstants.LOGIN_SUCCESS,user}}
	// function failure(error){return {type:userConstants.LOGIN_FAILURE,error}}
}

// Use case:
// Status: 
async function logout(){
	// const headers = {

	// }
	// const res = await axios.post(API_URL + '/logout', { headers });
	localStorage.removeItem('user');
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
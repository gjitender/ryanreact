import axios from 'axios'
import {AuthModel, UserModel} from './_models'

// const API_URL = process.env.REACT_APP_API_URL

const API_URL = "http://54.158.30.145:4000"

export const GET_USER_BY_ACCESSTOKEN_URL = `${API_URL}/apis/admin/aboutme/`
export const LOGIN_URL = `${API_URL}/auth/login/`
export const REGISTER_URL = `${API_URL}/register`
export const REQUEST_PASSWORD_URL = `${API_URL}/forgot_password`
export const USER_LIST = `${API_URL}/apis/users/`

// Server should return AuthModel
export function login(email: string, password: string) {
  return axios.post<AuthModel>(LOGIN_URL, {
    email,
    password,
  })
}

// Server should return AuthModel
export function register(
  email: string,
  firstname: string,
  lastname: string,
  password: string,
  password_confirmation: string
) {
  return axios.post(REGISTER_URL, {
    email,
    first_name: firstname,
    last_name: lastname,
    password,
    password_confirmation,
  })
}

// Server should return object => { result: boolean } (Is Email in DB)
export function requestPassword(email: string) {
  return axios.post<{result: boolean}>(REQUEST_PASSWORD_URL, {
    email,
  })
}

export function getUserByToken(token: string) {

  var config = {
    method: 'post',
    headers: { 
      'Authorization': 'Token eeacd04b658721afe81d657ea445de4bc04fef82', 
      'Cookie': 'csrftoken=IlJ7P2TnNZjRlMvQzXNa2AytYiiKdZ65; sessionid=we76fl01bmcwucxre5ldjdm5e259fpke'
    }
  };
  
return axios.post<UserModel>('http://54.158.30.145:4000/apis/admin/aboutme/',null, {
  headers: { 
    'Authorization': 'Token ' + token
  }
})



}

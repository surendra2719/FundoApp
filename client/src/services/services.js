/**
 * importing the requirements 
 */
import axios from 'axios';
import "react-toastify/dist/ReactToastify.css";
function userRegister(firstName, lastName, email, password) {
/**
 * fetching registration data and sending request to backend
 */
    return axios.post('/registration',{
        
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        })
    }

/**
 * fetching login data and sending request to backend
 */
function userLogin(data) {
    return axios.post('/login',
       data)
  
}
/**
 * fetching data and sending request to backend
 */
function forgot(email) {
  return  axios.post('/verifyUser',
        {
            email: email
        })

}
/**
 * fetching data and sending request to backend
 */
function reset(password, token) {

    return axios.post(`/resetpassword/${token}`, { 'password': password }, {
        headers: {
            'token': token
        }
    })
}
function uploadProfilePic(data) {
    var headers = {
        "access-token": localStorage.getItem("token")
    }
    return axios.put('/setProfilePic',
        data, {
            headers: headers
        }
    )
}
function logout(data) {
    var headers = {
        "access-token": localStorage.getItem("token")
    }
    return axios.post('/logout',
        data, {
            headers: headers
        }
    )
}





/**
 * exporting the all data 
 */
export {
    logout,
    userRegister,
    userLogin,
    forgot,
    reset,
    uploadProfilePic
}

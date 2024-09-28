import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL;

export const loginPost = async(username, password) => {
    try{
        const response = await axios.post(`${BASE_URL}/api/auth/login`, {
            username: username,
            password: password,
        });
        return response.data;
    } catch(error){
        console.log(error);
    }
}

export const joinPost = async(username, password, password2) => {
    try{
        const response = await axios.post(`${BASE_URL}/api/auth/signup`,
            {
                username: username,
                password: password,
                password2: password2
            }
        );
        return response.data;
    } catch(error){
        console.log(error);
    }
}
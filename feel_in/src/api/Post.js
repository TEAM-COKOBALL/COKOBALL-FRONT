import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL;

export const solutionPost = async(id, content) => {
    try{
        const response = axios.post(`${BASE_URL}/api/solutions`,
            {
                id: id,
                emotionId: id,
                content: content
            }
        );
        return response.data;
    } catch(error){
        console.log(error);
    }
}
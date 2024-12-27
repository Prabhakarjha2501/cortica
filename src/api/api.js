import axios from 'axios';


const API_URL = 'http://localhost:5005/api';


const axiosInstance = axios.create({
    baseURL: API_URL,
    //timeout: 100000,
    headers:{
        'content-type': 'application/json',
    }
})

export const addcolor = async (colorArray) => {
    console.log(`${colorArray} this is color`);
    try {
        const response = await axiosInstance.post('/color',{color:colorArray});
        console.log(`${response} this is response`)
        return response.data; 
    } catch (error) {
        console.log(`${error.message} this is error--`);
    }
    // const response = await axiosInstance.post('/color',color);
    // console.log(`${response} this is response`)
    // return response.data;
}

export const getcolors = async () => {
    const response = await axiosInstance.get('/getAllcolor');

    return response.data;
}

export const deletecolor = async (id) => {
    const response = await axiosInstance.delete(`/deletecolor/${id}`);
}

export default  axiosInstance;
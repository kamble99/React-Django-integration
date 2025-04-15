import axios from 'axios'

export function getAllFoods(){
    return axios.get('http://127.0.0.1:8000/foodapp/foods/')
    .then((response)=>response.data)

}
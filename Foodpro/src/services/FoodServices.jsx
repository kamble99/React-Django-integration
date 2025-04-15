import axios from 'axios'

export function getAllFoods(){
    return axios.get()
    .then((response)=>response.data)

}
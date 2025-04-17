import axios from 'axios'

export function getAllFoods() {
    return axios.get('http://127.0.0.1:8000/foodapp/foods/', {
    })
        .then((response) => response.data)

}
export function Addfoods(food) {
    return axios.post('http://127.0.0.1:8000/foodapp/foods/', {
        foodId: null,
        foodName: food.foodName.value,
        foodtype: food.foodtype.value,
        foodCategory: food.foodCategory.value,
        price: food.price.value
    })
        .then((res) => {return res.data})

}




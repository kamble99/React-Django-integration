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
        .then((res) => { return res.data })

}
export function updatefood(foodId, food) {
    return axios.put('http://127.0.0.1:8000/foodapp/foods/' + foodId + '/',
        {
            foodId: food.foodId.value,
            foodName: food.foodName.value,
            foodtype: food.foodtype.value,
            foodCategory: food.foodCategory.value,
            price: food.price.value

        }

    )
}
export function deletefood(id){
    return axios.delete('http://127.0.0.1:8000/foodapp/foods/'+id+'/').then((res)=>res.data)
}




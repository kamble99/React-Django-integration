import React, { useEffect, useState } from 'react'
import { getAllFoods, Addfoods, updatefood, deletefood } from '../services/FoodServices'
import Addfood from './Addfood';
import Editfood from './Editfood';


const FoodList = () => {
    const [foods, setFoods] = useState([]);
    const [showfood, setshowfood] = useState(false)
    const [showeditfood, setshoweditfood] = useState(false)
    const [editfood, seteditfood] = useState()
    useEffect(() => {
        getAllFoods().then((res) => setFoods(res))
    }, [])
    function updatedfood(foodId, e) {
        updatefood(foodId, e.target).then((res) => {
            setshowfood(res)
        })
    }
    function addfoodhandler(e) {
        e.preventDefault()
        Addfoods(e.target).then((res) => setshowfood(res)
        )
    }
    function editfoodhandler(food) {

        seteditfood(food)
        setshoweditfood(true)

    }
    function deletedfood(id){
        deletefood(id)
        .then((res)=>{
            setFoods(foods.filter(f=>f.foodId!==id))
        })
    }

    return (
        <>
            <table border={1}>
                <caption>Food List</caption>
                <tr>
                    <th>ID:</th>
                    <th>Food Name: </th>
                    <th>Food Type: </th>
                    <th>Food Category:</th>
                    <th>Food Price: </th>
                    <th colSpan={2}>Action:</th>
                </tr>
                {
                    foods.map((food, index) =>

                        <tr key={index}>
                            <td>{food.foodId}</td>
                            <td>{food.foodName}</td>
                            <td>{food.foodtype}</td>
                            <td>{food.foodCategory}</td>
                            <td>{food.price}</td>
                            <td><button onClick={() => editfoodhandler(food)}>Edit</button></td>
                            <td><button onClick={()=>deletedfood(food.foodId)}>Delete</button></td>

                        </tr>
                    )}


            </table>
            <button onClick={() => setshowfood(true)}>Add Food</button>
            {showfood && <Addfood addfoodhandler={addfoodhandler} />}
            {showeditfood && <Editfood editfood={editfood} updatedfood={updatedfood} />}

        </>
    )
}

export default FoodList

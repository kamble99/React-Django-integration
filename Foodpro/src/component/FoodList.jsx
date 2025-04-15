import React, { useEffect ,useState} from 'react'
import { getAllFoods } from '../services/FoodServices'

const FoodList = () => {
    const [foods, setFoods] = React.useState([]);
    useEffect(()=>{
        getAllFoods().then((res)=>setFoods(res))
    },[])

    


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
            </tr>
            <tr>
                <td>1</td>
                <td>Apple</td>
                <td>Fruit</td>
                <td>Itialin</td>
                <td>10.00</td>
            </tr>
                
             {
                foods.map((foods)=>
             
                <tr key={index}>
                    <td>{foods.id}</td>
                    <td>{foods.foodName}</td>
                    <td>{foods.foodtype}</td>
                    <td>{foods.foodCategory}</td>
                    <td>{foods.price}</td>

                </tr>
             )}
            
            
        </table>
        </>
  )
}

export default FoodList

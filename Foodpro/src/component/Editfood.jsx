import React from 'react'
import { updatefood } from '../services/FoodServices'

const Editfood = ({ editfood, updatedfood }) => {
    return (
        <>
            <form onSubmit={(e) => { updatedfood(editfood.foodId, e) }}>
                <table border={1}>
                    <tr>
                        <td>Existing id: </td>
                        <td><input type="text" name="foodId" value={editfood.foodId} /></td>
                    </tr>
                    <tr>
                        <td>Name: </td>
                        <td><input type="text" name="foodName" defaultValue={editfood.foodName} /></td>
                    </tr>
                    <tr>
                        <td>Type: </td>
                        <td><input type="text" name="foodtype" defaultValue={editfood.foodtype} /></td>
                    </tr>
                    <tr>
                        <td>Category: </td>
                        <td><input type="text" name="foodCategory" defaultValue={editfood.foodCategory} /></td>
                    </tr>
                    <tr>
                        <td>Price: </td>
                        <td><input type="text" name="price" defaultValue={editfood.price} /></td>
                    </tr>

                </table>
                <button type='submit'>Edit</button>
            </form>
        </>
    )
}

export default Editfood

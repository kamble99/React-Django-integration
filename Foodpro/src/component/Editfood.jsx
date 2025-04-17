import React from 'react'

const Editfood = ({editfood}) => {
  return (
    <>
    <form>
                <table border={1}>
                <tr>
                        <td>Existing id: </td>
                        <td><input type="text" name="foodId"  value={editfood.foodId}/></td>
                    </tr>
                    <tr>
                        <td>Name: </td>
                        <td><input type="text" name="foodName"  value={editfood.foodName}/></td>
                    </tr>
                    <tr>
                        <td>Type: </td>
                        <td><input type="text" name="foodtype" value={editfood.foodtype}/></td>
                    </tr>
                    <tr>
                        <td>Category: </td>
                        <td><input type="text" name="foodCategory" value={editfood.foodCategory} /></td>
                    </tr>
                    <tr>
                        <td>Price: </td>
                        <td><input type="text" name="price" value={editfood.price}/></td>
                    </tr>

                </table>
                <input type="submit" />
            </form>
    </>
  )
}

export default Editfood

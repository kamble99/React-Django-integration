import React from 'react'

const FoodList = () => {
  return (
        <>
        <table>
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
        </table>
        </>
  )
}

export default FoodList

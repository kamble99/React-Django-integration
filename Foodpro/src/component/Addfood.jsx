import React from 'react'

const Addfood = ({addfoodhandler}) => {
    return (
        <>
            <form onSubmit={addfoodhandler}>
                <table border={1}>
                    <tr>
                        <td>Name: </td>
                        <td><input type="text" name="foodName" /></td>
                    </tr>
                    <tr>
                        <td>Type: </td>
                        <td><input type="text" name="foodtype" /></td>
                    </tr>
                    <tr>
                        <td>Category: </td>
                        <td><input type="text" name="foodCategory" /></td>
                    </tr>
                    <tr>
                        <td>Price: </td>
                        <td><input type="text" name="price" /></td>
                    </tr>

                </table>
                <input type="submit" />
            </form>
        </>
    )
}

export default Addfood

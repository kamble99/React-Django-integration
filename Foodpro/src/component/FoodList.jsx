    import React, { useEffect ,useState} from 'react'
    import { getAllFoods,Addfoods } from '../services/FoodServices'
    import Addfood from './Addfood';
    import Editfood from './Editfood';



    const FoodList = () => {
        const [foods, setFoods] = React.useState([]);
        const [showfood,setshowfood]=useState(false)
        const [showeditfood,setshoweditfood]=useState(false)
        const [editfood,seteditfood]=useState()
        useEffect(()=>{
            getAllFoods().then((res)=>setFoods(res))
        },[])

        function addfoodhandler(e){
            e.preventDefault()
            Addfoods(e.target).then((res)=>setshowfood(res)
        )
        }
        function editfoodhandler(food){
        
            seteditfood(food)
            setshoweditfood(true)
        
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
                    foods.map((food,index)=>
                
                    <tr key={food.id}>
                        
                        <td>{food.foodid}</td>
                        <td>{food.foodName}</td>
                        <td>{food.foodtype}</td>
                        <td>{food.foodCategory}</td>
                        <td>{food.price}</td>
                        <td><button onClick={()=>editfoodhandler(food)}>Edit</button></td>

                    </tr>
                )}
                
                
            </table>
            <button onClick={()=>setshowfood(true)}>Add Food</button>
            {showfood && <Addfood addfoodhandler={addfoodhandler}/>}
            {showeditfood && <Editfood editfood={editfood}/>}

            </>
    )
    }

    export default FoodList

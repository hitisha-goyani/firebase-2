import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addData } from '../store/StudentThunk';

const AddStudents = () => {

    const [name,setName] = useState("")

    const dispatch = useDispatch();

    const handleSubmit = (e) =>{

        e.preventDefault();
        dispatch(addData({name}))
        setName("")
        alert("student added...")

    }
    console.log("name",name)

  return (
    <>


        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='enter your name' name="name"  value={name} onChange={(e)=>setName(e.target.value)}/>
            <button>submit</button>
        </form>
            
    </>
  )
}

export default AddStudents

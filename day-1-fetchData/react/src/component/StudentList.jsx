import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteData, fetchData, updateData } from '../store/StudentThunk';

const StudentList = () => {


    const {list , status} = useSelector((state) =>state.student)

    const [editId, setEditId] = useState(null);

  const [newData, setNewData] = useState(null);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchData());
  },[dispatch])


  if(status === "loading") return <p>loading</p>
  if(!list.length) return <p>no data found</p>

  const handleDelete = (id)=>{

    dispatch(deleteData(id));
    alert("student deleted")


  }

  const handleSave =async (id) =>{

 if (!newData?.trim()) 
    
    return alert("Name cannot be empty");


  await dispatch(updateData({ id, newData: { name: newData } }));
    alert("Student data updated");
    setEditId(null);
    setNewData("");
  }

  return (
    <div>
          <table>
      <thead>
        <tr>
          <th>student name</th>
          <th>edit</th>
          <th>delete</th>
        </tr>
      </thead>
      <tbody>
        {list.map((student) => (
          <tr key={student.id}>
            {/* <td>{student.name}</td> */}

            <td>
              {editId === student.id ? (
                <input
                  placeholder="enter new data"
                  value={newData}
                  onChange={(e) => setNewData(e.target.value)}
                />
              ) : (
                student.name
              )}
            </td>

            <td>
              {editId === student.id ? (
                <button onClick={() => handleSave(student.id)}>save</button>
              ) : (
                <button
                  onClick={() => {
                    setEditId(student.id), setNewData(student.name);
                  }}
                >
                  edit
                </button>
              )}
            </td>
            <td>
              <button onClick={() => handleDelete(student.id)}>delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
      
    </div>
  )
}

export default StudentList

import { createSlice } from "@reduxjs/toolkit";
import { addData, deleteData, fetchData, updateData } from "./StudentThunk";


const studentSlice = createSlice({

    name:"student",
    initialState:{list:[],status:"idle"},
    reducers:{},
    extraReducers:(builder) =>{
        builder.addCase(fetchData.pending,(state)=>{
            state.status = "loading";
        })

        .addCase(fetchData.fulfilled, (state, action) => {
                (state.status = "success"), (state.list = action.payload);
      })
        .addCase(addData.fulfilled,(state,action)=>{

            state.list.push(action.payload)
        })

        .addCase(deleteData.fulfilled,(state,action)=>{
            state.list= state.list.filter((e) => e.id !== action.payload)
        })

        .addCase(updateData.fulfilled,(state,action)=>{
            const {id,newData} = action.payload  
            const index = state.list.findIndex((e)=>e.id === action.payload) 
            if(index !== -1) {

                state.list[index] ={id,...newData};

            }  
        })                                                   
        }   
    })

export default  studentSlice.reducer


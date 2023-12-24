import { createSlice } from "@reduxjs/toolkit";

const editSlice = createSlice({
    name: "edit",
    initialState: { edit: false, todo: {} },
    reducers: {
        editTodo: (state, action)=>{
            state.edit = !state.edit

            if(action.payload){
                state.todo = action.payload
            }
        }
    }
});

export const { editTodo } = editSlice.actions;
export default editSlice.reducer;
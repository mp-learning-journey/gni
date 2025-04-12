import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    todos: ["cook", "bake"],
};

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        add: (state, action) => {
            state.todos.push(action.payload)
        },
        deleteTodo: (state) => {
            state.todos.pop()
        }
    }
})

export const { add,deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
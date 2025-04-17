import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    posts: [],
    loading: false,
    error: null
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5');
    return await response.data;
})

export const fetchUsers = createAsyncThunk("posts/fetchUsers", async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users?_limit=5');
    return await response.json();
})

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        add: (state, action) => {
            state.posts.push(action.payload)
        },
        deletePost: (state) => {
            state.posts.pop()
        }
    },
    extraReducers: (builder) => {
        builder.
        addCase(fetchPosts.pending, (state) => {
            state.loading = true
            state.error = null
        })
        .addCase(fetchPosts.fulfilled, (state, action) => {
            state.posts = action.payload
            state.loading = false
        })
            .addCase(fetchPosts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload
        })
            .addCase(fetchUsers.pending, (state) => {
        })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.posts = action.payload
                state.loading = false
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })
    }
})

export const { add,deletePost } = postSlice.actions;
export default postSlice.reducer;
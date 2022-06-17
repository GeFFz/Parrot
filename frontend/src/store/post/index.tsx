import { createSlice } from "@reduxjs/toolkit"
import { Post, PostState } from "../../types"


const initialState: PostState = {
    post: [] as Post[]
}

const postsSlice = createSlice({
    name: "@post",
    initialState,
    reducers:{
        //SignIn
        getPost(state, action){
            Object.assign(state, {
                post: action.payload.post
            })
        },
        addNewPost(state, action) {
            Object.assign(state, {
                post: [... state.post, action.payload.post]
            })
        }
    }
})

export const { getPost, addNewPost } = postsSlice.actions

export default postsSlice.reducer;
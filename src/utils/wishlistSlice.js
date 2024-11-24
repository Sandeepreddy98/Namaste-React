import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name : 'wishlist',
    initialState : {
        items : []
    },
    reducers : {
        addItem : (state,action) => {
            state.items.push(action.payload)
        },
        removeItem : (state,action) => {
            const index = state.items.findIndex(item => item.id === action.payload.id)
            if (index !== -1) {
                state.items.splice(index, 1); // Use splice to remove the item in place
            }
        },
        clearWishlist : (state) => {
            state.items.length = 0
        }
    }
})

export const {addItem,removeItem,clearWishlist} = wishlistSlice.actions

export default wishlistSlice.reducer
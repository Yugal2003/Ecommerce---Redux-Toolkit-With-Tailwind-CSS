import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts : []
}
const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers : {
        add : (state,action) => {
            const itemIndex = state.carts.findIndex((item) => item.id === action.payload.id);
            console.log(itemIndex);

            if(itemIndex >= 0){
                state.carts[itemIndex].qnty += 1;
            }
            else{
                const temp = {...action.payload, qnty : 1}
                state.carts = [...state.carts, temp]
            }
        },
        remove : (state,action) => {
            const data = state.carts.filter((item) => item.id !== action.payload);
            state.carts = data;
        },
        removeSingleItem : (state,action) => {
            const itemIndex_dec = state.carts.findIndex((item) => item.id === action.payload.id)

            if(state.carts[itemIndex_dec].qnty >= 1){
                state.carts[itemIndex_dec].qnty -= 1
            }
        },
        allItemEmpty : (state,action) =>{
            state.carts = []
        }
    }
})

export const {add,remove,removeSingleItem,allItemEmpty} = cartSlice.actions;
export default cartSlice.reducer;
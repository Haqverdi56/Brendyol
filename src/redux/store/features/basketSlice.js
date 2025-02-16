import { createSlice, current } from "@reduxjs/toolkit";

const initialState = []

export const productSlice = createSlice({
    name: 'products',
    initialState, 
    reducers: {
        add: (state, {payload}) => {
            const item = state.find((q) => q._id === payload._id);

            if (item) {
                item.count++;
              } else {
                state.push({...payload, count: 1});
            }
        },
        deleteById: (state, {payload}) => {
            return state.filter(q => q._id != payload)
        },
        increaseCount: (state, { payload }) => {
            const item = state.find((q) => q._id === payload);
            
            if(item) {
                item.count++
            }
        },
        decreaseCount: (state, {payload}) => {
            const item = state.find((q) => q._id === payload);
            if (item.count > 1) {
                item.count--;
            }
        }
    }
})


export const { add, deleteById, increaseCount, decreaseCount } = productSlice.actions

export default productSlice.reducer;
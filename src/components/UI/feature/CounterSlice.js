import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    counterValue: 1
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increament: (state) => {
            state.counterValue++;
        },
        decreament: (state) => {
            if (state.counterValue > 0) {
                state.counterValue--;
            }
        }
    }
});
export default counterSlice.reducer;
export const { increament, decreament } = counterSlice.actions;
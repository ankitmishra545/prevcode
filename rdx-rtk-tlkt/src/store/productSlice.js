import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});

const productSlice = createSlice({
    name: "product",
    initialState: {
        data: [],
        status: STATUSES.IDLE,
    },
    // reducers are pure,
    reducers: {
        // setProducts(state, action){
        //     state.data = action.payload;
        // },
        // setStatus(state, action){
        //     state.status = action.payload;
        // }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchProducts.pending, (state, action) => {
            state.status = STATUSES.LOADING;
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = STATUSES.IDLE;
        })
        .addCase(fetchProducts.rejected, (state, action) => {
            state.status = STATUSES.ERROR;
        })
    }
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

export const fetchProducts = createAsyncThunk('products/fetch', async() => {
    const data = await(
        await fetch("https://fakestoreapi.com/products")
    ).json();
    return data;

})

// export const fetchProducts = () => {
//     return async(dispatch,getState) => {
//         dispatch(setStatus(STATUSES.LOADING));
//         try{
//             const data = await(
//                 await fetch("https://fakestoreapi.com/products")
//             ).json();
//             dispatch(setProducts(data));
//             dispatch(setStatus(STATUSES.IDLE));

//         } catch(err){
//             dispatch(setStatus(STATUSES.ERROR));
//         }

//     }
// }
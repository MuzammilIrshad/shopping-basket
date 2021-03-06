import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';


export type items= {
    description: string,
    imageUrl: string,
    price: number,
    id: string,
    title: string
}

export interface initialState{
    items: (items | null)[],
     price: number
}

const initialState: initialState = {
    items: [],
    price: 0,
}
// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        increment: (state, action: PayloadAction<items>) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            console.log(action.payload);
            state.items.push(action.payload);

            state.price += action.payload.price;

            console.log(state.price);

        },
        decrement: (state, action: PayloadAction<[string, number]>) => {
            //console.log(action.payload);
            const data = state.items.filter((detail: (items | null)) => detail && (detail.id !== action.payload[0]));
            // console.log(data);
            // const prodetail = state.items.filter((detail) => (detail.id === action.payload.payload[0]));
            state.price -= action.payload[1];
            state.items = data;


        },
        // Use the PayloadAction type to declare the contents of `action.payload`

    },
    // The `extraReducers` field lets the slice handle actions defined elsewhere,
    // including actions generated by createAsyncThunk or in other slices.
 });

export const { increment, decrement} = counterSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state: RootState) => state.counter;
//console.log(selectCount);
// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

export default counterSlice.reducer;

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ITransaction {
    id: string;
    amount: number;
}

const usersDefaultState: ITransaction[] = [];

export const transactionSlice  = createSlice({
    name: 'transaction',
    initialState: usersDefaultState,
    reducers: {
        addTransaction: (state, action: PayloadAction<ITransaction>) => {
            state.push(action.payload)
        },
        // removeUsers: (state, action) => {
        //     state.users = state.users.filter(user => user !== action.payload)
        // }
    }
    
});

export const transactionReducer = transactionSlice.reducer
export const {addTransaction} = transactionSlice.actions
// export const {removeUsers} = usersSlice.actions
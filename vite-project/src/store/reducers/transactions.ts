import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ITransaction {
    id: number;
    amount: number;
    date: Date;
    type: string;
    description: string;
    category: string;
    money_spent: string;
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
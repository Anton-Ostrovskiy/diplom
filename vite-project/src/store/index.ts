import { configureStore } from '@reduxjs/toolkit'
import { transactionReducer } from './reducers/transactions'

const saveState = (state: any) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (e) {
    console.log(e);
  }
};

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

export const store = configureStore({
  reducer: {
    transaction: transactionReducer,
  },
  preloadedState: loadState(),
})

store.subscribe(() => {
  const state = store.getState();
  saveState(state); // Сохраняем состояние в LocalStorage после каждого изменения
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "../features/articlesSlice";
import pageReducer from "../features/pageSlice";

const store = configureStore({
  reducer: { articles: articlesReducer, page: pageReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

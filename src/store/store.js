import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import userReducer from "./userSlice";
import editorReducer from "./editorSlice";
import authReducer from "./authSlice";


const store = configureStore({
  reducer: {
    auth: authReducer,
    counter: counterReducer,
    user: userReducer,
    editor: editorReducer,
  },
});

export default store;
import { Action, combineReducers, configureStore } from "@reduxjs/toolkit";
import notesReducer from "./features/notes-slice";

const combinedReducer = combineReducers({
	notes: notesReducer,
});

const rootReducer = (state: any, action: Action) => {
	if (action.type === "RESET") {
		state = {};
	}
	return combinedReducer(state, action);
};

const store = configureStore({
	reducer: {
		rootReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

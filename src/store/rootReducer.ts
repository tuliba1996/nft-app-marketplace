import { combineReducers } from "redux";
import userSlice from "../slices/userSlice";
import marketSlice from "../slices/marketSlice";

const rootReducer = combineReducers({
  user: userSlice,
  market: marketSlice,
});

export default rootReducer;

import { combineReducers } from "redux";
import userSlice from "../slices/userSlice";
import marketSlice from "../slices/marketSlice";
import messagesSlice from "../slices/messages-slice";

const rootReducer = combineReducers({
  user: userSlice,
  market: marketSlice,
  messages: messagesSlice,
});

export default rootReducer;

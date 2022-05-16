import { useDispatch, useSelector } from "react-redux";
import { close } from "slices/messages-slice";
import "./console-interceptor";
import React, { useEffect } from "react";
import { useSnackbar } from "notistack";
import { IReduxState } from "../../slices/state.interface";
import { MessagesState } from "../../slices/messages-slice";

// A component that displays error messages
function Messages() {
  const { enqueueSnackbar } = useSnackbar();
  const { message } = useSelector<IReduxState, MessagesState>(
    (state) => state.messages
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (message?.text) {
      enqueueSnackbar(message?.text, {
        variant: message?.severity,
      });
      dispatch(close());
    }
  }, [message?.text]);

  return <div></div>;
}

export default Messages;

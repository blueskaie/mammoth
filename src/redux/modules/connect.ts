import produce from "immer";
import { CONNECT_TO_MM, IS_CLOSED_POPUP } from "../actions/connect";
import { ConnectReducers } from "../../interface/IStore/actions/IConnect";

const initialState: { isConnected: boolean; isPopUp: boolean } = {
  isConnected: false,
  isPopUp: false,
};

const connect = produce((draft, action: ConnectReducers) => {
  switch (action.type) {
    case CONNECT_TO_MM: {
      draft.isConnected = true;
      break;
    }
    case IS_CLOSED_POPUP: {
      draft.isPopUp = action.payload;
      break;
    }

    default:
      break;
  }
}, initialState);

export default connect;

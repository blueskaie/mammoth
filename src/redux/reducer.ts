import info from "./modules/info";
import player from "./modules/player";
import audio from "./modules/audio";
import connect from "./modules/connect";
import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import gameWin from "./modules/gameWin";
import slotoWheel from "./modules/slotoWheel";

const reducer = combineReducers({
  info,
  player,
  audio,
  connect,
  gameWin,
  slotoWheel,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;

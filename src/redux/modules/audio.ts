import produce from "immer";
import { SET_MUTE, SET_TRACK, TRACK } from "../actions/audio";
import { IInitialState } from "../../interface/IStore/reducers/IAudio";
import { IAudioActionsType } from "../../interface/IStore/actions/IAudio";

const initialState: IInitialState = {
  track: null,
  mute: {},
};

Object.values(TRACK).forEach((track: string): void => {
  initialState.mute[track] = false;
});
const audio = produce((draft, action: IAudioActionsType) => {
  switch (action.type) {
    case SET_TRACK: {
      draft.track = action.track;
      break;
    }
    case SET_MUTE: {
      draft.mute = {
        ...draft.mute,
        ...action.mute,
      };
      break;
    }
    default: {
      break;
    }
  }
}, initialState);

export default audio;

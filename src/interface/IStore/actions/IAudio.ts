import { SET_MUTE, SET_TRACK } from "../../../redux/actions/audio";

type ISetMuteType = {
  mute: any;
};
type ISetTrackType = {
  track: any;
};

export interface ISetMute {
  type: typeof SET_MUTE;
  mute: any;
}

export interface ISetTrack {
  type: typeof SET_TRACK;
  track: any;
}

type IAudioActionsType = ISetMute | ISetTrack;

export type { ISetMuteType, ISetTrackType, IAudioActionsType };

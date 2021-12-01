import { ISetMute, ISetMuteType, ISetTrack, ISetTrackType } from "../../interface/IStore/actions/IAudio";

const SET_TRACK = "game/audio/SET_TRACK";
const SET_MUTE = "game/audio/SET_MUTE";

const TRACK = {
  _WAIT: "bgm-1.mp3",
  _MOVE: "racing-1.mp3",
};

const setTrack = (track: ISetTrackType): ISetTrack => ({
  type: SET_TRACK,
  track,
});
const setMute = (mute: ISetMuteType): ISetMute => ({
  type: SET_MUTE,
  mute,
});

export { SET_TRACK, SET_MUTE, TRACK, setTrack, setMute };

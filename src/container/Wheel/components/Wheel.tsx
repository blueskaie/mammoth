import { useCallback } from "react";
import { Circle, StyledIndicator, WheelAnimation, WheelWrapper /*WinLose*/ } from "./styles";
import { ReactComponent as WheelImage } from "../assets/wheel/Wheel.svg";
import Indicator from "../assets/wheel/Indicator.svg";
import { mp3 } from "../components/styles";
// import { ReactComponent as Win } from "../assets/wheel/Win.svg";
// import { ReactComponent as Lose } from "../assets/wheel/Lose.svg";
import Logo from "../assets/wheel/Logo.png";
import { useEffect } from "react";

const audio: any = {
  spin: new Audio(mp3.wheelSpin),
  win: new Audio(mp3.wheelWin),
  lose: new Audio(mp3.wheelLose),
};

const WheelComponent = ({
  degree,
  win,
  isAudioEnabled,
  isRolling,
}: {
  degree: number;
  win: boolean | null;
  isAudioEnabled: boolean;
  isRolling: boolean;
}) => {
  const audioLoad = useCallback(() => {
    audio.spin.load();
    audio.win.load();
    audio.lose.load();
  }, []);

  const audioPlay = (name: string) => {
    isAudioEnabled && audio[name].play();
  };

  const audioStop = (name: string) => {
    if (!isAudioEnabled) {
      return;
    }
    audio[name].pause();
    audio[name].currentTime = 0;
  };

  useEffect(() => {
    audioLoad();
    isRolling ? audioPlay("spin") : audioStop("spin");
  }, [isRolling]);

  useEffect(() => {
    if (win !== null) {
      audioPlay(win ? "win" : "lose");
    }
  }, [win]);

  return (
    <WheelWrapper>
      <Circle>
        <img src={Logo} />
      </Circle>

      <WheelAnimation stop={isRolling} style={{ transform: `rotate(${degree}deg)` }}>
        <WheelImage />
      </WheelAnimation>
      <StyledIndicator src={Indicator} />
      {/* {win !== null && <WinLose> {win ? <Win /> : <Lose />}</WinLose>} */}
    </WheelWrapper>
  );
};
export default WheelComponent;

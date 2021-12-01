import React, { useCallback, useMemo, useState } from "react";
import * as ScStyled from "./scorboardStyled";
import { IScoreboardProp } from "../../../interface/IComponents/IScoreboard";

const ROUND_SLICES = [100];
const TYPES = [
  {
    name: "Type 1",
    slices: [
      {
        min: 0,
        max: 2499,
      },
      {
        min: 2500,
        max: 4999,
      },
      {
        min: 5000,
        max: 7499,
      },
      {
        min: 7500,
        max: 9999,
      },
    ],
  },
  {
    name: "Type 2",
    slices: [
      {
        min: 0,
        max: 3332,
      },
      {
        min: 3333,
        max: 6666,
      },
      {
        min: 6667,
        max: 9999,
      },
    ],
  },
  {
    name: "Type 3",
    slices: [
      {
        min: 0,
        max: 4999,
      },
      {
        min: 5000,
        max: 9999,
      },
    ],
  },
];

const DiceScoreboard = ({ historyData }: IScoreboardProp) => {
  const [roundsCount] = useState(ROUND_SLICES[0]);
  const [activeType, setActiveType] = useState(0);

  const getHistoryData = useCallback(() => {
    return historyData.slice(0, roundsCount);
  }, []);
  const getData = useMemo(() => {
    const dataType = TYPES[activeType];
    return dataType.slices.map(({ min, max }) => {
      const count = getHistoryData().filter((n: number) => n >= min && n <= max).length;
      let minFormatted = min.toString();
      while (minFormatted.length < 4) {
        minFormatted = `0${minFormatted}`;
      }
      return {
        min: minFormatted,
        max,
        count,
        percent: Math.round((count / getHistoryData.length) * 100),
      };
    });
  }, []);

  const setIsActiveType = (activeType: any) => {
    setActiveType(activeType);
  };
  return (
    <>
      <ScStyled.StyledTypeSwitcher>
        {TYPES.map(({ name }, ind) => (
          <ScStyled.StyledButton
            className={`type-switcher-btn ${activeType === ind ? "active" : ""}`}
            type="button"
            key={name}
            onClick={() => setIsActiveType(ind)}
          >
            {name}
          </ScStyled.StyledButton>
        ))}
      </ScStyled.StyledTypeSwitcher>
      <ScStyled.StyledData>
        {getData.length &&
          getData.map(({ min, max, count, percent }: any) => (
            <ScStyled.StyledDataContainer className="data-row" key={min}>
              <div className="data-param label">
                {min} ~ {max}
              </div>
              <div className="data-param count">{count}</div>
              <div className="data-param percent">{percent || 0}%</div>
            </ScStyled.StyledDataContainer>
          ))}
      </ScStyled.StyledData>
    </>
  );
};

export default DiceScoreboard;

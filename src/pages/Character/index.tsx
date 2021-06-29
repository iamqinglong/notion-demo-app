import React, { FC } from "react";
import { RouteComponentProps } from "react-router-dom";
import { CharacterMatchParams } from "../../interfaces";
import IPage from "../../interfaces/page";

export const Character: FC<IPage & RouteComponentProps<CharacterMatchParams>> =
  () => {
    return (
      <>
        <h1>character</h1>
      </>
    );
  };

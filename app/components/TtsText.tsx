/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { wrap } from "lodash";
import { RefObject } from "react";

const TtsText = ({
  isHight,
  children,
  time,
  audioRef,
}: {
  isHight: boolean;
  children: string;
  time: number;
  audioRef: RefObject<HTMLAudioElement>;
}) => {
  return (
    <div
      onClick={() => {
        if (audioRef.current) {
          audioRef.current.currentTime = time - 0.01;
          audioRef.current.play();
        }
      }}
      style={{
        flexWrap: "wrap",
        fontSize: "1.5rem",
        color: isHight ? "green" : "gray",
        opacity: isHight ? 1 : 0.7,
        cursor: "pointer",
      }}
    >
      {children}
    </div>
  );
};

export default TtsText;

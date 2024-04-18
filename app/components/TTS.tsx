import { inRange } from "radash";
import { useState } from "react";

type TTSProps = {
  textList: {
    text: string;
    start: number;
    end: number;
  }[];
  timeNow: number;
};
const TTS = ({ textList, timeNow }: TTSProps) => {
  return (
    <p>
      {textList.map((text, index) => (
        <Chunk key={text + String(index)} timeNow={timeNow} {...text} />
      ))}
    </p>
  );
};

type ChunkProps = {
  text: string;
  start: number;
  end: number;
  timeNow: number;
};
const Chunk = ({ text, start, end, timeNow }: ChunkProps) => {
  const [isHighted, setIsHighted] = useState(false);
  const isHight = timeNow !== 0 && inRange(timeNow, start, end);
  if (!isHighted && isHight) {
    setIsHighted(true);
  }
  return (
    <span
      className={` text-2xl text ${
        isHighted ? "text-green-700" : "text-gray-400 opacity-60"
      }`}
    >
      {text + " "}
    </span>
  );
};

export default TTS;

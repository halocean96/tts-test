import type { MetaFunction } from "@remix-run/node";
import { useEffect, useRef, useState } from "react";
import textOpenAi from "~/textOpenAi";
import _ from "lodash";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const TtsText = ({
  isHight,
  children,
  time,
  audioRef,
}: {
  isHight: boolean;
  children: string;
  time: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  audioRef: any;
}) => {
  return (
    <div
      onClick={() => {
        if (audioRef.current) {
          audioRef.current.currentTime = time;
          audioRef.current.play();
        }
      }}
      style={{
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

const getCurrentTextIndex = (currentTime: number | null) => {
  if (currentTime) {
    for (const index in textOpenAi) {
      const targetText = textOpenAi[index];
      if (_.inRange(currentTime, targetText.start, targetText.end))
        return Number(index);
    }
  }
};

export default function Index() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [current, setCurrent] = useState<number | null>(null);
  useEffect(() => {
    if (!audioRef.current) return;
    const callback = () => {
      setCurrent(audioRef.current?.currentTime as number);
    };
    audioRef.current.addEventListener("timeupdate", callback);
    return () => audioRef.current?.removeEventListener("timeupdate", callback);
  }, []);
  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio ref={audioRef} controls src="/speech.wav"></audio>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
        {textOpenAi.map((text, index) => {
          return (
            <TtsText
              audioRef={audioRef}
              key={text.text + String(index)}
              time={text.start}
              isHight={getCurrentTextIndex(current) === index}
            >
              {text.text}
            </TtsText>
          );
        })}
      </div>
    </>
  );
}

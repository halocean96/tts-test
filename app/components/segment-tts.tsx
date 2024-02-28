import type { MetaFunction } from "@remix-run/node";
import { useRef, useState, useEffect } from "react";
import TtsText from "~/components/TtsText";
import chunkTtsList from "~/constants/chunkTtsList";
import getCurrentTextIndex from "~/utils/getCurrentTextIndex";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Segment() {
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
      <audio ref={audioRef} controls src="/output.mp3"></audio>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
        {chunkTtsList.map((text, index) => {
          return (
            <TtsText
              audioRef={audioRef}
              key={text.text + String(index)}
              time={text.start}
              isHight={getCurrentTextIndex(current, chunkTtsList) === index}
            >
              {text.text}
            </TtsText>
          );
        })}
      </div>
    </>
  );
}

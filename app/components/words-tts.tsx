import { useRef, useState, useEffect } from "react";
import TtsText from "~/components/TtsText";
import ttsList from "~/constants/ttsList";
import getCurrentTextIndex from "~/utils/getCurrentTextIndex";

export default function Words() {
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
        {ttsList.map((text, index) => {
          return (
            <TtsText
              audioRef={audioRef}
              key={text.word + String(index)}
              time={text.start}
              isHight={getCurrentTextIndex(current, ttsList) === index}
            >
              {text.word}
            </TtsText>
          );
        })}
      </div>
    </>
  );
}

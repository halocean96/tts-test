/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable jsx-a11y/media-has-caption */
import TTS from "~/components/TTS";
import { useEffect, useRef, useState } from "react";
import { textList } from "~/constant";
import SpeedRadio from "~/components/SpeedRadio";
export default function Upload() {
  const [timeNow, setTimeNow] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (!audioRef.current) return;
    const updateTimeNow = () => {
      setTimeNow(audioRef.current?.currentTime as number);
    };
    audioRef.current.addEventListener("timeupdate", updateTimeNow);
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("timeupdate", updateTimeNow);
      }
    };
  }, [audioRef, setTimeNow]);
  return (
    <>
      <h3>재생속도 조절</h3>
      <form
        className="px-5 mt-4"
        onChange={(e) => {
          if (audioRef.current) {
            // @ts-ignore
            audioRef.current.playbackRate = e.target.value as number;
          }
        }}
      >
        <SpeedRadio value={0.5} />
        <SpeedRadio value={0.6} />
        <SpeedRadio value={0.7} />
        <SpeedRadio value={0.8} />
        <SpeedRadio value={0.9} />
        <SpeedRadio value={1.0} checked={true} />
      </form>
      <audio ref={audioRef} controls src="./audio.mp3" />
      <TTS timeNow={timeNow} textList={textList} />
    </>
  );
}

import type { MetaFunction } from "@remix-run/node";
import { useEffect, useRef, useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const TtsText = ({
  isHight,
  children,
}: {
  isHight: boolean;
  children: string;
}) => {
  return (
    <div
      style={{
        fontSize: "1.5rem",
        color: isHight ? "green" : "gray",
        opacity: isHight ? 1 : 0.7,
      }}
    >
      {children}
    </div>
  );
};

const text =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const timeStampMap = [
  { timeSeconds: 0.009999999776482582, markName: "0" },
  { timeSeconds: 0.44483330845832825, markName: "1" },
  { timeSeconds: 0.9645416736602783, markName: "2" },
  { timeSeconds: 1.0927083492279053, markName: "3" },
  { timeSeconds: 1.59416663646698, markName: "4" },
  { timeSeconds: 1.9446667432785034, markName: "5" },
  { timeSeconds: 2.43583345413208, markName: "6" },
  { timeSeconds: 2.5412914752960205, markName: "7" },
  { timeSeconds: 2.628458261489868, markName: "8" },
  { timeSeconds: 3.186833620071411, markName: "9" },
  { timeSeconds: 3.3366668224334717, markName: "10" },
  { timeSeconds: 3.9879584312438965, markName: "11" },
  { timeSeconds: 5.534417152404785, markName: "12" },
  { timeSeconds: 5.960208415985107, markName: "13" },
  { timeSeconds: 6.47112512588501, markName: "14" },
  { timeSeconds: 6.726875305175781, markName: "15" },
  { timeSeconds: 6.966917037963867, markName: "16" },
  { timeSeconds: 7.10675048828125, markName: "17" },
  { timeSeconds: 7.694541931152344, markName: "18" },
  { timeSeconds: 8.256750106811523, markName: "19" },
  { timeSeconds: 8.588916778564453, markName: "20" },
  { timeSeconds: 9.058500289916992, markName: "21" },
  { timeSeconds: 9.423333168029785, markName: "22" },
  { timeSeconds: 9.7586669921875, markName: "23" },
  { timeSeconds: 9.840457916259766, markName: "24" },
  { timeSeconds: 11.26824951171875, markName: "25" },
  { timeSeconds: 11.411291122436523, markName: "26" },
  { timeSeconds: 11.511083602905273, markName: "27" },
  { timeSeconds: 11.987208366394043, markName: "28" },
  { timeSeconds: 12.4546661376953, markName: "29" },
  { timeSeconds: 12.71049976348877, markName: "30" },
  { timeSeconds: 12.767624855041504, markName: "31" },
  { timeSeconds: 13.20687484741211, markName: "32" },
  { timeSeconds: 13.288749694824219, markName: "33" },
  { timeSeconds: 13.75645923614502, markName: "34" },
  { timeSeconds: 13.862875938415527, markName: "35" },
  { timeSeconds: 14.469501495361328, markName: "36" },
  { timeSeconds: 14.62741756439209, markName: "37" },
  { timeSeconds: 14.758417129516602, markName: "38" },
  { timeSeconds: 15.013958930969238, markName: "39" },
  { timeSeconds: 15.07770824432373, markName: "40" },
  { timeSeconds: 15.416666984558105, markName: "41" },
  { timeSeconds: 16.03591537475586, markName: "42" },
  { timeSeconds: 17.263042449951172, markName: "43" },
  { timeSeconds: 17.38775062561035, markName: "44" },
  { timeSeconds: 17.614707946777344, markName: "45" },
  { timeSeconds: 18.30641746520996, markName: "46" },
  { timeSeconds: 18.6007080078125, markName: "47" },
  { timeSeconds: 18.91950035095215, markName: "48" },
  { timeSeconds: 19.26645851135254, markName: "49" },
  { timeSeconds: 20.180667877197266, markName: "50" },
  { timeSeconds: 20.301250457763672, markName: "51" },
  { timeSeconds: 20.705791473388672, markName: "52" },
  { timeSeconds: 20.79895782470703, markName: "53" },
  { timeSeconds: 21.15862464904785, markName: "54" },
  { timeSeconds: 21.434001922607422, markName: "55" },
  { timeSeconds: 22.084251403808594, markName: "56" },
  { timeSeconds: 23.042875289916992, markName: "57" },
  { timeSeconds: 23.52891731262207, markName: "58" },
  { timeSeconds: 24.248085021972656, markName: "59" },
  { timeSeconds: 25.925668716430664, markName: "60" },
  { timeSeconds: 26.052751541137695, markName: "61" },
  { timeSeconds: 26.26758575439453, markName: "62" },
  { timeSeconds: 27.288585662841797, markName: "63" },
  { timeSeconds: 27.4200439453125, markName: "64" },
  { timeSeconds: 27.472251892089844, markName: "65" },
  { timeSeconds: 28.738502502441406, markName: "66" },
  { timeSeconds: 28.92937660217285, markName: "67" },
  { timeSeconds: 28.99183464050293, markName: "68" },
  { timeSeconds: 29.4825439453125, markName: "69" },
  { timeSeconds: 29.640169143676758, markName: "70" },
  { timeSeconds: 30.254711151123047, markName: "71" },
  { timeSeconds: 30.74591827392578, markName: "72" },
  { timeSeconds: 31.341127395629883, markName: "73" },
  { timeSeconds: 31.754253387451172, markName: "74" },
  { timeSeconds: 32.15904235839844, markName: "75" },
  { timeSeconds: 33.173545837402344, markName: "76" },
  { timeSeconds: 33.27229309082031, markName: "77" },
  { timeSeconds: 33.5050048828125, markName: "78" },
  { timeSeconds: 34.152835845947266, markName: "79" },
  { timeSeconds: 34.36825180053711, markName: "80" },
  { timeSeconds: 34.96804428100586, markName: "81" },
  { timeSeconds: 35.53862762451172, markName: "82" },
  { timeSeconds: 36.20916748046875, markName: "83" },
  { timeSeconds: 36.48250198364258, markName: "84" },
  { timeSeconds: 36.944915771484375, markName: "85" },
  { timeSeconds: 37.77766418457031, markName: "86" },
  { timeSeconds: 38.289329528808594, markName: "87" },
  { timeSeconds: 38.83428955078125, markName: "88" },
  { timeSeconds: 39.01258087158203, markName: "89" },
  { timeSeconds: 39.39545440673828, markName: "90" },
]
  .reverse()
  .map((v) => ({
    ...v,
    timeSeconds: parseFloat(v.timeSeconds.toFixed(2)),
  }));

const getCurrentTextIndex = (currentTime: number | null) => {
  if (currentTime) {
    for (const a of timeStampMap) {
      if (a.timeSeconds < currentTime) return Number(a.markName);
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
      <audio ref={audioRef} controls src="/output.mp3"></audio>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
        {text.split(" ").map((text, index) => {
          return (
            <TtsText
              key={text + String(index)}
              isHight={getCurrentTextIndex(current) === index}
            >
              {text}
            </TtsText>
          );
        })}
      </div>
    </>
  );
}

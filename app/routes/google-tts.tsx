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
  "Seeing at night is difficult. So, people turn on the lights. But there is a problem with lights. There are too many of them. This is light pollution. Light pollution hurts humans. People can’t sleep. They have headaches and feel stress. Light pollution hurts animals, too. It affects their migration. Sea turtles and birds fail to find their way and die.";

const timeStampMap = [
  { timeSeconds: 0.009999999776482582, markName: "0" },
  { timeSeconds: 0.35999998450279236, markName: "1" },
  { timeSeconds: 0.5049999952316284, markName: "2" },
  { timeSeconds: 0.7800833582878113, markName: "3" },
  { timeSeconds: 0.9150833487510681, markName: "4" },
  { timeSeconds: 1.8692502975463867, markName: "5" },
  { timeSeconds: 2.3992502689361572, markName: "6" },
  { timeSeconds: 2.717416763305664, markName: "7" },
  { timeSeconds: 2.9474167823791504, markName: "8" },
  { timeSeconds: 3.0937085151672363, markName: "9" },
  { timeSeconds: 3.123708724975586, markName: "10" },
  { timeSeconds: 4.003708839416504, markName: "11" },
  { timeSeconds: 4.163708686828613, markName: "12" },
  { timeSeconds: 4.303708553314209, markName: "13" },
  { timeSeconds: 4.383708477020264, markName: "14" },
  { timeSeconds: 4.463708400726318, markName: "15" },
  { timeSeconds: 4.933208465576172, markName: "16" },
  { timeSeconds: 5.0832085609436035, markName: "17" },
  { timeSeconds: 5.927792072296143, markName: "18" },
  { timeSeconds: 6.047791957855225, markName: "19" },
  { timeSeconds: 6.137791633605957, markName: "20" },
  { timeSeconds: 6.357791900634766, markName: "21" },
  { timeSeconds: 6.651958465576172, markName: "22" },
  { timeSeconds: 6.7419586181640625, markName: "23" },
  { timeSeconds: 7.344000339508057, markName: "24" },
  { timeSeconds: 7.549000263214111, markName: "25" },
  { timeSeconds: 7.689000129699707, markName: "26" },
  { timeSeconds: 7.914000034332275, markName: "27" },
  { timeSeconds: 8.742875099182129, markName: "28" },
  { timeSeconds: 8.962874412536621, markName: "29" },
  { timeSeconds: 9.551166534423828, markName: "30" },
  { timeSeconds: 9.891166687011719, markName: "31" },
  { timeSeconds: 10.683250427246094, markName: "32" },
  { timeSeconds: 10.998250007629395, markName: "33" },
  { timeSeconds: 11.283166885375977, markName: "34" },
  { timeSeconds: 11.928167343139648, markName: "35" },
  { timeSeconds: 12.058167457580566, markName: "36" },
  { timeSeconds: 12.198166847229004, markName: "37" },
  { timeSeconds: 12.784791946411133, markName: "38" },
  { timeSeconds: 12.929792404174805, markName: "39" },
  { timeSeconds: 13.137042045593262, markName: "40" },
  { timeSeconds: 14.104667663574219, markName: "41" },
  { timeSeconds: 14.329667091369629, markName: "42" },
  { timeSeconds: 14.897958755493164, markName: "43" },
  { timeSeconds: 15.207959175109863, markName: "44" },
  { timeSeconds: 15.812417030334473, markName: "45" },
  { timeSeconds: 16.542917251586914, markName: "46" },
  { timeSeconds: 16.637916564941406, markName: "47" },
  { timeSeconds: 17.067916870117188, markName: "48" },
  { timeSeconds: 17.178375244140625, markName: "49" },
  { timeSeconds: 18.068376541137695, markName: "50" },
  { timeSeconds: 18.373376846313477, markName: "51" },
  { timeSeconds: 18.78870964050293, markName: "52" },
  { timeSeconds: 18.928709030151367, markName: "53" },
  { timeSeconds: 19.360042572021484, markName: "54" },
  { timeSeconds: 19.630043029785156, markName: "55" },
  { timeSeconds: 19.74004364013672, markName: "56" },
  { timeSeconds: 20.04446029663086, markName: "57" },
  { timeSeconds: 20.15445899963379, markName: "58" },
  { timeSeconds: 20.41946029663086, markName: "59" },
  { timeSeconds: 20.523500442504883, markName: "60" },
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
      <audio ref={audioRef} controls src="/output1.mp3"></audio>
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

/* eslint-disable @typescript-eslint/no-explicit-any */
import _ from "lodash";

const getCurrentTtsIndex = (currentTime: number | null, ttsList: any[]) => {
  if (currentTime) {
    for (const index in ttsList) {
      const tts = ttsList[index];
      if (_.inRange(currentTime, tts.start, tts.end)) return Number(index);
    }
  }
};

export default getCurrentTtsIndex;

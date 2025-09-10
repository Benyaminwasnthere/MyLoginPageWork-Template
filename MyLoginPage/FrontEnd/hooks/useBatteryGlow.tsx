import { useEffect, useState } from "react";
import * as Battery from "expo-battery";

export function useBatteryGlow() {
  const [level, setLevel] = useState<number>(1); // default full battery

  useEffect(() => {
    (async () => {
      const batteryLevel = await Battery.getBatteryLevelAsync();
      setLevel(batteryLevel);

      // listen to updates
      const subscription = Battery.addBatteryLevelListener(({ batteryLevel }) =>
        setLevel(batteryLevel)
      );
      return () => subscription.remove();
    })();
  }, []);

  // pick color by ranges
  const percent = Math.round(level * 100);
  let glowColor = "#22c55e"; // green default
  if (percent >= 80) glowColor = "#22c55e"; // green
  else if (percent >= 60) glowColor = "#3b82f6"; // blue
  else if (percent >= 40) glowColor = "#eab308"; // yellow
  else if (percent >= 20) glowColor = "#f97316"; // orange
  else glowColor = "#ef4444"; // red

  return { percent, glowColor };
}

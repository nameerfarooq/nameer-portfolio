import { useEffect, useMemo, useState } from "react";

/** Live clock for a given IANA time zone, e.g. "Asia/Karachi". */
export default function useLocalTime(timeZone, { seconds = false } = {}) {
  const formatter = useMemo(
    () =>
      new Intl.DateTimeFormat("en-GB", {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        ...(seconds ? { second: "2-digit" } : {}),
        hour12: false,
      }),
    [timeZone, seconds]
  );

  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const time = formatter.format(now);
  const hour = Number(time.slice(0, 2));
  return { time, hour, isDaytime: hour >= 7 && hour < 19 };
}

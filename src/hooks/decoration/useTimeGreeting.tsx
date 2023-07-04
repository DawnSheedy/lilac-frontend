import { useMemo } from "react";

export const useTimeGreeting = () => {
  const hours = useMemo(() => new Date().getHours(), []);

  if (hours <= 10) {
    return "Good morning";
  }
  if (hours <= 14) {
    return "Good afternoon";
  }
  return "Good evening";
};

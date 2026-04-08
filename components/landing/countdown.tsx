"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "already-calm-countdown";

function getTarget(hours: number) {
  const now = Date.now();
  const existing = window.localStorage.getItem(STORAGE_KEY);

  if (existing) {
    const parsed = Number(existing);
    if (Number.isFinite(parsed) && parsed > now) {
      return parsed;
    }
  }

  const next = now + hours * 60 * 60 * 1000;
  window.localStorage.setItem(STORAGE_KEY, String(next));
  return next;
}

export function Countdown({ hours = 6 }: { hours?: number }) {
  const [timeLeft, setTimeLeft] = useState({ hours: "00", minutes: "00", seconds: "00" });

  useEffect(() => {
    const target = getTarget(hours);

    const update = () => {
      const diff = Math.max(target - Date.now(), 0);
      const totalSeconds = Math.floor(diff / 1000);
      const nextHours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
      const nextMinutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
      const nextSeconds = String(totalSeconds % 60).padStart(2, "0");
      setTimeLeft({ hours: nextHours, minutes: nextMinutes, seconds: nextSeconds });
    };

    update();
    const interval = window.setInterval(update, 1000);
    return () => window.clearInterval(interval);
  }, [hours]);

  return (
    <div className="flex items-center gap-2">
      <TimeBlock value={timeLeft.hours} />
      <span className="text-biolume-300">:</span>
      <TimeBlock value={timeLeft.minutes} />
      <span className="text-biolume-300">:</span>
      <TimeBlock value={timeLeft.seconds} />
    </div>
  );
}

function TimeBlock({ value }: { value: string }) {
  return (
    <span className="rounded-lg border border-biolume-400/20 bg-biolume-400/10 px-2.5 py-1 text-sm font-semibold text-biolume-300 sm:text-base">
      {value}
    </span>
  );
}

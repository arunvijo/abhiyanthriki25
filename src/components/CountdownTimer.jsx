import { useEffect, useState } from "react";

const CountdownTimer = () => {
  const targetDate = new Date("2025-10-15T00:00:00");
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date();
    const difference = targetDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-white py-10">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-wide text-center">
        The future unfolds in...
      </h1>

      <div className="flex gap-6 md:gap-10 text-center">
        {Object.entries(timeLeft).map(([label, value]) => (
          <div key={label} className="flex flex-col">
            <span className="text-5xl md:text-9xl font-bold text-[#F64040] drop-shadow-[0_0_10px_#F64040]">
              {value.toString().padStart(2, "0")}
            </span>
            <span className="uppercase text-sm md:text-base tracking-widest text-gray-300">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;

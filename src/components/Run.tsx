import { useState } from "react";

interface RunProps {
  runnerFn: () => void;
  setRun: () => void;
  isFormComplete: boolean;
}

export default function Run({ runnerFn, setRun, isFormComplete }: RunProps) {
  const [cooldown, setCooldown] = useState(false);

  const handleClick = () => {
    if (isFormComplete && !cooldown) {
      runnerFn();
      setRun();
      setCooldown(true);

      setTimeout(() => {
        setCooldown(false);
      }, 2200);
    }
  };

  const isDisabled = !isFormComplete || cooldown;

  return (
    <button
      onClick={handleClick}
      disabled={isDisabled}
      className={`shadow-[inset_0_0_0_2px_#616467] text-black px-8 py-3 w-full rounded-full tracking-widest uppercase font-bold ${
        !isDisabled
          ? "bg-lime-600 hover:bg-lime-700 hover:text-white"
          : "bg-gray-400 cursor-not-allowed"
      } dark:text-neutral-200 transition duration-200 flex justify-center items-center`}
    >
      {/* Play icon */}
      <svg
        width="20px"
        height="20px"
        viewBox="-2.4 -2.4 28.80 28.80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.4086 9.35258C23.5305 10.5065 23.5305 13.4935 21.4086 14.6474L8.59662 21.6145C6.53435 22.736 4 21.2763 4 18.9671L4 5.0329C4 2.72368 6.53435 1.26402 8.59661 2.38548L21.4086 9.35258Z"
          fill="#fff"
        />
      </svg>
    </button>
  );
}

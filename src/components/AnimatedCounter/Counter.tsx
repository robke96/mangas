"use client";
import { AnimatedCounter } from  'react-animated-counter';

type AnimatedCounterProps = {
    to: number,
    className?: string,
}

const Counter = ({ to, className }: AnimatedCounterProps) => {
  return (
    <div className={className}>
      <AnimatedCounter
        value={to}
        color="white"
        fontSize="1.5rem"
        includeDecimals={false}
        includeCommas={false}
        containerStyles={{ justifyContent: "center" }}
      />
    </div>
  );
}

export default Counter